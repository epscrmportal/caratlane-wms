-- NOT executed by me — run this yourself in the Supabase SQL Editor.
--
-- Sets courier_partner = 'Air India' and awb = '098-08118913' on all 4
-- orders that physically went out together in one box. Same pattern as
-- the earlier bulk AWB backfill: touches each order's own packed history
-- row, flips it to type='dispatched' if it isn't already, and backfills
-- recipient/address/phone from the order record + dispatch weight from
-- that order's own pack-time weight (kept as each order's individually
-- captured weight, not a split of the combined box weight — you didn't
-- ask for that to be changed).

with awb_data(order_id, courier_partner, awb) as (
  values
  ('ORD-636444','Air India','098-08118913'),
  ('ORD-543269','Air India','098-08118913'),
  ('ORD-311345','Air India','098-08118913'),
  ('ORD-014521','Air India','098-08118913')
)
update public.history h
set
  awb = v.awb,
  courier_partner = v.courier_partner,
  type = 'dispatched',
  dispatched_at = coalesce(h.dispatched_at, now()::text),
  recipient_name = coalesce(h.recipient_name, o.customer_name),
  address = coalesce(h.address, o.address),
  pincode = coalesce(h.pincode, o.pincode),
  phone = coalesce(h.phone, o.phone),
  shipping_method = coalesce(h.shipping_method, 'Air'),
  dispatch_weight = coalesce(h.dispatch_weight, h.chargeable_weight, h.actual_weight)
from awb_data v
join public.orders o on o.id = v.order_id
where h.order_id = v.order_id
  and h.type in ('packed','dispatched');

update public.orders o
set status = 'dispatched'
where o.id in ('ORD-636444','ORD-543269','ORD-311345','ORD-014521')
  and o.status <> 'dispatched';

-- Verify — should show all 4, type='dispatched', same AWB/courier:
select order_id, type, awb, courier_partner
from public.history
where order_id in ('ORD-636444','ORD-543269','ORD-311345','ORD-014521')
  and type = 'dispatched';
