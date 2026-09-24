-- READ-ONLY. Current live stock for every Shoes and Shirt SKU, with the
-- actual bin(s) each one is sitting in right now (not the catalog
-- default). Run this and paste back the results.

select sku, qty, rack, shelf, locations
from public.inventory
where sku in (
  'UNI-JCS-U','UNI-TAH-U','UNI-HKS-M',
  'UNI-SH-M-6','UNI-SH-M-7','UNI-SH-M-8','UNI-SH-M-11','UNI-SH-M-12',
  'UNI-SH-F-6','UNI-SH-F-7',
  'UNI-SH-U-4','UNI-SH-U-5','UNI-SH-U-6','UNI-SH-U-7','UNI-SH-U-8','UNI-SH-U-9','UNI-SH-U-10','UNI-SH-U-11','UNI-SH-U-12',
  'UNI-SHT-M-34','UNI-SHT-M-36','UNI-SHT-M-38','UNI-SHT-M-40','UNI-SHT-M-42','UNI-SHT-M-44','UNI-SHT-M-46','UNI-SHT-M-48','UNI-SHT-M-50','UNI-SHT-M-52','UNI-SHT-M-54',
  'UNI-SHT-F-XXS','UNI-SHT-F-XS','UNI-SHT-F-S','UNI-SHT-F-M','UNI-SHT-F-L','UNI-SHT-F-XL','UNI-SHT-F-XXL','UNI-SHT-F-XXXL','UNI-SHT-F-4XL','UNI-SHT-F-5XL'
)
order by sku;
