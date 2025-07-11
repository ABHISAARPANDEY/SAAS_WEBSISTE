import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, Eye, EyeOff, Shield, AlertCircle, Loader, Key } from 'lucide-react';
import { signInAdmin, getAdminSession } from '../../utils/supabaseClient';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated
    const checkAuth = async () => {
      const { success, session } = await getAdminSession();
      if (success && session) {
        navigate('/admin/dashboard');
      }
    };
    
    checkAuth();
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(''); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(''); 

    // Authenticate with Supabase
    try {
      console.log('Attempting to sign in with:', formData.email);
      const result = await signInAdmin(formData.email, formData.password);
      console.log('Sign in result:', result);
      
      if (result.success) {
        window.scrollTo(0, 0);
        navigate('/admin/dashboard');
      } else {
        setError(result.error || 'Invalid credentials. Please use the demo credentials below.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred during login. Please try the demo credentials below.');
    } finally {
      setIsLoading(false);
    }
  };

  // Use demo credentials for testing
  const useDemoCredentials = () => {
    setFormData({
      email: 'admin@saasagency.com',
      password: 'admin123'
    });
  };

  return (
    <div className="min-h-screen bg-dark-primary flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-green/20" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Login Card */}
        <div className="bg-dark-secondary backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-dark">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 bg-dark-tertiary border border-neon-green rounded-2xl flex items-center justify-center mx-auto mb-6 pulse-neon"
            >
              <Key className="w-10 h-10 text-neon-green" />
            </motion.div>
            
            <h1 className="text-3xl font-orbitron font-bold text-text-primary mb-2">Admin Portal</h1>
            <p className="text-text-secondary">Secure access to dashboard</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-dark-tertiary border border-neon-pink/30 rounded-xl p-4 flex items-center gap-3"
              >
                <AlertCircle className="w-5 h-5 text-neon-pink flex-shrink-0" />
                <span className="text-neon-pink text-sm">{error}</span>
              </motion.div>
            )}

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-dark-tertiary border border-dark rounded-xl text-text-primary placeholder-text-secondary focus:ring-2 focus:ring-neon-green focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-12 pr-12 py-4 bg-dark-tertiary border border-dark rounded-xl text-text-primary placeholder-text-secondary focus:ring-2 focus:ring-neon-green focus:border-transparent transition-all duration-300"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-secondary hover:text-text-primary transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 rounded-xl font-orbitron font-semibold text-lg transition-all duration-300 ${
                isLoading
                  ? 'bg-dark-tertiary text-text-secondary cursor-not-allowed border border-dark'
                  : 'btn-neon hover:shadow-lg'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <Loader className="w-5 h-5 animate-spin text-dark-primary" />
                  Signing In...
                </div>
              ) : (
                'Sign In'
              )}
            </motion.button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-8 p-4 bg-dark-tertiary rounded-xl border border-dark">
            <p className="text-sm text-text-primary mb-2 font-medium">Demo Credentials:</p>
            <div className="text-xs text-text-secondary space-y-1">
              <p>Email: admin@saasagency.com</p>
              <p>Password: admin123</p>
            </div>
            <button
              onClick={useDemoCredentials}
              className="w-full mt-3 px-4 py-2 bg-dark-primary border border-neon-cyan text-neon-cyan rounded-lg text-sm hover:bg-dark-primary/80 transition-colors"
            >
              Use Demo Credentials
            </button>
          </div>
        </div>

        {/* Back to Website */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate('/')}
            className="text-text-secondary hover:text-neon-green transition-colors text-sm"
          >
            ← Back to Website
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;