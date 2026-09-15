-- ============================================================
-- CaratLane WMS — ORD-560140: swap Male Size 8 shoes for Unisex
-- Size 8 (Male Size 8 was never actually received into stock)
-- ============================================================
-- WHY: ORD-560140 has a line for UNI-SH-M-8 (Shoes — Male, Size 8,
-- qty 1), showing bin "A-6". Checked live data: there is NO
-- inventory row at all for UNI-SH-M-8 — that "A-6" bin isn't a real
-- stock location, it's a fallback default from the app's static SKU
-- catalog that got copied onto the order at creation time because
-- this SKU was never actually received into the warehouse. There is
-- nothing to correct in `inventory` — the phantom is on the order
-- only. CaratLane has confirmed they can fulfill this order with
-- Unisex Size 8 instead (UNI-SH-U-8, which lives at rack A, shelf 7
-- and does have real stock).
--
-- Note: this order ALSO has a separate UNI-SH-M-7 (Male Size 7)
-- line, also showing bin A-6 — that line is untouched by this
-- script. Only the Size 8 line is changed.
--
-- WHAT IT TOUCHES
--  orders — ORD-560140's line item matching sku='UNI-SH-M-8' gets
--  swapped in place to sku='UNI-SH-U-8', name 'Shoes - Unisex',
--  variant 'Size 8', bin 'A-7' — qty (1) is left untouched. Order
--  status stays 'assigned'; nothing has been picked yet.
--
-- SAFETY
--  - Pre-flight check confirms you're on the right database.
--  - A guard aborts (no changes made) if ORD-560140 doesn't have
--    exactly one line item with sku='UNI-SH-M-8'.
--  - Pre- and post-update SELECTs let you see the before/after.
--
-- Run this once, in the Supabase SQL Editor, on the caratlane
-- project (branch: main PRODUCTION).
-- ============================================================

DO $$
BEGIN
  IF to_regclass('public.orders') IS NULL THEN
    RAISE EXCEPTION 'Wrong database — table "orders" not found. Switch to org "epscrmportal''s Org" -> project "caratlane" -> branch "main PRODUCTION" (URL should contain lqpqsrdxcxefxvobmnjc) and re-run.';
  END IF;
END $$;

-- ── BEFORE: look at this and make sure it matches what you expect ──
select id, items, status, assigned_picker from public.orders where id='ORD-560140';

-- ── Guard: refuse unless ORD-560140 has exactly one Male Size 8 line ──
DO $$
DECLARE
  match_count int;
BEGIN
  SELECT count(*) INTO match_count
  FROM public.orders, jsonb_array_elements(items) elem
  WHERE id='ORD-560140' AND elem->>'sku'='UNI-SH-M-8';
  IF match_count <> 1 THEN
    RAISE EXCEPTION 'Expected exactly 1 line item with sku=UNI-SH-M-8 in ORD-560140, found %. Stopping without changing anything — check the pre-flight SELECT above.', match_count;
  END IF;
END $$;

-- ── Fix: swap the order line from Male Size 8 to Unisex Size 8 ──
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
where id='ORD-560140';

-- ── AFTER: confirm the fix looks right ──
select id, items, status, assigned_picker from public.orders where id='ORD-560140';
