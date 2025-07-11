import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { pageEntryVariants, scrollAnimationVariants, childVariants, staggerContainerVariants, buttonHoverVariants } from '../utils/animationUtils';
import { 
  Smartphone, 
  Globe, 
  Zap, 
  Code, 
  Lightbulb, 
  Shield, 
  TrendingUp, 
  Bot,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const services = [
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.',
    icon: Smartphone,
    gradient: 'from-pink-500 to-rose-500',
    features: ['iOS & Android Development', 'Cross-platform Solutions', 'App Store Optimization', 'Push Notifications'],
    pricing: 'Starting from $15,000',
    timeline: '3-6 months'
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Modern, responsive web applications built with the latest technologies for optimal performance and scalability.',
    icon: Globe,
    gradient: 'from-blue-500 to-cyan-500',
    features: ['Responsive Design', 'Modern Frameworks', 'SEO Optimization', 'Performance Tuning'],
    pricing: 'Starting from $8,000',
    timeline: '2-4 months'
  },
  {
    id: 'process-automation',
    title: 'Process Automation',
    description: 'Streamline your operations with intelligent automation solutions that reduce costs and increase efficiency.',
    icon: Zap,
    gradient: 'from-yellow-500 to-orange-500',
    features: ['Workflow Automation', 'API Integration', 'Data Processing', 'Custom Dashboards'],
    pricing: 'Starting from $5,000',
    timeline: '1-3 months'
  },
  {
    id: 'custom-software',
    title: 'Custom Software Solutions',
    description: 'Tailored software development that perfectly aligns with your unique business requirements and objectives.',
    icon: Code,
    gradient: 'from-purple-500 to-indigo-500',
    features: ['Custom Development', 'Legacy System Integration', 'Database Design', 'API Development'],
    pricing: 'Starting from $12,000',
    timeline: '3-8 months'
  },
  {
    id: 'product-development',
    title: 'Product Development',
    description: 'End-to-end product development from concept to launch, ensuring market-ready solutions that drive results.',
    icon: Lightbulb,
    gradient: 'from-green-500 to-emerald-500',
    features: ['MVP Development', 'Market Research', 'User Testing', 'Product Strategy'],
    pricing: 'Starting from $20,000',
    timeline: '4-12 months'
  },
  {
    id: 'blockchain-integration',
    title: 'Blockchain Integration',
    description: 'Secure and transparent blockchain solutions for enhanced trust, security, and decentralized operations.',
    icon: Shield,
    gradient: 'from-teal-500 to-blue-500',
    features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'Cryptocurrency Integration'],
    pricing: 'Starting from $25,000',
    timeline: '4-10 months'
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'Comprehensive digital transformation strategies that modernize your business and accelerate growth.',
    icon: TrendingUp,
    gradient: 'from-violet-500 to-purple-500',
    features: ['Strategy Consulting', 'Technology Migration', 'Process Optimization', 'Change Management'],
    pricing: 'Starting from $30,000',
    timeline: '6-18 months'
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI Solutions',
    description: 'Intelligent AI agents that automate complex tasks and make autonomous decisions to enhance productivity.',
    icon: Bot,
    gradient: 'from-cyan-500 to-blue-500',
    features: ['AI Chatbots', 'Machine Learning', 'Natural Language Processing', 'Predictive Analytics'],
    pricing: 'Starting from $18,000',
    timeline: '3-8 months'
  }
];

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId) => {
    window.scrollTo(0, 0);
    navigate(`/services/${serviceId}`);
  };

  const handleGetQuote = () => {
    window.scrollTo(0, 0);
    navigate('/get-quote');
  };

  return (
    <div className="min-h-screen bg-dark-primary">
      {/* Hero Section */}
      <section className="relative py-20 bg-dark-primary overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 border border-neon-green rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 border border-neon-cyan rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-neon-green opacity-10 rounded-full animate-ping"></div>
          <div className="absolute bottom-40 right-10 w-24 h-24 border border-neon-pink rounded-full opacity-20 animate-pulse"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold text-text-primary leading-tight">
              Our <span className="gradient-neon-text neon-text">Services</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to transform your business and drive sustainable growth. 
              From mobile apps to AI solutions, we deliver excellence at every step.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGetQuote}
                className="btn-neon px-8 py-4 rounded-full font-orbitron font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5 text-dark-primary" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const servicesSection = document.getElementById('services-grid');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="glass-effect text-neon-green px-8 py-4 rounded-full font-orbitron font-semibold text-lg border border-neon-green hover:neon-glow transition-all duration-300"
              >
                Explore Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={scrollAnimationVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-text-primary mb-6">
              Complete <span className="gradient-neon-text neon-text">Technology Solutions</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end services that drive innovation and business success
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainerVariants}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={childVariants}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group cursor-pointer"
                onClick={() => handleServiceClick(service.id)}
              >
                <div className="card-dark rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                  {/* Animated background effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                    <div className={`w-full h-full bg-gradient-to-br ${service.gradient}`}></div>
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl border border-${service.neonColor || 'neon-green'} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    <service.icon className={`w-8 h-8 text-${service.neonColor || 'neon-green'}`} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 relative z-10">
                    <h3 className={`text-xl font-orbitron font-bold text-text-primary mb-4 group-hover:text-${service.neonColor || 'neon-green'} transition-colors`}>
                      {service.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className={`w-4 h-4 text-${service.neonColor || 'neon-green'} flex-shrink-0`} />
                          <span className="text-sm text-text-secondary">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-text-secondary">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Pricing & Timeline */}
                  <div className="space-y-3 pt-4 border-t border-dark relative z-10">
                    <div className="flex items-center justify-between text-sm text-text-secondary">
                      <span>Starting from</span>
                      <span className={`font-bold text-${service.neonColor || 'neon-green'}`}>{service.pricing}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-text-secondary">
                      <span>Timeline</span>
                      <span className="font-medium text-text-primary">{service.timeline}</span>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`h-1 bg-gradient-to-r ${service.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-dark-secondary border-t border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-text-primary mb-6">
              Why Choose <span className="gradient-neon-text neon-text">Our Services?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 border border-neon-green rounded-2xl flex items-center justify-center mx-auto mb-6 pulse-neon">
                <Star className="w-8 h-8 text-neon-green" />
              </div>
              <h3 className="text-xl font-orbitron font-bold text-text-primary mb-4">Proven Excellence</h3>
              <p className="text-text-secondary leading-relaxed">
                200+ successful projects delivered with 98% client satisfaction rate. Our track record speaks for itself.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 border border-neon-cyan rounded-2xl flex items-center justify-center mx-auto mb-6 pulse-neon">
                <Zap className="w-8 h-8 text-neon-cyan" />
              </div>
              <h3 className="text-xl font-orbitron font-bold text-text-primary mb-4">Cutting-Edge Technology</h3>
              <p className="text-text-secondary leading-relaxed">
                We use the latest technologies and frameworks to ensure your solutions are future-proof and scalable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 border border-neon-pink rounded-2xl flex items-center justify-center mx-auto mb-6 pulse-neon">
                <Shield className="w-8 h-8 text-neon-pink" />
              </div>
              <h3 className="text-xl font-orbitron font-bold text-text-primary mb-4">End-to-End Support</h3>
              <p className="text-text-secondary leading-relaxed">
                From initial consultation to post-launch support, we're with you every step of the way.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-primary border-t border-dark">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 border border-neon-green rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 border border-neon-cyan rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-neon-green opacity-10 rounded-full animate-ping"></div>
          <div className="absolute bottom-40 right-10 w-24 h-24 border border-neon-pink rounded-full opacity-20 animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-text-primary">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Let's discuss your project requirements and create a custom solution that drives results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGetQuote}
                className="btn-neon px-8 py-4 rounded-full font-orbitron font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5 text-dark-primary" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate('/marketplace');
                }}
                className="glass-effect text-neon-cyan px-8 py-4 rounded-full font-orbitron font-semibold text-lg border border-neon-cyan hover:neon-glow-cyan transition-all duration-300"
              >
                Explore Marketplace
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;