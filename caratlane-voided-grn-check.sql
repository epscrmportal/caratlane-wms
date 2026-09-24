-- READ-ONLY. Checks whether any GRN touching the 4 discrepant SKUs was
-- later voided. voidGRN() in the app is supposed to reverse the stock
-- it added when it's voided — if that reversal ever failed or was
-- skipped, the SKU would be left with extra "phantom" stock that was
-- never actually reversed, which could explain part of the picture
-- (especially the +2 surplus on UNI-SHT-M-42).

select id, ts, detail, asn, voided, voided_by, voided_at, void_reason, items
from public.history
where type = 'grn'
  and coalesce(voided, false) = true
  and items::text ~* '(UNI-SHT-M-38|UNI-SH-U-5|UNI-SHT-F-S|UNI-SHT-M-42)'
order by ts;
