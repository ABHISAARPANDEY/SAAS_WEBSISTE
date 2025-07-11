import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAdminSession } from '../../utils/supabaseClient';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = React.useState(true);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        setIsChecking(true);
        const { success, session } = await getAdminSession();
        
        if (success && session) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          navigate('/svc-admin');
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
        setIsAuthenticated(false);
        navigate('/svc-admin');
      } finally {
        setIsChecking(false);
      }
    };
    
    checkAuth();
  }, [navigate]);

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-primary">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-neon-green border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-text-secondary">Verifying authentication...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return children;
};

export default ProtectedRoute;