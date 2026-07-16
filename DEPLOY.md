# CaratLane WMS — Deployment Notes

## What's in this folder

- **`index.html`** — the entire app. This is the only file that actually gets deployed and loaded by the browser; all CSS and JS are inlined in it.
- `app.js`, `api.js`, `config.js`, `styles.css` — source mirrors of the same logic, kept for readability and diffing. They are **not** loaded by `index.html` (no `<script src="...">` tags reference them) — editing them alone won't change app behavior. If you edit the app, edit `index.html`.
- `supabase-migrations.sql` — the full database schema as SQL, in five migrations (stock reservations, packing claims + QC photo, orders table, expected shipments / inbound tally, packer column on history). Already applied to the live Supabase project; keep this file so the schema is reproducible if you ever spin up a new project.

## Deploying to git + Vercel

1. Push this folder's contents to your git repo (replace the existing files).
2. In Vercel, no build step is needed — it's a static site. Framework preset: "Other", output directory: `.` (or wherever `index.html` lives in the repo).
3. Vercel will serve `index.html` directly. No environment variables needed — the Supabase URL and anon key are already inlined in `index.html` (and mirrored in `config.js`).

## Database (Supabase)

The live project (`lqpqsrdxcxefxvobmnjc`) already has everything applied. If you ever need to point this app at a **new** Supabase project:

1. Create the project in Supabase.
2. Run `supabase-migrations.sql` once in the SQL Editor (top to bottom) — it also assumes the base tables from the original build (`inventory`, `history`, `packing_queue`, `user_profiles`, `audit_log`, `skus`, `inventory_counts`, `inventory_snapshots`) already exist.
3. Update `SUPA_URL` and `SUPA_KEY` in `index.html` (search for `SUPA_URL`) and in `config.js` to point at the new project.

Note on security: every table uses "allow all" RLS policies for the `anon` role — this is intentional for this app (the anon key functions as a shared app password, not a public API key), not a bug to fix.

## Roles

`admin`, `supervisor`, `picker`, `packer`, `viewer` — set per-user in the `user_profiles` table (or via the in-app Users page if you're an admin). Admin/supervisor create and assign orders; pickers only see orders assigned to them.

## Optional manual step

Supabase's built-in leaked-password protection (checks new passwords against HaveIBeenPwned) is off by default and isn't controllable via the tools used to build this — turn it on yourself in Supaba