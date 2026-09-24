-- READ-ONLY. The complementary check to caratlane-picked-orders-audit.sql.
-- That one catches orders with NO packing_queue row at all (order 192's
-- pattern). This one catches orders that DO have a packing_queue row,
-- but it's sat in 'awaiting_packing' for an unusually long time — which
-- is exactly what order 49 looked like (a real packing_queue row, just
-- one that was never going to be legitimately packed because the pick
-- never actually happened). A long-idle "awaiting_packing" task is
-- worth a manual look, especially if it's for one of the 4 discrepant
-- SKUs (UNI-SHT-M-38, UNI-SH-U-5, UNI-SHT-F-S, UNI-SHT-M-42).

select
  pq.id as packing_task_id,
  pq.order_id,
  pq.status,
  pq.tote_id,
  pq.created_at,
  now() - pq.created_at as age,
  pq.items
from public.packing_queue pq
where pq.status = 'awaiting_packing'
order by pq.created_at;
