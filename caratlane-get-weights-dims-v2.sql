-- READ-ONLY. Corrected version of the earlier weight/dims query.
--
-- Root cause of the missing 16 Sep data: once an order is dispatched
-- (AWB assigned), confirmCourierDispatch() takes the SAME history row
-- that was created at pack time and changes its `type` from 'packed' to
-- 'dispatched' (it's an update-in-place, not a new row) — box_l/box_w/
-- box_h/actual_weight/vol_weight/chargeable_weight are untouched by that
-- update, they're just sitting on a row that's no longer type='packed'.
-- My first query filtered on type='packed', so it missed every order
-- that had already been dispatched by the time I ran it — which is most
-- of the older 16 Sep batch. This version drops that filter.

select
  order_id,
  type,
  box_l,
  box_w,
  box_h,
  actual_weight,
  vol_weight,
  chargeable_weight
from public.history
where order_id in (
    -- 16 Sep orders (34)
    '000001','000002','000003','000004','000006','000007','000008','000009',
    '000010','000011','000016','000017','000018','000019','000020','000021',
    '000022','000023','000024','000025','000028','000029','000030','000032',
    '000033','000034','000035','000037','000038','000039','000040','000041',
    '000043','000045',
    -- 17 Sep orders (80)
    '000080','000081','000082','000083','000085','000086','000088','000093',
    '000094','000097','000100','000103','000104','000108','000110','000112',
    '000113','000115','000117','000118','000119','000122','000124','000129',
    '000130','000131','000134','000138','000139','000142','000144','000147',
    '000150','000152','000154','000157','000158','000160','000161','000162',
    '000167','000169','000170','000171','000173','000177','000181','000183',
    '000185','000186','000187','000190','000192','000193','000194','000195',
    '000200','000201','000206','000207','000210','000211','000214','000223',
    '000227','000239','000241','000243','000245','000248','000249','000250',
    '000255','000256','000258','000259','000261','000266','000268','000271',
    -- 18 Sep orders (24)
    '000270','000265','000263','000262','000260','000257','000013',
    '000099','000098','000092','000091','000087','000084','000079',
    '000078','000133','000123','000121','000116','000114','000109',
    '000107','000102','000076'
  )
  and type in ('packed','dispatched')
order by order_id, type;
