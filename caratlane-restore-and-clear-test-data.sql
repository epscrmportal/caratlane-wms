-- ============================================================
-- 1) RESTORE inventory to exactly what GRN-929130 (28 Aug) received.
--    All 4 dummy test orders (test, test1, TEST 2, TEST 3) only ever
--    picked from these 7 VM SKUs (plus the already-removed dead RS-RS,
--    which has no real stock either way), so resetting these 7 back to
--    their received qty/bin undoes every test pick/pack/dispatch.
-- ============================================================
update inventory set qty = 68, rack = 'D', shelf = '1' where sku = 'VM-BS'; -- Bangle Sizer
update inventory set qty = 42, rack = 'D', shelf = '1' where sku = 'VM-RR'; -- Ring Rod
update inventory set qty = 20, rack = 'D', shelf = '1' where sku = 'VM-CB'; -- Chocolate bowl
update inventory set qty = 86, rack = 'D', shelf = '1' where sku = 'VM-EL'; -- Eye Loop (corrected from user's actual GRN paperwork)
update inventory set qty = 89, rack = 'D', shelf = '2' where sku = 'VM-EG'; -- Eye glass (corrected from user's actual GRN paperwork)
update inventory set qty = 30, rack = 'D', shelf = '1' where sku = 'VM-CC'; -- Cleaning Cloth
update inventory set qty = 53, rack = 'D', shelf = '1' where sku = 'VM-RS'; -- Ring Sizer
-- Total received: 68+42+20+86+89+30+53 = 388 units, matching the actual GRN paperwork total

-- ============================================================
-- 2) CLEAR all dummy test orders and their trail.
--    Keeps GRN-929130 (the real 28 Aug receiving record) and the real
--    expected shipment tied to it (VMChn8252026). Removes only the
--    4 test orders (test, test1, TEST 2, TEST 3), the pick/pack/dispatch
--    history rows they generated, their order_events, and the one
--    dummy "test" expected shipment.
-- ============================================================
delete from orders where id in ('test','test1','TEST 2','TEST 3');
delete from history where id <> 'GRN-929130';
delete from order_events where order_id in ('test','test1','TEST 2','TEST 3');
delete from expected_shipments where id = 'test';

-- packing_queue and stock_reservations are already empty — nothing to do there.

-- ============================================================
-- 3) Sanity check
-- ============================================================
select sku, qty, rack, shelf from inventory where sku in ('VM-BS','VM-RR','VM-CB','VM-EL','VM-EG','VM-CC','VM-RS') order by sku;
select count(*) as remaining_orders from orders;
select count(*) as remaining_history_rows from history; -- should be 1 (GRN-929130)
select count(*) as remaining_order_events from order_events; -- should be 0
select id from expected_shipments; -- should show only VMChn8252026
