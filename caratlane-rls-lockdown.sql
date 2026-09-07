-- ============================================================
-- CaratLane WMS — RLS Lockdown (Tier 1)
-- ============================================================
-- WHY YOU NEED THIS
-- Every table currently has a leftover policy from initial setup
-- named things like "Admin can do everything on X" or "anon full
-- access". These policies use `qual = true` (or `with_check = true`)
-- and apply to the {public} role set, which in Postgres/Supabase
-- means EVERYONE — including the `anon` role. In practice this
-- means anyone who has your page's public anon key (which is
-- embedded in index.html's source by design — that's normal for
-- Supabase apps) can read, insert, update, or delete ANY row in
-- ANY table via a direct API call, without ever logging in.
--
-- This completely bypasses every client-side role check the app
-- enforces (viewer, packaging_viewer, etc). Worst case: someone
-- could set their own user_profiles.role to 'admin' directly
-- through the API, or silently edit/delete audit_log entries to
-- cover their tracks.
--
-- WHAT THIS SCRIPT DOES
--  1) Drops every existing RLS policy on the 12 real app tables.
--     (Leaves the unrelated, empty, auto-created "caratlane"
--     starter table untouched — it holds no app data, just the
--     default id/created_at columns Supabase scaffolds for every
--     new project.)
--  2) Re-creates policies that require a logged-in ("authenticated")
--     Supabase Auth session for ANY read or write on the 10 plain
--     operational tables (expected_shipments, history, inventory,
--     inventory_counts, inventory_snapshots, order_events, orders,
--     packing_queue, skus, stock_reservations). This closes the
--     anonymous-access hole while preserving every existing
--     logged-in-staff workflow — nothing here restricts one staff
--     role from another; that finer-grained restriction (e.g. only
--     "canReceive" roles can create a GRN, enforced at the database
--     level too) is a bigger follow-up project, noted at the bottom.
--  3) Adds two extra, higher-value protections beyond "must be
--     logged in":
--       a) user_profiles — only an admin can create a profile or
--          change someone ELSE's role/is_active. Anyone can update
--          their own row (e.g. last_login), but a trigger silently
--          blocks a non-admin from changing their OWN role or
--          is_active — closing the "give myself admin" hole even
--          if someone finds a way to submit those fields.
--       b) audit_log — any logged-in user can INSERT (to log their
--          own actions), but there is no UPDATE or DELETE policy at
--          all, so entries can never be edited or removed once
--          written. SELECT (viewing the log) is restricted to
--          admin/supervisor, matching the app's existing canAudit
--          permission (confirmed: the Audit Trail tab is the only
--          place the app reads audit_log, and it's already hidden
--          from every other role).
--
-- SAFE TO RUN
-- Every current app user is already required to log in via
-- Supabase Auth before touching any data, so nothing here should
-- change what a logged-in staff member can do. Still, please
-- spot-check a login as each role (admin, supervisor, picker,
-- packer, viewer, packaging_viewer) after running this, and let
-- me know right away if anything breaks — it's easy to adjust.
--
-- WHAT THIS DOES *NOT* DO (Tier 2, optional follow-up)
-- It does not stop one logged-in staff member from writing to a
-- table their app role shouldn't touch (e.g. a picker directly
-- calling the API to edit `history` the way only canReceive roles
-- should). Today that's enforced only in the browser. Building the
-- database-level version of that requires mapping every table/
-- operation to the exact ROLE_PERMS matrix and testing each role's
-- flows before deploying to a live system — happy to do this next
-- if you want it, just say so.
-- ============================================================

-- 1) Wipe every existing policy on the 12 real tables.
DO $$
DECLARE pol record;
BEGIN
  FOR pol IN
    SELECT policyname, tablename FROM pg_policies
    WHERE schemaname='public' AND tablename IN (
      'audit_log','expected_shipments','history','inventory',
      'inventory_counts','inventory_snapshots','order_events',
      'orders','packing_queue','skus','stock_reservations','user_profiles'
    )
  LOOP
    EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I', pol.policyname, pol.tablename);
  END LOOP;
END $$;

-- 2) Helper: looks up the CALLING user's app-level role from
--    user_profiles. SECURITY DEFINER so it can read user_profiles
--    even from inside user_profiles' own RLS policies below,
--    without causing infinite recursion.
CREATE OR REPLACE FUNCTION public.current_app_role()
RETURNS text
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
STABLE
AS $$
  SELECT role FROM public.user_profiles WHERE id = auth.uid();
$$;

-- 3) Plain operational tables — require a logged-in session for
--    any read/write.
DO $$
DECLARE t text;
BEGIN
  FOR t IN SELECT unnest(ARRAY[
    'expected_shipments','history','inventory','inventory_counts',
    'inventory_snapshots','order_events','orders','packing_queue',
    'skus','stock_reservations'
  ])
  LOOP
    EXECUTE format('CREATE POLICY "authenticated_all" ON public.%I FOR ALL TO authenticated USING (true) WITH CHECK (true)', t);
  END LOOP;
END $$;

-- 4) user_profiles — broad read (needed for picker-name lookups and
--    the admin user-management list), but writes are locked down:
--    only an admin can create a profile or change someone ELSE's
--    role/is_active; anyone can update their own row.
CREATE POLICY "authenticated_read" ON public.user_profiles
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "admin_insert" ON public.user_profiles
  FOR INSERT TO authenticated WITH CHECK (public.current_app_role() = 'admin');

CREATE POLICY "admin_delete" ON public.user_profiles
  FOR DELETE TO authenticated USING (public.current_app_role() = 'admin');

CREATE POLICY "self_or_admin_update" ON public.user_profiles
  FOR UPDATE TO authenticated
  USING (id = auth.uid() OR public.current_app_role() = 'admin')
  WITH CHECK (id = auth.uid() OR public.current_app_role() = 'admin');

-- Belt-and-braces: even on their OWN row, silently block a non-admin
-- from changing their own role or is_active. Protects against the
-- self-update policy above being (mis)used to self-promote.
CREATE OR REPLACE FUNCTION public.guard_user_profile_privileges()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF public.current_app_role() IS DISTINCT FROM 'admin' THEN
    NEW.role := OLD.role;
    NEW.is_active := OLD.is_active;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS guard_user_profile_privileges ON public.user_profiles;
CREATE TRIGGER guard_user_profile_privileges
  BEFORE UPDATE ON public.user_profiles
  FOR EACH ROW EXECUTE FUNCTION public.guard_user_profile_privileges();

-- 5) audit_log — append-only. Any logged-in user can write a log
--    entry; only admin/supervisor (canAudit in the app) can read
--    the log; nobody can update or delete an entry once written.
CREATE POLICY "authenticated_insert" ON public.audit_log
  FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "auditors_read" ON public.audit_log
  FOR SELECT TO authenticated
  USING (public.current_app_role() IN ('admin','supervisor'));

-- 6) Confirm — every row below should show only "authenticated"
--    (never "anon") in roles, and no qual/with_check of bare "true"
--    on a table that should be restricted (user_profiles, audit_log).
select tablename, policyname, cmd, roles::text, qual, with_check
from pg_policies where schemaname='public' and tablename<>'caratlane'
order by tablename, cmd;
