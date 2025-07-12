import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Send, CheckCircle, Loader, AlertCircle, Zap } from 'lucide-react';
import { industries, services } from '../data/quoteFormData';
import { submitQuoteRequest } from '../utils/supabaseClient';

const GetQuote = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    services: [],
    projectDescription: '',
    budget: '',
    timeline: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.industry) newErrors.industry = 'Please select an industry';
    if (formData.services.length === 0) newErrors.services = 'Please select at least one service';
    if (!formData.projectDescription.trim()) newErrors.projectDescription = 'Project description is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleServiceToggle = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId]
    }));
    // Clear services error
    if (errors.services) {
      setErrors(prev => ({
        ...prev,
        services: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Prepare data for Supabase
      let quoteData = {
        full_name: formData.fullName,
        email: formData.email,
        phone_number: formData.phone,
        company_name: formData.company || 'Not provided',
        requirements: `Industry: ${formData.industry}\nServices: ${formData.services.join(', ')}\nProject Description: ${formData.projectDescription}\nBudget: ${formData.budget || 'Not specified'}\nTimeline: ${formData.timeline || 'Not specified'}`
      };

      console.log('Submitting quote request:', quoteData);
      
      let result;
      try {
        // Submit to Supabase
        result = await submitQuoteRequest(quoteData);
      } catch (submitError) {
        console.error('Submission error:', submitError);
        throw new Error(submitError.message || 'Failed to submit request');
      }
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to submit request');
      }
      
      const submissionResult = result.data;
      const trackingNumber = submissionResult.trackingNumber || submissionResult.id;
      
      setSubmissionResult(submissionResult);
      setShowSuccess(true);
      
      // Auto-redirect after 5 seconds
      setTimeout(() => {
        navigate('/quote-confirmation', {
          state: {
            formData: submissionResult,
            industryId: formData.industry,
            serviceIds: formData.services,
            trackingNumber
          }
        });
      }, 5000);
      
    } catch (error) {
      console.error('Submission error:', error);
      setErrors({ submit: error.message || 'Failed to submit request. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success message component
  const SuccessMessage = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md"
    >
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl border border-border-color">
        <div className="text-center">
          <div className="w-16 h-16 bg-secondary border border-accent-primary rounded-full flex items-center justify-center mx-auto mb-4 pulse">
            <CheckCircle className="w-8 h-8 text-accent-primary" />
          </div>
          
          <h3 className="text-2xl font-bold text-text-primary mb-2">
            Request Submitted Successfully!
          </h3>
          
          <p className="text-text-secondary mb-4">
            Our team will contact you soon, thanks for your patience.
          </p>
          
          {submissionResult && (
            <div className="bg-secondary rounded-lg p-4 mb-4 border border-border-color">
              <p className="text-sm text-text-secondary mb-1">Reference Number:</p>
              <p className="font-mono font-bold text-accent-primary">{submissionResult.trackingNumber}</p>
            </div>
          )}
          
          <div className="space-y-2 text-sm text-text-secondary">
            <p><span className="text-accent-primary">✓</span> Confirmation of submission</p>
            <p><span className="text-accent-primary">✓</span> Reference number: {submissionResult?.trackingNumber}</p>
            <p><span className="text-accent-primary">✓</span> Expected response time: 2 business days</p>
            <p><span className="text-accent-primary">✓</span> Our team will contact you via email and phone</p>
          </div>
          
          <div className="mt-6">
            <div className="w-full bg-secondary rounded-full h-2 mb-2 border border-border-color">
              <motion.div 
                className="bg-accent-primary h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 5 }}
              />
            </div>
            <p className="text-xs text-text-secondary">Redirecting in 5 seconds...</p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <section className="relative py-12 sm:py-20 bg-secondary">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 border-2 border-accent-primary rounded-full opacity-10 animate-pulse blur-[1px]"></div>
          <div className="absolute top-40 right-20 w-16 h-16 border-2 border-accent-secondary rounded-full opacity-15 animate-bounce blur-[1px]"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-accent-primary opacity-5 rounded-full animate-ping blur-[1px]"></div>
          <div className="absolute bottom-40 right-10 w-24 h-24 border-2 border-accent-tertiary rounded-full opacity-10 animate-pulse blur-[1px]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-[95%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-text-primary mb-4 sm:mb-6 tracking-tight">
  Get Your{' '}
  <span className="relative inline-block rainbow-text">
    Custom Quote
    <span className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-accent-primary/0 via-accent-primary to-accent-primary/0"></span>
  </span>
</h1>

            <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed px-2">
              Tell us about your project and we'll provide a detailed proposal tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-10 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-[95%]">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            className="bg-white rounded-xl sm:rounded-3xl shadow-card-hover p-6 sm:p-8 md:p-12 border border-border-color"
          >
            {/* Personal Information */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-6 sm:mb-8 flex items-center gap-2">
                <Zap className="w-6 h-6 text-accent-primary" />
                <span className="relative">
                  Personal Information
                  <span className="absolute -bottom-1 left-0 w-1/3 h-0.5 bg-accent-primary/50"></span>
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all duration-300 ${
                      errors.fullName ? 'border-error bg-white text-text-primary' : 'border-border-color bg-white text-text-primary'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && <p className="text-error text-sm mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all duration-300 ${
                      errors.email ? 'border-error bg-white text-text-primary' : 'border-border-color bg-white text-text-primary'
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="text-error text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all duration-300 ${
                      errors.phone ? 'border-error bg-white text-text-primary' : 'border-border-color bg-white text-text-primary'
                    }`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <p className="text-error text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="w-full px-4 py-3 border border-border-color bg-white text-text-primary rounded-xl focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your company name (optional)"
                  />
                </div>
              </div>
            </div>

            {/* Industry Selection */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-6 sm:mb-8 flex items-center gap-2">
                <Zap className="w-6 h-6 text-accent-secondary" />
                <span className="relative">
                  Industry *
                  <span className="absolute -bottom-1 left-0 w-1/3 h-0.5 bg-accent-secondary/50"></span>
                </span>
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {industries.map((industry) => (
                  <motion.div
                    key={industry.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`cursor-pointer p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 ${
                      formData.industry === industry.id
                        ? 'border-accent-primary bg-secondary'
                        : 'border-border-color hover:border-accent-primary/50 bg-white'
                    }`}
                    onClick={() => handleInputChange('industry', industry.id)}
                  >
                    <div className="text-center">
                      <industry.icon className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2 ${
                        formData.industry === industry.id ? 'text-accent-primary' : 'text-text-secondary'
                      }`} />
                      <p className={`text-xs sm:text-sm font-medium ${
                        formData.industry === industry.id ? 'text-accent-primary' : 'text-text-secondary'
                      }`}>
                        {industry.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              {errors.industry && <p className="text-error text-sm mt-2">{errors.industry}</p>}
            </div>

            {/* Services Selection */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-6 sm:mb-8 flex items-center gap-2">
                <Zap className="w-6 h-6 text-accent-tertiary" />
                <span className="relative">
                  Services Needed *
                  <span className="absolute -bottom-1 left-0 w-1/3 h-0.5 bg-accent-tertiary/50"></span>
                </span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {services.map((service) => (
                  <motion.div
                    key={service.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`cursor-pointer p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 ${
                      formData.services.includes(service.id)
                        ? 'border-accent-tertiary bg-secondary'
                        : 'border-border-color hover:border-accent-tertiary/50 bg-white'
                    }`}
                    onClick={() => handleServiceToggle(service.id)}
                  >
                    <div className="flex items-center">
                      <service.icon className={`w-6 h-6 mr-3 ${
                        formData.services.includes(service.id) ? 'text-accent-tertiary' : 'text-text-secondary'
                      }`} />
                      <p className={`font-medium ${
                        formData.services.includes(service.id) ? 'text-accent-tertiary' : 'text-text-secondary'
                      }`}>
                        {service.name}
                      </p>
                      {formData.services.includes(service.id) && (
                        <CheckCircle className="w-5 h-5 text-accent-tertiary ml-auto" />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              {errors.services && <p className="text-error text-sm mt-2">{errors.services}</p>}
            </div>

            {/* Project Details */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-6 sm:mb-8 flex items-center gap-2">
                <Zap className="w-6 h-6 text-accent-primary" />
                <span className="relative">
                  Project Details
                  <span className="absolute -bottom-1 left-0 w-1/3 h-0.5 bg-accent-primary/50"></span>
                </span>
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Project Description *
                  </label>
                  <textarea
                    value={formData.projectDescription}
                    onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all duration-300 ${
                      errors.projectDescription ? 'border-error bg-white text-text-primary' : 'border-border-color bg-white text-text-primary'
                    }`}
                    placeholder="Describe your project requirements, goals, and any specific features you need..."
                  />
                  {errors.projectDescription && <p className="text-error text-sm mt-1">{errors.projectDescription}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      className="w-full px-4 py-3 border border-border-color bg-white text-text-primary rounded-xl focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over-100k">Over $100,000</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => handleInputChange('timeline', e.target.value)}
                      className="w-full px-4 py-3 border border-border-color bg-white text-text-primary rounded-xl focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-12-months">6-12 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              {errors.submit && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 bg-error/10 border border-error/50 rounded-xl p-4 flex items-center gap-3"
                >
                  <div className="w-5 h-5 bg-error rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">!</span>
                  </div>
                  <span className="text-error text-sm">{errors.submit}</span>
                </motion.div>
              )}
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-secondary text-text-secondary cursor-not-allowed border border-border-color'
                    : 'stripe-button'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin text-text-secondary" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-white" />
                    Get My Quote
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </section>
      
      {/* Success Message Modal */}
      {showSuccess && <SuccessMessage />}
    </div>
  );
};

export default GetQuote;