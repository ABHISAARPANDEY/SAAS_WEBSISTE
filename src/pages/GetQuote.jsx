import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Send, CheckCircle, Loader, Zap } from 'lucide-react';
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
      const quoteData = {
        full_name: formData.fullName,
        email: formData.email,
        phone_number: formData.phone,
        company_name: formData.company || 'Not provided',
        requirements: `Industry: ${formData.industry}\nServices: ${formData.services.join(', ')}\nProject Description: ${formData.projectDescription}\nBudget: ${formData.budget || 'Not specified'}\nTimeline: ${formData.timeline || 'Not specified'}`
      };

      console.log('Submitting quote request:', quoteData);
      
      // Submit to Supabase
      const result = await submitQuoteRequest(quoteData);
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to submit request');
      }
      
      const submissionResult = result.data;
      const trackingNumber = submissionResult.id;
      
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
    >
      <div className="bg-dark-secondary rounded-2xl p-8 max-w-md w-full shadow-2xl border border-neon-green/30">
        <div className="text-center">
          <div className="w-16 h-16 bg-dark-tertiary border border-neon-green rounded-full flex items-center justify-center mx-auto mb-4 pulse-neon">
            <CheckCircle className="w-8 h-8 text-neon-green" />
          </div>
          
          <h3 className="text-2xl font-orbitron font-bold text-text-primary mb-2">
            Request Submitted Successfully!
          </h3>
          
          <p className="text-text-secondary mb-4">
            Our team will contact you soon, thanks for your patience.
          </p>
          
          {submissionResult && (
            <div className="bg-dark-tertiary rounded-lg p-4 mb-4 border border-dark">
              <p className="text-sm text-text-secondary mb-1">Reference Number:</p>
              <p className="font-mono font-bold text-neon-cyan">{submissionResult.trackingNumber}</p>
            </div>
          )}
          
          <div className="space-y-2 text-sm text-text-secondary">
            <p><span className="text-neon-green">✓</span> Confirmation of submission</p>
            <p><span className="text-neon-green">✓</span> Reference number: {submissionResult?.trackingNumber}</p>
            <p><span className="text-neon-green">✓</span> Expected response time: 2 business days</p>
            <p><span className="text-neon-green">✓</span> Our team will contact you via email and phone</p>
          </div>
          
          <div className="mt-6">
            <div className="w-full bg-dark-tertiary rounded-full h-2 mb-2 border border-dark">
              <motion.div 
                className="bg-neon-green h-2 rounded-full"
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
              Get Your <span className="gradient-neon-text neon-text">Custom Quote</span>
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
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-dark-secondary rounded-3xl shadow-2xl p-8 md:p-12 border border-dark"
          >
            {/* Personal Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold font-orbitron text-text-primary mb-8 flex items-center gap-2">
                <Zap className="w-6 h-6 text-neon-green" />
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                      errors.fullName ? 'border-neon-pink bg-dark-tertiary text-text-primary' : 'border-dark bg-dark-tertiary text-text-primary'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && <p className="text-neon-pink text-sm mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                      errors.email ? 'border-neon-pink bg-dark-tertiary text-text-primary' : 'border-dark bg-dark-tertiary text-text-primary'
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="text-neon-pink text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                      errors.phone ? 'border-neon-pink bg-dark-tertiary text-text-primary' : 'border-dark bg-dark-tertiary text-text-primary'
                    }`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <p className="text-neon-pink text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="w-full px-4 py-3 border border-dark bg-dark-tertiary text-text-primary rounded-xl focus:ring-2 focus:ring-neon-green focus:border-transparent transition-all duration-300"
                    placeholder="Enter your company name (optional)"
                  />
                </div>
              </div>
            </div>

            {/* Industry Selection */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold font-orbitron text-text-primary mb-8 flex items-center gap-2">
                <Zap className="w-6 h-6 text-neon-cyan" />
                Industry *
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {industries.map((industry) => (
                  <motion.div
                    key={industry.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`cursor-pointer p-4 rounded-xl border-2 transition-all duration-300 ${
                      formData.industry === industry.id
                        ? 'border-neon-cyan bg-dark-tertiary'
                        : 'border-dark hover:border-neon-cyan/50 bg-dark-tertiary'
                    }`}
                    onClick={() => handleInputChange('industry', industry.id)}
                  >
                    <div className="text-center">
                      <industry.icon className={`w-8 h-8 mx-auto mb-2 ${
                        formData.industry === industry.id ? 'text-neon-cyan' : 'text-text-secondary'
                      }`} />
                      <p className={`text-sm font-medium ${
                        formData.industry === industry.id ? 'text-neon-cyan' : 'text-text-secondary'
                      }`}>
                        {industry.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              {errors.industry && <p className="text-neon-pink text-sm mt-2">{errors.industry}</p>}
            </div>

            {/* Services Selection */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold font-orbitron text-text-primary mb-8 flex items-center gap-2">
                <Zap className="w-6 h-6 text-neon-pink" />
                Services Needed *
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <motion.div
                    key={service.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`cursor-pointer p-4 rounded-xl border-2 transition-all duration-300 ${
                      formData.services.includes(service.id)
                        ? 'border-neon-pink bg-dark-tertiary'
                        : 'border-dark hover:border-neon-pink/50 bg-dark-tertiary'
                    }`}
                    onClick={() => handleServiceToggle(service.id)}
                  >
                    <div className="flex items-center">
                      <service.icon className={`w-6 h-6 mr-3 ${
                        formData.services.includes(service.id) ? 'text-neon-pink' : 'text-text-secondary'
                      }`} />
                      <p className={`font-medium ${
                        formData.services.includes(service.id) ? 'text-neon-pink' : 'text-text-secondary'
                      }`}>
                        {service.name}
                      </p>
                      {formData.services.includes(service.id) && (
                        <CheckCircle className="w-5 h-5 text-neon-pink ml-auto" />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              {errors.services && <p className="text-neon-pink text-sm mt-2">{errors.services}</p>}
            </div>

            {/* Project Details */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold font-orbitron text-text-primary mb-8 flex items-center gap-2">
                <Zap className="w-6 h-6 text-neon-green" />
                Project Details
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Project Description *
                  </label>
                  <textarea
                    value={formData.projectDescription}
                    onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                      errors.projectDescription ? 'border-neon-pink bg-dark-tertiary text-text-primary' : 'border-dark bg-dark-tertiary text-text-primary'
                    }`}
                    placeholder="Describe your project requirements, goals, and any specific features you need..."
                  />
                  {errors.projectDescription && <p className="text-neon-pink text-sm mt-1">{errors.projectDescription}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      className="w-full px-4 py-3 border border-dark bg-dark-tertiary text-text-primary rounded-xl focus:ring-2 focus:ring-neon-green focus:border-transparent transition-all duration-300"
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
                      className="w-full px-4 py-3 border border-dark bg-dark-tertiary text-text-primary rounded-xl focus:ring-2 focus:ring-neon-green focus:border-transparent transition-all duration-300"
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
              {/* Error Message */}
              {errors.submit && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 bg-dark-tertiary border border-neon-pink/50 rounded-xl p-4 flex items-center gap-3"
                >
                  <div className="w-5 h-5 bg-neon-pink rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-dark-primary text-xs">!</span>
                  </div>
                  <span className="text-neon-pink text-sm">{errors.submit}</span>
                </motion.div>
              )}
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center px-8 py-4 rounded-full font-orbitron font-semibold text-lg transition-all duration-300 ${
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