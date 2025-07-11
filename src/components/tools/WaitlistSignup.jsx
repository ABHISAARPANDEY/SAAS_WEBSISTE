import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail, 
  Bell, 
  Check, 
  X, 
  Clock, 
  Star,
  Users,
  Calendar,
  Zap
} from 'lucide-react';

const WaitlistSignup = ({ tool, isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setError('');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Save to localStorage (in production, this would be an API call)
    const waitlistData = JSON.parse(localStorage.getItem('tool-waitlist') || '{}');
    if (!waitlistData[tool.id]) {
      waitlistData[tool.id] = [];
    }
    waitlistData[tool.id].push({
      email,
      timestamp: new Date().toISOString(),
      toolName: tool.name
    });
    localStorage.setItem('tool-waitlist', JSON.stringify(waitlistData));

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const getEstimatedRelease = (toolId) => {
    const releases = {
      'ai-chat': 'Q2 2024',
      'code-generator': 'Q1 2024',
      'content-writer': 'Q2 2024',
      'background-remover': 'Q1 2024'
    };
    return releases[toolId] || 'Coming Soon';
  };

  const getWaitlistCount = (toolId) => {
    const waitlistData = JSON.parse(localStorage.getItem('tool-waitlist') || '{}');
    return waitlistData[toolId]?.length || Math.floor(Math.random() * 500) + 100;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-dark-secondary rounded-2xl max-w-md w-full shadow-2xl border border-dark"
          onClick={(e) => e.stopPropagation()}
        >
          {!isSubmitted ? (
            <div className="p-8 bg-dark-primary">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl border border-${tool.neonColor || 'neon-green'} flex items-center justify-center pulse-neon`}>
                    <tool.icon className={`w-6 h-6 text-${tool.neonColor || 'neon-green'}`} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold font-orbitron text-text-primary">{tool.name}</h2>
                    <p className="text-text-secondary">Join the waitlist</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-dark-tertiary rounded-full transition-colors text-text-secondary hover:text-neon-pink"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tool Status */}
              <div className="mb-6 p-4 bg-dark-tertiary rounded-xl border border-neon-cyan/30">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-neon-cyan" />
                  <span className="font-medium text-neon-cyan">Coming Soon</span>
                </div>
                <p className="text-text-secondary text-sm">
                  This tool is currently under development. Join our waitlist to be notified when it's ready!
                </p>
              </div>

              {/* Waitlist Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-dark-tertiary rounded-lg border border-dark">
                  <div className="text-2xl font-bold text-neon-green">{getWaitlistCount(tool.id)}</div>
                  <div className="text-sm text-text-secondary flex items-center justify-center gap-1">
                    <Users className="w-3 h-3 text-neon-green" />
                    On waitlist
                  </div>
                </div>
                <div className="text-center p-3 bg-dark-tertiary rounded-lg border border-dark">
                  <div className="text-2xl font-bold text-neon-cyan">{getEstimatedRelease(tool.id)}</div>
                  <div className="text-sm text-text-secondary flex items-center justify-center gap-1">
                    <Calendar className="w-3 h-3 text-neon-cyan" />
                    Est. release
                  </div>
                </div>
              </div>

              {/* Features Preview */}
              <div className="mb-6">
                <h3 className="font-medium text-text-primary mb-3">What to expect:</h3>
                <div className="space-y-2">
                  {tool.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-neon-green flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 bg-dark-tertiary border border-neon-pink/50 rounded-lg text-neon-pink text-sm">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-3 bg-dark-tertiary border border-dark text-text-primary rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent placeholder-text-secondary"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-orbitron font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? 'bg-dark-tertiary text-text-secondary cursor-not-allowed'
                      : `btn-neon hover:shadow-lg`
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-dark-primary/30 border-t-dark-primary rounded-full animate-spin" />
                      Joining...
                    </>
                  ) : (
                    <>
                      <Bell className="w-5 h-5 text-dark-primary" />
                      Join Waitlist
                    </>
                  )}
                </button>
              </form>

              {/* Benefits */}
              <div className="mt-6 p-4 bg-dark-tertiary rounded-lg border border-neon-green/30">
                <h4 className="font-medium text-text-primary mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4 text-neon-green" />
                  Waitlist Benefits
                </h4>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• Early access before public release</li>
                  <li>• Exclusive beta testing opportunities</li>
                  <li>• Priority customer support</li>
                  <li>• Special launch pricing (if applicable)</li>
                </ul>
              </div>
            </div>
          ) : (
            /* Success State */
            <div className="p-8 text-center bg-dark-primary">
              <div className="w-16 h-16 bg-dark-tertiary border border-neon-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-neon-green" />
              </div>
              
              <h2 className="text-2xl font-bold font-orbitron text-text-primary mb-2">
                You're on the list!
              </h2>
              
              <p className="text-text-secondary mb-6">
                We'll notify you at <strong className="text-text-primary">{email}</strong> when {tool.name} is ready.
              </p>

              <div className="bg-dark-tertiary rounded-lg p-4 mb-6 border border-neon-cyan/30">
                <h3 className="font-medium text-neon-cyan mb-2">What happens next?</h3>
                <div className="text-sm text-text-secondary space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full" />
                    <span>You'll receive a confirmation email shortly</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full" />
                    <span>We'll send updates on development progress</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full" />
                    <span>Early access invitation when ready</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 bg-dark-tertiary text-text-secondary py-3 px-6 rounded-lg font-orbitron font-semibold hover:bg-dark-tertiary/80 border border-dark hover:border-text-secondary transition-all"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    // Share functionality
                    if (navigator.share) {
                      navigator.share({
                        title: `${tool.name} - Coming Soon`,
                        text: `Check out this upcoming tool: ${tool.name}`,
                        url: window.location.href
                      });
                    }
                  }}
                  className="flex-1 btn-neon py-3 px-6 rounded-lg font-orbitron font-semibold transition-all"
                >
                  Submit Buy Request
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WaitlistSignup;