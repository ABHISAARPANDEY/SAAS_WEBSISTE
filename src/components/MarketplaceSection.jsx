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
  BarChart3, 
  CreditCard, 
  GraduationCap,
  Camera,
  Video,
  MessageSquare,
  Share2,
  Bell,
  Layers,
  ChevronRight,
  Clock
} from 'lucide-react';

const MarketplaceSection = () => {
  const navigate = useNavigate();

  const marketplaceCards = [
    {
      id: 'sparkwave',
      title: 'SPARKWAVE',
      description: 'Create AI-powered text, image, and video content for all social media platforms with automatic posting and analytics.',
      icon: Sparkles,
      gradient: 'from-purple-600 via-pink-600 to-orange-500',
      features: ['AI Content Generation', 'Multi-Platform Support', 'Auto-Posting', 'Analytics & Insights'],
      buttonText: 'Coming Soon',
      comingSoon: true,
      launchDate: 'Q4 2025',
      platforms: [
        { name: 'Instagram', logo: '/logos/instagram.png' },
        { name: 'Facebook', logo: '/logos/facebook.png' },
        { name: 'TikTok', logo: '/logos/ticktok.png' },
        { name: 'YouTube', logo: '/logos/youtube.png' },
        { name: 'Twitter', logo: '/logos/twitter.png' },
        { name: 'LinkedIn', logo: '/logos/linkedin.png' }
      ],
      action: () => {
        console.log('SPARKWAVE card clicked');
        navigate('/products/sparkwave');
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
        navigate('/products/ecommerce-auto-pilot');
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
        navigate('/api-keys');
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
      id: 'exceldash',
      title: 'EXCELDASH',
      description: 'Create powerful Power BI type dashboards directly from Excel files with advanced analytics and visualization capabilities.',
      icon: BarChart3,
      gradient: 'from-green-600 via-emerald-500 to-teal-500',
      features: ['Excel Integration', 'Power BI Style', 'Real-time Analytics', 'Custom Dashboards'],
      buttonText: 'Coming Soon',
      action: () => {
        console.log('ExcelDash card clicked');
        navigate('/products/exceldash');
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
        navigate('/ai-agents');
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
            Our <span className="text-accent-primary">Products</span>
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
                  <div className="flex items-center gap-2">
                    {card.comingSoon && (
                      <div className="flex items-center gap-1 px-2 py-1 bg-orange-500/20 rounded-full">
                        <Clock className="w-3 h-3 text-orange-300" />
                        <span className="text-orange-300 text-xs font-medium">{card.launchDate}</span>
                      </div>
                    )}
                    <ChevronRight className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-white/90 text-sm mb-6 leading-relaxed">
                  {card.description}
                </p>
                
                {/* Special SparkWave platforms section */}
                {card.id === 'sparkwave' && card.platforms && (
                  <div className="mb-6">
                    <h4 className="text-white/80 text-xs font-semibold mb-3">Supported Platforms:</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {card.platforms.map((platform, i) => (
                        <div key={i} className="flex items-center gap-2 bg-white/10 rounded-lg p-2">
                          <img 
                            src={platform.logo} 
                            alt={platform.name}
                            className="w-4 h-4 object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              if (e.target.nextSibling) {
                                e.target.nextSibling.style.display = 'block';
                              }
                            }}
                          />
                          <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center" style={{ display: 'none' }}>
                            <span className="text-white text-xs font-bold">{platform.name.charAt(0)}</span>
                          </div>
                          <span className="text-white text-xs font-medium truncate">{platform.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {card.features.map((feature, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-white text-xs font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <button className={`w-full font-semibold py-3 px-6 rounded-xl transition-all duration-300 border ${
                  card.comingSoon 
                    ? 'bg-orange-500/20 hover:bg-orange-500/30 text-orange-200 border-orange-400/30' 
                    : 'bg-white/20 hover:bg-white/30 text-white border-white/30'
                }`}>
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