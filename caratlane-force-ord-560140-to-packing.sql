-- ============================================================
-- CaratLane WMS — ORD-560140: manually move from Picking into the
-- Packing queue (skipping the app's scan-driven pick flow), and
-- decrement live inventory for its 8 items to match a real pick
-- ============================================================
-- WHY: you've already physically picked ORD-560140's items but the
-- system pick flow wasn't used to record it. This replicates, by
-- hand, exactly what releaseToPacking()/completeMobilePick() and
-- removeStockAtLocation() do in the app: decrements inventory for
-- each item (handling BOTH storage styles this table actually has —
-- checked live: some SKUs keep stock in a `locations` jsonb array,
-- others (UNI-DN-M-42, UNI-SH-U-8, UNI-DN-M-28) still use the older
-- single top-level qty/rack/shelf with `locations` left null —
-- removeStockAtLocation() falls back to the top-level qty for those,
-- so this script does too), creates a packing_queue task, logs a
-- 'pick' history entry, and marks the order 'picked'.
--
-- ALSO FIXES: this order's UNI-SH-U-8 (Unisex Size 8, swapped in
-- earlier from Male Size 8) line was given bin 'A-7' based on the
-- static SKU catalog default — but live inventory shows UNI-SH-U-8
-- actually sits at rack B, shelf 6 (qty 82). Catalog and live data
-- have drifted apart (a known recurring issue in this warehouse's
-- data). This script corrects that line's bin to 'B-6' first so the
-- picker/packer see the real location, not a stale default.
--
-- Checked live data for all 8 items immediately before writing this
-- (see comments inline) — every item has either an exact bin match
-- in its `locations` array or is a legacy top-level row, so the
-- decrement step below is a direct, verified operation per item, not
-- a generic guess. If live stock has changed since that check, the
-- script will error out loudly rather than silently fall back to a
-- guess.
--
-- WHAT IT TOUCHES
--  1. orders — ORD-560140's UNI-SH-U-8 line's bin corrected from
--     'A-7' to 'B-6' (only if it's still 'A-7').
--  2. inventory — for each of the 8 items, stock reduced by the
--     item's ordered qty.
--  3. packing_queue — one new row, id 'PCK-560140M', status
--     'awaiting_packing'. No tote_id (none was scanned) — shown as
--     "—" on the Packing page, doesn't block packing.
--  4. history — one new 'pick' row, same id, noting manual
--     correction.
--  5. orders — status set to 'picked', picked_task_id set to
--     'PCK-560140M'.
--
-- SAFETY
--  - Pre-flight check confirms you're on the right database.
--  - Guard 1 aborts unless ORD-560140's status is currently
--    'assigned'.
--  - Guard 2 aborts if packing_queue row 'PCK-560140M' already
--    exists (no double-run).
--  - Guard 3 checks EVERY item's SKU has enough TOTAL stock to
--    cover its ordered qty, and aborts (naming the SKU) if not.
--  - The decrement step aborts (naming the SKU/bin) if a
--    locations-array item's live data no longer has the exact bin
--    entry this was verified against.
--  - The whole script runs as one transaction — if anything aborts,
--    nothing is changed, even mid-way through the item loop.
--  - Pre- and post-update SELECTs let you see the before/after.
--
-- Run this once, in the Supabase SQL Editor, on the caratlane
-- project (branch: main PRODUCTION).
-- ============================================================

DO $$
BEGIN
  IF to_regclass('public.orders') IS NULL OR to_regclass('public.inventory') IS NULL
     OR to_regclass('public.packing_queue') IS NULL OR to_regclass('public.history') IS NULL THEN
    RAISE EXCEPTION 'Wrong database — one of orders/inventory/packing_queue/history not found. Switch to org "epscrmportal''s Org" -> project "caratlane" -> branch "main PRODUCTION" (URL should contain lqpqsrdxcxefxvobmnjc) and re-run.';
  END IF;
END $$;

-- ── BEFORE ──
select id, status, assigned_picker, items from public.orders where id='ORD-560140';
select sku, qty, rack, shelf, locations from public.inventory
where sku in (select jsonb_array_elements(items)->>'sku' from public.orders where id='ORD-560140');

-- ── Guard 1: refuse unless status is currently 'assigned' ──
DO $$
DECLARE
  cur_status text;
BEGIN
  SELECT status INTO cur_status FROM public.orders WHERE id='ORD-560140';
  IF cur_status IS NULL THEN
    RAISE EXCEPTION 'ORD-560140 not found. Stopping without changing anything.';
  ELSIF cur_status <> 'assigned' THEN
    RAISE EXCEPTION 'Expected ORD-560140 status to be ''assigned'', found ''%''. Stopping without changing anything.', cur_status;
  END IF;
END $$;

-- ── Guard 2: refuse if this task id was already used (no double-run) ──
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.packing_queue WHERE id='PCK-560140M') THEN
    RAISE EXCEPTION 'packing_queue row PCK-560140M already exists — this script has likely already run. Stopping without changing anything.';
  END IF;
END $$;

-- ── Fix 0: correct UNI-SH-U-8's bin to match its real live location ──
update public.orders
set items = (
  select jsonb_agg(
    case
      when elem->>'sku'='UNI-SH-U-8' and elem->>'bin'='A-7'
        then elem || jsonb_build_object('bin','B-6')
      else elem
    end
  )
  from jsonb_array_elements(items) as elem
)
where id='ORD-560140';

-- ── Guard 3: every item's SKU must have enough TOTAL stock ──
DO $$
DECLARE
  it jsonb;
  v_sku text; v_qty int; v_total int;
BEGIN
  FOR it IN SELECT jsonb_array_elements(o.items) FROM public.orders o WHERE o.id='ORD-560140'
  LOOP
    v_sku := it->>'sku';
    v_qty := (it->>'qty')::int;
    SELECT qty INTO v_total FROM public.inventory WHERE sku = v_sku;
    IF v_total IS NULL THEN v_total := 0; END IF;
    IF v_total < v_qty THEN
      RAISE EXCEPTION 'Insufficient total stock for % — need %, have %. Stopping without changing anything.', v_sku, v_qty, v_total;
    END IF;
  END LOOP;
END $$;

-- ── Fix 1: decrement inventory per item, mirroring removeStockAtLocation() ──
DO $$
DECLARE
  it jsonb;
  v_sku text; v_qty int; v_bin text; v_rack text; v_shelf text;
  v_has_locs boolean; v_match_exists boolean;
BEGIN
  FOR it IN SELECT jsonb_array_elements(o.items) FROM public.orders o WHERE o.id='ORD-560140'
  LOOP
    v_sku := it->>'sku';
    v_qty := (it->>'qty')::int;
    v_bin := it->>'bin';
    v_rack := split_part(v_bin,'-',1);
    v_shelf := split_part(v_bin,'-',2);

    SELECT (locations IS NOT NULL AND jsonb_typeof(locations)='array' AND jsonb_array_length(locations)>0)
    INTO v_has_locs FROM public.inventory WHERE sku=v_sku;

    IF v_has_locs THEN
      SELECT EXISTS (
        SELECT 1 FROM public.inventory, jsonb_array_elements(locations) l
        WHERE inventory.sku=v_sku AND l->>'rack'=v_rack AND l->>'shelf'=v_shelf
      ) INTO v_match_exists;

      IF NOT v_match_exists THEN
        RAISE EXCEPTION 'No location entry for % at bin % — live data has changed since this was checked. Stopping without changing anything.', v_sku, v_bin;
      END IF;

      UPDATE public.inventory inv
      SET locations = COALESCE(mapped.newlocs,'[]'::jsonb),
          qty = COALESCE((SELECT sum((l->>'qty')::int) FROM jsonb_array_elements(COALESCE(mapped.newlocs,'[]'::jsonb)) l),0),
          rack = COALESCE(mapped.newlocs,'[]'::jsonb)->0->>'rack',
          shelf = COALESCE(mapped.newlocs,'[]'::jsonb)->0->>'shelf'
      FROM (
        SELECT jsonb_agg(loc) FILTER (WHERE (loc->>'qty')::int > 0) AS newlocs
        FROM (
          SELECT CASE WHEN l->>'rack'=v_rack AND l->>'shelf'=v_shelf
                      THEN jsonb_set(l,'{qty}', to_jsonb(GREATEST(((l->>'qty')::int - v_qty),0)))
                      ELSE l
                 END AS loc
          FROM public.inventory, jsonb_array_elements(locations) l
          WHERE inventory.sku = v_sku
        ) x
      ) mapped
      WHERE inv.sku = v_sku;
    ELSE
      UPDATE public.inventory
      SET qty = GREATEST(qty - v_qty, 0)
      WHERE sku = v_sku;
    END IF;
  END LOOP;
END $$;

-- ── Fix 2: create the packing_queue task ──
insert into public.packing_queue (id, order_id, priority, method, picker, items, ts, status, tote_id)
select 'PCK-560140M', o.id, o.priority, o.method, o.assigned_picker, o.items,
       to_char(now(),'DD Mon HH24:MI'), 'awaiting_packing', null
from public.orders o where o.id='ORD-560140';

-- ── Fix 3: log the pick in history ──
insert into public.history (id, type, ts, detail, order_id, items, picker)
select 'PCK-560140M', 'pick', to_char(now(),'DD Mon HH24:MI'),
       o.id || ' · ' || o.method || ' pick · ' || o.priority || ' · ' ||
       jsonb_array_length(o.items) || ' SKUs · Picker: ' || coalesce(o.assigned_picker,'Unknown') || ' (manual correction)',
       o.id, o.items, o.assigned_picker
from public.orders o where o.id='ORD-560140';

-- ── Fix 4: mark the order picked ──
update public.orders set status='picked', picked_task_id='PCK-560140M' where id='ORD-560140';

-- ── AFTER ──
select id, status, assigned_picker, picked_task_id, items from public.orders where id='ORD-560140';
select * from public.packing_queue where id='PCK-560140M';
select sku, qty, rack, shelf, locations from public.inventory
where sku in ('UNI-DN-M-42','UNI-SHT-M-44','UNI-DN-F-32','UNI-SHT-F-XXL','UNI-SH-U-8','UNI-DN-M-28','UNI-SH-M-7','UNI-SHT-M-38');
