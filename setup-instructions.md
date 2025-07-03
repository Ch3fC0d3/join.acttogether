# Database Setup Instructions

## 1. Run Database Migrations

You need to run the SQL migrations to create the required tables. In your Supabase dashboard:

1. Go to **SQL Editor** (which I can see is open in your screenshot)
2. Copy and paste each migration file content from your `supabase/migrations/` folder
3. Run them in order:

### First Migration: `20250702182016_fragrant_meadow.sql`
```sql
/*
  # Stripe Integration Schema

  1. New Tables
    - `stripe_customers`: Links Supabase users to Stripe customers
      - Includes `user_id` (references `auth.users`)
      - Stores Stripe `customer_id`
      - Implements soft delete

    - `stripe_subscriptions`: Manages subscription data
      - Tracks subscription status, periods, and payment details
      - Links to `stripe_customers` via `customer_id`
      - Custom enum type for subscription status
      - Implements soft delete

    - `stripe_orders`: Stores order/purchase information
      - Records checkout sessions and payment intents
      - Tracks payment amounts and status
      - Custom enum type for order status
      - Implements soft delete

  2. Views
    - `stripe_user_subscriptions`: Secure view for user subscription data
      - Joins customers and subscriptions
      - Filtered by authenticated user

    - `stripe_user_orders`: Secure view for user order history
      - Joins customers and orders
      - Filtered by authenticated user

  3. Security
    - Enables Row Level Security (RLS) on all tables
    - Implements policies for authenticated users to view their own data
*/

CREATE TABLE IF NOT EXISTS stripe_customers (
  id bigint primary key generated always as identity,
  user_id uuid references auth.users(id) not null unique,
  customer_id text not null unique,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  deleted_at timestamp with time zone default null
);

ALTER TABLE stripe_customers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own customer data"
    ON stripe_customers
    FOR SELECT
    TO authenticated
    USING (user_id = auth.uid() AND deleted_at IS NULL);

CREATE TYPE stripe_subscription_status AS ENUM (
    'not_started',
    'incomplete',
    'incomplete_expired',
    'trialing',
    'active',
    'past_due',
    'canceled',
    'unpaid',
    'paused'
);

CREATE TABLE IF NOT EXISTS stripe_subscriptions (
  id bigint primary key generated always as identity,
  customer_id text unique not null,
  subscription_id text default null,
  price_id text default null,
  current_period_start bigint default null,
  current_period_end bigint default null,
  cancel_at_period_end boolean default false,
  payment_method_brand text default null,
  payment_method_last4 text default null,
  status stripe_subscription_status not null,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  deleted_at timestamp with time zone default null
);

ALTER TABLE stripe_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own subscription data"
    ON stripe_subscriptions
    FOR SELECT
    TO authenticated
    USING (
        customer_id IN (
            SELECT customer_id
            FROM stripe_customers
            WHERE user_id = auth.uid() AND deleted_at IS NULL
        )
        AND deleted_at IS NULL
    );

CREATE TYPE stripe_order_status AS ENUM (
    'pending',
    'completed',
    'canceled'
);

CREATE TABLE IF NOT EXISTS stripe_orders (
    id bigint primary key generated always as identity,
    checkout_session_id text not null,
    payment_intent_id text not null,
    customer_id text not null,
    amount_subtotal bigint not null,
    amount_total bigint not null,
    currency text not null,
    payment_status text not null,
    status stripe_order_status not null default 'pending',
    created_at timestamp with time zone default now(),
    updated_at timestamp with time zone default now(),
    deleted_at timestamp with time zone default null
);

ALTER TABLE stripe_orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own order data"
    ON stripe_orders
    FOR SELECT
    TO authenticated
    USING (
        customer_id IN (
            SELECT customer_id
            FROM stripe_customers
            WHERE user_id = auth.uid() AND deleted_at IS NULL
        )
        AND deleted_at IS NULL
    );

-- View for user subscriptions
CREATE VIEW stripe_user_subscriptions WITH (security_invoker = true) AS
SELECT
    c.customer_id,
    s.subscription_id,
    s.status as subscription_status,
    s.price_id,
    s.current_period_start,
    s.current_period_end,
    s.cancel_at_period_end,
    s.payment_method_brand,
    s.payment_method_last4
FROM stripe_customers c
LEFT JOIN stripe_subscriptions s ON c.customer_id = s.customer_id
WHERE c.user_id = auth.uid()
AND c.deleted_at IS NULL
AND s.deleted_at IS NULL;

GRANT SELECT ON stripe_user_subscriptions TO authenticated;

-- View for user orders
CREATE VIEW stripe_user_orders WITH (security_invoker) AS
SELECT
    c.customer_id,
    o.id as order_id,
    o.checkout_session_id,
    o.payment_intent_id,
    o.amount_subtotal,
    o.amount_total,
    o.currency,
    o.payment_status,
    o.status as order_status,
    o.created_at as order_date
FROM stripe_customers c
LEFT JOIN stripe_orders o ON c.customer_id = o.customer_id
WHERE c.user_id = auth.uid()
AND c.deleted_at IS NULL
AND o.deleted_at IS NULL;
```

### Second Migration: `20250702184021_dawn_plain.sql`
```sql
/*
  # Add missing RLS policies for Stripe tables

  1. Security Updates
    - Add INSERT policy for `stripe_customers` table to allow users to create their own customer records
    - Add UPDATE policy for `stripe_customers` table to allow users to update their own customer records
    - Add INSERT policy for `stripe_subscriptions` table to allow users to create their own subscription records
    - Add UPDATE policy for `stripe_subscriptions` table to allow users to update their own subscription records

  2. Policy Details
    - All policies ensure users can only access/modify their own data
    - INSERT policies use `with check` to validate ownership during creation
    - UPDATE policies use `using` to validate ownership during modification
    - Subscription policies link to customer records via customer_id to maintain data integrity
*/

-- Add INSERT policy for stripe_customers
CREATE POLICY "Users can insert their own customer data"
  ON stripe_customers
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Add UPDATE policy for stripe_customers
CREATE POLICY "Users can update their own customer data"
  ON stripe_customers
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id AND deleted_at IS NULL);

-- Add INSERT policy for stripe_subscriptions
CREATE POLICY "Users can insert their own subscription data"
  ON stripe_subscriptions
  FOR INSERT
  TO authenticated
  WITH CHECK (
    customer_id IN (
      SELECT customer_id 
      FROM stripe_customers 
      WHERE user_id = auth.uid() AND deleted_at IS NULL
    )
  );

-- Add UPDATE policy for stripe_subscriptions
CREATE POLICY "Users can update their own subscription data"
  ON stripe_subscriptions
  FOR UPDATE
  TO authenticated
  USING (
    customer_id IN (
      SELECT customer_id 
      FROM stripe_customers 
      WHERE user_id = auth.uid() AND deleted_at IS NULL
    ) AND deleted_at IS NULL
  );
```

### Third Migration: `20250702231608_lingering_thunder.sql`
```sql
/*
  # Newsletter Signup System

  1. New Tables
    - `newsletter_subscribers`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `first_name` (text, optional)
      - `last_name` (text, optional)
      - `status` (enum: active, unsubscribed, bounced)
      - `source` (text, tracks where they signed up)
      - `subscribed_at` (timestamp)
      - `unsubscribed_at` (timestamp, nullable)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `newsletter_subscribers` table
    - Add policies for public signup and admin management
*/

-- Create enum for subscriber status
CREATE TYPE subscriber_status AS ENUM (
    'active',
    'unsubscribed',
    'bounced'
);

-- Create newsletter subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    email text UNIQUE NOT NULL,
    first_name text DEFAULT NULL,
    last_name text DEFAULT NULL,
    status subscriber_status NOT NULL DEFAULT 'active',
    source text DEFAULT 'website',
    subscribed_at timestamptz DEFAULT now(),
    unsubscribed_at timestamptz DEFAULT NULL,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for public signup)
CREATE POLICY "Anyone can subscribe to newsletter"
    ON newsletter_subscribers
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Allow subscribers to update their own subscription (for unsubscribe)
CREATE POLICY "Subscribers can update their own subscription"
    ON newsletter_subscribers
    FOR UPDATE
    TO anon, authenticated
    USING (true)
    WITH CHECK (true);

-- Only authenticated users can view subscriber data (for admin purposes)
CREATE POLICY "Authenticated users can view subscribers"
    ON newsletter_subscribers
    FOR SELECT
    TO authenticated
    USING (true);

-- Create index for email lookups
CREATE INDEX IF NOT EXISTS newsletter_subscribers_email_idx ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS newsletter_subscribers_status_idx ON newsletter_subscribers(status);
```

## 2. Set Up Environment Variables

Create a `.env` file in your project root with your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

You can find these values in your Supabase dashboard under Settings > API.

## 3. Install Dependencies and Run

```bash
npm install
npm run dev
```

After running these migrations, you should see the tables appear in your Supabase dashboard under the "Tables" section.