-- ============================================================
-- CaratLane WMS — ORD-560140: flip status to 'picked' (status
-- field only — no inventory/packing-queue/history side effects)
-- ============================================================
-- WARNING — this is NOT the same as picking an order through the
-- app. The normal Picking flow also: decrements live inventory at
-- each item's bin, creates a packing-queue task (PCK-xxxx) that
-- packers see, and logs pick duration/history. NONE of that happens
-- here — this script only sets orders.status='picked'. After running
-- this, ORD-560140 will show as "picked" in the UI, but:
--   • it will NOT appear in the packing queue for a packer to work
--   • inventory counts will NOT be decremented for its 8 line items
--   • no pick-history/timeline entry will exist for it
-- You confirmed you want the status-only flip. Run this only if
-- you understand and accept that gap.
--
-- SAFETY
--  - Pre-flight check confirms you're on the right database.
--  - A guard aborts (no changes made) unless ORD-560140 currently
--    has status='assigned' — refuses to touch it if it's already
--    picked/cancelled/something else.
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
select id, status, assigned_picker from public.orders where id='ORD-560140';

-- ── Guard: refuse unless status is currently 'assigned' ──
DO $$
DECLARE
  cur_status text;
BEGIN
  SELECT status INTO cur_status FROM public.orders WHERE id='ORD-560140';
  IF cur_status IS NULL THEN
    RAISE EXCEPTION 'ORD-560140 not found. Stopping without changing anything.';
  ELSIF cur_status <> 'assigned' THEN
    RAISE EXCEPTION 'Expected ORD-560140 status to be ''assigned'', found ''%''. Stopping without changing anything — check the pre-flight SELECT above.', cur_status;
  END IF;
END $$;

-- ── Fix: flip status only ──
update public.orders set status='picked' where id='ORD-560140';

-- ── AFTER ──
select id, status, assigned_picker from public.orders where id='ORD-560140';
