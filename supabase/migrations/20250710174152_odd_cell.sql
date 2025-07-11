/*
  # Create services table

  1. New Tables
    - `services`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `description` (text)
      - `icon` (text)
      - `category` (text)
      - `created_at` (timestamptz)
  2. Security
    - Enable RLS on `services` table
    - Add policy for authenticated users to read services
*/

CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  icon text,
  category text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Services are viewable by everyone"
  ON services
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Services are insertable by authenticated users only"
  ON services
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Services are updatable by authenticated users only"
  ON services
  FOR UPDATE
  TO authenticated
  USING (true);

-- Insert initial services
INSERT INTO services (name, description, category, icon) VALUES
('Web Development', 'Modern, responsive web applications built with the latest technologies', 'Development', 'Globe'),
('Mobile App Development', 'Native and cross-platform mobile applications', 'Development', 'Smartphone'),
('Process Automation', 'Streamline operations with intelligent automation solutions', 'Automation', 'Zap'),
('Custom Software Solutions', 'Tailored software development for unique business requirements', 'Development', 'Code'),
('Product Development', 'End-to-end product development from concept to launch', 'Development', 'Lightbulb'),
('Blockchain Integration', 'Secure and transparent blockchain solutions', 'Technology', 'Shield'),
('Digital Transformation', 'Comprehensive digital transformation strategies', 'Strategy', 'TrendingUp'),
('Agentic AI Solutions', 'Intelligent AI agents that automate complex tasks', 'AI', 'Bot');