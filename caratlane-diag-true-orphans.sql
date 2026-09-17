-- Diagnostic only — no writes.
--
-- The previous check used packing_queue_row_exists=0 as the signal for
-- "stuck", but that's ALSO true for every order that was already packed
-- and dispatched ages ago — orders.status stays 'picked' forever (nothing
-- in the app ever advances it to 'packed'/'dispatched'; that's tracked
-- purely via history rows), and a packing_queue row is correctly deleted
-- once packing completes. So packing_queue_row_exists=0 by itself proved
-- nothing.
--
-- The real signal for "genuinely stuck, never packed at all" is:
-- status='picked' AND no packing_queue row AND no packed/dispatched
-- history row exists for that order either. This should return a much
-- smaller, more accurate list than before.
select o.id as order_id, o.status, o.picked_task_id, o.assigned_picker,
       o.priority, o.method, jsonb_array_length(o.items) as item_lines,
       (select count(*) from public.history h where h.order_id=o.id and h.type='packed') as packed_entries,
       (select count(*) from public.history h where h.order_id=o.id and h.type='dispatched') as dispatched_entries
from public.orders o
where o.status = 'picked'
  and o.picked_task_id is not null
  and not exists (select 1 from public.packing_queue pq where pq.id = o.picked_task_id)
  and not exists (select 1 from public.history h where h.order_id = o.id and h.type in ('packed','dispatched'))
order by o.id;

-- For comparison — a sanity check on a few OLD orders that should clearly
-- turn out to be fine (already dispatched), to confirm the theory above:
select o.id as order_id, o.status,
       (select count(*) from public.history h where h.order_id=o.id and h.type='pick') as pick_entries,
       (select count(*) from public.history h where h.order_id=o.id and h.type='packed') as packed_entries,
       (select count(*) from public.history h where h.order_id=o.id and h.type='dispatched') as dispatched_entries
from public.orders o
where o.id in ('000001','000010','000045','000193','000227','000255','000271')
order by o.id;
