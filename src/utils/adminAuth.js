// Admin authentication utilities

const ADMIN_CREDENTIALS = {
  email: 'admin@saasagency.com',
  password: 'admin123' // In production, this should be hashed
};

const SESSION_KEY = 'admin_session';

export const authenticateAdmin = (email, password) => {
  try {
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      const session = {
        isAuthenticated: true,
        email: email,
        loginTime: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 hours
      };
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      return { success: true, session };
    }
    
    return { success: false, error: 'Invalid credentials' };
  } catch (error) {
    console.error('Authentication error:', error);
    return { success: false, error: 'Authentication failed' };
  }
};

export const isAdminAuthenticated = () => {
  try {
    const session = localStorage.getItem(SESSION_KEY);
    if (!session) return false;
    
    const parsedSession = JSON.parse(session);
    const now = new Date();
    const expiresAt = new Date(parsedSession.expiresAt);
    
    if (now > expiresAt) {
      localStorage.removeItem(SESSION_KEY);
      return false;
    }
    
    return parsedSession.isAuthenticated;
  } catch (error) {
    return false;
  }
};

export const getAdminSession = () => {
  try {
    const session = localStorage.getItem(SESSION_KEY);
    return session ? JSON.parse(session) : null;
  } catch (error) {
    return null;
  }
};

export const logoutAdmin = () => {
  // Clear local storage
  localStorage.removeItem(SESSION_KEY);
};

export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .trim()
    .substring(0, 1000); // Limit length
};