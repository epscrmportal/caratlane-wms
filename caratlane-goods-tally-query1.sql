-- READ-ONLY. Run this and paste back the results.

select 'received' as metric, (item->>'sku') as sku, sum((item->>'qty')::numeric) as qty
from public.history h, jsonb_array_elements(h.items::jsonb) as item
where h.type = 'grn' and coalesce(h.voided,false) = false and (item->>'qc') = 'PASS'
group by 1,2

union all

select 'returned' as metric, (item->>'sku') as sku, sum((item->>'qty')::numeric) as qty
from public.history h, jsonb_array_elements(h.items::jsonb) as item
where h.type = 'return' and (item->>'grade') = 'A'
group by 1,2

union all

select 'dispatched' as metric, (item->>'sku') as sku, sum((item->>'qty')::numeric) as qty
from public.history h, jsonb_array_elements(h.items::jsonb) as item
where h.type = 'dispatched'
group by 1,2

union all

select 'current_stock' as metric, sku, qty::numeric as qty
from public.inventory

order by sku, metric;
