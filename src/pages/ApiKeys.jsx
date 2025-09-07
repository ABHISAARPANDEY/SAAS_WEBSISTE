import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Key, 
  CreditCard, 
  Brain, 
  Database, 
  Mail, 
  MapPin,
  Camera,
  FileText,
  Play,
  CheckCircle,
  Star,
  Users,
  Clock,
  Zap,
  Shield,
  Globe,
  Lock
} from 'lucide-react';

const ApiKeys = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  const apiCategories = [
    {
      id: 'payment-apis',
      title: 'PAYMENT APIs',
      description: 'Secure payment processing APIs for credit cards, digital wallets, and cryptocurrency transactions.',
      icon: CreditCard,
      gradient: 'from-green-600 via-emerald-500 to-teal-500',
      backgroundImage: 'https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Credit Card Processing', 'Digital Wallets', 'Cryptocurrency', 'Fraud Detection'],
      capabilities: ['PCI Compliant', 'Multi-currency', 'Real-time Processing', 'Refund Management'],
      stats: { transactions: '1M+', success: '99.9%', response: '<100ms' },
      action: () => navigate('/api-keys/payment-apis')
    },
    {
      id: 'ai-services',
      title: 'AI SERVICES',
      description: 'Advanced AI and machine learning APIs for natural language processing, computer vision, and predictive analytics.',
      icon: Brain,
      gradient: 'from-purple-600 via-violet-500 to-indigo-500',
      backgroundImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Chatbots'],
      capabilities: ['Multi-language Support', 'Real-time Processing', 'Custom Models', 'API Integration'],
      stats: { requests: '10M+', accuracy: '95%', response: '<200ms' },
      action: () => navigate('/api-keys/ai-services')
    },
    {
      id: 'database-apis',
      title: 'DATABASE APIs',
      description: 'Robust database APIs for data storage, retrieval, and management with advanced querying capabilities.',
      icon: Database,
      gradient: 'from-blue-600 via-cyan-500 to-teal-500',
      backgroundImage: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Data Storage', 'Query Processing', 'Real-time Sync', 'Backup & Recovery'],
      capabilities: ['SQL & NoSQL', 'Auto-scaling', 'Data Encryption', 'Analytics'],
      stats: { queries: '100M+', uptime: '99.99%', response: '<50ms' },
      action: () => navigate('/api-keys/database-apis')
    },
    {
      id: 'communication-apis',
      title: 'COMMUNICATION APIs',
      description: 'Comprehensive communication APIs for email, SMS, voice calls, and video conferencing integration.',
      icon: Mail,
      gradient: 'from-orange-600 via-amber-500 to-yellow-500',
      backgroundImage: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Email Services', 'SMS Gateway', 'Voice Calls', 'Video Conferencing'],
      capabilities: ['Multi-channel', 'Global Reach', 'Template Management', 'Analytics'],
      stats: { messages: '50M+', delivery: '99.5%', response: '<1s' },
      action: () => navigate('/api-keys/communication-apis')
    },
    {
      id: 'location-apis',
      title: 'LOCATION APIs',
      description: 'Advanced location and mapping APIs for geolocation services, route optimization, and location-based features.',
      icon: MapPin,
      gradient: 'from-red-600 via-pink-500 to-rose-500',
      backgroundImage: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Geolocation', 'Route Optimization', 'Maps Integration', 'Geofencing'],
      capabilities: ['Real-time Tracking', 'Multi-platform', 'Offline Support', 'Custom Maps'],
      stats: { requests: '25M+', accuracy: '3m', response: '<300ms' },
      action: () => navigate('/api-keys/location-apis')
    },
    {
      id: 'media-apis',
      title: 'MEDIA APIs',
      description: 'Powerful media processing APIs for image, video, and audio manipulation with cloud storage integration.',
      icon: Camera,
      gradient: 'from-indigo-600 via-purple-500 to-pink-500',
      backgroundImage: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Image Processing', 'Video Encoding', 'Audio Processing', 'Cloud Storage'],
      capabilities: ['Format Conversion', 'Compression', 'Watermarking', 'CDN Integration'],
      stats: { files: '5M+', processing: '99%', response: '<2s' },
      action: () => navigate('/api-keys/media-apis')
    }
  ];

  const pageEntryVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="pt-20 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => navigate('/marketplace')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium">Back to Marketplace</span>
          </motion.button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={pageEntryVariants}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Key className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                API KEYS
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Access powerful APIs for payment processing, AI services, and third-party integrations with comprehensive documentation.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Comprehensive Docs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* API Categories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your <span className="text-indigo-600">API Category</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Each API category provides specialized functionality with enterprise-grade security and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apiCategories.map((api, index) => (
              <motion.div
                key={api.id}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(api.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
                  {/* Card Header with Background Image */}
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={api.backgroundImage}
                      alt={api.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${api.gradient} opacity-80`}></div>
                    <div className="absolute inset-0 bg-black/30"></div>
                    
                    {/* Icon */}
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <api.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      {Object.entries(api.stats).map(([key, value], idx) => (
                        <div key={idx} className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1">
                          <div className="text-white text-xs font-semibold">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                      {api.title}
                    </h3>
                    <p className="text-gray-700 mb-4 flex-1">
                      {api.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-600 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {api.features.map((feature, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Capabilities */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-600 mb-2">Capabilities:</h4>
                      <div className="flex flex-wrap gap-1">
                        {api.capabilities.map((capability, idx) => (
                          <span key={idx} className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">
                            {capability}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Coming Soon Button */}
                    <div className={`w-full py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r ${api.gradient} opacity-75 flex items-center justify-center gap-2 cursor-not-allowed`}>
                      <Clock className="w-4 h-4" />
                      Coming Soon
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Features Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Enterprise-Grade <span className="text-indigo-600">Security</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our APIs are built with security, reliability, and performance as top priorities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Enterprise Security', description: 'SOC 2 compliant with end-to-end encryption' },
              { icon: Globe, title: 'Global CDN', description: 'Fast response times worldwide with edge caching' },
              { icon: Lock, title: 'API Authentication', description: 'Secure API keys with role-based access control' },
              { icon: Zap, title: 'High Performance', description: 'Sub-second response times with 99.9% uptime' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Ready to Integrate Our <span className="text-indigo-600">APIs</span>?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Get started with our APIs and build powerful applications with enterprise-grade infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Get API Keys
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 transition-all duration-300"
              >
                View Documentation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ApiKeys;
