-- Recovery for the packing_queue-orphaning bug (root cause now fixed in the
-- app code: releaseToPacking()/completeMobilePick() used to flip an order's
-- status to 'picked' even when the packing_queue insert had silently
-- failed, leaving the order stuck — too "picked" for Picking to re-show,
-- with no task for Packing to show either).
--
-- This does NOT hardcode the 16 order IDs you gave me. Instead it targets
-- the general condition that causes the bug — status='picked' with a
-- picked_task_id but no matching packing_queue row — so it also catches any
-- OTHER orphaned orders beyond that list. Everything below is guarded to
-- only touch rows matching that exact condition; nothing already-correct
-- is modified.

-- ══════════════════════════════════════════════════════════════════════
-- STEP 1 — PREVIEW (read-only). Run this first and look at the results.
-- ══════════════════════════════════════════════════════════════════════
select o.id as order_id, o.status, o.picked_task_id, o.assigned_picker,
       o.priority, o.method, jsonb_array_length(o.items) as item_lines,
       (select count(*) from public.packing_queue pq where pq.id = o.picked_task_id) as packing_queue_row_exists,
       (select count(*) from public.history h where h.id = o.picked_task_id and h.type='pick') as pick_history_exists
from public.orders o
where o.status = 'picked'
  and o.picked_task_id is not null
  and not exists (select 1 from public.packing_queue pq where pq.id = o.picked_task_id)
order by o.id;

-- ══════════════════════════════════════════════════════════════════════
-- STEP 2 — FIX. Only run after checking Step 1's output looks right.
-- Recreates the missing packing_queue row for each such order, using the
-- items/priority/method/picker already stored on the order itself (this is
-- exactly the data the original insert would have used). tote_id and any
-- pack-start fields are left null since that information was never
-- captured for these orphaned tasks — packers can still claim and pack
-- them normally from here.
-- ══════════════════════════════════════════════════════════════════════
insert into public.packing_queue (id, order_id, priority, method, picker, items, ts, status, tote_id, pack_start_time, pack_start_ts, claimed_by)
select o.picked_task_id, o.id, o.priority, o.method,
       coalesce(o.assigned_picker, 'Unknown'), o.items,
       to_char(now(), 'DD Mon, HH24:MI'), 'awaiting_packing', null, null, null, null
from public.orders o
where o.status = 'picked'
  and o.picked_task_id is not null
  and not exists (select 1 from public.packing_queue pq where pq.id = o.picked_task_id);

-- ══════════════════════════════════════════════════════════════════════
-- STEP 3 — FIX pick history. Recreates the missing 'pick' history entry
-- for the same orders, ONLY where one doesn't already exist (about half of
-- the 16 you listed already had one — this will not duplicate those).
-- The detail text is marked "(recovered)" so it's clear on the Reports /
-- Order Timeline pages that this entry was reconstructed, not original.
-- ══════════════════════════════════════════════════════════════════════
insert into public.history (id, type, ts, detail, order_id, items)
select o.picked_task_id, 'pick', to_char(now(), 'DD Mon, HH24:MI'),
       o.id || ' · ' || coalesce(o.method,'?') || ' pick · ' || coalesce(o.priority,'?') || ' · ' ||
         jsonb_array_length(o.items) || ' SKUs · Picker: ' || coalesce(o.assigned_picker,'Unknown') || ' (recovered)',
       o.id, o.items
from public.orders o
where o.status = 'picked'
  and o.picked_task_id is not null
  and not exists (select 1 from public.history h where h.id = o.picked_task_id and h.type = 'pick');

-- ══════════════════════════════════════════════════════════════════════
-- STEP 4 — VERIFY. Re-run this after Steps 2+3 — it should return 0 rows.
-- ══════════════════════════════════════════════════════════════════════
select o.id as order_id, o.status, o.picked_task_id,
       (select count(*) from public.packing_queue pq where pq.id = o.picked_task_id) as packing_queue_row_exists,
       (select count(*) from public.history h where h.id = o.picked_task_id and h.type='pick') as pick_history_exists
from public.orders o
where o.status = 'picked'
  and o.picked_task_id is not null
  and not exists (select 1 from public.packing_queue pq where pq.id = o.picked_task_id);
