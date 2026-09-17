-- Diagnostic only — no writes. Shows every history record (GRN/pick/pack/
-- dispatch) for order IDs in the 000245–000270 range, in order, so we can
-- see exactly where packed orders stop appearing.
select order_id, type, ts, id
from public.history
where order_id is not null
  and order_id ~ '^0*(24[5-9]|2[5-6][0-9]|270)$'
order by order_id::int, ts;
