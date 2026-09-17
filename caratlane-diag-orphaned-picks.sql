-- Diagnostic only — no writes. For every order you listed as "already
-- packed" that isn't showing on Dispatch, this shows: the order's own
-- status/picked_task_id, whether a packing_queue row for that task
-- exists, and the pick history record's items (so we can see what a
-- reconstructed packing task would need to contain).
select o.id as order_id, o.status, o.picked_task_id, o.assigned_picker,
       (select count(*) from public.packing_queue pq where pq.id = o.picked_task_id) as packing_queue_row_exists,
       (select count(*) from public.history h where h.id = o.picked_task_id and h.type='pick') as pick_history_exists,
       (select count(*) from public.history h where h.order_id = o.id and h.type='packed') as packed_history_exists
from public.orders o
where o.id in ('000200','000201','000206','000207','000210','000211','000214','000223','000227','000239','000241','000243','000245','000248','000249','000250')
order by o.id::int;
