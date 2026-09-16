-- ============================================================
-- CaratLane WMS — Order 000032: add the missing Female Size S x2
-- line to the pick/pack record, and correct inventory to match
-- ============================================================
-- WHY: Order 000032 called for 2x Male Size 40 shirt AND 2x Female
-- Size S shirt (per the original dispatch sheet). The employee
-- physically picked and packed both, but the pick step — and so
-- the packing task derived from it — only ever recorded the Male
-- Size 40 line; the Female Size S x2 line was never scanned. So
-- it's missing from both the pick and packed/dispatched history
-- rows, and those 2 units were never deducted from Female Size S
-- inventory (the system still thinks they're on the shelf, when
-- they're actually already boxed).
--
-- WHAT IT TOUCHES
--  1. history — the 'pick' row and the 'packed'/'dispatched' row
--     for order_id='000032' (it's the same underlying row across
--     packing and dispatch — its `type` just flips in place at
--     dispatch time, per how confirmCourierDispatch() works) each
--     get the missing item appended to their `items` array:
--     {sku:'UNI-SHT-F-S', name:'Stitched Shirt - Female',
--      variant:'Size S', qty:2, bin:<taken from UNI-SHT-F-S's
--      current rack/shelf in inventory>}. Also nudges each row's
--     "N SKUs" detail text up by one to match, on a best-effort
--     basis (see note above Fix 1/2 below).
--  2. inventory — UNI-SHT-F-S's qty drops by 2 to reflect the 2
--     units that already left the shelf. If that SKU tracks
--     per-bin `locations`, the 2 units come off whichever location
--     currently holds the most (mirrors removeStockAtLocation()'s
--     own fallback behavior in the app when no exact bin match is
--     given — same approach caratlane-fix-ord-014521-shoes.sql
--     used), locations at zero are pruned, and the top-level
--     qty/rack/shelf are recomputed from what's left. If that SKU
--     has no `locations` array, the flat qty column is simply
--     reduced by 2.
--
-- SAFETY
--  - Pre-flight check confirms you're on the right database.
--  - Guard 1 aborts (no changes made) unless order 000032 has
--    exactly one 'pick' row and exactly one 'packed'/'dispatched'
--    row in history.
--  - Guard 2 aborts if either row already has a UNI-SHT-F-S line —
--    so this can't double-add the item if run twice, or if it's
--    already been fixed by hand.
--  - Guard 3 aborts if UNI-SHT-F-S has fewer than 2 units of
--    inventory on hand (deducting would go negative) — check
--    manually if that happens, something else is likely off too.
--  - Pre- and post-update SELECTs (including the orders table, for
--    reference — it is NOT modified, its items were already correct)
--    let you see the before/after.
--
-- Run this once, in the Supabase SQL Editor, on the caratlane
-- project (branch: main PRODUCTION).
-- ============================================================

-- Wrapped in an explicit transaction: if ANY guard below raises (wrong
-- database, unexpected row counts, already fixed, insufficient stock),
-- every statement in this script is discarded together — the guards
-- can't accidentally "fire but not stop" partway through, and the final
-- COMMIT becomes a no-op on a failed transaction.
BEGIN;

DO $$
BEGIN
  IF to_regclass('public.history') IS NULL OR to_regclass('public.inventory') IS NULL THEN
    RAISE EXCEPTION 'Wrong database — tables "history"/"inventory" not found. Switch to org ''epscrmportal''''s Org'' -> project ''caratlane'' -> branch ''main PRODUCTION'' (URL should contain lqpqsrdxcxefxvobmnjc) and re-run.';
  END IF;
END $$;

-- ── BEFORE: look at this and make sure it matches what you expect ──
select id, customer_name, items, status from public.orders where id='000032';
select id, type, order_id, items, detail from public.history where order_id='000032' and type in ('pick','packed','dispatched') order by type;
select sku, qty, rack, shelf, locations from public.inventory where sku='UNI-SHT-F-S';

-- ── Guard 1: refuse unless there's exactly one pick row and one packed/dispatched row ──
DO $$
DECLARE
  pick_count int;
  pack_count int;
BEGIN
  SELECT count(*) INTO pick_count FROM public.history WHERE order_id='000032' AND type='pick';
  SELECT count(*) INTO pack_count FROM public.history WHERE order_id='000032' AND type IN ('packed','dispatched');
  IF pick_count <> 1 THEN
    RAISE EXCEPTION 'Expected exactly 1 pick history row for order 000032, found %. Stopping without changing anything — check the pre-flight SELECT above.', pick_count;
  END IF;
  IF pack_count <> 1 THEN
    RAISE EXCEPTION 'Expected exactly 1 packed/dispatched history row for order 000032, found %. Stopping without changing anything — check the pre-flight SELECT above.', pack_count;
  END IF;
END $$;

-- ── Guard 2: refuse if either row already has a UNI-SHT-F-S line (already fixed) ──
DO $$
DECLARE
  already_count int;
BEGIN
  SELECT count(*) INTO already_count
  FROM public.history, jsonb_array_elements(items) elem
  WHERE order_id='000032' AND type IN ('pick','packed','dispatched') AND elem->>'sku'='UNI-SHT-F-S';
  IF already_count > 0 THEN
    RAISE EXCEPTION 'UNI-SHT-F-S already appears in % of order 000032''s pick/pack history row(s) — looks like this has already been fixed. Stopping without changing anything.', already_count;
  END IF;
END $$;

-- ── Guard 3: refuse if UNI-SHT-F-S has fewer than 2 units on hand ──
DO $$
DECLARE
  cur_qty int;
BEGIN
  SELECT qty INTO cur_qty FROM public.inventory WHERE sku='UNI-SHT-F-S';
  IF cur_qty IS NULL THEN
    RAISE EXCEPTION 'UNI-SHT-F-S not found in the inventory table. Stopping without changing anything.';
  END IF;
  IF cur_qty < 2 THEN
    RAISE EXCEPTION 'UNI-SHT-F-S only has % unit(s) on hand — deducting 2 would go negative. Check inventory manually before re-running.', cur_qty;
  END IF;
END $$;

-- ── Fix 1: append the missing Female Size S line to the pick row ──
-- (detail text bump is best-effort: it only rewrites an "N SKUs" it can
-- find via regex, and leaves the text alone if the wording doesn't match
-- that pattern — the items array itself is always corrected either way)
update public.history
set items = items || jsonb_build_array(
      jsonb_build_object(
        'sku','UNI-SHT-F-S','name','Stitched Shirt - Female','variant','Size S','qty',2,
        'bin', (select coalesce(rack,'')||'-'||coalesce(shelf,'') from public.inventory where sku='UNI-SHT-F-S')
      )
    ),
    detail = regexp_replace(detail, '\d+ SKUs', (jsonb_array_length(items)+1)||' SKUs')
where order_id='000032' and type='pick';

-- ── Fix 2: append the same line to the packed/dispatched row ──
update public.history
set items = items || jsonb_build_array(
      jsonb_build_object(
        'sku','UNI-SHT-F-S','name','Stitched Shirt - Female','variant','Size S','qty',2,
        'bin', (select coalesce(rack,'')||'-'||coalesce(shelf,'') from public.inventory where sku='UNI-SHT-F-S')
      )
    ),
    detail = regexp_replace(detail, '\d+ SKUs', (jsonb_array_length(items)+1)||' SKUs')
where order_id='000032' and type in ('packed','dispatched');

-- ── Fix 3: deduct the 2 units from UNI-SHT-F-S inventory ──
with mapped as (
  select
    case when locations is null or jsonb_array_length(locations)=0 then null
    else (
      select jsonb_agg(loc) filter (where (loc->>'qty')::numeric > 0)
      from (
        select case when ord=1 then jsonb_set(l,'{qty}', to_jsonb(greatest(0,(l->>'qty')::numeric - 2)))
                    else l end as loc
        from (
          select l, row_number() over (order by (l->>'qty')::numeric desc) as ord
          from jsonb_array_elements(locations) as l
        ) ranked
      ) x
    ) end as newlocs
  from public.inventory where sku='UNI-SHT-F-S'
)
update public.inventory inv
set locations = mapped.newlocs,
    qty = case when mapped.newlocs is null then greatest(0, inv.qty - 2)
               else coalesce((select sum((l->>'qty')::numeric) from jsonb_array_elements(mapped.newlocs) l),0) end,
    rack = case when mapped.newlocs is null then inv.rack else coalesce(mapped.newlocs->0->>'rack', inv.rack) end,
    shelf = case when mapped.newlocs is null then inv.shelf else coalesce(mapped.newlocs->0->>'shelf', inv.shelf) end,
    updated_at = now()
from mapped
where inv.sku='UNI-SHT-F-S';

-- ── AFTER: confirm the fix looks right ──
select id, type, order_id, items, detail from public.history where order_id='000032' and type in ('pick','packed','dispatched') order by type;
select sku, qty, rack, shelf, locations from public.inventory where sku='UNI-SHT-F-S';

COMMIT;
