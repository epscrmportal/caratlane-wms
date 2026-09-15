-- Diagnostic only — no writes. Compares EVERY line on GRN-283872 against
-- live inventory in one shot, so we catch any other broken lines instead
-- of finding them one at a time. For each (sku, bin) pair on the GRN,
-- shows the qty the GRN says was received, the qty currently sitting in
-- that SKU's locations array at that exact bin, and flags a mismatch.
with grn_lines as (
  select
    (item->>'sku') as sku,
    (item->>'bin') as bin,
    split_part(item->>'bin','-',1) as rack,
    split_part(item->>'bin','-',2) as shelf,
    sum((item->>'qty')::int) as expected_qty
  from public.history, jsonb_array_elements(items) as item
  where id='GRN-283872' and type='grn' and item->>'qc'='PASS'
  group by 1,2,3,4
),
live as (
  select
    sku,
    (loc->>'rack') as rack,
    (loc->>'shelf') as shelf,
    (loc->>'qty')::int as live_qty
  from public.inventory, jsonb_array_elements(coalesce(locations,'[]'::jsonb)) as loc
)
select
  g.sku, g.bin, g.expected_qty,
  coalesce(l.live_qty,0) as live_qty,
  case when coalesce(l.live_qty,0) = g.expected_qty then 'OK' else 'MISMATCH' end as status
from grn_lines g
left join live l on l.sku=g.sku and l.rack=g.rack and l.shelf=g.shelf
order by status desc, g.sku, g.bin;
