import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Zap, ArrowRight, AlertCircle } from 'lucide-react';
import QuoteRequestForm from '../components/QuoteRequestForm';

const RequestQuote = () => {
  const navigate = useNavigate();
  const [formSubmitError, setFormSubmitError] = useState('');

  const handleQuoteSuccess = (data) => {
    // Navigate to success page or show success message
    setTimeout(() => {
      navigate('/quote-confirmation', { 
        state: { 
          formData: data,
          trackingNumber: data.id
        } 
      });
    }, 2000);
  };
  
  const handleQuoteError = (error) => {
    setFormSubmitError(error);
    console.error('Quote submission error:', error);
  };

  return (
    <div className="min-h-screen bg-dark-primary">
      {/* Header */}
      <section className="relative py-20 bg-dark-primary">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 border border-neon-green rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 border border-neon-cyan rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-neon-green opacity-10 rounded-full animate-ping"></div>
          <div className="absolute bottom-40 right-10 w-24 h-24 border border-neon-pink rounded-full opacity-20 animate-pulse"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-text-primary mb-6">
              Request a <span className="gradient-neon-text">Custom Quote</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Tell us about your project and we'll provide a detailed proposal tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {formSubmitError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 bg-dark-tertiary border border-neon-pink/50 rounded-xl p-4 flex items-center gap-3"
            >
              <AlertCircle className="w-5 h-5 text-neon-pink flex-shrink-0" />
              <div>
                <h4 className="font-medium text-neon-pink">Error Submitting Quote</h4>
                <p className="text-text-secondary">{formSubmitError}</p>
              </div>
            </motion.div>
          )}
          <QuoteRequestForm onSuccess={handleQuoteSuccess} onError={handleQuoteError} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-dark-secondary border-t border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-text-primary mb-6">
              Why Choose <span className="gradient-neon-text">Our Services?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-dark-tertiary p-6 rounded-xl border border-dark"
            >
              <div className="w-12 h-12 bg-dark-primary border border-neon-green rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-neon-green" />
              </div>
              <h3 className="text-xl font-orbitron font-bold text-text-primary mb-3">Fast Turnaround</h3>
              <p className="text-text-secondary">We deliver high-quality solutions within your timeline requirements.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-dark-tertiary p-6 rounded-xl border border-dark"
            >
              <div className="w-12 h-12 bg-dark-primary border border-neon-cyan rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-neon-cyan" />
              </div>
              <h3 className="text-xl font-orbitron font-bold text-text-primary mb-3">Transparent Pricing</h3>
              <p className="text-text-secondary">No hidden fees or surprises. We provide clear, detailed quotes upfront.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-dark-tertiary p-6 rounded-xl border border-dark"
            >
              <div className="w-12 h-12 bg-dark-primary border border-neon-pink rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-neon-pink" />
              </div>
              <h3 className="text-xl font-orbitron font-bold text-text-primary mb-3">Expert Team</h3>
              <p className="text-text-secondary">Our experienced professionals deliver exceptional results for every project.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-primary border-t border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-text-primary">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Fill out the form above and we'll get back to you within 48 hours with a custom quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-neon px-8 py-4 rounded-full font-orbitron font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                Request Your Quote
                <ArrowRight className="w-5 h-5 text-dark-primary" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RequestQuote;