-- READ-ONLY. Pinpoints when weight-capture started actually being saved,
-- by comparing pack completion times just before/after the cutover.

select order_id, event_type, actor, detail, created_at
from public.order_events
where order_id in ('000251','000252','000253','000254','000255','000256')
  and event_type in ('pack_started','pack_item_verified')
order by created_at;
