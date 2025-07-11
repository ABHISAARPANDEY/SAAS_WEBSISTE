import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { submitQuoteRequest } from '../utils/supabaseClient';
import { 
  Send, 
  CheckCircle,
  Loader, 
  AlertCircle, 
  User, 
  Mail, 
  Phone, 
  Building, 
  FileText 
} from 'lucide-react';

const QuoteRequestForm = ({ onSuccess, onError }) => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    company_name: '',
    requirements: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.full_name.trim()) newErrors.full_name = 'Full name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone_number.trim()) newErrors.phone_number = 'Phone number is required';
    if (!formData.company_name.trim()) newErrors.company_name = 'Company name is required';
    if (!formData.requirements.trim()) newErrors.requirements = 'Project requirements are required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const result = await submitQuoteRequest(formData);
      
      if (result.success) {
        setSubmitSuccess(true);
        setFormData({
          full_name: '',
          email: '',
          phone_number: '',
          company_name: '',
          requirements: ''
        });
        
        if (onSuccess) {
          onSuccess(result.data);
          console.log('Quote request submitted successfully:', result.data);
        }
      } else {
        const errorMsg = result.error || 'Failed to submit request. Please try again.';
        setSubmitError(errorMsg);
        if (onError) {
          onError(errorMsg);
        }
        console.error('Quote submission failed:', result.error);
      }
    } catch (error) {
      console.error('Submission error:', error);
      const errorMsg = 'An unexpected error occurred. Please try again later.';
      setSubmitError(errorMsg);
      if (onError) {
        onError(errorMsg);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-dark-secondary rounded-3xl shadow-2xl p-8 md:p-12 border border-dark">
      {submitSuccess ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-dark-tertiary border border-neon-green rounded-full flex items-center justify-center mx-auto mb-6 pulse-neon">
            <CheckCircle className="w-10 h-10 text-neon-green" />
          </div>
          
          <h3 className="text-2xl font-orbitron font-bold text-text-primary mb-4">
            Request Submitted Successfully!
          </h3>
          
          <p className="text-text-secondary mb-6">
            Thank you for your interest! Our team will review your request and contact you shortly.
          </p>
          
          <button
            onClick={() => setSubmitSuccess(false)}
            className="btn-neon px-6 py-3 rounded-lg font-orbitron font-semibold hover:shadow-lg transition-all duration-300"
          >
            Submit Another Request
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-orbitron font-bold text-text-primary mb-6 flex items-center gap-2">
            <Send className="w-6 h-6 text-neon-green" />
            Request a Quote
          </h2>
          
          {/* Error Message */}
          {submitError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-dark-tertiary border border-neon-pink/50 rounded-xl p-4 flex items-center gap-3"
            >
              <AlertCircle className="w-5 h-5 text-neon-pink flex-shrink-0" />
              <span className="text-neon-pink">{submitError}</span>
            </motion.div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="w-full">
              <label className="block text-sm font-medium text-text-primary mb-2">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleInputChange}
                  className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-neon-green focus:border-transparent transition-all duration-300 ${
                    errors.full_name ? 'border-neon-pink bg-dark-tertiary text-text-primary' : 'border-dark bg-dark-tertiary text-text-primary'
                  }`}
                  placeholder="Enter your full name"
                />
              </div>
              {errors.full_name && <p className="text-neon-pink text-sm mt-1">{errors.full_name}</p>}
            </div>

            {/* Email */}
            <div className="w-full">
              <label className="block text-sm font-medium text-text-primary mb-2">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-neon-green focus:border-transparent transition-all duration-300 ${
                    errors.email ? 'border-neon-pink bg-dark-tertiary text-text-primary' : 'border-dark bg-dark-tertiary text-text-primary'
                  }`}
                  placeholder="Enter your email address"
                />
              </div>
              {errors.email && <p className="text-neon-pink text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div className="w-full">
              <label className="block text-sm font-medium text-text-primary mb-2">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
                <input
                  type="tel"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                  className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-neon-green focus:border-transparent transition-all duration-300 ${
                    errors.phone_number ? 'border-neon-pink bg-dark-tertiary text-text-primary' : 'border-dark bg-dark-tertiary text-text-primary'
                  }`}
                  placeholder="Enter your phone number"
                />
              </div>
              {errors.phone_number && <p className="text-neon-pink text-sm mt-1">{errors.phone_number}</p>}
            </div>

            {/* Company */}
            <div className="w-full">
              <label className="block text-sm font-medium text-text-primary mb-2">
                Company Name *
              </label>
              <div className="relative">
                <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
                <input
                  type="text"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleInputChange}
                  className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-neon-green focus:border-transparent transition-all duration-300 ${
                    errors.company_name ? 'border-neon-pink bg-dark-tertiary text-text-primary' : 'border-dark bg-dark-tertiary text-text-primary'
                  }`}
                  placeholder="Enter your company name"
                />
              </div>
              {errors.company_name && <p className="text-neon-pink text-sm mt-1">{errors.company_name}</p>}
            </div>
          </div>

          {/* Requirements */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Project Requirements *
            </label>
            <div className="relative">
              <FileText className="absolute left-4 top-4 text-text-secondary w-5 h-5" />
              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleInputChange}
                rows={4}
                className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-neon-green focus:border-transparent transition-all duration-300 ${
                  errors.requirements ? 'border-neon-pink bg-dark-tertiary text-text-primary' : 'border-dark bg-dark-tertiary text-text-primary'
                }`}
                placeholder="Describe your project requirements, goals, and any specific features you need..."
              />
            </div>
            {errors.requirements && <p className="text-neon-pink text-sm mt-1">{errors.requirements}</p>}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full py-4 px-6 rounded-xl font-orbitron font-semibold text-lg transition-all duration-300 ${
              isSubmitting
                ? 'bg-dark-tertiary text-text-secondary cursor-not-allowed border border-dark'
                : 'btn-neon shadow-lg hover:shadow-xl'
            }`}
          >
            {isSubmitting ? (
              <>
                <Loader className="w-5 h-5 mr-2 animate-spin text-dark-primary" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2 text-dark-primary" />
                Submit Request
              </>
            )}
          </motion.button>
        </form>
      )}
    </div>
  );
};

export default QuoteRequestForm;