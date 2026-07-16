-- ═══════════════════════════════════════════════════════════════
-- CaratLane WMS — Supabase Migrations
-- Run these three migrations IN ORDER against a fresh Supabase
-- project (or to bring an older project up to date). Each block is
-- idempotent — safe to re-run if you're not sure what's applied.
--
-- Already applied to the live project (lqpqsrdxcxefxvobmnjc) on
-- 2026-07-15. This file exists so the schema is reproducible from
-- git alone if you ever need to stand up a new Supabase project.
--
-- Paste into Supabase Dashboard → SQL Editor → New query → Run,
-- one migration block at a time (or all at once, top to bottom).
-- ═══════════════════════════════════════════════════════════════


-- ═══════════════════════════════════════════════════════════════
-- MIGRATION 1 — stock_reservation_system
-- Fixes: two pickers (mobile or desktop) can no longer both pick the
-- same low-stock item. Availability is checked and held atomically
-- inside Postgres, not read from each browser's local copy.
-- ═══════════════════════════════════════════════════════════════

create table if not exists stock_reservations (
  id          text primary key,              -- session_id || ':' || sku
  sku         text not null,
  qty         integer not null check (qty > 0),
  session_id  text not null,
  order_id    text,
  picker      text,
  created_at  timestamptz not null default now(),
  expires_at  timestamptz not null default (now() + interval '20 minutes')
);

create index if not exists idx_stock_reservations_sku_active
  on stock_reservations (sku, expires_at);
create index if not exists idx_stock_reservations_session
  on stock_reservations (session_id);

alter table stock_reservations enable row level security;

drop policy if exists "anon full access" on stock_reservations;
create policy "anon full access" on stock_reservations
  for all to anon, authenticated using (true) with check (true);

-- Reserve stock (called on every barcode scan / manual add). Locks
-- the inventory row so two concurrent scans of the same SKU
-- serialize instead of racing. Expired holds are excluded from the
-- availability count automatically — no cron job needed.
create or replace function reserve_stock_item(
  p_sku text, p_qty int, p_session_id text, p_order_id text, p_picker text
) returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  v_qty       int;
  v_reserved  int;
  v_available int;
  v_id        text;
begin
  select qty into v_qty from inventory where sku = p_sku for update;
  if not found then
    return json_build_object('success', false, 'reason', 'unknown_sku', 'available', 0);
  end if;

  delete from stock_reservations where expires_at < now();

  select coalesce(sum(qty), 0) into v_reserved
    from stock_reservations where sku = p_sku and expires_at >= now();

  v_available := v_qty - v_reserved;

  if v_available < p_qty then
    return json_build_object('success', false, 'reason', 'insufficient_stock', 'available', v_available);
  end if;

  v_id := p_session_id || ':' || p_sku;
  insert into stock_reservations (id, sku, qty, session_id, order_id, picker)
  values (v_id, p_sku, p_qty, p_session_id, p_order_id, p_picker)
  on conflict (id) do update
    set qty = stock_reservations.qty + excluded.qty,
        expires_at = now() + interval '20 minutes';

  return json_build_object('success', true, 'available', v_available - p_qty);
end;
$$;

-- Release part (or all) of a single SKU's hold.
create or replace function release_reservation(
  p_session_id text, p_sku text, p_qty int default null
) returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  v_id      text := p_session_id || ':' || p_sku;
  v_row     stock_reservations%rowtype;
  v_release int;
begin
  select * into v_row from stock_reservations where id = v_id for update;
  if not found then
    return json_build_object('success', true, 'released', 0);
  end if;

  v_release := least(coalesce(p_qty, v_row.qty), v_row.qty);

  if v_release >= v_row.qty then
    delete from stock_reservations where id = v_id;
  else
    update stock_reservations set qty = qty - v_release where id = v_id;
  end if;

  return json_build_object('success', true, 'released', v_release);
end;
$$;

-- Commit a whole pick session: converts every held reservation into
-- a real inventory deduction, then clears the holds.
create or replace function commit_pick_session(p_session_id text)
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  r record;
  v_committed json[] := '{}';
begin
  for r in select * from stock_reservations where session_id = p_session_id for update loop
    update inventory set qty = qty - r.qty where sku = r.sku;
    v_committed := v_committed || json_build_object('sku', r.sku, 'qty', r.qty);
  end loop;

  delete from stock_reservations where session_id = p_session_id;

  return json_build_object('success', true, 'committed', to_json(v_committed));
end;
$$;

-- Abandon a whole pick session: frees every hold without touching
-- inventory.qty. Used for "Cancel pick".
create or replace function release_pick_session(p_session_id text)
returns json
language plpgsql
security definer
set search_path = public
as $$
begin
  delete from stock_reservations where session_id = p_session_id;
  return json_build_object('success', true);
end;
$$;

-- Live "what's currently reserved" read, for UI display.
create or replace function get_active_reservations()
returns table(sku text, reserved_qty bigint)
language sql
security definer
set search_path = public
as $$
  select sku, sum(qty) as reserved_qty
  from stock_reservations
  where expires_at >= now()
  group by sku;
$$;

grant execute on function reserve_stock_item(text, int, text, text, text) to anon, authenticated;
grant execute on function release_reservation(text, text, int) to anon, authenticated;
grant execute on function commit_pick_session(text) to anon, authenticated;
grant execute on function release_pick_session(text) to anon, authenticated;
grant execute on function get_active_reservations() to anon, authenticated;

do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and tablename = 'stock_reservations'
  ) then
    alter publication supabase_realtime add table stock_reservations;
  end if;
end $$;


-- ═══════════════════════════════════════════════════════════════
-- MIGRATION 2 — packing_claims_and_qc_photo
-- Fixes: two packers could both start packing the same order
-- (blanket delete-all-reinsert-all sync was clobbering claims).
-- Also adds a column so mobile QC photos actually persist.
-- ═══════════════════════════════════════════════════════════════

alter table packing_queue add column if not exists claimed_by text;
alter table packing_queue add column if not exists claimed_at timestamptz;
alter table history add column if not exists photo text;

-- Atomically claims a packing task for one packer. Fails cleanly if
-- someone else already claimed it. Preserves the original
-- pack_start_time/pack_start_ts across claim/release/reclaim so the
-- packing timer doesn't reset.
create or replace function claim_packing_task(
  p_task_id text, p_picker text, p_start_time bigint, p_start_ts text
) returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  v_row packing_queue%rowtype;
begin
  update packing_queue
    set claimed_by = p_picker,
        claimed_at = now(),
        pack_start_time = coalesce(pack_start_time, p_start_time),
        pack_start_ts = coalesce(pack_start_ts, p_start_ts)
    where id = p_task_id and claimed_by is null
    returning * into v_row;

  if not found then
    select * into v_row from packing_queue where id = p_task_id;
    if not found then
      return json_build_object('success', false, 'reason', 'not_found');
    end if;
    return json_build_object('success', false, 'reason', 'already_claimed', 'claimed_by', v_row.claimed_by);
  end if;

  return json_build_object('success', true, 'claimed_by', v_row.claimed_by, 'pack_start_time', v_row.pack_start_time, 'pack_start_ts', v_row.pack_start_ts);
end;
$$;

-- Releases a claim (e.g. packer cancels) so someone else can pick it up.
create or replace function release_packing_claim(p_task_id text)
returns json
language plpgsql
security definer
set search_path = public
as $$
begin
  update packing_queue set claimed_by = null, claimed_at = null where id = p_task_id;
  return json_build_object('success', true);
end;
$$;

grant execute on function claim_packing_task(text, text, bigint, text) to anon, authenticated;
grant execute on function release_packing_claim(text) to anon, authenticated;


-- ═══════════════════════════════════════════════════════════════
-- MIGRATION 3 — create_orders_table
-- Orders are now created explicitly (by admin/supervisor) before
-- picking can happen. A picker only sees orders assigned to them.
-- ═══════════════════════════════════════════════════════════════

create table if not exists orders (
  id             text primary key,
  customer_name  text,
  address        text,
  pincode        text,
  phone          text,
  priority       text not null default 'Standard',
  method         text not null default 'Single',
  items          jsonb not null default '[]',
  assigned_picker text,
  status         text not null default 'unassigned' check (status in ('unassigned','assigned','picked','cancelled')),
  notes          text,
  created_by     text,
  created_at     timestamptz not null default now(),
  assigned_at    timestamptz,
  picked_task_id text
);

create index if not exists idx_orders_status on orders(status);
create index if not exists idx_orders_assigned_picker on orders(assigned_picker);

alter table orders enable row level security;

drop policy if exists "anon full access" on orders;
create policy "anon full access" on orders
  for all to anon, authenticated using (true) with check (true);

do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and tablename = 'orders'
  ) then
    alter publication supabase_realtime add table orders;
  end if;
end $$;


-- ═══════════════════════════════════════════════════════════════
-- MIGRATION 4 — create_expected_shipments_table
-- Inbound tally: log what's expected to arrive (ASN + SKU quantities)
-- before the truck shows up. When a GRN is created against a matching
-- ASN, the app reconciles expected vs actually-received quantities
-- automatically and flags shortages/overages.
-- ═══════════════════════════════════════════════════════════════

create table if not exists expected_shipments (
  id               text primary key,   -- ASN / PO reference
  vendor           text,
  carrier          t