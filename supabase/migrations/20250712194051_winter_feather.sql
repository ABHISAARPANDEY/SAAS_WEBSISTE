/*
  # Add phone verification to quote_requests table

  1. Changes
    - Add `phone_verified` column to `quote_requests` table
    - Default value is false
    - This tracks whether the phone number has been verified
*/

-- Add phone_verified column to quote_requests table
ALTER TABLE quote_requests 
ADD COLUMN IF NOT EXISTS phone_verified boolean DEFAULT false;

-- Update existing records to have phone_verified = false
UPDATE quote_requests
SET phone_verified = false
WHERE phone_verified IS NULL;