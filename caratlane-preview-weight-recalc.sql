-- READ-ONLY. Run this first and paste back the results (or just eyeball
-- them in the Supabase SQL Editor) before running
-- caratlane-fix-historical-weights.sql.
--
-- Context: until today, volumetric weight was always computed as
-- (L×W×H)÷5000 regardless of whether the parcel actually shipped by Air
-- or Surface — the correct divisor for Surface (Standard/Express Road) is
-- ÷27000, a much bigger number that gives a much LOWER volumetric weight.
-- Every dispatched order's stored vol_weight/chargeable_weight was
-- computed with the wrong (Air) divisor whenever it actually went by
-- Surface — this preview shows exactly which orders that affects.
--
-- Air/Surface detection: shipping_method = 'Air' OR courier_partner
-- contains the word "air" (case-insensitive) — this matches how the
-- app itself now infers it, since a lot of legacy orders never had
-- shipping_method set correctly and instead had the mode baked directly
-- into the courier name (e.g. "DTDC AIR" vs "DTDC SUF", "SHREE MARUTI
-- AIR" vs "SHREE MARUTI SUF").
--
-- Only rows with box dimensions on file are included — orders with no
-- box_l/box_w/box_h (e.g. the 138 paper-manifest legacy orders that were
-- never weighed/measured in the app) can't be recalculated and are left
-- untouched either way.

with recalced as (
  select
    id, order_id, courier_partner, shipping_method,
    box_l, box_w, box_h,
    dispatch_weight, actual_weight,
    vol_weight as old_vol_weight,
    chargeable_weight as old_chargeable_weight,
    case when shipping_method='Air' or courier_partner ~* '\yair\y' then 'Air (÷5000)' else 'Surface (÷27000)' end as detected_mode,
    round((box_l*box_w*box_h) / (case when shipping_method='Air' or courier_partner ~* '\yair\y' then 5000.0 else 27000.0 end), 2) as new_vol_weight
  from public.history
  where type='dispatched' and box_l is not null and box_w is not null and box_h is not null
)
select
  order_id,
  courier_partner,
  shipping_method,
  detected_mode,
  box_l, box_w, box_h,
  old_vol_weight,
  new_vol_weight,
  old_chargeable_weight,
  greatest(coalesce(dispatch_weight, actual_weight, 0), new_vol_weight) as new_chargeable_weight,
  round(greatest(coalesce(dispatch_weight, actual_weight, 0), new_vol_weight) - coalesce(old_chargeable_weight,0), 2) as chargeable_delta
from recalced
where old_vol_weight is distinct from new_vol_weight
   or old_chargeable_weight is distinct from greatest(coalesce(dispatch_weight, actual_weight, 0), new_vol_weight)
order by order_id;

-- Quick summary count/total of what would change:
-- select count(*) as orders_affected,
--        round(sum(greatest(coalesce(dispatch_weight, actual_weight, 0), new_vol_weight) - coalesce(old_chargeable_weight,0)),2) as total_chargeable_kg_delta
-- from recalced
-- where old_vol_weight is distinct from new_vol_weight
--    or old_chargeable_weight is distinct from greatest(coalesce(dispatch_weight, actual_weight, 0), new_vol_weight);
