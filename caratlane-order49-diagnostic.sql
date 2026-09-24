-- READ-ONLY diagnostic. Run this first and paste the results back — I need
-- to see order 49's exact current state before writing the fix, since
-- "picked" also creates a packing_queue row and deducts inventory, and a
-- correct undo has to reverse all of that, not just flip the status back.

select id, status, assigned_picker, picked_task_id, items, created_at
from public.orders
where id = '000049' or id = '49';

select id, order_id, status, items, tote_id, created_at
from public.packing_queue
where order_id = '000049' or order_id = '49';

select id, type, order_id, items, ts
from public.history
where order_id = '000049' or order_id = '49'
order by id;
