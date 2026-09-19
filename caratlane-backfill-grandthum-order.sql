-- NOT executed by me — run this yourself in the Supabase SQL Editor.
--
-- Fills in the store details for order 12005-VMPRMR009181 (Grandthum -
-- Noida, store code CFNOIGTM) that were missing at creation — this store
-- wasn't in the STORES master list at the time, so the CSV import left
-- customer_name/address/pincode/phone blank. You've now supplied the
-- real details, which I've also added to the app's STORES list so future
-- orders from this store auto-fill. The Proforma Invoice is generated
-- from the order record at print time, so once this row is updated the
-- invoice will show the corrected details automatically — no separate
-- invoice record to touch.

update public.orders
set customer_name = 'CL-ST-NDD-Grandthum',
    address = 'CaratLane, LOWER GROUND FLOOR UNIT NO.036,037 & 71 GRANDTHUM PLOT NO.7, TECHZONE 4, GREATER NOIDA WEST, UP-201308',
    pincode = '201308',
    phone = '9811037902 / 9810588849'
where id = '12005-VMPRMR009181';

-- Verify:
select id, customer_name, address, pincode, phone
from public.orders
where id = '12005-VMPRMR009181';
