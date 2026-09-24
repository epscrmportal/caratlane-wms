-- READ-ONLY. All-time stock reconciliation (covers everything since the
-- WMS went live, which includes all of August onward). Run this and
-- paste back the results.
--
-- Logic: for each SKU,
--   expected_qty = total received via GRN (PASS-graded items only)
--                 + total restocked via returns (Grade A only)
--                 - total deducted at pick time (inventory is decremented
--                   the moment a pick is completed, not at dispatch, so
--                   "pick" is the correct outbound event to use here —
--                   NOT "dispatched")
--   discrepancy  = actual_qty (current live inventory) - expected_qty
--
-- Voided records (e.g. the order 49 pick record we just voided) are
-- excluded from the outbound total, exactly as they should be.
--
-- Caveat: this can't account for manual inventory edits (e.g. someone
-- typing a new qty directly into the Inventory page, or a cycle-count
-- correction) since those aren't logged as their own movement type —
-- any residual discrepancy could be explained by one of those, not
-- necessarily an error.

with received as (
  select
    (item->>'sku') as sku,
    sum((item->>'qty')::numeric) as total_received
  from public.history h,
       jsonb_array_elements(h.items) as item
  where h.type = 'grn'
    and coalesce(h.voided, false) = false
    and (item->>'qc') = 'PASS'
  group by 1
),
picked as (
  select
    (item->>'sku') as sku,
    sum((item->>'qty')::numeric) as total_picked
  from public.history h,
       jsonb_array_elements(h.items) as item
  where h.type = 'pick'
    and coalesce(h.voided, false) = false
  group by 1
),
returned as (
  select
    (item->>'sku') as sku,
    sum((item->>'qty')::numeric) as total_returned
  from public.history h,
       jsonb_array_elements(h.items) as item
  where h.type = 'return'
    and coalesce(h.voided, false) = false
    and (item->>'grade') = 'A'
  group by 1
)
select
  coalesce(r.sku, p.sku, rt.sku, i.sku) as sku,
  coalesce(r.total_received, 0) as total_received,
  coalesce(rt.total_returned, 0) as total_returned_gradeA,
  coalesce(p.total_picked, 0) as total_picked,
  coalesce(r.total_received,0) + coalesce(rt.total_returned,0) - coalesce(p.total_picked,0) as expected_qty,
  coalesce(i.qty, 0) as actual_qty,
  coalesce(i.qty, 0) - (coalesce(r.total_received,0) + coalesce(rt.total_returned,0) - coalesce(p.total_picked,0)) as discrepancy
from received r
full outer join picked p on p.sku = r.sku
full outer join returned rt on rt.sku = coalesce(r.sku, p.sku)
full outer join public.inventory i on i.sku = coalesce(r.sku, p.sku, rt.sku)
where coalesce(i.qty, 0) - (coalesce(r.total_received,0) + coalesce(rt.total_returned,0) - coalesce(p.total_picked,0)) <> 0
order by abs(coalesce(i.qty, 0) - (coalesce(r.total_received,0) + coalesce(rt.total_returned,0) - coalesce(p.total_picked,0))) desc;

-- To see EVERY sku (including ones with zero discrepancy), remove the
-- "where ... <> 0" line above.
