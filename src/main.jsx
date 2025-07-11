import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { createClient } from '@supabase/supabase-js'; 

// Make Supabase client available globally
window.supabase = { createClient };

// Initialize Supabase client for direct use
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate Supabase credentials before initializing
if (supabaseUrl && supabaseKey && supabaseUrl.includes('.supabase.co') && supabaseKey.length > 20) {
  try {
    console.log('Supabase environment variables found, initializing client');
    window.supabaseClient = createClient(supabaseUrl, supabaseKey);
  } catch (error) {
    console.error('Failed to initialize Supabase client:', error);
    console.warn('Using localStorage fallback for data storage');
  }
} else {
  console.warn('Supabase environment variables missing. Please connect to Supabase.');
  console.warn('Using localStorage fallback for data storage');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);