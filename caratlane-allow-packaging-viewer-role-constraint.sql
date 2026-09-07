-- The user_profiles.role column has a check constraint that only allows
-- the original role values (admin, supervisor, picker, packer, viewer) —
-- it was never updated when the "packaging_viewer" role was added to the
-- app, so inserting/updating a row with that role fails with:
-- "new row for relation user_profiles violates check constraint
--  user_profiles_role_check"
--
-- This drops the old constraint and re-adds it with packaging_viewer
-- included, then retries the profile insert for v-packingmaterial.

-- 1) See the current constraint definition (for your reference)
select conname, pg_get_constraintdef(oid) as definition
from pg_constraint
where conname = 'user_profiles_role_check';

-- 2) Drop and recreate the constraint with packaging_viewer allowed
alter table user_profiles drop constraint user_profiles_role_check;
alter table user_profiles add constraint user_profiles_role_check
  check (role = any (array['admin','supervisor','picker','packer','viewer','packaging_viewer']));

-- 3) Now retry the profile insert for v-packingmaterial@caratlane.com
insert into user_profiles (id, email, full_name, role, is_active)
values (
  'f0833718-a7eb-4bdb-9251-264df8bcce62',
  'v-packingmaterial@caratlane.com',
  'Packing Material Viewer',
  'packaging_viewer',
  true
)
on conflict (id) do update set
  role = excluded.role,
  is_active = excluded.is_active;

-- 4) Confirm
select id, email, full_name, role, is_active from user_profiles
where email = 'v-packingmaterial@caratlane.com';
