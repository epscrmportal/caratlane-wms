-- Regenerates the SKUS array text exactly as it needs to appear in
-- index.html and preview.html, straight from the live catalog. Run
-- this any time you add, edit, or remove a SKU directly in Supabase
-- (or after running a catalog-fix script like the VM-IS/VM-RS one),
-- to make sure the app's built-in fallback list — used only if a
-- user's browser can't reach Supabase at load time — never goes
-- stale.
--
-- HOW TO USE
--   1. Run this query.
--   2. Click the single result cell, then "View full cell content"
--      (or use the Export button) to get the full text — it's one
--      long block, the grid preview will look cut off.
--   3. Copy that whole block.
--   4. In BOTH index.html and preview.html, find the line
--      "let SKUS=[" and replace everything between that and the
--      matching "];" with the copied block.
--   5. Send the edited files back to Claude (or ask Claude to do
--      steps 3-4 for you) so app.js gets regenerated and the
--      deployment zip gets rebuilt before you upload to GitHub.

select string_agg(
  '  {sku:"'||sku||'",cat:"'||cat||'",sub:"'||sub||'",variant:"'||variant
  ||'",rack:"'||rack||'",shelf:"'||shelf||'"'
  ||coalesce(',price:'||trim(trailing '.' from trim(trailing '0' from (round(price,2))::text)), '')
  ||'},',
  E'\n' order by cat, sub, variant
) as skus_array_body
from skus;
