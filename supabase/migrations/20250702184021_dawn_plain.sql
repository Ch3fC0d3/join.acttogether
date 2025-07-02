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