import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { pageEntryVariants, buttonHoverVariants } from '../utils/animationUtils';
import { 
  Sparkles,
  Store,
  Workflow,
  Bot,
  Key, 
  Layers,
  BarChart3,
  ArrowRight
} from 'lucide-react';

const Marketplace = () => {
  const navigate = useNavigate();

  // Marketplace Cards Data
  const marketplaceCards = [
    {
      id: 'sparkwave',
      title: 'SPARKWAVE',
      description: 'Create AI-powered text, image, and video content for all social media platforms with automatic posting and analytics.',
      icon: Sparkles,
      gradient: 'from-purple-600 via-pink-600 to-orange-500',
      backgroundImage: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['AI Content Generation', 'Multi-Platform Support', 'Auto-Posting', 'Analytics & Insights'],
      buttonText: 'Explore SparkWave',
      comingSoon: false,
      platforms: [
        { name: 'Instagram', logo: '/logos/instagram.png' },
        { name: 'Facebook', logo: '/logos/facebook.png' },
        { name: 'TikTok', logo: '/logos/ticktok.png' },
        { name: 'YouTube', logo: '/logos/youtube.png' },
        { name: 'Twitter', logo: '/logos/twitter.png' },
        { name: 'LinkedIn', logo: '/logos/linkedin.png' }
      ],
      action: () => navigate('/products/sparkwave')
    },
    {
      id: 'ecommerce',
      title: 'ECOMMERCE AUTO PILOT',
      description: 'Link your Shopify, Amazon, Flipkart stores and manage all from one platform with automated inventory sync.',
      icon: Store,
      gradient: 'from-blue-600 via-cyan-500 to-teal-500',
      backgroundImage: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Multi-Store Management', 'Inventory Sync', 'Order Processing', 'Analytics Dashboard'],
      buttonText: 'Explore Ecommerce Pilot',
      comingSoon: false,
      launchDate: 'Q4 2025',
      action: () => navigate('/products/ecommerce-auto-pilot')
    },
    {
      id: 'automation',
      title: 'AUTOMATION',
      description: 'Ready-to-use automation templates that streamline business processes and save time with AI-powered workflows.',
      icon: Workflow,
      gradient: 'from-orange-600 via-red-500 to-pink-500',
      backgroundImage: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Pre-built Templates', 'AI-Powered', 'Custom Workflows', 'Time Saving'],
      buttonText: 'View Templates',
      comingSoon: false,
      action: () => navigate('/automation')
    },
    {
      id: 'ai-agents',
      title: 'AI AGENTS',
      description: 'Deploy intelligent AI agents that handle complex tasks, make decisions, and continuously learn from interactions.',
      icon: Bot,
      gradient: 'from-green-600 via-emerald-500 to-teal-500',
      backgroundImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Sales Agents', 'Marketing Agents', 'Support Agents', 'Custom Agents'],
      buttonText: 'Explore Agents',
      comingSoon: false,
      action: () => navigate('/ai-agents')
    },
    {
      id: 'apis',
      title: 'API KEYS',
      description: 'Access powerful APIs for payment processing, AI services, and third-party integrations with comprehensive documentation.',
      icon: Key,
      gradient: 'from-indigo-600 via-purple-500 to-pink-500',
      backgroundImage: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Payment APIs', 'AI Services', 'Third-party Integrations', 'Documentation'],
      buttonText: 'View APIs',
      comingSoon: false,
      action: () => navigate('/api-keys')
    },
    {
      id: 'exceldash',
      title: 'EXCELDASH',
      description: 'Create powerful Power BI type dashboards directly from Excel files with advanced analytics and visualization capabilities.',
      icon: BarChart3,
      gradient: 'from-emerald-600 via-green-500 to-lime-500',
      backgroundImage: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Excel Integration', 'Power BI Style', 'Real-time Analytics', 'Custom Dashboards'],
      buttonText: 'Explore ExcelDash',
      comingSoon: false,
      action: () => navigate('/products/exceldash')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 border border-gray-300 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 border border-gray-400 rounded-full opacity-15 animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-gray-200 opacity-5 rounded-full animate-ping"></div>
          <div className="absolute bottom-40 right-10 w-24 h-24 border border-gray-300 rounded-full opacity-10 animate-pulse"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={pageEntryVariants}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Discover powerful tools, AI agents, automation templates, and ready-made solutions to transform your business operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Marketplace Cards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
              >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Solution
                </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explore our comprehensive marketplace of business solutions, each designed to solve specific challenges and drive growth.
                </p>
              </motion.div>

          {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketplaceCards.map((card, index) => (
                  <motion.div
                key={card.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group cursor-pointer"
                onClick={card.action}
                  >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col relative border border-gray-200">
                  {/* Card Header with Background Image and Gradient Overlay */}
                  <div className="h-48 relative overflow-hidden">
                    {/* Background Image */}
                    <img
                      src={card.backgroundImage}
                      alt={card.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to gradient if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'block';
                      }}
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-80`}></div>
                    <div className="absolute inset-0 bg-black/30"></div>
                    
                    {/* Icon */}
                        <div className="absolute top-4 left-4 z-10">
                      <div className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center border border-white/20">
                        <card.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                    {/* Coming Soon Badge */}
                    {card.comingSoon && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs font-semibold rounded-full border border-yellow-500/30">
                          Coming Soon
                          </span>
                          </div>
                    )}
                    
                    {/* Launch Date */}
                    {card.launchDate && (
                      <div className="absolute bottom-4 right-4 z-10">
                        <span className="text-white/80 text-sm font-medium">
                          {card.launchDate}
                          </span>
                        </div>
                    )}
                      </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {card.title}
                        </h3>
                    <p className="text-gray-700 mb-6 flex-1 leading-relaxed">
                      {card.description}
                        </p>
                        
                        {/* Features */}
                    <div className="mb-6">
                          <div className="flex flex-wrap gap-2">
                        {card.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full border border-gray-200"
                          >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                    {/* Platforms (for SparkWave) */}
                    {card.platforms && (
                      <div className="mb-6">
                        <p className="text-gray-700 text-sm mb-3">Supported Platforms:</p>
                          <div className="flex flex-wrap gap-2">
                          {card.platforms.map((platform, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full border border-gray-200"
                            >
                              <img
                                src={platform.logo}
                                alt={platform.name}
                                className="w-4 h-4"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                }}
                              />
                              <span className="text-gray-800 text-xs">{platform.name}</span>
                        </div>
                ))}
              </div>
              </div>
                    )}

                    {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                      className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                        card.comingSoon
                          ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                          : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg'
                      }`}
                      disabled={card.comingSoon}
                    >
                      {card.buttonText}
                      <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              </div>
      </section>
    </div>
  );
};

export default Marketplace;