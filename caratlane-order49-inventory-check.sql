-- READ-ONLY. Run this and paste the result.
select sku, qty, rack, shelf, locations
from public.inventory
where sku in ('UNI-SHT-M-38','UNI-SHT-M-40');
