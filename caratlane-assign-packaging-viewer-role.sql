-- Assigns the "packaging_viewer" role to v-packingmaterial@caratlane.com.
-- The Supabase Auth login already exists (created earlier) but has no
-- matching user_profiles row, which is why it currently sees every page
-- unrestricted (missing role = no restriction, until v44's fix takes effect).
-- Running this gives it a proper profile + role so it's locked to
-- Dashboard, Rack View, Inventory and Order Status, view-only.

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

-- Sanity check
select id, email, full_name, role, is_active from user_profiles
where email = 'v-packingmaterial@caratlane.com';
