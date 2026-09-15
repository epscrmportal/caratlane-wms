-- Diagnostic only — no writes. Shows how UNI-SHT-F-4XL / UNI-SHT-F-5XL's
-- recorded qty/rack/shelf changed across every saved inventory snapshot,
-- oldest to newest, so we can see exactly when it flipped from the real
-- received qty (39 / 49 at J-4 / J-5) back down to 0 at the catalog
-- default (A-11).
select
  s.created_at,
  s.id as snapshot_id,
  item->>'sku' as sku,
  item->>'qty' as qty,
  item->>'rack' as rack,
  item->>'shelf' as shelf,
  item->'locations' as locations
from public.inventory_snapshots s,
     jsonb_array_elements(s.items) as item
where item->>'sku' in ('UNI-SHT-F-4XL','UNI-SHT-F-5XL')
order by s.created_at asc;
