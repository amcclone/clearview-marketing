-- Migration: beta_waitlist table
-- Run this in Supabase SQL editor or via supabase CLI

create table if not exists public.beta_waitlist (
  id          uuid primary key default gen_random_uuid(),
  email       text not null unique,
  source      text default 'hero',        -- 'hero' or 'bottom'
  created_at  timestamptz default now()
);

-- RLS: allow inserts from anon (public form), no reads from anon
alter table public.beta_waitlist enable row level security;

create policy "Allow public insert"
  on public.beta_waitlist
  for insert
  to anon
  with check (true);

create policy "Allow authenticated read"
  on public.beta_waitlist
  for select
  to authenticated
  using (true);
