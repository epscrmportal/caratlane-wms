-- READ-ONLY. Run this on its own and paste the result.
select id, order_id, status, items, tote_id, created_at
from public.packing_queue
where order_id = '000049' or order_id = '49';
