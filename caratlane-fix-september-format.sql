-- NOT executed by me — run this yourself in the Supabase SQL Editor.
--
-- Correction to my previous attempt at this same fix, which errored with
-- "invalid input syntax for type timestamp with time zone". That script
-- tried to re-parse dispatched_at as a timestamp, but by this point it's
-- already plain display text with no year ("19 Sep, 10:18 am") — not a
-- real timestamp, so it can't be cast as one. This version just does a
-- straightforward text substitution instead: swap " Sep," for " Sept,"
-- wherever it appears, which is exactly what's needed (the day and time
-- portions are already correct — only the month abbreviation was wrong,
-- because Postgres's to_char('Mon') gives the standard 3-letter form,
-- while the browser's en-IN date formatter renders September specifically
-- as the 4-letter "Sept").

-- Preview:
select order_id, dispatched_at as current_value, replace(dispatched_at, ' Sep,', ' Sept,') as corrected_value
from public.history
where type = 'dispatched'
  and dispatched_at ~ '^\d{2} Sep,';

-- Apply:
update public.history
set dispatched_at = replace(dispatched_at, ' Sep,', ' Sept,')
where type = 'dispatched'
  and dispatched_at ~ '^\d{2} Sep,';

-- Verify — should be empty:
select order_id, dispatched_at
from public.history
where type = 'dispatched'
  and dispatched_at ~ '^\d{2} Sep,';
