# clearview-marketing

ClearView marketing site — landing page + beta waitlist capture.

**Live:** TBD (Vercel)
**Main app:** [clearview](https://github.com/amcclone/clearview)

## Stack
- Vite + React + TypeScript + Tailwind CSS
- Supabase (shared project with main app — `beta_waitlist` table)
- Vercel (auto-deploy on push to main)

## Setup

1. Copy env: `cp .env.example .env.local` and fill in Supabase credentials
2. Install: `npm install`
3. Dev: `npm run dev`

## Supabase Migration

Run `supabase/migrations/001_beta_waitlist.sql` in the Supabase SQL editor to create the waitlist table.

## Env Vars (set in Vercel dashboard too)
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
