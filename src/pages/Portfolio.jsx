import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  ExternalLink,
  Building2,
  ShoppingCart,
  Heart,
  GraduationCap,
  Car,
  Plane,
  Utensils,
  Home,
  Music,
  Gamepad2,
  Palette,
  Store,
  Coffee,
  MessageSquare,
  Users
} from 'lucide-react';
import { pageEntryVariants, buttonHoverVariants } from '../utils/animationUtils';

const Portfolio = () => {
  const navigate = useNavigate();

  const industries = [
    {
      id: 1,
      name: 'Healthcare & Medical',
      description: 'Patient management systems, telemedicine platforms, and healthcare analytics solutions.',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      features: ['Patient Portal', 'Telemedicine', 'Health Analytics', 'HIPAA Compliant'],
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: 'https://carepulse-lovat.vercel.app/'
    },
    {
      id: 2,
      name: 'Finance & Banking',
      description: 'Digital banking platforms with payment processing, loan management, and financial analytics.',
      icon: Building2,
      color: 'from-blue-500 to-purple-500',
      features: ['Digital Banking', 'Payment Processing', 'Loan Management', 'Financial Analytics'],
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: 'https://horizonvault.vercel.app/'
    },
    {
      id: 3,
      name: 'E-commerce & Retail',
      description: 'Complete online shopping platforms with payment processing, inventory management, and customer analytics.',
      icon: ShoppingCart,
      color: 'from-orange-500 to-red-500',
      features: ['Payment Integration', 'Inventory Management', 'Customer Analytics', 'Mobile Responsive'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: 'https://lighthearted-pie-7e154c.netlify.app/'
    },
    {
      id: 4,
      name: 'Education & E-Learning',
      description: 'Learning management systems, virtual classrooms, and educational content platforms.',
      icon: GraduationCap,
      color: 'from-green-500 to-emerald-500',
      features: ['Virtual Classrooms', 'Content Management', 'Progress Tracking', 'Interactive Learning'],
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: '/product-demos/edulearn-platform'
    },
    {
      id: 5,
      name: 'Food & Restaurant',
      description: 'Restaurant management systems, food delivery platforms, and POS solutions.',
      icon: Utensils,
      color: 'from-yellow-500 to-orange-500',
      features: ['POS System', 'Delivery Integration', 'Menu Management', 'Order Tracking'],
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: '/product-demos/foodie-delivery'
    },
    {
      id: 6,
      name: 'Retail & POS',
      description: 'Point of sale systems with inventory management, customer loyalty, and sales analytics.',
      icon: Store,
      color: 'from-gray-600 to-gray-800',
      features: ['Point of Sale', 'Inventory Management', 'Customer Loyalty', 'Sales Analytics'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: '/product-demos/retail-pos'
    },
    {
      id: 7,
      name: 'Banking Core',
      description: 'Core banking systems with account management, transaction processing, and regulatory compliance.',
      icon: Building2,
      color: 'from-indigo-500 to-purple-500',
      features: ['Account Management', 'Transaction Processing', 'Regulatory Compliance', 'Risk Management'],
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: 'https://horizonvault.vercel.app/'
    },
    {
      id: 8,
      name: 'Real Estate & Property',
      description: 'Property management systems, real estate platforms, and rental management solutions.',
      icon: Home,
      color: 'from-green-500 to-emerald-500',
      features: ['Property Listings', 'Tenant Portal', 'Maintenance Requests', 'Financial Tracking'],
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: '/product-demos/property-manager'
    },
    {
      id: 9,
      name: 'Travel & Tourism',
      description: 'Travel booking platforms with flight search, hotel reservations, and itinerary management.',
      icon: Plane,
      color: 'from-cyan-500 to-blue-500',
      features: ['Flight Search', 'Hotel Reservations', 'Itinerary Management', 'Payment Processing'],
      image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: '/product-demos/travel-booking'
    },
    {
      id: 10,
      name: 'Entertainment & Media',
      description: 'OTT streaming platforms with content management, user subscriptions, and analytics.',
      icon: Music,
      color: 'from-purple-500 to-pink-500',
      features: ['Content Management', 'User Subscriptions', 'Video Streaming', 'Analytics Dashboard'],
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: '/product-demos/streaming-platform'
    },
    {
      id: 11,
      name: 'Coffee Brand 3D Website',
      description: 'Immersive 3D website experience for premium coffee brand with interactive elements and stunning visuals.',
      icon: Coffee,
      color: 'from-amber-500 to-orange-500',
      features: ['3D Animations', 'Interactive Elements', 'Premium Design', 'Mobile Optimized'],
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: 'https://phenomenal-melomakarona-44137f.netlify.app'
    },
    {
      id: 12,
      name: 'Gaming Company Website',
      description: 'Dynamic gaming company website with interactive elements, game showcases, and community features.',
      icon: Gamepad2,
      color: 'from-green-500 to-emerald-500',
      features: ['Game Showcases', 'Interactive Elements', 'Community Features', 'Responsive Design'],
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: 'https://sweet-stroopwafel-b2b30f.netlify.app'
    },
    {
      id: 13,
      name: 'Social Media Assistant',
      description: 'AI-powered social media management platform with content creation, scheduling, and analytics.',
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-500',
      features: ['AI Content Creation', 'Social Scheduling', 'Analytics Dashboard', 'Multi-Platform'],
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: 'https://jovial-sawine-126db5.netlify.app'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-white overflow-hidden">
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold text-text-primary leading-tight">
              Our{' '}
              <span className="rainbow-text">
                Portfolio
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Explore our diverse portfolio of successful implementations across various industries. 
              Each project showcases our expertise in creating innovative digital solutions.
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-8 mt-12"
            >
             
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-gray-900 mb-4">
              Industry Expertise
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We've successfully delivered solutions across diverse industries, 
              each with unique challenges and requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => {
                  if (industry.demoLink.startsWith('http')) {
                    // External URL - open in new tab
                    window.open(industry.demoLink, '_blank');
                  } else {
                    // Internal route - navigate
                    window.scrollTo(0, 0);
                    navigate(industry.demoLink);
                  }
                }}
              >
                <div className="card-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col relative">
                  {/* Industry Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4 z-10">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center border border-blue-600 group-hover:scale-110 transition-transform duration-300">
                        <industry.icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                  </div>

                  {/* Industry Info */}
                  <div className="p-6 flex-1 flex flex-col relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium border border-gray-200">
                        Live Demo
                      </span>
                      <div className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4 text-gray-700 group-hover:text-blue-600 transition-colors" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-orbitron font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {industry.name}
                    </h3>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed flex-1">
                      {industry.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-4">
                      <div className="text-sm text-gray-700 mb-2">Key Features:</div>
                      <div className="flex flex-wrap gap-2">
                        {industry.features.slice(0, 2).map((feature, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-800 rounded-md text-xs border border-gray-200">
                            {feature}
                          </span>
                        ))}
                        {industry.features.length > 2 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-md text-xs border border-gray-200">
                            +{industry.features.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-auto">
                      <button className="flex-1 btn-neon py-2 px-4 rounded-lg font-orbitron font-semibold hover:shadow-lg transition-all duration-300">
                        Live Demo
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 hover:border-blue-500/50 hover:text-blue-600 transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-gray-200">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 border border-blue-300 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 border border-blue-400 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-blue-200 opacity-10 rounded-full animate-ping"></div>
          <div className="absolute bottom-40 right-10 w-24 h-24 border border-blue-300 rounded-full opacity-20 animate-pulse"></div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Let's discuss how we can help bring your vision to life with our expertise and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate('/get-quote');
                  }}
                  className="btn-neon px-8 py-4 rounded-full font-orbitron font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <Building2 className="w-5 h-5 text-dark-primary" />
                  Start Your Project
                </motion.button>
                
                <motion.button
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => navigate('/services')}
                  className="bg-blue-600 text-white px-8 py-4 rounded-full font-orbitron font-semibold text-lg border border-blue-600 hover:bg-blue-700 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  <ArrowRight className="w-5 h-5" />
                  View Services
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio; 