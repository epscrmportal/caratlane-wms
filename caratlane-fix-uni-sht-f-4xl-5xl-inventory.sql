-- ============================================================
-- CaratLane WMS — restore UNI-SHT-F-4XL / UNI-SHT-F-5XL inventory
-- to match what GRN-283872 actually received
-- ============================================================
-- GRN-283872 (12 Sept, 4:54pm) recorded these two lines as PASS:
--   UNI-SHT-F-4XL — qty 39 at bin J-4
--   UNI-SHT-F-5XL — qty 49 at bin J-5
-- But live inventory currently shows both stuck at qty 0, rack A,
-- shelf 11 (the static SKU catalog's default bin) — i.e. the receipt
-- never actually landed in inventory for these two lines, even
-- though every other line on the same GRN (checked: UNI-SHT-M-38,
-- UNI-SHT-F-XXXL) correctly reflects its received qty/bin. This
-- restores just these two SKUs to match the GRN record, the same
-- way addStockAtLocation() would.
--
-- WHAT IT TOUCHES
--  inventory — UNI-SHT-F-4XL set to qty 39 at J-4; UNI-SHT-F-5XL set
--  to qty 49 at J-5 (both currently have locations=null and qty=0,
--  so this is a straight set, not a merge — verified below).
--
-- SAFETY
--  - Pre-flight check confirms you're on the right database.
--  - Guard aborts if either SKU currently has NONZERO qty or a
--    non-null locations array — i.e. if anything has already
--    corrected or touched them since we last checked, this stops
--    rather than risk double-adding stock.
--  - Pre- and post-update SELECTs let you see the before/after.
--
-- Run this once, in the Supabase SQL Editor, on the caratlane
-- project (branch: main PRODUCTION).
-- ============================================================

DO $$
BEGIN
  IF to_regclass('public.inventory') IS NULL THEN
    RAISE EXCEPTION 'Wrong database — table "inventory" not found. Switch to org "epscrmportal''s Org" -> project "caratlane" -> branch "main PRODUCTION" (URL should contain lqpqsrdxcxefxvobmnjc) and re-run.';
  END IF;
END $$;

-- ── BEFORE ──
select sku, qty, rack, shelf, locations from public.inventory where sku in ('UNI-SHT-F-4XL','UNI-SHT-F-5XL');

-- ── Guard: refuse unless both are still at qty 0 with no locations ──
DO $$
DECLARE
  bad_count int;
BEGIN
  SELECT count(*) INTO bad_count FROM public.inventory
  WHERE sku in ('UNI-SHT-F-4XL','UNI-SHT-F-5XL')
    AND (qty <> 0 OR locations IS NOT NULL);
  IF bad_count > 0 THEN
    RAISE EXCEPTION 'One or both SKUs are no longer at qty 0 / no locations — something else has already touched them. Stopping without changing anything — check the pre-flight SELECT above.';
  END IF;
END $$;

-- ── Fix: set both to match the GRN ──
update public.inventory
set qty=39, rack='J', shelf='4', locations='[{"qty":39,"rack":"J","shelf":"4"}]'::jsonb
where sku='UNI-SHT-F-4XL';

update public.inventory
set qty=49, rack='J', shelf='5', locations='[{"qty":49,"rack":"J","shelf":"5"}]'::jsonb
where sku='UNI-SHT-F-5XL';

-- ── AFTER ──
select sku, qty, rack, shelf, locations from public.inventory where sku in ('UNI-SHT-F-4XL','UNI-SHT-F-5XL');
