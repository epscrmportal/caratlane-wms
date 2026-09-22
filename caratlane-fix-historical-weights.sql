-- WRITE. Run caratlane-preview-weight-recalc.sql FIRST and review the
-- results, then run this to actually apply the fix.
--
-- Recalculates vol_weight and chargeable_weight on every dispatched order
-- that has box dimensions on file, using the correct divisor for how it
-- actually shipped (Air ÷5000, Surface ÷27000) instead of the old
-- always-÷5000 formula. dispatch_weight and actual_weight are left
-- untouched — those are real scale readings, not derived figures.
--
-- Air/Surface detection: shipping_method = 'Air' OR courier_partner
-- contains the word "air" (case-insensitive) — same logic as the preview
-- query and as the app's own scan-to-dispatch path.

update public.history
set
  vol_weight = round(
    (box_l * box_w * box_h) /
    (case when shipping_method='Air' or courier_partner ~* '\yair\y' then 5000.0 else 27000.0 end),
    2
  ),
  chargeable_weight = greatest(
    coalesce(dispatch_weight, actual_weight, 0),
    round(
      (box_l * box_w * box_h) /
      (case when shipping_method='Air' or courier_partner ~* '\yair\y' then 5000.0 else 27000.0 end),
      2
    )
  )
where type = 'dispatched'
  and box_l is not null
  and box_w is not null
  and box_h is not null;

-- Verify afterward:
-- select order_id, courier_partner, shipping_method, box_l, box_w, box_h,
--        vol_weight, chargeable_weight, dispatch_weight
-- from public.history
-- where type='dispatched' and box_l is not null
-- order by order_id
-- limit 20;
