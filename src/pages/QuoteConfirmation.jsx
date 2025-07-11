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
    <div className="min-h-screen bg-dark-primary text-text-primary">
      {/* Hero Section */}
      <section className="relative py-20 bg-dark-primary overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 border border-neon-green rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 border border-neon-cyan rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-neon-green opacity-10 rounded-full animate-ping"></div>
          <div className="absolute bottom-40 right-10 w-24 h-24 border border-neon-pink rounded-full opacity-20 animate-pulse"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-24 h-24 bg-dark-tertiary border-2 border-neon-green rounded-full flex items-center justify-center mx-auto mb-8 pulse-neon"
          >
            <CheckCircle className="w-12 h-12 text-neon-green" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-orbitron font-bold mb-6"
          >
            Thank You for Your <span className="gradient-neon-text">Interest!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-text-secondary mb-8"
          >
            Your quote request has been successfully submitted. Our team will contact you within 2 business days.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-text-secondary"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-neon-cyan" />
              <span>2 Business Days</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-neon-cyan" />
              <span>Email & Phone</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Summary */}
      <section className="py-20 bg-dark-secondary border-t border-dark relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 border border-neon-green rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 border border-neon-cyan rounded-full opacity-10 animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-neon-green opacity-5 rounded-full animate-ping"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-dark-secondary rounded-2xl shadow-xl border border-dark overflow-hidden"
          >
            {/* Header */}
            <div className="bg-dark-tertiary px-8 py-6 border-b border-dark">
              <h2 className="text-2xl font-orbitron font-bold mb-1">Quote Request <span className="text-neon-green">Summary</span></h2>
              <p className="text-neon-cyan text-sm">Reference ID: <span className="font-mono">{trackingNumber || 'REQ-' + Date.now().toString().slice(-6)}</span></p>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-neon-cyan" />
                  Your Contact Information
                </h3>
                <div className="bg-dark-tertiary rounded-xl p-6 border border-dark hover:border-neon-cyan/30 transition-colors">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <span className="text-sm font-medium text-text-secondary block mb-1">Full Name</span>
                      <p className="font-semibold text-text-primary">{contact.fullName || contact.full_name}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-text-secondary block mb-1">Email</span>
                      <p className="font-semibold text-text-primary">{contact.email}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-text-secondary block mb-1">Phone</span>
                      <p className="font-semibold text-text-primary">{contact.phone || contact.phone_number}</p>
                    </div>
                    {(contact.company || contact.company_name) && (
                      <div>
                        <span className="text-sm font-medium text-text-secondary block mb-1">Company</span>
                        <p className="font-semibold text-text-primary">{contact.company || contact.company_name}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Industry */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">Selected Industry</h3>
                <div className="bg-dark-tertiary rounded-xl p-6 border border-dark hover:border-neon-green/30 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-dark-primary border border-neon-green rounded-2xl flex items-center justify-center">
                      {industry?.icon ? <industry.icon className="w-8 h-8 text-neon-green" /> : <Home className="w-8 h-8 text-neon-green" />}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-text-primary">{industry?.name || 'Industry'}</h4>
                      <p className="text-text-secondary">Selected industry for your project</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">Requested Services</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div
                      key={service.id || service.name}
                      className="bg-dark-tertiary rounded-xl p-6 border border-dark hover:border-neon-pink/30 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-dark-primary border border-neon-pink flex items-center justify-center flex-shrink-0">
                          <Zap className="w-6 h-6 text-neon-pink" />
                        </div>
                        <div>
                          <h4 className="font-bold text-text-primary mb-1">{service.name || service.id}</h4>
                          <p className="text-sm text-text-secondary">Selected service for your project</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-dark-tertiary rounded-xl p-6 border border-dark hover:border-neon-green/30 transition-colors">
                <h3 className="text-lg font-semibold text-text-primary mb-4">What Happens Next?</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-dark-primary border-2 border-neon-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 pulse-neon">
                      <span className="text-neon-green text-sm font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">Review & Analysis</p>
                      <p className="text-sm text-text-secondary">Our team will analyze your requirements and prepare a detailed proposal</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-dark-primary border-2 border-neon-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 pulse-neon">
                      <span className="text-neon-green text-sm font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">Initial Contact</p>
                      <p className="text-sm text-text-secondary">Our team will contact you soon to discuss your project</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-dark-primary border-2 border-neon-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 pulse-neon">
                      <span className="text-neon-green text-sm font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">Detailed Proposal</p>
                      <p className="text-sm text-text-secondary">Receive a comprehensive quote with timeline and pricing</p>
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
              className="btn-neon px-8 py-4 rounded-full font-orbitron font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <Home className="w-5 h-5 text-dark-primary" />
              Return to Homepage
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/marketplace')}
              className="glass-effect text-neon-cyan px-8 py-4 rounded-full font-orbitron font-semibold text-lg border border-neon-cyan hover:border-neon-cyan/80 transition-all duration-300 flex items-center gap-2"
            >
              Explore Marketplace
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-dark-primary border-t border-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold">
              Have Questions?
            </h2>
            <p className="text-xl text-text-secondary">
              Our team is here to help. Don't hesitate to reach out if you need immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-text-secondary">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-neon-cyan" />
                <span>hello@saasagency.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-neon-cyan" />
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