-- ============================================================
-- CaratLane WMS — correct a mis-keyed GRN line item
-- GRN-283872: one line was received as UNI-SHT-M-50 (Male Shirt,
-- Size 50) qty 10 at bin H-5, but was actually Size 52. This script
-- relabels that one line to UNI-SHT-M-52 and moves the matching 10
-- units of stock from UNI-SHT-M-50 to UNI-SHT-M-52, keeping them at
-- bin H-5 (per your choice to keep, not relocate, the stock).
--
-- WHAT IT TOUCHES
--  1. history — the GRN-283872 row's `items` array: the one line
--     matching sku='UNI-SHT-M-50', qty=10, bin='H-5' gets its `sku`
--     changed to 'UNI-SHT-M-52' and `variant` changed to 'Size 52'
--     (the printed GRN and Audit Trail both read these fields
--     directly off the stored item — they are not looked up live
--     from the SKU catalog — so both must be corrected together).
--  2. inventory — UNI-SHT-M-50 loses 10 units at H-5 (removed from
--     its `locations` array, qty/rack/shelf recomputed); UNI-SHT-M-52
--     gains 10 units at H-5 (added to its `locations` array,
--     qty/rack/shelf recomputed) — mirroring exactly how
--     addStockAtLocation()/removeStockAtLocation() maintain that
--     table in the app itself.
--
-- SAFETY
--  - Pre-flight check confirms you're on the right database.
--  - A guard block counts how many lines in GRN-283872 match
--    (UNI-SHT-M-50, qty 10, bin H-5) and ABORTS with an error if it's
--    not exactly 1 — so if the data doesn't look like what we expect,
--    nothing gets changed and you'll see why.
--  - Pre- and post-update SELECTs let you see the before/after.
--  - If UNI-SHT-M-52 has no inventory row yet, one is created first
--    so the update below has something to update.
--
-- Run this once, in the Supabase SQL Editor, on the caratlane
-- project (branch: main PRODUCTION).
-- ============================================================

DO $$
BEGIN
  IF to_regclass('public.history') IS NULL OR to_regclass('public.inventory') IS NULL THEN
    RAISE EXCEPTION 'Wrong database — tables "history"/"inventory" not found. Switch to org "epscrmportal''s Org" -> project "caratlane" -> branch "main PRODUCTION" (URL should contain lqpqsrdxcxefxvobmnjc) and re-run.';
  END IF;
END $$;

-- ── BEFORE: look at this and make sure it matches what you expect ──
select id, ts, items from public.history where id='GRN-283872' and type='grn';
select sku, qty, rack, shelf, locations from public.inventory where sku in ('UNI-SHT-M-50','UNI-SHT-M-52');

-- ── Guard: refuse to proceed unless exactly one line matches ──
DO $$
DECLARE
  match_count int;
BEGIN
  SELECT count(*) INTO match_count
  FROM public.history, jsonb_array_elements(items) elem
  WHERE id='GRN-283872' AND type='grn'
    AND elem->>'sku'='UNI-SHT-M-50' AND (elem->>'qty')::int=10 AND elem->>'bin'='H-5';
  IF match_count <> 1 THEN
    RAISE EXCEPTION 'Expected exactly 1 line item (UNI-SHT-M-50, qty 10, bin H-5) in GRN-283872, found %. Stopping without changing anything — check the pre-flight SELECT above.', match_count;
  END IF;
END $$;

-- ── Fix 1: relabel the line item inside history.items ──
update public.history
set items = (
  select jsonb_agg(
    case
      when elem->>'sku'='UNI-SHT-M-50' and (elem->>'qty')::int=10 and elem->>'bin'='H-5'
        then elem || jsonb_build_object('sku','UNI-SHT-M-52','variant','Size 52')
      else elem
    end
  )
  from jsonb_array_elements(items) as elem
)
where id='GRN-283872' and type='grn';

-- ── Make sure UNI-SHT-M-52 has an inventory row to update ──
insert into public.inventory (sku, qty, rack, shelf, locations)
select 'UNI-SHT-M-52', 0, null, null, '[]'::jsonb
where not exists (select 1 from public.inventory where sku='UNI-SHT-M-52');

-- ── Fix 2: remove 10 units at H-5 from UNI-SHT-M-50 ──
with mapped as (
  select jsonb_agg(loc) filter (where (loc->>'qty')::int > 0) as newlocs
  from (
    select case when l->>'rack'='H' and l->>'shelf'='5'
                then jsonb_set(l,'{qty}',to_jsonb(greatest(((l->>'qty')::int-10),0)))
                else l
           end as loc
    from public.inventory, jsonb_array_elements(locations) as l
    where sku='UNI-SHT-M-50'
  ) x
)
update public.inventory inv
set locations = coalesce(mapped.newlocs,'[]'::jsonb),
    qty = coalesce((select sum((l->>'qty')::int) from jsonb_array_elements(coalesce(mapped.newlocs,'[]'::jsonb)) l),0),
    rack = coalesce(mapped.newlocs,'[]'::jsonb)->0->>'rack',
    shelf = coalesce(mapped.newlocs,'[]'::jsonb)->0->>'shelf'
from mapped
where inv.sku='UNI-SHT-M-50';

-- ── Fix 3: add 10 units at H-5 to UNI-SHT-M-52 ──
with cur as (
  select locations from public.inventory where sku='UNI-SHT-M-52'
),
mapped as (
  select
    case when exists (
      select 1 from jsonb_array_elements(cur.locations) l where l->>'rack'='H' and l->>'shelf'='5'
    )
    then (
      select jsonb_agg(
        case when l->>'rack'='H' and l->>'shelf'='5'
             then jsonb_set(l,'{qty}',to_jsonb(((l->>'qty')::int+10)))
             else l
        end
      )
      from jsonb_array_elements(cur.locations) l
    )
    else cur.locations || jsonb_build_array(jsonb_build_object('rack','H','shelf','5','qty',10))
    end as newlocs
  from cur
)
update public.inventory inv
set locations = mapped.newlocs,
    qty = (select sum((l->>'qty')::int) from jsonb_array_elements(mapped.newlocs) l),
    rack = mapped.newlocs->0->>'rack',
    shelf = mapped.newlocs->0->>'shelf'
from mapped
where inv.sku='UNI-SHT-M-52';

-- ── AFTER: confirm the fix looks right ──
select id, ts, items from public.history where id='GRN-283872' and type='grn';
select sku, qty, rack, shelf, locations from public.inventory where sku in ('UNI-SHT-M-50','UNI-SHT-M-52');
