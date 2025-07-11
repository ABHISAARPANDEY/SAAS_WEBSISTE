/*
  # Create admins table

  1. New Tables
    - `admins`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `email` (text, not null)
      - `role` (text, not null)
      - `created_at` (timestamptz)
  2. Security
    - Enable RLS on `admins` table
    - Add policy for authenticated users to read their own admin record
*/

CREATE TABLE IF NOT EXISTS admins (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  email text NOT NULL,
  role text NOT NULL DEFAULT 'admin',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE admins ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view their own record"
  ON admins
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can update their own record"
  ON admins
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);