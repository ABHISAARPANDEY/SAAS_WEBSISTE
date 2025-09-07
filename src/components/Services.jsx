import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, 
  Zap, 
  Smartphone, 
  Code, 
  Server, 
  BarChart3 
} from 'lucide-react';

const Services = () => {
  const navigate = useNavigate();

  const serviceCards = [
    {
      id: 'ai-agents',
      title: 'AI Agents',
      description: 'Intelligent AI agents that automate complex tasks and make autonomous decisions to enhance productivity and streamline operations.',
      icon: Bot,
      gradient: 'from-cyan-500 to-blue-500',
      features: ['AI Agents', 'Machine Learning', 'Automation', 'Intelligence'],
      buttonText: 'Learn More',
      action: () => {
        console.log('AI Agents clicked');
        navigate('/ai-agents');
      }
    },
    {
      id: 'automation-integration',
      title: 'Automation & Integration',
      description: 'Streamline your operations with intelligent automation solutions and seamless system integrations that reduce costs and increase efficiency.',
      icon: Zap,
      gradient: 'from-yellow-500 to-orange-500',
      features: ['Workflow', 'AI Powered', 'Integration', 'Analytics'],
      buttonText: 'Learn More',
      action: () => {
        console.log('Automation & Integration clicked');
        navigate('/automation');
      }
    },
    {
      id: 'mobile-web-development',
      title: 'Mobile & Web App Development',
      description: 'Native and cross-platform mobile applications and modern web applications built with the latest technologies for optimal performance.',
      icon: Smartphone,
      gradient: 'from-pink-500 to-rose-500',
      features: ['iOS & Android', 'React/Next.js', 'UI/UX Design', 'Responsive'],
      buttonText: 'Learn More',
      action: () => {
        console.log('Mobile & Web App Development clicked');
        navigate('/services/mobile-app');
      }
    },
    {
      id: 'software-development',
      title: 'Software Development',
      description: 'Tailored software development that perfectly aligns with your unique business requirements and objectives using modern technologies.',
      icon: Code,
      gradient: 'from-purple-500 to-indigo-500',
      features: ['Custom Code', 'Scalable', 'Maintenance', 'Support'],
      buttonText: 'Learn More',
      action: () => {
        console.log('Software Development clicked');
        navigate('/services/custom-software');
      }
    },
    {
      id: 'custom-mcp-servers',
      title: 'Custom MCP Servers',
      description: 'Build custom Model Context Protocol (MCP) servers that enable seamless integration between AI models and your existing systems.',
      icon: Server,
      gradient: 'from-green-500 to-emerald-500',
      features: ['MCP Protocol', 'AI Integration', 'Custom APIs', 'Scalable'],
      buttonText: 'Learn More',
      action: () => {
        console.log('Custom MCP Servers clicked');
        navigate('/services/custom-mcp-servers');
      }
    },
    {
      id: 'data-analytics-visualization',
      title: 'Data Analytics & Visualization',
      description: 'Transform your data into actionable insights with advanced analytics and stunning visualizations that drive informed business decisions.',
      icon: BarChart3,
      gradient: 'from-indigo-500 to-purple-500',
      features: ['Data Analysis', 'Visualization', 'Business Intelligence', 'Reporting'],
      buttonText: 'Learn More',
      action: () => {
        console.log('Data Analytics & Visualization clicked');
        navigate('/services/data-analytics-visualization');
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