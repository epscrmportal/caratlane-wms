-- Fixes GRN-929130 so it matches the corrected inventory and the real
-- physical count you confirmed (Eye Loop 86, Eye glass 89 — the GRN and
-- the expected-shipment tally were both still showing the old wrong
-- figures: Eye Loop 52, Eye glass 74).
--
-- IMPORTANT: Run caratlane-history-cartons-migration.sql BEFORE this one
-- — it adds the carrier/asn/vehicle/cartons columns this script writes to.

-- 1) Preview current GRN item quantities (run first to confirm)
select item->>'sku' as sku, item->>'name' as name, item->>'qty' as qty
from history h, jsonb_array_elements(h.items) item
where h.id = 'GRN-929130' order by sku;

-- 2) Correct the GRN's own item list
update history
set items = (
  select jsonb_agg(
    case
      when item->>'sku' = 'VM-EG' then jsonb_set(item, '{qty}', '89')
      when item->>'sku' = 'VM-EL' then jsonb_set(item, '{qty}', '86')
      else item
    end
  )
  from jsonb_array_elements(items) item
)
where id = 'GRN-929130';

-- 3) Correct the matching expected-shipment / ASN tally so it agrees with the GRN
update expected_shipments
set items = (
  select jsonb_agg(
    case
      when item->>'sku' = 'VM-EG' then jsonb_set(item, '{qty}', '89')
      when item->>'sku' = 'VM-EL' then jsonb_set(item, '{qty}', '86')
      else item
    end
  )
  from jsonb_array_elements(items) item
)
where id = 'VMChn8252026';

-- 4) Backfill the carrier, ASN, and carton count onto the GRN itself (these
--    were captured on the expected shipment / at receiving time but never
--    saved onto the GRN record due to the missing-column bug). Carton count
--    confirmed as 6.
update history
set carrier = 'CRITICALOG', asn = 'VMChn8252026', cartons = 6
where id = 'GRN-929130';

-- 5) Confirm — both should now show Eye Loop 86, Eye glass 89, and the
--    GRN should show carrier CRITICALOG
select item->>'sku' as sku, item->>'qty' as qty from history h, jsonb_array_elements(h.items) item where h.id='GRN-929130' order by sku;
select item->>'sku' as sku, item->>'qty' as qty from expected_shipments es, jsonb_array_elements(es.items) item where es.id='VMChn8252026' order by sku;
select id, carrier, asn, cartons from history where id = 'GRN-929130';
