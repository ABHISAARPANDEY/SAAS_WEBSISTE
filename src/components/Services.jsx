import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Smartphone, 
  Globe, 
  Zap, 
  Code, 
  Lightbulb, 
  Shield, 
  TrendingUp, 
  Bot 
} from 'lucide-react';

const services = [
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.',
    icon: Smartphone,
    gradient: 'from-pink-500 to-rose-500',
    color: 'accent-secondary'
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Modern, responsive web applications built with the latest technologies for optimal performance and scalability.',
    icon: Globe,
    gradient: 'from-blue-500 to-cyan-500',
    color: 'accent-primary'
  },
  {
    id: 'process-automation',
    title: 'Process Automation',
    description: 'Streamline your operations with intelligent automation solutions that reduce costs and increase efficiency.',
    icon: Zap,
    gradient: 'from-yellow-500 to-orange-500',
    color: 'accent-primary'
  },
  {
    id: 'custom-software',
    title: 'Custom Software Solutions',
    description: 'Tailored software development that perfectly aligns with your unique business requirements and objectives.',
    icon: Code,
    gradient: 'from-purple-500 to-indigo-500',
    color: 'accent-secondary'
  },
  {
    id: 'product-development',
    title: 'Product Development',
    description: 'End-to-end product development from concept to launch, ensuring market-ready solutions that drive results.',
    icon: Lightbulb,
    gradient: 'from-green-500 to-emerald-500',
    color: 'accent-primary'
  },
  {
    id: 'blockchain-integration',
    title: 'Blockchain Integration',
    description: 'Secure and transparent blockchain solutions for enhanced trust, security, and decentralized operations.',
    icon: Shield,
    gradient: 'from-teal-500 to-blue-500',
    color: 'accent-secondary'
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'Comprehensive digital transformation strategies that modernize your business and accelerate growth.',
    icon: TrendingUp,
    gradient: 'from-violet-500 to-purple-500',
    color: 'accent-primary'
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI Solutions',
    description: 'Intelligent AI agents that automate complex tasks and make autonomous decisions to enhance productivity.',
    icon: Bot,
    gradient: 'from-cyan-500 to-blue-500',
    color: 'accent-secondary'
  }
];

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId) => {
    window.scrollTo(0, 0);
    navigate(`/services/${serviceId}`);
  };

  return (
    <section id="services-section" className="py-12 sm:py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-[95%]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6 sm:mb-8 tracking-tight">
            Our <span className="gradient-text relative">Services
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent-primary/0 via-accent-primary to-accent-primary/0"></span>
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed px-2">
            We deliver comprehensive technology solutions that drive innovation and accelerate business growth
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 perspective-1000 mobile-grid-1">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -8, rotateX: 2, rotateY: 2 }}
              className="group cursor-pointer perspective-card"
              onClick={() => handleServiceClick(service.id)}
            >
              <div className="stripe-card h-full flex flex-col relative overflow-hidden p-6 sm:p-8">
                {/* Icon */}
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl border-2 border-${service.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:shadow-lg transition-all duration-300 relative z-10 bg-white`}>
                  <service.icon className={`w-6 h-6 sm:w-8 sm:h-8 text-${service.color}`} />
                </div>
                
                {/* Content */}
                <div className="flex-1 relative z-10">
                  <h3 className={`text-lg sm:text-xl font-bold text-text-primary mb-2 sm:mb-4 group-hover:text-${service.color} transition-colors`}>
                    {service.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed tracking-wide text-sm sm:text-base">
                    {service.description}
                  </p>
                </div>
                
                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 relative z-10">
                  <div className={`h-1 bg-gradient-to-r ${service.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.scrollTo(0, 0);
              navigate('/services');
            }}
            className="stripe-button px-6 sm:px-10 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg"
          >
            View All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;