-- ============================================================
-- CaratLane WMS — RLS Tier 2: enforce read-only roles at the DB level
-- ============================================================
-- CONTEXT
-- Tier 1 (caratlane-rls-lockdown.sql, already applied) closed the
-- anonymous-access hole: every table now requires a logged-in
-- ("authenticated") session, but any logged-in session could still
-- write anywhere, regardless of app role.
--
-- Two roles — viewer and packaging_viewer — have every single
-- permission flag set to false in the app's own ROLE_PERMS table
-- (canEdit, canDispatch, canPack, canPick, canReceive, canManageUsers,
-- canAudit, canReturn, canManageOrders — all false for both). The app
-- never shows them a single write control. But that's only enforced
-- in the browser today: someone with a viewer or packaging_viewer
-- login (or a stolen session token for one) could still call the API
-- directly and write/delete anything, exactly like every other role.
--
-- WHY NOT GO FURTHER (picker/packer/supervisor/admin write rules)
-- I traced the actual write paths before writing this. `inventory`,
-- for example, is written by receiving (GRN), voiding a GRN, releasing
-- a pick to packing, processing a return, and manually editing a bin —
-- that's canReceive, canPick, canPack, and canReturn roles all
-- legitimately touching the same table through a shared save
-- function. `orders` is similar: releasing a pick to packing updates
-- the order row even though that action isn't gated by
-- canManageOrders. Splitting write access per table by individual
-- role would require exhaustively re-verifying every one of those
-- shared code paths — get one wrong and a legitimate picker or packer
-- action silently fails on a live system. viewer/packaging_viewer are
-- the one boundary I could verify with full confidence: zero
-- permissions, zero legitimate write paths, no risk of breaking
-- anything by blocking them.
--
-- WHAT THIS SCRIPT DOES
-- For the 10 plain operational tables (expected_shipments, history,
-- inventory, inventory_counts, inventory_snapshots, order_events,
-- orders, packing_queue, skus, stock_reservations):
--   - Reading (SELECT) stays open to any authenticated user — several
--     features cross-reference this data regardless of role, and
--     narrowing reads was never the goal here.
--   - Writing (INSERT/UPDATE/DELETE) now excludes viewer and
--     packaging_viewer specifically, in addition to still requiring
--     login. Every other role's write access is unchanged.
--
-- SAFE TO RUN
-- Since viewer and packaging_viewer already have no write UI in the
-- app, this should be invisible to every legitimate user. Still,
-- worth a quick login-and-poke-around as a viewer afterward to
-- confirm reading still works normally.
-- ============================================================

-- Pre-flight check — same purpose as in the Tier 1 script: confirms
-- you're on the live production database before changing anything.
DO $$
DECLARE missing text;
BEGIN
  SELECT string_agg(t, ', ') INTO missing
  FROM unnest(ARRAY[
    'expected_shipments','history','inventory','inventory_counts',
    'inventory_snapshots','order_events','orders','packing_queue',
    'skus','stock_reservations'
  ]) t
  WHERE to_regclass('public.'||t) IS NULL;

  IF missing IS NOT NULL THEN
    RAISE EXCEPTION 'Wrong database — table(s) not found: %. Switch to org "epscrmportal''s Org" -> project "caratlane" -> branch "main PRODUCTION" (URL should contain lqpqsrdxcxefxvobmnjc) and re-run.', missing;
  END IF;
END $$;

-- Replace the single "authenticated_all" policy on each table with a
-- read policy (unchanged: any authenticated user) and a write policy
-- that additionally excludes viewer/packaging_viewer.
DO $$
DECLARE t text;
BEGIN
  FOR t IN SELECT unnest(ARRAY[
    'expected_shipments','history','inventory','inventory_counts',
    'inventory_snapshots','order_events','orders','packing_queue',
    'skus','stock_reservations'
  ])
  LOOP
    EXECUTE format('DROP POLICY IF EXISTS "authenticated_all" ON public.%I', t);
    EXECUTE format('CREATE POLICY "authenticated_read" ON public.%I FOR SELECT TO authenticated USING (true)', t);
    EXECUTE format(
      'CREATE POLICY "operational_roles_write" ON public.%I FOR ALL TO authenticated USING (public.current_app_role() NOT IN (''viewer'',''packaging_viewer'')) WITH CHECK (public.current_app_role() NOT IN (''viewer'',''packaging_viewer''))',
      t
    );
  END LOOP;
END $$;

-- Confirm — every table below should now show two policies: one
-- SELECT (broad) and one ALL/write (excludes viewer & packaging_viewer).
select tablename, policyname, cmd, roles::text, qual, with_check
from pg_policies where schemaname='public' and tablename<>'caratlane'
order by tablename, cmd;
