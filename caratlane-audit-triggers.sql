-- NOT executed by me — this is a migration for you to run yourself in the
-- Supabase SQL Editor. It only CREATES a new audit table, a trigger
-- function, and triggers; it does not touch any existing data.
--
-- WHY THIS EXISTS
-- Everything added so far (order_events entries for pack weight, dispatch
-- confirmation, order edits) relies on the app's JavaScript remembering to
-- log a backup copy at the exact right moment in each code path. That's
-- good, but it only covers the specific actions I've already found and
-- fixed — it wouldn't catch a future code change I haven't touched, a
-- manual edit made directly in the Supabase dashboard, or a bug in a path
-- I don't know about yet.
--
-- This migration adds a second, independent safety net at the DATABASE
-- level: a trigger that fires automatically on every UPDATE or DELETE to
-- the tables that matter most (history, orders, packing_queue, inventory)
-- and saves a full copy of the row as it was BEFORE the change — no
-- matter what caused the change. It's the strongest form of redundancy
-- here because it doesn't depend on any app code being correct.
--
-- WHAT GETS AUDITED
--   history        UPDATE  — catches the pack→dispatch mutation-in-place
--                             (and anything else that ever changes a
--                             history row), so the pre-dispatch state
--                             (box dims/weight etc.) is always recoverable.
--   history        DELETE  — catches "Clear All Data" wiping this table.
--   orders         UPDATE  — catches order edits, status changes,
--                             assignment changes — anything that
--                             overwrites an orders row.
--   packing_queue  DELETE  — catches both normal per-task cleanup (a
--                             free extra copy of the picked items/claim
--                             state right before it's removed) and
--                             "Clear All Data".
--   inventory      DELETE  — catches "Clear All Data" wiping stock
--                             levels. (Not UPDATE — inventory.qty changes
--                             on every single pick/receive, so auditing
--                             updates there would generate huge volume
--                             for little benefit; the existing Stock
--                             Tally feature already checks qty
--                             consistency.)
--
-- HOW TO USE IT LATER
-- The old row is stored as JSON in old_row. To find what a specific
-- history/order/packing_queue row looked like before it changed:
--   select * from wms_audit_log
--   where table_name = 'history' and old_row->>'id' = 'PKD-XXXXX'
--   order by changed_at desc;
--
--   select * from wms_audit_log
--   where table_name = 'orders' and old_row->>'id' = '000123'
--   order by changed_at desc;
--
-- LIMITATION — worth knowing
-- Postgres triggers see the database role that made the change, not the
-- app's own "currentProfile" concept — this app connects with a shared
-- anon/authenticated key, so there's no way for the trigger to record
-- WHICH staff member made a given change. That's still only available
-- from the app-level order_events/audit_log entries (where the app itself
-- knows who's logged in). Use this trigger-based log for "what did the
-- data used to say", and the app's own audit trail for "who did it".

create table if not exists wms_audit_log (
  id          bigint generated always as identity primary key,
  table_name  text not null,
  op          text not null,            -- 'UPDATE' or 'DELETE'
  changed_at  timestamptz not null default now(),
  old_row     jsonb,
  new_row     jsonb                      -- null for DELETE
);

create index if not exists idx_wms_audit_log_table_time on wms_audit_log(table_name, changed_at desc);
create index if not exists idx_wms_audit_log_old_row on wms_audit_log using gin (old_row);

alter table wms_audit_log enable row level security;

drop policy if exists "anon full access" on wms_audit_log;
create policy "anon full access" on wms_audit_log
  for all to anon, authenticated using (true) with check (true);

create or replace function fn_wms_audit_capture() returns trigger as $$
begin
  if (TG_OP = 'DELETE') then
    insert into wms_audit_log(table_name, op, old_row, new_row)
      values (TG_TABLE_NAME, TG_OP, to_jsonb(OLD), null);
    return OLD;
  else
    insert into wms_audit_log(table_name, op, old_row, new_row)
      values (TG_TABLE_NAME, TG_OP, to_jsonb(OLD), to_jsonb(NEW));
    return NEW;
  end if;
end;
$$ language plpgsql;

drop trigger if exists trg_audit_history_update on history;
create trigger trg_audit_history_update
  after update on history
  for each row execute function fn_wms_audit_capture();

drop trigger if exists trg_audit_history_delete on history;
create trigger trg_audit_history_delete
  after delete on history
  for each row execute function fn_wms_audit_capture();

drop trigger if exists trg_audit_orders_update on orders;
create trigger trg_audit_orders_update
  after update on orders
  for each row execute function fn_wms_audit_capture();

drop trigger if exists trg_audit_packing_queue_delete on packing_queue;
create trigger trg_audit_packing_queue_delete
  after delete on packing_queue
  for each row execute function fn_wms_audit_capture();

drop trigger if exists trg_audit_inventory_delete on inventory;
create trigger trg_audit_inventory_delete
  after delete on inventory
  for each row execute function fn_wms_audit_capture();

-- VERIFY (run after the above) — should list 5 triggers:
-- select trigger_name, event_object_table, action_timing, event_manipulation
-- from information_schema.triggers
-- where trigger_name like 'trg_audit_%'
-- order by event_object_table, event_manipulation;
