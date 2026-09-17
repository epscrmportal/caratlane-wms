-- One-time catch-up: sync orders.status with the furthest-along milestone
-- actually recorded in history, for orders where the two disagree.
--
-- Why this is needed: the status-advancement code (picked -> packed ->
-- dispatched) only started running once the updated app was deployed —
-- it never retroactively fixes orders packed/dispatched before that. It
-- also missed the 16 orders backfilled via SQL earlier today, since that
-- backfill only touched packing_queue/history, not orders.status. Going
-- forward the app keeps this in sync itself; this is only needed once.

-- ══════════════════════════════════════════════════════════════════════
-- STEP 1 — PREVIEW (read-only). Shows every order whose status disagrees
-- with its actual history.
-- ══════════════════════════════════════════════════════════════════════
select o.id as order_id, o.status as current_status,
       case
         when exists (select 1 from public.history h where h.order_id=o.id and h.type='dispatched') then 'dispatched'
         when exists (select 1 from public.history h where h.order_id=o.id and h.type='packed') then 'packed'
         else o.status
       end as correct_status
from public.orders o
where o.status not in ('cancelled')
  and (
    (o.status not in ('dispatched') and exists (select 1 from public.history h where h.order_id=o.id and h.type='dispatched'))
    or
    (o.status not in ('packed','dispatched') and exists (select 1 from public.history h where h.order_id=o.id and h.type='packed'))
  )
order by o.id;

-- ══════════════════════════════════════════════════════════════════════
-- STEP 2 — FIX: dispatched orders first (highest-priority correction).
-- ══════════════════════════════════════════════════════════════════════
update public.orders o set status='dispatched'
where o.status <> 'dispatched'
  and o.status <> 'cancelled'
  and exists (select 1 from public.history h where h.order_id=o.id and h.type='dispatched');

-- ══════════════════════════════════════════════════════════════════════
-- STEP 3 — FIX: packed orders (only ones not already caught by Step 2).
-- ══════════════════════════════════════════════════════════════════════
update public.orders o set status='packed'
where o.status not in ('packed','dispatched','cancelled')
  and exists (select 1 from public.history h where h.order_id=o.id and h.type='packed')
  and not exists (select 1 from public.history h where h.order_id=o.id and h.type='dispatched');

-- ══════════════════════════════════════════════════════════════════════
-- STEP 4 — VERIFY. Should return 0 rows.
-- ══════════════════════════════════════════════════════════════════════
select o.id as order_id, o.status
from public.orders o
where o.status not in ('cancelled')
  and (
    (o.status not in ('dispatched') and exists (select 1 from public.history h where h.order_id=o.id and h.type='dispatched'))
    or
    (o.status not in ('packed','dispatched') and exists (select 1 from public.history h where h.order_id=o.id and h.type='packed'))
  );
