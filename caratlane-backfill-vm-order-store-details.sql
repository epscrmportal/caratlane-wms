-- NOT executed by me — run this yourself in the Supabase SQL Editor.
--
-- Backfills customer name / address / pincode / phone on the 3 VM
-- (Visual Merchandising) orders imported from EPS VM.xlsx, using the
-- store master list (STORES array in index.html) matched against the
-- store code each order came in with. The CSV import only had the store
-- code/name to go on, so these fields were left blank at creation.
--
-- 000011947-VMPRMR009123 — source "Location Code" column literally said
-- "CL-TAH-CHN-USMAN ROAD" (not a real store code — looks like the name
-- got typed into the code column by mistake). The only store in the
-- master list at that address is CLCHNUSN / "CL-ST-CHN-USMAN ROAD" (T
-- Nagar, Chennai) — same location, "TAH" vs "ST" prefix mismatch aside.
-- Using that store's address/phone here; flag if that's not actually the
-- right branch.
--
-- 11963-VMPRMR009139 — store code CFDELOCM, exact match in the master
-- list: CL-ST-DEL-Omaxe CC.
--
-- 12005-VMPRMR009181 — store code CFNOIGTM ("Grandthum - Noida") is NOT
-- in the STORES master list at all — this store isn't in the app's store
-- directory yet, so I have no address/phone to backfill it with. This
-- order is deliberately left untouched below; see the note at the end.

update public.orders
set customer_name = 'CL-ST-CHN-USMAN ROAD',
    address = 'No 159 /160, North Usman Road ,T Nagar, Chennai ,Tamil Nadu -600017',
    pincode = '600017',
    phone = '7358831999'
where id = '11947-VMPRMR009123';

update public.orders
set customer_name = 'CL-ST-DEL-Omaxe CC',
    address = 'Unit no -GF 011 and GF 10B Ground floor and Unit no- FF016A, FF-16, FF- 015A, FF- 15B First Floor,H.C. Sen Marg, Gandhi Maidan, Chandni Chowk Delhi - 110006',
    pincode = '110006',
    phone = '7358120793 / 7358120692'
where id = '11963-VMPRMR009139';

-- 12005-VMPRMR009181 (Grandthum - Noida / CFNOIGTM) intentionally NOT
-- updated — no store master data exists for this code. Once you give me
-- the address/phone (or add CFNOIGTM to the STORES list in the app), I'll
-- backfill this one the same way.

-- Verify:
select id, customer_name, address, pincode, phone
from public.orders
where id in ('11947-VMPRMR009123','11963-VMPRMR009139','12005-VMPRMR009181');
