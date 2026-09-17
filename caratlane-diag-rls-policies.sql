-- Diagnostic only — no writes. Shows every RLS policy currently on
-- packing_queue and history, so we can see if INSERT/UPDATE is
-- unintentionally restricted for the picker role.
select schemaname, tablename, policyname, cmd, roles, qual, with_check
from pg_policies
where tablename in ('packing_queue','history')
order by tablename, cmd;
