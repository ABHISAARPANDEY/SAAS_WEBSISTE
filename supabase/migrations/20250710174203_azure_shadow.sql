/*
  # Create service requests table

  1. New Tables
    - `service_requests`
      - `id` (uuid, primary key)
      - `full_name` (text, not null)
      - `email` (text, not null)
      - `phone` (text, not null)
      - `company` (text)
      - `industry` (text, not null)
      - `project_description` (text, not null)
      - `budget` (text)
      - `timeline` (text)
      - `status` (text, not null)
      - `tracking_number` (text, not null)
      - `notes` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
  2. Security
    - Enable RLS on `service_requests` table
    - Add policy for authenticated users to read all service requests
    - Add policy for public users to insert service requests
*/

CREATE TABLE IF NOT EXISTS service_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text,
  industry text NOT NULL,
  project_description text NOT NULL,
  budget text,
  timeline text,
  status text NOT NULL DEFAULT 'pending',
  tracking_number text NOT NULL,
  notes text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE service_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service requests are viewable by authenticated users only"
  ON service_requests
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Service requests are insertable by everyone"
  ON service_requests
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Service requests are updatable by authenticated users only"
  ON service_requests
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create index for faster queries
CREATE INDEX idx_service_requests_status ON service_requests(status);
CREATE INDEX idx_service_requests_created_at ON service_requests(created_at);