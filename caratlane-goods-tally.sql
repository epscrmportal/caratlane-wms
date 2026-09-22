-- READ-ONLY. Run both queries below and paste back both result sets — I'll
-- use them to build the full inward-vs-outward reconciliation as an Excel
-- file (per-SKU: Received / Returned / Dispatched / Expected on-hand /
-- Actual on-hand / Discrepancy, plus an order-level detail tab).
--
-- Logic, matching exactly what the app itself does when it moves stock:
--   • "Received" = GRN line items with qc='PASS' (HOLD/REJECT never get
--     added to sellable stock — see createGRN() in the app), excluding
--     any voided GRN.
--   • "Returned" = return line items with grade='A' (only Grade A gets
--     restocked — B/C are scrapped/written off).
--   • "Dispatched" = every item on every history row with type='dispatched'
--     (i.e. actually left the warehouse), all-time.
--   • "Actual on-hand" = current public.inventory.qty per SKU.
--   Expected on-hand = Received + Returned - Dispatched. Any SKU where
--   that doesn't match Actual on-hand is a real discrepancy worth a look.

-- ═══ QUERY 1 — per-SKU tally (all-time) ═══
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

-- ═══ QUERY 2 — order-level dispatch detail (all-time) ═══
select
  order_id,
  dispatched_at,
  courier_partner,
  awb,
  (select sum((i->>'qty')::numeric) from jsonb_array_elements(items::jsonb) i) as total_units,
  jsonb_array_length(items::jsonb) as distinct_skus
from public.history
where type = 'dispatched'
order by order_id;
