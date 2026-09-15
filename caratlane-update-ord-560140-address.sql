-- ============================================================
-- CaratLane WMS — ORD-560140: update shipping address
-- ============================================================
-- Sets the order's address and pincode fields (kept separate to
-- match the app's own order form / dispatch label / invoice, which
-- always store pincode as its own 6-digit field, not folded into
-- the address text).
--
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
select id, address, pincode from public.orders where id='ORD-560140';

-- ── Guard: refuse if the order doesn't exist ──
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM public.orders WHERE id='ORD-560140') THEN
    RAISE EXCEPTION 'ORD-560140 not found. Stopping without changing anything.';
  END IF;
END $$;

-- ── Fix: update address + pincode ──
update public.orders
set address='Time Links, Door No. 7, AC Block, II Avenue, Annanagar, Chennai',
    pincode='600040'
where id='ORD-560140';

-- ── AFTER ──
select id, address, pincode from public.orders where id='ORD-560140';
