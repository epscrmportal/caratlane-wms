-- ============================================================
-- CaratLane WMS — ORD-014521: swap Male Size 8 shoes for Unisex
-- Size 8, and correct the phantom Male Size 8 stock at rack A-6
-- ============================================================
-- WHY: ORD-014521 called for UNI-SH-M-8 (Shoes — Male, Size 8),
-- picked from rack A, shelf 6. That bin is empty in real life even
-- though the system shows stock there. CaratLane has confirmed they
-- can fulfill this order with Unisex Size 8 instead (UNI-SH-U-8,
-- which lives at rack A, shelf 7).
--
-- WHAT IT TOUCHES
--  1. orders — ORD-014521's single line item currently matching
--     sku='UNI-SH-M-8' gets swapped in place to sku='UNI-SH-U-8',
--     name 'Shoes - Unisex', variant 'Size 8', bin 'A-7' — qty is
--     left untouched. (Order status stays 'assigned'; nothing here
--     has been picked yet, so there's no reservation or pick record
--     to unwind.)
--  2. inventory — the UNI-SH-M-8 location entry at rack A, shelf 6
--     is zeroed out and removed from its `locations` array (mirrors
--     exactly how removeStockAtLocation() maintains that table in
--     the app), with qty/rack/shelf recomputed from what's left. Any
--     Male Size 8 stock at OTHER bins is left alone — only the A-6
--     entry is touched, per your choice.
--
-- SAFETY
--  - Pre-flight check confirms you're on the right database.
--  - A guard aborts (no changes made) if ORD-014521 doesn't have
--    exactly one line item with sku='UNI-SH-M-8'.
--  - A second guard aborts if UNI-SH-M-8's inventory locations don't
--    contain exactly one entry at rack A, shelf 6.
--  - Pre- and post-update SELECTs let you see the before/after.
--
-- Run this once, in the Supabase SQL Editor, on the caratlane
-- project (branch: main PRODUCTION).
-- ============================================================

DO $$
BEGIN
  IF to_regclass('public.orders') IS NULL OR to_regclass('public.inventory') IS NULL THEN
    RAISE EXCEPTION 'Wrong database — tables "orders"/"inventory" not found. Switch to org "epscrmportal''s Org" -> project "caratlane" -> branch "main PRODUCTION" (URL should contain lqpqsrdxcxefxvobmnjc) and re-run.';
  END IF;
END $$;

-- ── BEFORE: look at this and make sure it matches what you expect ──
select id, items, status, assigned_picker from public.orders where id='ORD-014521';
select sku, qty, rack, shelf, locations from public.inventory where sku in ('UNI-SH-M-8','UNI-SH-U-8');

-- ── Guard 1: refuse unless ORD-014521 has exactly one Male Size 8 line ──
DO $$
DECLARE
  match_count int;
BEGIN
  SELECT count(*) INTO match_count
  FROM public.orders, jsonb_array_elements(items) elem
  WHERE id='ORD-014521' AND elem->>'sku'='UNI-SH-M-8';
  IF match_count <> 1 THEN
    RAISE EXCEPTION 'Expected exactly 1 line item with sku=UNI-SH-M-8 in ORD-014521, found %. Stopping without changing anything — check the pre-flight SELECT above.', match_count;
  END IF;
END $$;

-- ── Guard 2: refuse unless UNI-SH-M-8 has exactly one location at A-6 ──
DO $$
DECLARE
  match_count int;
BEGIN
  SELECT count(*) INTO match_count
  FROM public.inventory, jsonb_array_elements(locations) l
  WHERE sku='UNI-SH-M-8' AND l->>'rack'='A' AND l->>'shelf'='6';
  IF match_count <> 1 THEN
    RAISE EXCEPTION 'Expected exactly 1 inventory location for UNI-SH-M-8 at rack A, shelf 6, found %. Stopping without changing anything — check the pre-flight SELECT above.', match_count;
  END IF;
END $$;

-- ── Fix 1: swap the order line from Male Size 8 to Unisex Size 8 ──
update public.orders
set items = (
  select jsonb_agg(
    case
      when elem->>'sku'='UNI-SH-M-8'
        then elem || jsonb_build_object('sku','UNI-SH-U-8','name','Shoes - Unisex','variant','Size 8','bin','A-7')
      else elem
    end
  )
  from jsonb_array_elements(items) as elem
)
where id='ORD-014521';

-- ── Fix 2: zero out the phantom Male Size 8 stock at rack A, shelf 6 ──
with mapped as (
  select jsonb_agg(loc) filter (where (loc->>'qty')::int > 0) as newlocs
  from (
    select case when l->>'rack'='A' and l->>'shelf'='6'
                then jsonb_set(l,'{qty}','0'::jsonb)
                else l
           end as loc
    from public.inventory, jsonb_array_elements(locations) as l
    where sku='UNI-SH-M-8'
  ) x
)
update public.inventory inv
set locations = coalesce(mapped.newlocs,'[]'::jsonb),
    qty = coalesce((select sum((l->>'qty')::int) from jsonb_array_elements(coalesce(mapped.newlocs,'[]'::jsonb)) l),0),
    rack = coalesce(mapped.newlocs,'[]'::jsonb)->0->>'rack',
    shelf = coalesce(mapped.newlocs,'[]'::jsonb)->0->>'shelf'
from mapped
where inv.sku='UNI-SH-M-8';

-- ── AFTER: confirm the fix looks right ──
select id, items, status, assigned_picker from public.orders where id='ORD-014521';
select sku, qty, rack, shelf, locations from public.inventory where sku in ('UNI-SH-M-8','UNI-SH-U-8');
