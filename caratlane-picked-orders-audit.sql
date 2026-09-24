-- READ-ONLY. Runs the same check the in-app Data Integrity Check does
-- (the one that already caught the order-192 pattern) across every order
-- ever marked "picked" — flags any order whose pick was never followed
-- through to packing or dispatch, which is exactly the order-49 problem.
--
-- A flagged row means: orders.status = 'picked', but there's no matching
-- packing_queue row for its picked_task_id, AND no 'packed' or
-- 'dispatched' history record for that order either — so the pick
-- inventory deduction happened, but the order never actually moved
-- forward. Cross-referencing item skus in the last column tells you
-- which of the 4 discrepant SKUs (UNI-SHT-M-38, UNI-SH-U-5, UNI-SHT-F-S,
-- UNI-SHT-M-42) each flagged order is dragging down.

select
  o.id as order_id,
  o.status,
  o.assigned_picker,
  o.picked_task_id,
  o.created_at,
  o.items
from public.orders o
where o.status = 'picked'
  and not exists (
    select 1 from public.packing_queue pq where pq.id = o.picked_task_id
  )
  and not exists (
    select 1 from public.history h
    where h.order_id = o.id and h.type in ('packed','dispatched')
  )
order by o.created_at;
