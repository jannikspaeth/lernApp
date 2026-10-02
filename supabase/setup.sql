-- Full setup for a fresh Supabase project (run once in the SQL editor).
-- Column names match lib/db.ts.

create table if not exists vocab (
  id uuid primary key default gen_random_uuid(),
  user_id text not null,
  norm_word text not null,
  word text not null,
  translation text not null,
  example text,
  level int not null default 1,
  next_review timestamptz,
  last_reviewed timestamptz,
  review_count int not null default 0,
  added_at timestamptz not null default now(),
  unique (user_id, norm_word)
);
create table if not exists stats (
  user_id text primary key,
  exercises_completed int not null default 0,
  correct_answers int not null default 0,
  total_answers int not null default 0,
  streak int not null default 0,
  last_activity timestamptz,
  exercises_by_type jsonb not null default '{}'::jsonb,
  daily jsonb not null default '{}'::jsonb
);
create table if not exists conjugation ( user_id text primary key, data jsonb not null default '[]'::jsonb );
create table if not exists sentences   ( user_id text primary key, data jsonb not null default '[]'::jsonb );
create table if not exists race        ( id text primary key, data jsonb not null default '{}'::jsonb );
create table if not exists grammar     ( user_id text primary key, data jsonb not null default '[]'::jsonb );

-- Sign-in: one account per profile. name_key = lower-cased name with single spaces.
create table if not exists accounts (
  profile_id text primary key,
  name_key text not null unique,
  password_hash text not null,
  created_at timestamptz not null default now()
);

-- Lock the tables against the public (anon) API; the app uses the service_role
-- key server-side, which bypasses RLS.
alter table vocab       enable row level security;
alter table stats       enable row level security;
alter table conjugation enable row level security;
alter table sentences   enable row level security;
alter table race        enable row level security;
alter table grammar     enable row level security;
alter table accounts    enable row level security;
