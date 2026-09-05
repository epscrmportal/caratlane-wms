-- Adds the new "Stitched Set - Kurti+Pant+Dupatta (Female)" SKUs (sizes
-- S/M/L/XL, Rs.2034 each) to the skus table so they show up in Inventory,
-- Rack View, and Label Printer the same way the rest of the catalog does.
-- Safe to re-run: updates on conflict.
insert into skus (sku, cat, sub, variant, rack, shelf, price) values
  ('UNI-KPD-F-S','Uniform','Stitched Set - Kurti+Pant+Dupatta (Female)','Size S','A','12',2034),
  ('UNI-KPD-F-M','Uniform','Stitched Set - Kurti+Pant+Dupatta (Female)','Size M','A','12',2034),
  ('UNI-KPD-F-L','Uniform','Stitched Set - Kurti+Pant+Dupatta (Female)','Size L','A','12',2034),
  ('UNI-KPD-F-XL','Uniform','Stitched Set - Kurti+Pant+Dupatta (Female)','Size XL','A','12',2034)
on conflict (sku) do update set
  cat = excluded.cat, sub = excluded.sub, variant = excluded.variant,
  rack = excluded.rack, shelf = excluded.shelf, price = excluded.price;

-- Sanity check
select sku, sub, variant, price from skus where sku like 'UNI-KPD-%' order by sku;
