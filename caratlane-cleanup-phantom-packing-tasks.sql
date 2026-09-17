-- Cleanup for the mistake caused by running the earlier recovery script
-- against the full (unfiltered) list instead of true orphans only. That
-- recreated packing_queue rows for orders that were ALREADY correctly
-- packed or dispatched — they now show up as phantom "Not started" tasks
-- on the Packing page (order 000001, already dispatched long ago, is one
-- example).
--
-- The fix: a legitimate packing_queue row should never coexist with a
-- 'packed' or 'dispatched' history entry for the same order — once an
-- order is packed, its queue row is deleted for good. So any packing_queue
-- row where the order ALREADY has a packed/dispatched history entry is a
-- phantom duplicate created by the bad recovery run, safe to delete.

-- ══════════════════════════════════════════════════════════════════════
-- STEP 1 — PREVIEW (read-only). Run this first.
-- ══════════════════════════════════════════════════════════════════════
select pq.id as task_id, pq.order_id, pq.ts,
       (select count(*) from public.history h where h.order_id=pq.order_id and h.type='packed') as packed_entries,
       (select count(*) from public.history h where h.order_id=pq.order_id and h.type='dispatched') as dispatched_entries
from public.packing_queue pq
where exists (
  select 1 from public.history h
  where h.order_id = pq.order_id and h.type in ('packed','dispatched')
)
order by pq.order_id;

-- ══════════════════════════════════════════════════════════════════════
-- STEP 2 — DELETE the phantom rows. Only run after Step 1's list looks
-- right (every row in it should be an order you know is already packed
-- or shipped).
-- ══════════════════════════════════════════════════════════════════════
delete from public.packing_queue pq
where exists (
  select 1 from public.history h
  where h.order_id = pq.order_id and h.type in ('packed','dispatched')
);

-- ══════════════════════════════════════════════════════════════════════
-- STEP 3 — VERIFY. Should return 0 rows.
-- ══════════════════════════════════════════════════════════════════════
select pq.id as task_id, pq.order_id
from public.packing_queue pq
where exists (
  select 1 from public.history h
  where h.order_id = pq.order_id and h.type in ('packed','dispatched')
);

-- ══════════════════════════════════════════════════════════════════════
-- STEP 4 — Also clean up the matching "(recovered)" pick-history entries
-- the same bad run may have inserted for these same already-completed
-- orders (Step 3 of the original recovery script). Preview first:
-- ══════════════════════════════════════════════════════════════════════
select h.id, h.order_id, h.detail
from public.history h
where h.type = 'pick'
  and h.detail like '%(recovered)%'
  and exists (
    select 1 from public.history h2
    where h2.order_id = h.order_id and h2.type in ('packed','dispatched')
  );

-- Then, only if that preview looks right, delete them:
-- delete from public.history h
-- where h.type = 'pick'
--   and h.detail like '%(recovered)%'
--   and exists (
--     select 1 from public.history h2
--     where h2.order_id = h.order_id and h2.type in ('packed','dispatched')
--   );
