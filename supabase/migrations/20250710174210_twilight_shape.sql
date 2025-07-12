/*
  # Create request_services junction table

  1. New Tables
    - `request_services`
      - `id` (uuid, primary key)
      - `request_id` (uuid, references service_requests)
      - `service_id` (uuid, references services)
      - `created_at` (timestamptz)
  2. Security
    - Enable RLS on `request_services` table
    - Add policy for authenticated users to read all request_services
    - Add policy for public users to insert request_services
*/

CREATE TABLE IF NOT EXISTS request_services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  request_id uuid REFERENCES service_requests ON DELETE CASCADE NOT NULL,
  service_id uuid REFERENCES services ON DELETE CASCADE NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(request_id, service_id)
);

ALTER TABLE request_services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Request services are viewable by authenticated users only"
  ON request_services
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Request services are insertable by everyone"
  ON request_services
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create indexes for faster joins
CREATE INDEX idx_request_services_request_id ON request_services(request_id);
CREATE INDEX idx_request_services_service_id ON request_services(service_id);