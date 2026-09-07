-- Fixes VM-IS and VM-RS in the live catalog:
--   - VM-IS (Ipad Stand) is discontinued and currently has 0 units in
--     stock (confirmed via inventory before writing this) — removed from
--     the catalog and its empty inventory row entirely.
--   - VM-RS (Ring Sizer) is still active but had no price set — set to 0
--     as a placeholder for now (update it whenever you have the real price).
-- Neither SKU has any GRN/order history referencing it, so this is safe.
-- history is never touched by this script — that table stays untouched
-- so past records always remain intact regardless of catalog changes.

delete from inventory where sku = 'VM-IS';
delete from skus where sku = 'VM-IS';

update skus set price = 0 where sku = 'VM-RS';

-- Confirm — should return 0 rows for VM-IS, and VM-RS should show price 0
select * from skus where sku in ('VM-IS','VM-RS');
