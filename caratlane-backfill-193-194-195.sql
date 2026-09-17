-- Backfill for orders 000193, 000194, 000195 — confirmed physically
-- packed by the warehouse team and awaiting dispatch, but never got a
-- 'packed' record in the app because the packing task was invisible to
-- them (same root bug as the earlier 16-order backfill).
--
-- Same pattern as caratlane-backfill-already-packed-orders.sql, PLUS the
-- orders.status update that script missed (that's why status stayed
-- stuck at 'picked' even after that backfill — fixed here).

-- ══════════════════════════════════════════════════════════════════════
-- STEP 1 — PREVIEW (read-only). Confirms these three still need it.
-- ══════════════════════════════════════════════════════════════════════
select pq.id as task_id, pq.order_id, jsonb_array_length(pq.items) as item_lines, pq.picker
from public.packing_queue pq
where pq.order_id in ('000193','000194','000195')
  and not exists (select 1 from public.history h where h.order_id = pq.order_id and h.type in ('packed','dispatched'));

-- ══════════════════════════════════════════════════════════════════════
-- STEP 2 — Insert the backfilled 'packed' history row for each.
-- ══════════════════════════════════════════════════════════════════════
insert into public.history (id, type, ts, detail, order_id, items)
select replace(pq.id, 'PCK-', 'PKD-'),
       'packed', to_char(now(), 'DD Mon, HH24:MI'),
       pq.order_id || ' · ' || jsonb_array_length(pq.items) || ' SKUs packed — ready for dispatch (backfilled: packed outside the app, dims/weight not captured)',
       pq.order_id, pq.items
from public.packing_queue pq
where pq.order_id in ('000193','000194','000195')
  and not exists (select 1 from public.history h where h.order_id = pq.order_id and h.type in ('packed','dispatched'));

-- ══════════════════════════════════════════════════════════════════════
-- STEP 3 — Remove the now-completed packing_queue rows for these orders.
-- ══════════════════════════════════════════════════════════════════════
delete from public.packing_queue pq
where pq.order_id in ('000193','000194','000195')
  and exists (select 1 from public.history h where h.order_id = pq.order_id and h.type = 'packed' and h.detail like '%backfilled%');

-- ══════════════════════════════════════════════════════════════════════
-- STEP 4 — Sync orders.status to 'packed' (the step missed last time).
-- ══════════════════════════════════════════════════════════════════════
update public.orders o set status='packed'
where o.id in ('000193','000194','000195')
  and o.status not in ('packed','dispatched','cancelled')
  and exists (select 1 from public.history h where h.order_id=o.id and h.type='packed');

-- ══════════════════════════════════════════════════════════════════════
-- STEP 5 — VERIFY. Should show all three with status='packed', nothing
-- left in packing_queue.
-- ══════════════════════════════════════════════════════════════════════
select o.id as order_id, o.status,
       (select count(*) from public.packing_queue pq where pq.order_id = o.id) as still_in_packing_queue,
       (select count(*) from public.history h where h.order_id = o.id and h.type = 'packed') as packed_entries
from public.orders o
where o.id in ('000193','000194','000195')
order by o.id;
