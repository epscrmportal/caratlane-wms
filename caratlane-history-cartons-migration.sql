-- Adds the columns needed to persist GRN receiving details (ASN, carrier,
-- vehicle, number of cartons) on the "history" table. These were being
-- captured on the GRN creation form but silently dropped on save because
-- the columns didn't exist yet — this is why "No. of Cartons" always showed
-- as N/A on printed GRNs. Once this migration runs, new GRNs will save and
-- display the carton count correctly (needed for monthly billing).

alter table history add column if not exists asn text;
alter table history add column if not exists carrier text;
alter table history add column if not exists vehicle text;
alter table history add column if not exists cartons integer;

-- Sanity check — should show the new columns with no errors
select column_name, data_type from information_schema.columns
where table_name = 'history' and column_name in ('asn','carrier','vehicle','cartons');
