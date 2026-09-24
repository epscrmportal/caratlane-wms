-- READ-ONLY. Run this on its own and paste the result.
select id, status, assigned_picker, picked_task_id, items, created_at
from public.orders
where id = '000049' or id = '49';
