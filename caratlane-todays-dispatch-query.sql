-- READ-ONLY. Run this in the Supabase SQL Editor and paste the results
-- back here — I'll use them to build today's (22 Sep 2026) sheet in your
-- EPS_Todays_Dispatch_Manifest workbook.
--
-- Previous version used a \s / \b regex that returned 0 rows despite
-- confirmed 22-Sept dispatches — almost certainly because the browser's
-- date formatter inserts a non-breaking space (U+00A0) or narrow no-break
-- space (U+202F) instead of a plain space in dispatched_at, which \s
-- doesn't match. This version normalizes those to plain spaces first,
-- then does a simple case-insensitive prefix match — no regex needed.

select
  order_id,
  recipient_name,
  address,
  pincode,
  phone,
  courier_partner,
  awb,
  box_l, box_w, box_h,
  actual_weight,
  vol_weight,
  chargeable_weight,
  dispatch_weight,
  dispatched_at,
  items
from public.history
where type = 'dispatched'
  and (
    translate(dispatched_at, chr(160)||chr(8239), '  ') ilike '22 sept%'
    or translate(dispatched_at, chr(160)||chr(8239), '  ') ilike '22 sep %'
    or dispatched_at like '2026-09-22%'
  )
order by order_id;
