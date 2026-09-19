-- READ-ONLY. Run this and paste the results back so I can see what
-- actually happened when the AWB (ending 6067) was scanned for order
-- 11963-VMPRMR009139 — the Dispatch page still shows it as "Left
-- Warehouse — AWB Pending" rather than fully dispatched.

select id, order_id, type, awb, courier_partner, dispatched_at, recipient_name, dispatch_weight
from public.history
where order_id = '11963-VMPRMR009139'
order by id;

select event_type, actor, detail, created_at
from public.order_events
where order_id = '11963-VMPRMR009139'
order by created_at;

select id, status
from public.orders
where id = '11963-VMPRMR009139';
