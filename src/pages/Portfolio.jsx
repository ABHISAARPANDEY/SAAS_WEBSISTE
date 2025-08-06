import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Star, 
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
      rating: 4.8,
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: 'https://carepulse-lovat.vercel.app/'
    },
    {
      id: 2,
      name: 'Finance & Banking',
      description: 'Digital banking platforms with payment processing, loan management, and financial analytics.',
      icon: Building2,
      color: 'from-blue-500 to-purple-500',
      features: ['Digital Banking', 'Payment Processing', 'Loan Management', 'Financial Analytics'],
      rating: 4.9,
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: 'https://horizonvault.vercel.app/'
    },
    {
      id: 3,
      name: 'E-commerce & Retail',
      description: 'Complete online shopping platforms with payment processing, inventory management, and customer analytics.',
      icon: ShoppingCart,
      color: 'from-orange-500 to-red-500',
      features: ['Payment Integration', 'Inventory Management', 'Customer Analytics', 'Mobile Responsive'],
      rating: 4.9,
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: 'https://reactjs-ecommerce-app.vercel.app/'
    },
    {
      id: 4,
      name: 'Education & E-Learning',
      description: 'Learning management systems, virtual classrooms, and educational content platforms.',
      icon: GraduationCap,
      color: 'from-green-500 to-emerald-500',
      features: ['Virtual Classrooms', 'Content Management', 'Progress Tracking', 'Interactive Learning'],
      rating: 4.7,
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: '/product-demos/edulearn-platform'
    },
    {
      id: 5,
      name: 'Food & Restaurant',
      description: 'Restaurant management systems, food delivery platforms, and POS solutions.',
      icon: Utensils,
      color: 'from-yellow-500 to-orange-500',
      features: ['POS System', 'Delivery Integration', 'Menu Management', 'Order Tracking'],
      rating: 4.7,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: '/product-demos/foodie-delivery'
    },
    {
      id: 6,
      name: 'Retail & POS',
      description: 'Point of sale systems with inventory management, customer loyalty, and sales analytics.',
      icon: Store,
      color: 'from-gray-600 to-gray-800',
      features: ['Point of Sale', 'Inventory Management', 'Customer Loyalty', 'Sales Analytics'],
      rating: 4.6,
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: '/product-demos/retail-pos'
    },
    {
      id: 7,
      name: 'Banking Core',
      description: 'Core banking systems with account management, transaction processing, and regulatory compliance.',
      icon: Building2,
      color: 'from-indigo-500 to-purple-500',
      features: ['Account Management', 'Transaction Processing', 'Regulatory Compliance', 'Risk Management'],
      rating: 4.8,
      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: 'https://horizonvault.vercel.app/'
    },
    {
      id: 8,
      name: 'Real Estate & Property',
      description: 'Property management systems, real estate platforms, and rental management solutions.',
      icon: Home,
      color: 'from-green-500 to-emerald-500',
      features: ['Property Listings', 'Tenant Portal', 'Maintenance Requests', 'Financial Tracking'],
      rating: 4.9,
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: '/product-demos/property-manager'
    },
    {
      id: 9,
      name: 'Travel & Tourism',
      description: 'Travel booking platforms with flight search, hotel reservations, and itinerary management.',
      icon: Plane,
      color: 'from-cyan-500 to-blue-500',
      features: ['Flight Search', 'Hotel Reservations', 'Itinerary Management', 'Payment Processing'],
      rating: 4.8,
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
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: '/product-demos/streaming-platform'
    },
    {
      id: 11,
      name: 'Coffee Brand 3D Website',
      description: 'Immersive 3D website experience for premium coffee brand with interactive elements and stunning visuals.',
      icon: Coffee,
      color: 'from-amber-500 to-orange-500',
      features: ['3D Animations', 'Interactive Elements', 'Premium Design', 'Mobile Optimized'],
      rating: 4.9,
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
      rating: 4.8,
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: 'https://sweet-stroopwafel-b2b30f.netlify.app'
    },
    {
      id: 13,
      name: 'Social Media Assistant',
      description: 'AI-powered social media management platform with content creation, scheduling, and analytics.',
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-500',
      features: ['AI Content Creation', 'Social Scheduling', 'Analytics Dashboard', 'Multi-Platform'],
      rating: 4.9,
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: 'https://jovial-sawine-126db5.netlify.app'
    }
  ];

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
            
            <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
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
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-orbitron font-bold text-neon-green">150+</div>
                <div className="text-text-secondary">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-orbitron font-bold text-neon-cyan">13+</div>
                <div className="text-text-secondary">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-orbitron font-bold text-neon-pink">4.8</div>
                <div className="text-text-secondary">Average Rating</div>
              </div>
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
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-text-primary mb-4">
              Industry Expertise
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
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
                      <div className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center border border-neon-cyan group-hover:scale-110 transition-transform duration-300">
                        <industry.icon className="w-6 h-6 text-neon-cyan" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 z-10">
                      <div className="flex items-center gap-1 bg-dark-tertiary px-2 py-1 rounded-full border border-dark">
                        <Star className="w-4 h-4 text-neon-green fill-current" />
                        <span className="text-sm text-text-secondary">{industry.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Industry Info */}
                  <div className="p-6 flex-1 flex flex-col relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-dark-tertiary text-text-secondary rounded-full text-sm font-medium border border-dark">
                        Live Demo
                      </span>
                      <div className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4 text-text-secondary group-hover:text-neon-green transition-colors" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-orbitron font-bold text-text-primary mb-3 group-hover:text-neon-green transition-colors">
                      {industry.name}
                    </h3>
                    
                    <p className="text-text-secondary mb-4 leading-relaxed flex-1">
                      {industry.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-4">
                      <div className="text-sm text-text-secondary mb-2">Key Features:</div>
                      <div className="flex flex-wrap gap-2">
                        {industry.features.slice(0, 2).map((feature, idx) => (
                          <span key={idx} className="px-2 py-1 bg-dark-tertiary text-text-secondary rounded-md text-xs border border-dark">
                            {feature}
                          </span>
                        ))}
                        {industry.features.length > 2 && (
                          <span className="px-2 py-1 bg-dark-tertiary text-text-secondary rounded-md text-xs border border-dark">
                            +{industry.features.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-auto">
                      <button className="flex-1 btn-neon py-2 px-4 rounded-lg font-orbitron font-semibold hover:shadow-lg transition-all duration-300">
                        Live Demo
                      </button>
                      <button className="px-4 py-2 border border-dark rounded-lg text-text-secondary hover:bg-dark-tertiary hover:border-neon-green/50 hover:text-neon-green transition-all">
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
      <section className="py-20 bg-dark-secondary border-t border-dark">
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
                  className="glass-effect text-neon-cyan px-8 py-4 rounded-full font-orbitron font-semibold text-lg border border-neon-cyan hover:neon-glow-cyan transition-all duration-300 flex items-center gap-2"
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