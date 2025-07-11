/*
  # Fix quote_requests table

  1. Ensure Table Exists
    - `quote_requests`
      - `id` (uuid, primary key)
      - `full_name` (text, not null)
      - `email` (text, not null)
      - `phone_number` (text, not null)
      - `company_name` (text)
      - `requirements` (text, not null)
      - `created_at` (timestamptz)
      - `status` (text, default 'pending')
  2. Security
    - Enable RLS on `quote_requests` table
    - Add policy for public to insert quote requests
    - Add policy for authenticated users to read/update/delete quote requests
*/

-- Drop the table if it exists to recreate it
DROP TABLE IF EXISTS quote_requests;

-- Create the table
CREATE TABLE quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone_number text NOT NULL,
  company_name text,
  requirements text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

-- Enable Row Level Security
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public to insert quote requests"
  ON quote_requests
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read quote requests"
  ON quote_requests
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to update quote requests"
  ON quote_requests
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to delete quote requests"
  ON quote_requests
  FOR DELETE
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX idx_quote_requests_status ON quote_requests(status);
CREATE INDEX idx_quote_requests_created_at ON quote_requests(created_at);

-- Insert a test record
INSERT INTO quote_requests (full_name, email, phone_number, company_name, requirements, status)
VALUES ('Test User', 'test@example.com', '123-456-7890', 'Test Company', 'This is a test request to verify the database connection.', 'pending');