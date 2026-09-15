-- ============================================================
-- CaratLane WMS — ORD-560140: revert status back to 'assigned'
-- so it can be picked properly through the app
-- ============================================================
-- WHY: an earlier script set orders.status='picked' directly (status
-- field only), which does NOT create a packing-queue task, so the
-- order never showed up for packing. This reverts status back to
-- 'assigned' so it appears again on the Picking page / mobile pick
-- queue and can go through the real scan-driven pick flow (tote +
-- item scans), which will correctly create the packing task,
-- decrement inventory, and log pick history.
--
-- SAFETY
--  - Pre-flight check confirms you're on the right database.
--  - A guard aborts (no changes made) unless ORD-560140 currently
--    has status='picked' — refuses to touch it otherwise.
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
select id, status, assigned_picker, picked_task_id from public.orders where id='ORD-560140';

-- ── Guard: refuse unless status is currently 'picked' ──
DO $$
DECLARE
  cur_status text;
BEGIN
  SELECT status INTO cur_status FROM public.orders WHERE id='ORD-560140';
  IF cur_status IS NULL THEN
    RAISE EXCEPTION 'ORD-560140 not found. Stopping without changing anything.';
  ELSIF cur_status <> 'picked' THEN
    RAISE EXCEPTION 'Expected ORD-560140 status to be ''picked'', found ''%''. Stopping without changing anything — check the pre-flight SELECT above.', cur_status;
  END IF;
END $$;

-- ── Fix: revert status, clear the (never-real) picked_task_id ──
update public.orders set status='assigned', picked_task_id=null where id='ORD-560140';

-- ── AFTER ──
select id, status, assigned_picker, picked_task_id from public.orders where id='ORD-560140';
