-- The orders.status CHECK constraint was created before 'packed' and
-- 'dispatched' existed as valid statuses (they're new as of today's
-- status-tracking fix), so it's rejecting the sync-status update.

-- ══════════════════════════════════════════════════════════════════════
-- STEP 1 — See the current constraint definition (read-only).
-- ══════════════════════════════════════════════════════════════════════
select conname, pg_get_constraintdef(oid) as definition
from pg_constraint
where conrelid = 'public.orders'::regclass
  and conname = 'orders_status_check';

-- ══════════════════════════════════════════════════════════════════════
-- STEP 2 — Widen it to include 'packed' and 'dispatched' alongside
-- whatever it already allows.
-- ══════════════════════════════════════════════════════════════════════
alter table public.orders drop constraint orders_status_check;
alter table public.orders add constraint orders_status_check
  check (status in ('unassigned','assigned','picked','packed','dispatched','cancelled'));

-- ══════════════════════════════════════════════════════════════════════
-- STEP 3 — VERIFY. Should show the new definition including packed/dispatched.
-- ══════════════════════════════════════════════════════════════════════
select conname, pg_get_constraintdef(oid) as definition
from pg_constraint
where conrelid = 'public.orders'::regclass
  and conname = 'orders_status_check';
