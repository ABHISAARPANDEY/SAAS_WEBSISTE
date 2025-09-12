import React from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Users, 
  TrendingUp, 
  Award, 
  Globe, 
  Zap, 
  Shield, 
  Star,
  ChevronRight,
  CheckCircle
} from 'lucide-react';

const PartnerProgram = () => {
  const partnershipTypes = [
    {
      id: 1,
      title: 'Technology Partners',
      description: 'Integrate our solutions into your platforms and earn recurring revenue.',
      icon: Zap,
      gradient: 'from-blue-600 via-cyan-500 to-teal-500',
      benefits: ['API Access', 'White-label Solutions', 'Revenue Sharing', 'Technical Support'],
      commission: 'Up to 30%',
      status: 'Available'
    },
    {
      id: 2,
      title: 'Reseller Partners',
      description: 'Sell our products and services to your customers with exclusive pricing.',
      icon: Users,
      gradient: 'from-purple-600 via-pink-600 to-orange-500',
      benefits: ['Exclusive Pricing', 'Marketing Materials', 'Sales Training', 'Dedicated Support'],
      commission: 'Up to 40%',
      status: 'Available'
    },
    {
      id: 3,
      title: 'Strategic Partners',
      description: 'Deep integration and co-development opportunities for enterprise solutions.',
      icon: Handshake,
      gradient: 'from-green-600 via-emerald-500 to-teal-500',
      benefits: ['Custom Development', 'Joint Marketing', 'Priority Support', 'Exclusive Rights'],
      commission: 'Custom',
      status: 'Coming Soon'
    },
    {
      id: 4,
      title: 'Agency Partners',
      description: 'Deliver our solutions as part of your service offerings to clients.',
      icon: Award,
      gradient: 'from-orange-600 via-red-500 to-pink-500',
      benefits: ['Service Integration', 'Client Management', 'Training Programs', 'Revenue Sharing'],
      commission: 'Up to 35%',
      status: 'Coming Soon'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Revenue Growth',
      description: 'Earn recurring revenue with our high-margin technology solutions.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access our worldwide customer base and expand your market presence.'
    },
    {
      icon: Shield,
      title: 'Risk-Free Start',
      description: 'No upfront investment required. Start earning from day one.'
    },
    {
      icon: Star,
      title: 'Exclusive Benefits',
      description: 'Get priority support, training, and marketing resources.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Partner <span className="text-blue-600">Program</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Join our partner ecosystem and grow your business with our cutting-edge technology solutions. 
              Earn recurring revenue while helping businesses transform digitally.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span>500+ Partners</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-600" />
                <span>50+ Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <span>40% Avg Commission</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We provide everything you need to succeed in the digital transformation market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-700 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partnership Types
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Choose the partnership model that best fits your business strategy and goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partnershipTypes.map((partnership, index) => (
              <motion.div
                key={partnership.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl p-8 h-full shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                      <partnership.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        partnership.status === 'Available' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {partnership.status}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{partnership.title}</h3>
                  <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                    {partnership.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="text-gray-600 text-sm mb-2">Commission Rate:</div>
                    <div className="text-2xl font-bold text-blue-600 mb-4">{partnership.commission}</div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-gray-600 text-sm mb-3">Key Benefits:</div>
                    <div className="space-y-2">
                      {partnership.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    partnership.status === 'Available'
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}>
                    {partnership.status === 'Available' ? 'Apply Now' : 'Coming Soon'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Get Started
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our simple 4-step process to become a partner and start earning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Apply', description: 'Fill out our partner application form with your business details.' },
              { step: '2', title: 'Review', description: 'Our team reviews your application within 48 hours.' },
              { step: '3', title: 'Onboard', description: 'Complete training and get access to our partner portal.' },
              { step: '4', title: 'Earn', description: 'Start selling our solutions and earning commissions.' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Join our partner ecosystem and start earning with our innovative technology solutions.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
              Apply Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PartnerProgram; 