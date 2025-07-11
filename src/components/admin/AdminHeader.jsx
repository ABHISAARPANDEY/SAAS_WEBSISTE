import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, LogOut, User } from 'lucide-react';
import { signOutAdmin } from '../../utils/supabaseClient';
import { useNavigate } from 'react-router-dom';

const AdminHeader = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Get user email from localStorage or session
    const user = JSON.parse(localStorage.getItem('sb-mqjrnalmqgvxqpgkjycp-auth-token') || '{}');
    setUserEmail(user?.user?.email || 'Administrator');
  }, []);

  const handleLogout = () => {
    signOutAdmin()
      .then(() => {
        navigate('/svc-admin');
      })
      .catch(error => {
        console.error('Logout error:', error);
      });
  };

  return (
    <header className="bg-dark-secondary shadow-sm border-b border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-dark-tertiary border border-neon-green rounded-lg flex items-center justify-center pulse-neon">
              <Shield className="w-6 h-6 text-neon-green" />
            </div>
            <div>
              <h1 className="text-xl font-orbitron font-bold text-text-primary">Admin Dashboard</h1>
              <p className="text-sm text-text-secondary">SaaS Agency</p>
            </div>
          </motion.div>

          {/* User Info and Logout */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            {/* User Info */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-dark-tertiary border border-neon-cyan flex items-center justify-center">
                <User className="w-4 h-4 text-neon-cyan" />
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-text-primary">Administrator</p>
                <p className="text-xs text-text-secondary">{userEmail}</p>
              </div>
            </div>

            {/* Logout Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-neon-pink hover:bg-dark-tertiary rounded-lg transition-all duration-200 border border-neon-pink"
            >
              <LogOut className="w-4 h-4 text-neon-pink" />
              <span className="hidden sm:inline">Logout</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;