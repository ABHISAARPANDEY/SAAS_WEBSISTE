import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
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

  const serviceCards = [
    {
      id: 'mobile-app',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.',
      icon: Smartphone,
      gradient: 'from-pink-500 to-rose-500',
      features: ['iOS & Android', 'Cross-Platform', 'UI/UX Design', 'App Store'],
      buttonText: 'Learn More',
      action: () => {
        console.log('Mobile App Development clicked');
        navigate('/services/mobile-app');
      }
    },
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Modern, responsive web applications built with the latest technologies for optimal performance and scalability.',
      icon: Globe,
      gradient: 'from-blue-500 to-cyan-500',
      features: ['React/Next.js', 'Node.js', 'Responsive', 'SEO'],
      buttonText: 'Learn More',
      action: () => {
        console.log('Web Development clicked');
        navigate('/services/web-development');
      }
    },
    {
      id: 'process-automation',
      title: 'Process Automation',
      description: 'Streamline your operations with intelligent automation solutions that reduce costs and increase efficiency.',
      icon: Zap,
      gradient: 'from-yellow-500 to-orange-500',
      features: ['Workflow', 'AI Powered', 'Integration', 'Analytics'],
      buttonText: 'Learn More',
      action: () => {
        console.log('Process Automation clicked');
        navigate('/services/process-automation');
      }
    },
    {
      id: 'custom-software',
      title: 'Custom Software Solutions',
      description: 'Tailored software development that perfectly aligns with your unique business requirements and objectives.',
      icon: Code,
      gradient: 'from-purple-500 to-indigo-500',
      features: ['Custom Code', 'Scalable', 'Maintenance', 'Support'],
      buttonText: 'Learn More',
      action: () => {
        console.log('Custom Software clicked');
        navigate('/services/custom-software');
      }
    },
    {
      id: 'product-development',
      title: 'Product Development',
      description: 'End-to-end product development from concept to launch, ensuring market-ready solutions that drive results.',
      icon: Lightbulb,
      gradient: 'from-green-500 to-emerald-500',
      features: ['MVP', 'Market Research', 'Launch', 'Growth'],
      buttonText: 'Learn More',
      action: () => {
        console.log('Product Development clicked');
        navigate('/services/product-development');
      }
    },
    {
      id: 'agentic-ai',
      title: 'Agentic AI Solutions',
      description: 'Intelligent AI agents that automate complex tasks and make autonomous decisions to enhance productivity.',
      icon: Bot,
      gradient: 'from-cyan-500 to-blue-500',
      features: ['AI Agents', 'Machine Learning', 'Automation', 'Intelligence'],
      buttonText: 'Learn More',
      action: () => {
        console.log('Agentic AI clicked');
        navigate('/services/agentic-ai');
      }
    }
  ];

  return (
    <section id="services-section" className="py-20 bg-gradient-to-b from-primary to-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Our <span className="text-accent-primary">Services</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We deliver comprehensive technology solutions that drive innovation and accelerate business growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group cursor-pointer"
              onClick={service.action}
            >
              <div className={`bg-gradient-to-br ${service.gradient} rounded-2xl p-8 h-full shadow-2xl border border-white/20 backdrop-blur-sm hover:shadow-3xl transition-all duration-300`}>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/90 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-white text-xs font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 border border-white/30">
                  {service.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;