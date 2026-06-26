-- NCLEX Excellence Academy MVP Database Schema
create table profiles (
  id uuid primary key,
  full_name text,
  email text unique,
  role text default 'student' check (role in ('student','admin','team_leader')),
  exam_type text check (exam_type in ('RN','PN')),
  exam_date date,
  created_at timestamp default now()
);

create table courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  category text,
  is_published boolean default false,
  created_at timestamp default now()
);

create table lessons (
  id uuid primary key default gen_random_uuid(),
  course_id uuid references courses(id) on delete cascade,
  title text not null,
  video_url text,
  pdf_url text,
  content text,
  order_index int default 0
);

create table questions (
  id uuid primary key default gen_random_uuid(),
  topic text not null,
  question_type text not null,
  difficulty text default 'medium',
  stem text not null,
  options jsonb,
  correct_answer jsonb,
  rationale text,
  ngn_case jsonb,
  is_published boolean default false,
  created_at timestamp default now()
);

create table attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  question_id uuid references questions(id) on delete cascade,
  selected_answer jsonb,
  is_correct boolean,
  time_spent_seconds int,
  created_at timestamp default now()
);

create table study_plans (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  title text,
  plan_days jsonb,
  status text default 'active',
  created_at timestamp default now()
);

create table announcements (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  body text not null,
  audience text default 'all',
  created_at timestamp default now()
);

create table payments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  plan text,
  amount numeric,
  status text default 'pending',
  provider_ref text,
  created_at timestamp default now()
);

create table shop_products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  price numeric not null,
  image_url text,
  category text,
  inventory_count int default 0,
  is_published boolean default false,
  created_at timestamp default now()
);

create table shop_orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete set null,
  status text default 'pending',
  subtotal numeric default 0,
  total numeric default 0,
  shipping_address jsonb,
  created_at timestamp default now()
);

create table shop_order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references shop_orders(id) on delete cascade,
  product_id uuid references shop_products(id) on delete set null,
  quantity int default 1,
  unit_price numeric not null,
  created_at timestamp default now()
);
