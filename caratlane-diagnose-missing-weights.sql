-- READ-ONLY. This checks WHY these 19 orders (000193-000250 range, on the
-- 17 Sep sheet) have a 'packed' history record but no box dims/weight.
--
-- The pack-completion screen in the app REQUIRES box L/W/H and actual
-- weight before it will let a packer finish (client-side validation
-- blocks submission otherwise) — so if these rows have no weight, they
-- were not packed through that normal screen. This checks the `detail`
-- text, packer, and any audit-log events to confirm how they got marked
-- packed instead.

-- 1. The packed history rows themselves — look at `detail` phrasing and `packer`
select order_id, ts, detail, packer, pack_materials, pack_notes
from public.history
where type = 'packed'
  and order_id in (
    '000193','000194','000195','000200','000201','000206','000207','000210',
    '000211','000214','000223','000227','000239','000241','000243','000245',
    '000248','000249','000250'
  )
order by order_id;

-- 2. Any audit-log / order_events entries for these orders, in case they
--    were advanced by an admin action or recovery script rather than a
--    normal pack scan
select order_id, event_type, actor, detail, created_at
from public.order_events
where order_id in (
    '000193','000194','000195','000200','000201','000206','000207','000210',
    '000211','000214','000223','000227','000239','000241','000243','000245',
    '000248','000249','000250'
  )
order by order_id, created_at;
