-- READ-ONLY diagnostic. Shows the 15 most recently dispatched orders and
-- exactly how dispatched_at is stored for each, so we can see why
-- yesterday's date filter returned nothing (no dispatches yet today, or a
-- format mismatch).
select order_id, dispatched_at, courier_partner, awb
from public.history
where type = 'dispatched'
order by id desc
limit 15;
