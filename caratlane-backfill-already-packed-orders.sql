-- Backfill for the 16 orders you confirmed were physically packed by the
-- warehouse team and are awaiting dispatch, but never got a 'packed'
-- record in the app because the packing task was invisible to them
-- (the original silent pick-to-pack handoff failure).
--
-- Box dimensions / weight / packaging materials were never captured since
-- packing happened outside the app — those fields are left blank here.
-- Whoever assigns the AWB on the Dispatch page can fill them in from the
-- physical box if that's still needed; the Dispatch page already handles
-- missing dims gracefully ("Dims not captured").

-- ══════════════════════════════════════════════════════════════════════
-- STEP 1 — PREVIEW (read-only). Confirms which of these 16 still need
-- this backfill (i.e. have a packing_queue row and no packed/dispatched
-- history yet).
-- ══════════════════════════════════════════════════════════════════════
select pq.id as task_id, pq.order_id, jsonb_array_length(pq.items) as item_lines, pq.picker
from public.packing_queue pq
where pq.order_id in ('000200','000201','000206','000207','000210','000211','000214','000223','000227','000239','000241','000243','000245','000248','000249','000250')
  and not exists (select 1 from public.history h where h.order_id = pq.order_id and h.type in ('packed','dispatched'));

-- ══════════════════════════════════════════════════════════════════════
-- STEP 2 — Insert the backfilled 'packed' history row for each.
-- ══════════════════════════════════════════════════════════════════════
insert into public.history (id, type, ts, detail, order_id, items)
select replace(pq.id, 'PCK-', 'PKD-'),
       'packed', to_char(now(), 'DD Mon, HH24:MI'),
       pq.order_id || ' · ' || jsonb_array_length(pq.items) || ' SKUs packed — ready for dispatch (backfilled: packed outside the app, dims/weight not captured)',
       pq.order_id, pq.items
from public.packing_queue pq
where pq.order_id in ('000200','000201','000206','000207','000210','000211','000214','000223','000227','000239','000241','000243','000245','000248','000249','000250')
  and not exists (select 1 from public.history h where h.order_id = pq.order_id and h.type in ('packed','dispatched'));

-- ══════════════════════════════════════════════════════════════════════
-- STEP 3 — Remove the now-completed packing_queue rows for these orders.
-- ══════════════════════════════════════════════════════════════════════
delete from public.packing_queue pq
where pq.order_id in ('000200','000201','000206','000207','000210','000211','000214','000223','000227','000239','000241','000243','000245','000248','000249','000250')
  and exists (select 1 from public.history h where h.order_id = pq.order_id and h.type = 'packed' and h.detail like '%backfilled%');

-- ══════════════════════════════════════════════════════════════════════
-- STEP 4 — VERIFY. Should show all 16 with a 'packed' entry and none left
-- in packing_queue.
-- ══════════════════════════════════════════════════════════════════════
select o.id as order_id,
       (select count(*) from public.packing_queue pq where pq.order_id = o.id) as still_in_packing_queue,
       (select count(*) from public.history h where h.order_id = o.id and h.type = 'packed') as packed_entries
from public.orders o
where o.id in ('000200','000201','000206','000207','000210','000211','000214','000223','000227','000239','000241','000243','000245','000248','000249','000250')
order by o.id;
