-- NOT executed by me — run this yourself in the Supabase SQL Editor.
--
-- Order 11963-VMPRMR009139 never actually got its AWB written (confirmed
-- via the diagnostic query — awb/courier_partner were still null, no
-- dispatch_confirmed event) even though it's sat at "Left Warehouse — AWB
-- Pending" since 09:06. This sets AWB 26201300046067 / Shree Maruti on it
-- directly and marks it dispatched — 12005-VMPRMR009181 already correctly
-- holds ...6068 from the earlier fix, so this closes out both halves of
-- what you originally asked for (9139 → ...6067, 9181 → ...6068).

update public.history
set
  awb = '26201300046067',
  courier_partner = 'Shree Maruti',
  type = 'dispatched',
  dispatched_at = coalesce(dispatched_at, now()::text),
  recipient_name = coalesce(recipient_name, (select o.customer_name from public.orders o where o.id = history.order_id)),
  address = coalesce(address, (select o.address from public.orders o where o.id = history.order_id)),
  pincode = coalesce(pincode, (select o.pincode from public.orders o where o.id = history.order_id)),
  phone = coalesce(phone, (select o.phone from public.orders o where o.id = history.order_id)),
  shipping_method = coalesce(shipping_method, 'Standard Road'),
  dispatch_weight = coalesce(dispatch_weight, chargeable_weight, actual_weight)
where order_id = '11963-VMPRMR009139'
  and type in ('packed','dispatched');

update public.orders
set status = 'dispatched'
where id = '11963-VMPRMR009139'
  and status <> 'dispatched';

-- Verify — both orders should now show correctly:
select order_id, type, awb, courier_partner, dispatch_weight
from public.history
where order_id in ('11963-VMPRMR009139','12005-VMPRMR009181')
  and type = 'dispatched';

select id, status
from public.orders
where id in ('11963-VMPRMR009139','12005-VMPRMR009181');
