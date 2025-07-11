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

if (supabaseUrl && supabaseKey) {
  console.log('Supabase environment variables found');
  window.supabaseClient = createClient(supabaseUrl, supabaseKey);
} else {
  console.warn('Supabase environment variables missing. Please connect to Supabase.');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);