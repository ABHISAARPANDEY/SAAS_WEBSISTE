import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Clock, 
  DollarSign, 
  Zap, 
  Award, 
  Star, 
  ArrowRight,
  Building2,
  ShoppingCart,
  Heart,
  GraduationCap
} from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Healthcare Platform Transformation',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      icon: Heart,
      gradient: 'from-red-600 via-pink-600 to-orange-500',
      challenge: 'Legacy system causing 40% slower patient processing and 60% higher error rates.',
      solution: 'Developed a modern healthcare platform with AI-powered diagnosis assistance and automated patient management.',
      results: [
        { metric: 'Processing Speed', value: '+300%', description: 'Faster patient processing' },
        { metric: 'Error Reduction', value: '-85%', description: 'Reduced diagnostic errors' },
        { metric: 'Cost Savings', value: '$2.5M', description: 'Annual operational savings' }
      ],
      duration: '6 months',
      team: '8 developers'
    },
    {
      id: 2,
      title: 'E-commerce Automation Suite',
      client: 'RetailMax',
      industry: 'E-commerce',
      icon: ShoppingCart,
      gradient: 'from-blue-600 via-cyan-500 to-teal-500',
      challenge: 'Manual inventory management leading to 25% stockouts and 30% excess inventory costs.',
      solution: 'Built an AI-driven inventory management system with predictive analytics and automated reordering.',
      results: [
        { metric: 'Stockout Reduction', value: '-90%', description: 'Eliminated stockouts' },
        { metric: 'Inventory Costs', value: '-40%', description: 'Reduced excess inventory' },
        { metric: 'Revenue Growth', value: '+45%', description: 'Increased sales' }
      ],
      duration: '4 months',
      team: '6 developers'
    },
    {
      id: 3,
      title: 'Financial Services Platform',
      client: 'FinTech Pro',
      industry: 'Finance',
      icon: DollarSign,
      gradient: 'from-green-600 via-emerald-500 to-teal-500',
      challenge: 'Outdated banking system with 3-hour transaction processing and poor user experience.',
      solution: 'Created a modern banking platform with real-time transactions and mobile-first design.',
      results: [
        { metric: 'Transaction Speed', value: '+500%', description: 'Faster processing' },
        { metric: 'User Satisfaction', value: '+180%', description: 'Improved UX scores' },
        { metric: 'Customer Retention', value: '+65%', description: 'Higher retention rate' }
      ],
      duration: '8 months',
      team: '12 developers'
    },
    {
      id: 4,
      title: 'Educational Learning Platform',
      client: 'EduTech Innovations',
      industry: 'Education',
      icon: GraduationCap,
      gradient: 'from-purple-600 via-pink-600 to-orange-500',
      challenge: 'Traditional learning methods resulting in 35% student dropout rate and poor engagement.',
      solution: 'Developed an AI-powered adaptive learning platform with personalized content and gamification.',
      results: [
        { metric: 'Student Engagement', value: '+250%', description: 'Increased participation' },
        { metric: 'Dropout Rate', value: '-70%', description: 'Reduced student attrition' },
        { metric: 'Learning Outcomes', value: '+120%', description: 'Improved test scores' }
      ],
      duration: '7 months',
      team: '10 developers'
    },
    {
      id: 5,
      title: 'Manufacturing Automation System',
      client: 'Industrial Corp',
      industry: 'Manufacturing',
      icon: Building2,
      gradient: 'from-orange-600 via-red-500 to-pink-500',
      challenge: 'Manual production processes causing 50% efficiency loss and 30% quality issues.',
      solution: 'Implemented IoT-based automation with real-time monitoring and predictive maintenance.',
      results: [
        { metric: 'Production Efficiency', value: '+200%', description: 'Increased output' },
        { metric: 'Quality Improvement', value: '+85%', description: 'Reduced defects' },
        { metric: 'Cost Reduction', value: '-45%', description: 'Lower operational costs' }
      ],
      duration: '9 months',
      team: '15 developers'
    },
    {
      id: 6,
      title: 'Real Estate Management Platform',
      client: 'PropertyTech',
      industry: 'Real Estate',
      icon: Building2,
      gradient: 'from-indigo-600 via-purple-500 to-pink-500',
      challenge: 'Disconnected property management systems leading to 40% tenant complaints and 25% revenue loss.',
      solution: 'Built an integrated property management platform with tenant portal and automated billing.',
      results: [
        { metric: 'Tenant Satisfaction', value: '+160%', description: 'Improved ratings' },
        { metric: 'Revenue Recovery', value: '+35%', description: 'Increased collections' },
        { metric: 'Operational Efficiency', value: '+180%', description: 'Streamlined processes' }
      ],
      duration: '5 months',
      team: '7 developers'
    }
  ];

  const stats = [
    { icon: TrendingUp, value: '200+', label: 'Projects Completed' },
    { icon: Users, value: '150+', label: 'Happy Clients' },
    { icon: Clock, value: '98%', label: 'On-Time Delivery' },
    { icon: Star, value: '4.9/5', label: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-primary-dark">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
              Success <span className="text-accent-primary">Stories</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Discover how we've helped businesses across industries transform their operations and achieve remarkable results.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-text-secondary">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent-primary" />
                <span>200+ Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-accent-primary" />
                <span>150+ Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-primary" />
                <span>98% Success Rate</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-accent-primary" />
                </div>
                <div className="text-3xl font-bold text-text-primary mb-2">{stat.value}</div>
                <div className="text-text-secondary text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Featured Case Studies
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Real results from real clients. See how our solutions have transformed businesses across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${study.gradient} rounded-2xl p-8 h-full shadow-2xl border border-white/20 backdrop-blur-sm hover:shadow-3xl transition-all duration-300`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                      <study.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium text-white">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-white/80 text-sm mb-6">{study.client}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                    <p className="text-white/90 text-sm mb-4">{study.challenge}</p>
                    
                    <h4 className="text-white font-semibold mb-2">Solution:</h4>
                    <p className="text-white/90 text-sm mb-4">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Results:</h4>
                    <div className="space-y-2">
                      {study.results.map((result, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <span className="text-white/80 text-sm">{result.metric}:</span>
                          <div className="text-right">
                            <div className="text-white font-bold">{result.value}</div>
                            <div className="text-white/60 text-xs">{result.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-white/80 text-sm mb-6">
                    <span>Duration: {study.duration}</span>
                    <span>Team: {study.team}</span>
                  </div>
                  
                  <button className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 border border-white/30 flex items-center justify-center gap-2">
                    View Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent-primary to-accent-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Let's discuss how we can transform your business with our innovative solutions.
            </p>
            <button className="bg-white text-accent-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies; 