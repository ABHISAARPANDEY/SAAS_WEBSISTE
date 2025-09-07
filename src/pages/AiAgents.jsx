import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Hotel, 
  Heart, 
  ShoppingCart, 
  MapPin, 
  Home, 
  TrendingUp,
  Bot,
  Play,
  CheckCircle,
  Star,
  Users,
  Clock,
  Zap
} from 'lucide-react';
import EcommerceAgentModal from '../components/EcommerceAgentModal';
import HospitalAgentModal from '../components/HospitalAgentModal';
import RealEstateAgentModal from '../components/RealEstateAgentModal';
import HotelAgentModal from '../components/HotelAgentModal';
import TourismAgentModal from '../components/TourismAgentModal';
import FinanceAgentModal from '../components/FinanceAgentModal';

const AiAgents = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isEcommerceModalOpen, setIsEcommerceModalOpen] = useState(false);
  const [isHospitalModalOpen, setIsHospitalModalOpen] = useState(false);
  const [isRealEstateModalOpen, setIsRealEstateModalOpen] = useState(false);
  const [isHotelModalOpen, setIsHotelModalOpen] = useState(false);
  const [isTourismModalOpen, setIsTourismModalOpen] = useState(false);
  const [isFinanceModalOpen, setIsFinanceModalOpen] = useState(false);

  const agents = [
    {
      id: 'hotel-agent',
      title: 'HOTEL AGENT',
      description: 'Intelligent hotel booking and customer service agent that handles reservations, inquiries, and guest support 24/7.',
      icon: Hotel,
      gradient: 'from-blue-600 via-cyan-500 to-teal-500',
      backgroundImage: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Room Booking', 'Customer Support', 'Reservation Management', 'Guest Services'],
      capabilities: ['Multi-language Support', 'Real-time Availability', 'Payment Processing', 'Guest Communication'],
      stats: { bookings: '10K+', satisfaction: '98%', response: '<2s' },
      action: () => setIsHotelModalOpen(true)
    },
    {
      id: 'hospital-agent',
      title: 'HOSPITAL AGENT',
      description: 'Comprehensive hospital appointment and patient support agent for healthcare facilities and medical centers.',
      icon: Heart,
      gradient: 'from-red-600 via-pink-500 to-rose-500',
      backgroundImage: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Appointment Scheduling', 'Patient Support', 'Medical Records', 'Emergency Alerts'],
      capabilities: ['HIPAA Compliant', 'Multi-department Support', 'Prescription Management', 'Insurance Verification'],
      stats: { appointments: '5K+', accuracy: '99.5%', response: '<1s' },
      action: () => setIsHospitalModalOpen(true)
    },
    {
      id: 'ecommerce-agent',
      title: 'ECOMMERCE AGENT',
      description: 'Advanced ecommerce product selling and customer service agent for online stores and marketplaces.',
      icon: ShoppingCart,
      gradient: 'from-green-600 via-emerald-500 to-lime-500',
      backgroundImage: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Product Sales', 'Customer Support', 'Order Management', 'Inventory Tracking'],
      capabilities: ['Multi-platform Integration', 'Payment Processing', 'Return Management', 'Upselling'],
      stats: { sales: '50K+', conversion: '15%', response: '<3s' },
      action: () => setIsEcommerceModalOpen(true)
    },
    {
      id: 'tourism-agent',
      title: 'TOURISM AGENT',
      description: 'Specialized tourism agent for travelers, providing travel planning, booking assistance, and local recommendations.',
      icon: MapPin,
      gradient: 'from-orange-600 via-amber-500 to-yellow-500',
      backgroundImage: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Travel Planning', 'Booking Assistance', 'Local Recommendations', 'Itinerary Management'],
      capabilities: ['Multi-destination Support', 'Weather Integration', 'Cultural Insights', 'Emergency Support'],
      stats: { trips: '25K+', satisfaction: '96%', response: '<2s' },
      action: () => setIsTourismModalOpen(true)
    },
    {
      id: 'real-estate-agent',
      title: 'REAL ESTATE AGENT',
      description: 'Professional real estate agent for property dealers, handling listings, client matching, and transaction support.',
      icon: Home,
      gradient: 'from-purple-600 via-violet-500 to-indigo-500',
      backgroundImage: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Property Listings', 'Client Matching', 'Transaction Support', 'Market Analysis'],
      capabilities: ['Virtual Tours', 'Document Management', 'Legal Compliance', 'Market Insights'],
      stats: { properties: '15K+', deals: '2K+', response: '<5s' },
      action: () => setIsRealEstateModalOpen(true)
    },
    {
      id: 'finance-agent',
      title: 'FINANCE AGENT',
      description: 'Advanced finance agent for stocks, investments, and financial services with real-time market analysis.',
      icon: TrendingUp,
      gradient: 'from-emerald-600 via-green-500 to-teal-500',
      backgroundImage: 'https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Stock Analysis', 'Investment Advice', 'Portfolio Management', 'Risk Assessment'],
      capabilities: ['Real-time Data', 'Algorithmic Trading', 'Compliance Monitoring', 'Financial Planning'],
      stats: { trades: '100K+', accuracy: '87%', response: '<1s' },
      action: () => setIsFinanceModalOpen(true)
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
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                AI AGENTS
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Deploy intelligent AI agents that handle complex tasks, make decisions, and continuously learn from interactions.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Multi-language Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Continuous Learning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Custom Integration</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your <span className="text-blue-600">AI Agent</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Each agent is specialized for specific industries and use cases, providing expert-level assistance and automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent, index) => (
              <motion.div
                key={agent.id}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(agent.id)}
                onHoverEnd={() => setHoveredCard(null)}
                onClick={() => {
                  if (agent.id !== 'ecommerce-agent' && agent.id !== 'hospital-agent' && agent.id !== 'real-estate-agent' && agent.id !== 'hotel-agent' && agent.id !== 'tourism-agent' && agent.id !== 'finance-agent') {
                    agent.action();
                  }
                }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
                  {/* Card Header with Background Image */}
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={agent.backgroundImage}
                      alt={agent.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${agent.gradient} opacity-80`}></div>
                    <div className="absolute inset-0 bg-black/30"></div>
                    
                    {/* Icon */}
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <agent.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      {Object.entries(agent.stats).map(([key, value], idx) => (
                        <div key={idx} className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1">
                          <div className="text-white text-xs font-semibold">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {agent.title}
                    </h3>
                    <p className="text-gray-700 mb-4 flex-1">
                      {agent.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-600 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {agent.features.map((feature, idx) => (
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
                        {agent.capabilities.map((capability, idx) => (
                          <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                            {capability}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Test Now Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        agent.action();
                      }}
                      className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 bg-gradient-to-r ${agent.gradient} hover:shadow-lg flex items-center justify-center gap-2`}
                    >
                      <Play className="w-4 h-4" />
                      Test Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Ready to Deploy Your <span className="text-blue-600">AI Agent</span>?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Get started with any of our AI agents and transform your business operations with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ecommerce Agent Modal */}
      <EcommerceAgentModal 
        isOpen={isEcommerceModalOpen}
        onClose={() => setIsEcommerceModalOpen(false)}
      />

      {/* Hospital Agent Modal */}
      <HospitalAgentModal 
        isOpen={isHospitalModalOpen}
        onClose={() => setIsHospitalModalOpen(false)}
      />

      {/* Real Estate Agent Modal */}
      <RealEstateAgentModal 
        isOpen={isRealEstateModalOpen}
        onClose={() => setIsRealEstateModalOpen(false)}
      />

      {/* Hotel Agent Modal */}
      <HotelAgentModal 
        isOpen={isHotelModalOpen}
        onClose={() => setIsHotelModalOpen(false)}
      />

      {/* Tourism Agent Modal */}
      <TourismAgentModal 
        isOpen={isTourismModalOpen}
        onClose={() => setIsTourismModalOpen(false)}
      />

      {/* Finance Agent Modal */}
      <FinanceAgentModal 
        isOpen={isFinanceModalOpen}
        onClose={() => setIsFinanceModalOpen(false)}
      />
    </div>
  );
};

export default AiAgents;
