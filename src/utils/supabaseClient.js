import { createClient } from '@supabase/supabase-js';

// Get Supabase URL and key from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create Supabase client
export const supabase = supabaseUrl && supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : null;

// Debug function to check database connection
export const checkDatabaseConnection = async () => {
  try {
    console.log('Checking database connection...');
    
    if (!supabase) {
      console.error('Supabase client not initialized');
      return { 
        success: false, 
        error: 'Database client not initialized. Please connect to Supabase.' 
      };
    }
    
    const { data, error } = await supabase
      .from('quote_requests')
      .select('id')
      .limit(1);
    
    if (error) {
      console.error('Database connection error:', error);
      return { 
        success: false, 
        error: error.message 
      };
    }
    
    console.log('Database connection successful:', data);
    return { 
      success: true, 
      data 
    };
  } catch (error) {
    console.error('Database connection check failed:', error);
    return { 
      success: false, 
      error: error.message 
    };
  }
};

// Analytics functions
export const getAnalytics = async () => {
  try {
    if (!supabase) {
      console.error('Supabase client not initialized');
      return {
        weeklyTrends: [],
        totalRequests: 0,
        pendingRequests: 0,
        completedRequests: 0,
        conversionRate: 0
      };
    }
    
    const { data: requests, error } = await supabase
      .from('quote_requests')
      .select('*');
    
    if (error) {
      console.error('Error fetching analytics data:', error);
      throw error;
    }
    
    // Calculate analytics from requests
    const totalRequests = requests?.length || 0;
    const pendingRequests = requests?.filter(req => req.status === 'pending').length || 0;
    const completedRequests = requests?.filter(req => req.status === 'completed').length || 0;
    
    // Get requests from last 7 days
    const now = new Date();
    const last7Days = [];
    
    for (let i = 6; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      
      const dayRequests = requests?.filter(req => 
        req.created_at.split('T')[0] === dateStr
      ) || [];
      
      last7Days.push({
        date: dateStr,
        requests: dayRequests.length,
        conversions: dayRequests.filter(req => req.status === 'completed').length
      });
    }
    
    return {
      weeklyTrends: last7Days,
      totalRequests,
      pendingRequests,
      completedRequests,
      conversionRate: totalRequests > 0 
        ? Math.round((completedRequests / totalRequests) * 100)
        : 0
    };
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return {
      weeklyTrends: [],
      totalRequests: 0,
      pendingRequests: 0,
      completedRequests: 0,
      conversionRate: 0
    };
  }
};

// Quote request functions
export const getQuoteRequests = async () => {
  try {
    if (!supabase) {
      console.error('Supabase client not initialized - using fallback');
      // Fallback to localStorage if Supabase is not available
      return JSON.parse(localStorage.getItem('quote_requests') || '[]');
    }
    
    console.log('Fetching quote requests...');
    const { data, error } = await supabase
      .from('quote_requests')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching quote requests:', error);
      throw error;
    }
    
    console.log('Quote requests fetched successfully:', data?.length || 0);
    return data || [];
  } catch (error) {
    console.error('Error fetching quote requests:', error);
    return [];
  }
};

export const submitQuoteRequest = async (formData) => {
  try {
    if (!supabase) {
      console.error('Supabase client not initialized - using fallback');
      // Fallback to localStorage if Supabase is not available
      const requests = JSON.parse(localStorage.getItem('quote_requests') || '[]');
      const newRequest = {
        ...formData,
        id: crypto.randomUUID(),
        created_at: new Date().toISOString(),
        status: 'pending'
      };
      requests.unshift(newRequest);
      localStorage.setItem('quote_requests', JSON.stringify(requests));
      return { success: true, data: newRequest };
    }
    
    console.log('Submitting quote request:', formData);
    const { data, error } = await supabase
      .from('quote_requests')
      .insert([formData])
      .select();
    
    if (error) {
      console.error('Error submitting quote request:', error);
      throw error;
    }
    
    console.log('Quote request submitted successfully:', data);
    return { success: true, data: data[0] };
  } catch (error) {
    console.error('Error submitting quote request:', error);
    return { success: false, error: error.message };
  }
};

export const updateQuoteStatus = async (id, status) => {
  try {
    if (!supabase) {
      return { success: false, error: 'Database connection error' };
    }
    
    const { data, error } = await supabase
      .from('quote_requests')
      .update({ status })
      .eq('id', id)
      .select();
    
    if (error) throw error;
    return { success: true, data: data[0] };
  } catch (error) {
    console.error('Error updating quote status:', error);
    return { success: false, error: error.message };
  }
};

export const deleteQuoteRequest = async (id) => {
  try {
    if (!supabase) {
      return { success: false, error: 'Database connection error' };
    }
    
    const { error } = await supabase
      .from('quote_requests')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Error deleting quote request:', error);
    return { success: false, error: error.message };
  }
};

// Admin authentication
export const signInAdmin = async (email, password) => {
  try {
    if (!supabase) {
      return { success: false, error: 'Database connection error' };
    }
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    
    if (error) throw error;
    return { success: true, user: data.user, session: data.session };
  } catch (error) {
    console.error('Error signing in:', error);
    return { success: false, error: error.message };
  }
};

export const signOutAdmin = async () => {
  try {
    if (!supabase) {
      return { success: false, error: 'Database connection error' };
    }
    
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Error signing out:', error);
    return { success: false, error: error.message };
  }
};

export const getAdminSession = async () => {
  try {
    if (!supabase) {
      return { success: false, error: 'Database connection error' };
    }
    
    const { data, error } = await supabase.auth.getSession();
    if (error) throw error;
    return { success: true, session: data.session };
  } catch (error) {
    console.error('Error getting session:', error);
    return { success: false, error: error.message };
  }
};

// Subscribe to real-time updates
export const subscribeToQuoteRequests = (callback) => {
  if (!supabase) {
    console.error('Supabase client not initialized');
    return () => {}; // Return empty unsubscribe function
  }
  
  const subscription = supabase
    .channel('quote_requests_changes')
    .on('postgres_changes', { 
      event: '*', 
      schema: 'public', 
      table: 'quote_requests' 
    }, payload => {
      callback(payload);
    })
    .subscribe();
  
  return () => {
    supabase.removeChannel(subscription);
  };
};