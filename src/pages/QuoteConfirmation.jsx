import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Clock,
  Mail, 
  Phone,
  Home,
  Zap
} from 'lucide-react';

const QuoteConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, industryId, serviceIds, trackingNumber } = location.state || {};
  
  console.log("Quote confirmation data:", { formData, industryId, serviceIds, trackingNumber });

  // Get the full industry and services objects using the IDs
  const industry = industryId ? { name: industryId, icon: null } : null;
  const services = serviceIds ? serviceIds.map(id => ({ id, name: id })) : [];
  const contact = formData || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Redirect to home if no data
  if (!industry || !services.length || !contact) {
    console.error("Missing required data for confirmation page:", { industry, services, contact });
    window.scrollTo(0, 0);
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 border border-gray-300 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 border border-gray-400 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-gray-200 opacity-10 rounded-full animate-ping"></div>
          <div className="absolute bottom-40 right-10 w-24 h-24 border border-gray-300 rounded-full opacity-20 animate-pulse"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-24 h-24 bg-green-100 border-2 border-green-600 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle className="w-12 h-12 text-green-600" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-orbitron font-bold mb-6"
          >
            Thank You for Your <span className="text-blue-600">Interest!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-700 mb-8"
          >
            Your quote request has been successfully submitted. Our team will contact you within 2 business days.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <span>2 Business Days</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600" />
              <span>Email & Phone</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Summary */}
      <section className="py-20 bg-gray-50 border-t border-gray-200 relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 border border-gray-300 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 border border-gray-400 rounded-full opacity-10 animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-gray-200 opacity-5 rounded-full animate-ping"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden w-full"
          >
            {/* Header */}
            <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
              <h2 className="text-2xl font-orbitron font-bold mb-1">Quote Request <span className="text-blue-600">Summary</span></h2>
              <p className="text-gray-600 text-sm">Reference ID: <span className="font-mono">{trackingNumber || 'REQ-' + Date.now().toString().slice(-6)}</span></p>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-600" />
                  Your Contact Information
                </h3>
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <span className="text-sm font-medium text-gray-600 block mb-1">Full Name</span>
                      <p className="font-semibold text-gray-900">{contact.fullName || contact.full_name}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600 block mb-1">Email</span>
                      <p className="font-semibold text-gray-900">{contact.email}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600 block mb-1">Phone</span>
                      <p className="font-semibold text-gray-900">{contact.phone || contact.phone_number}</p>
                    </div>
                    {(contact.company || contact.company_name) && (
                      <div>
                        <span className="text-sm font-medium text-gray-600 block mb-1">Company</span>
                        <p className="font-semibold text-gray-900">{contact.company || contact.company_name}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Industry */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Selected Industry</h3>
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200 hover:border-green-300 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-green-100 border border-green-600 rounded-2xl flex items-center justify-center">
                      {industry?.icon ? <industry.icon className="w-8 h-8 text-green-600" /> : <Home className="w-8 h-8 text-green-600" />}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{industry?.name || 'Industry'}</h4>
                      <p className="text-gray-600">Selected industry for your project</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Requested Services</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {services.map((service) => (
                    <div
                      key={service.id || service.name}
                      className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200 hover:border-purple-300 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-purple-100 border border-purple-600 flex items-center justify-center flex-shrink-0">
                          <Zap className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">{service.name || service.id}</h4>
                          <p className="text-sm text-gray-600">Selected service for your project</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-green-300 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What Happens Next?</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 border-2 border-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Review & Analysis</p>
                      <p className="text-sm text-gray-600">Our team will analyze your requirements and prepare a detailed proposal</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 border-2 border-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Initial Contact</p>
                      <p className="text-sm text-gray-600">Our team will contact you soon to discuss your project</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 border-2 border-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Detailed Proposal</p>
                      <p className="text-sm text-gray-600">Receive a comprehensive quote with timeline and pricing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-orbitron font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <Home className="w-5 h-5" />
              Return to Homepage
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/marketplace')}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-orbitron font-semibold text-lg border border-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center gap-2"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-gray-900">
              Have Questions?
            </h2>
            <p className="text-xl text-gray-700">
              Our team is here to help. Don't hesitate to reach out if you need immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-600">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-600" />
                <span>hello@saasagency.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuoteConfirmation;