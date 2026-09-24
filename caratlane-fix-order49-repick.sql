-- WRITE. Run this after reviewing — reverses order 000049's incorrect
-- "picked" state so it can be picked again.
--
-- What this does:
-- 1. Resets orders.status from 'picked' back to 'assigned' (stays
--    assigned to "Picker" so it reappears in that picker's queue,
--    ready to pick) and clears picked_task_id.
-- 2. Deletes the packing_queue row (PCK-543141) that was created when
--    the pick was (wrongly) marked complete — it shouldn't be sitting
--    in "awaiting_packing" since nothing was actually picked.
-- 3. Voids (not deletes) the pick history record, so there's still an
--    audit trail of what happened and why it was reversed.
-- 4. Adds back the 4x UNI-SHT-M-38 and 2x UNI-SHT-M-40 that were
--    deducted from inventory at pick time. The original pick bins
--    (F-2, G-1) no longer hold this stock — it's since been
--    reorganized to E-5 (all of UNI-SHT-M-38) and G-1 already exists
--    for UNI-SHT-M-40 — so the qty is restored to those current bins
--    rather than recreating stale ones. Each UPDATE is guarded by the
--    exact qty seen in the read-only check, so it will simply do
--    nothing (0 rows affected) if the stock has changed since then —
--    re-run the inventory check first if that happens.

update public.orders
set status = 'assigned', picked_task_id = null
where id = '000049' and status = 'picked' and picked_task_id = 'PCK-543141';

delete from public.packing_queue
where id = 'PCK-543141' and order_id = '000049';

update public.history
set voided = true,
    voided_by = 'Manual correction (WMS)',
    voided_at = now()::text,
    void_reason = 'Order 49 was marked picked but was not physically picked — order reset for re-picking, inventory reversed.'
where id = 'PCK-543141' and type = 'pick';

update public.inventory
set qty = 7,
    locations = '[{"qty":7,"rack":"E","shelf":"5"}]'::jsonb
where sku = 'UNI-SHT-M-38' and qty = 3;

update public.inventory
set qty = 33,
    locations = '[{"qty":1,"rack":"F","shelf":"4"},{"qty":27,"rack":"F","shelf":"5"},{"qty":5,"rack":"G","shelf":"1"}]'::jsonb
where sku = 'UNI-SHT-M-40' and qty = 31;

-- Verify afterward:
-- select id, status, assigned_picker, picked_task_id from public.orders where id='000049';
-- select sku, qty, locations from public.inventory where sku in ('UNI-SHT-M-38','UNI-SHT-M-40');
