-- OPTIONAL, NOT executed by me — run this yourself in the Supabase SQL Editor.
--
-- Cosmetic-only cleanup. Not required for the fix — I've already patched the
-- app itself so date-based views (the Shree Maruti sheet, etc.) correctly
-- recognize dispatched_at whether it's in the app's own display format
-- ("19 Sep, 04:00 pm") or a raw Postgres timestamp. Order 9139 is a real
-- example: when I fixed its AWB directly via SQL earlier, that script's
-- fallback `now()::text` wrote dispatched_at as
-- "2026-09-19 10:12:04.443835+00" instead of the app's own format — which
-- is what made it silently disappear from the Shree Maruti sheet, and is
-- also why its card on the Dispatch page shows that raw timestamp instead
-- of "19 Sep, ...".
--
-- This script just reformats any such rows to match the app's own style,
-- so they display consistently. It's regex-matched (not order-specific),
-- so it will also pick up any other rows quietly affected the same way by
-- earlier SQL fixes this session (e.g. the 4 Air India orders) without me
-- having to individually check each one.

-- Preview — see exactly which rows would change and what they'd become:
select
  order_id,
  dispatched_at as current_value,
  to_char(dispatched_at::timestamptz, 'DD Mon, HH12:MI ') || lower(to_char(dispatched_at::timestamptz, 'AM')) as new_value
from public.history
where type = 'dispatched'
  and dispatched_at ~ '^\d{4}-\d{2}-\d{2}';

-- Apply:
update public.history
set dispatched_at = to_char(dispatched_at::timestamptz, 'DD Mon, HH12:MI ') || lower(to_char(dispatched_at::timestamptz, 'AM'))
where type = 'dispatched'
  and dispatched_at ~ '^\d{4}-\d{2}-\d{2}';

-- Verify — should be empty (no rows left in the raw format):
select order_id, dispatched_at
from public.history
where type = 'dispatched'
  and dispatched_at ~ '^\d{4}-\d{2}-\d{2}';
