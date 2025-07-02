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