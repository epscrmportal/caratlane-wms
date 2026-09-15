-- Diagnostic only — no writes.
select sku, qty, rack, shelf, locations from public.inventory where sku in ('UNI-SHT-M-34','UNI-SHT-M-36');

-- Full audit trail (not just LOCATION_MISMATCH) for these two SKUs, to see
-- if anything else (a cycle count, a manual edit, etc.) touched them.
select created_at, action, entity_type, entity_id, old_values, new_values
from public.audit_log
where entity_id in ('UNI-SHT-M-34','UNI-SHT-M-36')
order by created_at asc;
