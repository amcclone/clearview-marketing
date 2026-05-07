# clearview-marketing

Galvern marketing site — landing page + beta waitlist capture.

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

Schema for `beta_waitlist` lives in the main [clearview](https://github.com/amcclone/clearview) repo at `supabase/migrations/022_beta_waitlist.sql`. Apply it from there in the Supabase SQL editor. This repo is a frontend consumer and does not own schema.

## Env Vars (set in Vercel dashboard too)
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
