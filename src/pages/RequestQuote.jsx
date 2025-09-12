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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative py-20 bg-white">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 border border-gray-300 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 border border-gray-400 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-gray-200 opacity-10 rounded-full animate-ping"></div>
          <div className="absolute bottom-40 right-10 w-24 h-24 border border-gray-300 rounded-full opacity-20 animate-pulse"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-gray-900 mb-6">
              Request a <span className="text-blue-600">Custom Quote</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Tell us about your project and we'll provide a detailed proposal tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {formSubmitError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 bg-red-50 border border-red-300 rounded-xl p-4 flex items-center gap-3"
            >
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-red-600">Error Submitting Quote</h4>
                <p className="text-gray-700">{formSubmitError}</p>
              </div>
            </motion.div>
          )}
          <QuoteRequestForm onSuccess={handleQuoteSuccess} onError={handleQuoteError} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-gray-900 mb-6">
              Why Choose <span className="text-blue-600">Our Services?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg"
            >
              <div className="w-12 h-12 bg-blue-100 border border-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-orbitron font-bold text-gray-900 mb-3">Fast Turnaround</h3>
              <p className="text-gray-700">We deliver high-quality solutions within your timeline requirements.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg"
            >
              <div className="w-12 h-12 bg-green-100 border border-green-600 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-orbitron font-bold text-gray-900 mb-3">Transparent Pricing</h3>
              <p className="text-gray-700">No hidden fees or surprises. We provide clear, detailed quotes upfront.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg"
            >
              <div className="w-12 h-12 bg-purple-100 border border-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-orbitron font-bold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-700">Our experienced professionals deliver exceptional results for every project.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gray-900">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Fill out the form above and we'll get back to you within 48 hours with a custom quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-orbitron font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                Request Your Quote
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RequestQuote;