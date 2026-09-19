-- NOT executed by me — run this yourself in the Supabase SQL Editor.
--
-- Order 12005-VMPRMR009181 got dispatched with AWB 26201300046067 — that
-- was actually meant for order 11963-VMPRMR009139 (per your message: 9139
-- should end 6067, 9181 should end 6068). This is why scanning ...6067 for
-- 11963 just now got blocked as a duplicate — 12005 was already sitting
-- on it. Fixes just the one wrong AWB on 12005; doesn't touch anything
-- else about that dispatch (courier, weight, recipient, etc. all stay).

-- Sanity check first — should show exactly one row, AWB 26201300046067:
select order_id, type, awb, courier_partner
from public.history
where order_id = '12005-VMPRMR009181' and type = 'dispatched';

update public.history
set awb = '26201300046068'
where order_id = '12005-VMPRMR009181'
  and type = 'dispatched'
  and awb = '26201300046067';

-- Verify:
select order_id, type, awb, courier_partner
from public.history
where order_id = '12005-VMPRMR009181' and type = 'dispatched';
