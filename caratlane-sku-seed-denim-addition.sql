-- Adds the 5 new Stitched Denim sizes (from the latest rate list) to the
-- skus table. Only needed if you already ran caratlane-sku-seed.sql —
-- if you never seeded the skus table, skip this: the app's built-in
-- fallback catalog in v41 already includes these.
insert into skus (sku, cat, sub, variant, rack, shelf, price) values
  ('UNI-DN-M-28','Uniform','Stitched Denim - Male','Size 28','A','8',1400),
  ('UNI-DN-M-44','Uniform','Stitched Denim - Male','Size 44','A','8',1400),
  ('UNI-DN-M-46','Uniform','Stitched Denim - Male','Size 46','A','8',1400),
  ('UNI-DN-F-24','Uniform','Stitched Denim - Female','Size 24','A','9',1400),
  ('UNI-DN-F-26','Uniform','Stitched Denim - Female','Size 26','A','9',1400)
on conflict (sku) do update set
  cat = excluded.cat, sub = excluded.sub, variant = excluded.variant,
  rack = excluded.rack, shelf = excluded.shelf, price = excluded.price;

-- Sanity check
select sku, sub, variant, price from skus where sku like 'UNI-DN-%' order by sku;
