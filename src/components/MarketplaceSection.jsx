import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  Store, 
  ShoppingCart, 
  Zap, 
  Bot, 
  Workflow, 
  Code, 
  Building2, 
  CreditCard, 
  GraduationCap,
  Camera,
  Video,
  MessageSquare,
  Share2,
  Bell,
  Layers,
  ChevronRight
} from 'lucide-react';

const MarketplaceSection = () => {
  const navigate = useNavigate();

  const marketplaceCards = [
    {
      id: 'sparkwave',
      title: 'SPARKWAVE',
      description: 'Create AI-powered text, image, and video content for all social media platforms with automatic posting.',
      icon: Sparkles,
      gradient: 'from-purple-600 via-pink-600 to-orange-500',
      features: ['AI Images', 'AI Videos', 'AI Text', 'Auto Post'],
      buttonText: 'Start Free Trial',
      action: () => {
        console.log('SPARKWAVE card clicked');
        navigate('/marketplace');
      }
    },
    {
      id: 'ecommerce',
      title: 'ECOMMERCE AUTO PILOT',
      description: 'Link your Shopify, Amazon, Flipkart stores and manage all from one platform.',
      icon: Store,
      gradient: 'from-blue-600 via-cyan-500 to-teal-500',
      features: ['Multi-Store', 'Inventory', 'Auto Sync', 'Notifications'],
      buttonText: 'Coming Soon',
      action: () => {
        console.log('Ecommerce card clicked');
        navigate('/marketplace');
      }
    },
    {
      id: 'apis',
      title: 'API KEYS',
      description: 'Access powerful APIs for payment processing, AI services, and third-party integrations.',
      icon: Code,
      gradient: 'from-indigo-600 via-purple-500 to-pink-500',
      features: ['Payment APIs', 'AI Services', 'Integrations', 'Documentation'],
      buttonText: 'View APIs',
      action: () => {
        console.log('API Keys card clicked');
        navigate('/marketplace');
      }
    },
    {
      id: 'automation',
      title: 'AUTOMATION',
      description: 'Ready-to-use automation templates that streamline business processes and save time.',
      icon: Workflow,
      gradient: 'from-orange-600 via-red-500 to-pink-500',
      features: ['Templates', 'AI Powered', 'Automation', 'Time Saving'],
      buttonText: 'View Templates',
      action: () => {
        console.log('Automation card clicked');
        navigate('/automation');
      }
    },
    {
      id: 'solutions',
      title: 'INDUSTRY SOLUTIONS',
      description: 'Complete ready-made solutions for Healthcare, Finance, E-commerce, Education, and more.',
      icon: Building2,
      gradient: 'from-green-600 via-emerald-500 to-teal-500',
      features: ['Healthcare', 'Finance', 'E-commerce', 'Education'],
      buttonText: 'View Solutions',
      action: () => {
        console.log('Industry Solutions card clicked');
        navigate('/marketplace');
      }
    },
    {
      id: 'ai-agents',
      title: 'AI AGENTS',
      description: 'Intelligent AI agents designed to automate and enhance your business processes. From sales to customer support.',
      icon: Bot,
      gradient: 'from-cyan-600 via-blue-500 to-indigo-500',
      features: ['Sales Agent', 'Marketing Agent', 'CRM Agent', 'Support Agent'],
      buttonText: 'View Agents',
      action: () => {
        console.log('AI Agents card clicked');
        navigate('/marketplace');
      }
    }
  ];

  return (
    <section id="marketplace-section" className="py-20 bg-gradient-to-b from-primary to-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Our <span className="text-accent-primary">Marketplace</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Discover our comprehensive suite of tools and solutions designed to accelerate your business growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {marketplaceCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group cursor-pointer"
              onClick={card.action}
            >
              <div className={`bg-gradient-to-br ${card.gradient} rounded-2xl p-8 h-full shadow-2xl border border-white/20 backdrop-blur-sm hover:shadow-3xl transition-all duration-300`}>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                    <card.icon className="w-8 h-8 text-white" />
                  </div>
                  <ChevronRight className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-white/90 text-sm mb-6 leading-relaxed">
                  {card.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {card.features.map((feature, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-white text-xs font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 border border-white/30">
                  {card.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection; 