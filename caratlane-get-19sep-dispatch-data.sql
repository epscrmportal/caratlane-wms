-- READ-ONLY. Run this and paste the full results back — I need this to
-- build the new "Dispatch Manifest 19 Sep" / "Item Detail 19 Sep" sheets
-- in your uploaded manifest file, matching the exact format of the
-- existing 16/17/18 Sep sheets (store code, address, box dims, weights,
-- courier + AWB, and per-item SKU/size/qty breakdown).
--
-- Filtered to '19 Sep%' so this only pulls genuine today's dispatches —
-- after the recent fix, the 138 legacy manifest orders now correctly show
-- their real 16/17/18 Sep dates and won't appear here.

select
  h.order_id,
  h.awb,
  h.courier_partner,
  h.recipient_name,
  h.address,
  h.pincode,
  h.phone,
  h.box_l, h.box_w, h.box_h,
  h.actual_weight, h.vol_weight, h.chargeable_weight, h.dispatch_weight,
  h.items,
  h.dispatched_at
from public.history h
where h.type = 'dispatched'
  and h.dispatched_at like '19 Sep%'
order by h.order_id;
