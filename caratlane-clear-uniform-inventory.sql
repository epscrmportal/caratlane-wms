-- Removes the 64 leftover "Uniform" category inventory rows (1,513 units)
-- sitting at their default Rack A / B positions — legacy test/seed data,
-- not real stock. Scoped strictly to sku LIKE 'UNI-%' so it cannot touch
-- any real VM inventory (Ring Sizer, Ipad Stand, etc.), including the 3
-- VM SKUs still sitting at their default Rack B slot with real stock.

-- 1) Preview what will be deleted (run this first to double-check)
select sku, rack, shelf, qty from inventory where sku like 'UNI-%' order by sku;

-- 2) Once you've confirmed the list above looks right, run the delete
delete from inventory where sku like 'UNI-%';

-- 3) Confirm — should return 0
select count(*) as remaining_uni_rows from inventory where sku like 'UNI-%';
