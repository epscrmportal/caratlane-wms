-- ============================================================
-- CaratLane WMS — restore UNI-SHT-M-34 / UNI-SHT-M-36 inventory
-- to match what GRN-283872 actually received
-- ============================================================
-- Same issue as UNI-SHT-F-4XL / UNI-SHT-F-5XL, fixed earlier — these
-- are the FIRST two line items on GRN-283872 (12 Sept, 4:54pm):
--   UNI-SHT-M-34 — qty 20 at bin E-3
--   UNI-SHT-M-36 — qty 48 at bin E-4
-- Live inventory still shows both stuck at qty 0, rack A, shelf 10
-- (the static catalog default) — the receipt never landed for these
-- two lines either. Together with the two Female-4XL/5XL SKUs fixed
-- earlier, that's the first 2 and last 2 line items out of this
-- GRN's 29 lines — everything in between has been checked and is
-- correct. This restores just these two SKUs to match the GRN.
--
-- SAFETY
--  - Pre-flight check confirms you're on the right database.
--  - Guard aborts if either SKU currently has NONZERO qty or a
--    non-null locations array — stops rather than risk
--    double-adding stock if something has already touched them.
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
select sku, qty, rack, shelf, locations from public.inventory where sku in ('UNI-SHT-M-34','UNI-SHT-M-36');

-- ── Guard: refuse unless both are still at qty 0 with no locations ──
DO $$
DECLARE
  bad_count int;
BEGIN
  SELECT count(*) INTO bad_count FROM public.inventory
  WHERE sku in ('UNI-SHT-M-34','UNI-SHT-M-36')
    AND (qty <> 0 OR locations IS NOT NULL);
  IF bad_count > 0 THEN
    RAISE EXCEPTION 'One or both SKUs are no longer at qty 0 / no locations — something else has already touched them. Stopping without changing anything — check the pre-flight SELECT above.';
  END IF;
END $$;

-- ── Fix: set both to match the GRN ──
update public.inventory
set qty=20, rack='E', shelf='3', locations='[{"qty":20,"rack":"E","shelf":"3"}]'::jsonb
where sku='UNI-SHT-M-34';

update public.inventory
set qty=48, rack='E', shelf='4', locations='[{"qty":48,"rack":"E","shelf":"4"}]'::jsonb
where sku='UNI-SHT-M-36';

-- ── AFTER ──
select sku, qty, rack, shelf, locations from public.inventory where sku in ('UNI-SHT-M-34','UNI-SHT-M-36');
