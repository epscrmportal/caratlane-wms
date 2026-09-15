-- ============================================================
-- CaratLane WMS — ORD-560140: add customer name + phone
-- ============================================================
-- SAFETY
--  - Pre-flight check confirms you're on the right database.
--  - Guard aborts if ORD-560140 doesn't exist.
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

-- ── BEFORE ──
select id, customer_name, phone from public.orders where id='ORD-560140';

-- ── Guard: refuse if the order doesn't exist ──
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM public.orders WHERE id='ORD-560140') THEN
    RAISE EXCEPTION 'ORD-560140 not found. Stopping without changing anything.';
  END IF;
END $$;

-- ── Fix: set customer name + phone ──
update public.orders
set customer_name='Gulam',
    phone='8056245366'
where id='ORD-560140';

-- ── AFTER ──
select id, customer_name, phone from public.orders where id='ORD-560140';
