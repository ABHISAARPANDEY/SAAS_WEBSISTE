import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Star, 
  Check, 
  Code, 
  Shield, 
  Zap, 
  Users,
  Download,
  Play,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Clock,
  Layers,
  Settings,
  Workflow,
  X
} from 'lucide-react';
import { getTemplateById } from '../data/automationData';

const AutomationDetail = () => {
  const { templateId } = useParams();
  const navigate = useNavigate();
  const template = getTemplateById(templateId);
  const [activeTab, setActiveTab] = useState('overview');
  const [showDemoModal, setShowDemoModal] = useState(false);

  if (!template) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-primary">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-4">Template Not Found</h1>
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              navigate('/automation');
            }}
            className="flex items-center gap-2 text-text-secondary hover:text-neon-green transition-colors mb-8 group"
          >
            Back to Automation Templates
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-primary">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 bg-secondary overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 border border-accent-primary rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 border border-accent-secondary rounded-full opacity-15 animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-accent-primary opacity-5 rounded-full animate-ping"></div>
          <div className="absolute bottom-40 right-10 w-24 h-24 border border-accent-tertiary rounded-full opacity-10 animate-pulse"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-[95%]">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => {
              window.scrollTo(0, 0);
              navigate('/automation');
            }}
            className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors mb-6 sm:mb-8 group min-h-[44px]"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Automation Templates
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Template Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-card-hover border border-border-color">
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-4">
                    <span className="px-2 py-1 sm:px-3 sm:py-1 stripe-badge-primary rounded-full text-xs sm:text-sm font-medium">
                      {template.category}
                    </span>
                    <span className="px-2 py-1 sm:px-3 sm:py-1 stripe-badge-success rounded-full text-xs sm:text-sm font-medium">
                      {template.useCase}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Template Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 border border-accent-primary rounded-xl sm:rounded-2xl flex items-center justify-center bg-white shadow-button pulse`}>
                  <template.icon className={`w-6 h-6 sm:w-8 sm:h-8 text-accent-primary`} />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-1 sm:mb-2">
                    {template.name}
                  </h1>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 text-accent-primary fill-current" />
                      <Star className="w-5 h-5 text-accent-primary fill-current" />
                      <Star className="w-5 h-5 text-accent-primary fill-current" />
                      <Star className="w-5 h-5 text-accent-primary fill-current" />
                      <Star className="w-5 h-5 text-accent-primary fill-current" />
                    </div>
                    <span className="text-text-secondary">(4.9/5 from 127 reviews)</span>
                  </div>
                </div>
              </div>

              <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
                {template.description}
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {template.features.slice(0, 4).map((feature, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 sm:px-4 sm:py-2 bg-dark-tertiary text-text-secondary rounded-full text-xs sm:text-sm font-medium border border-dark"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowDemoModal(true)}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate('/get-quote');
                  }}
                  className="stripe-button px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg shadow-button hover:shadow-button-hover transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  Submit Buy Request
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 text-accent-primary" />
                  Download Template
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-4 sm:py-8 bg-white border-b border-t border-border-color sticky top-[60px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-[95%] overflow-x-auto">
          <div className="flex flex-nowrap sm:flex-wrap gap-2 sm:gap-4 min-w-max sm:min-w-0">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-orbitron font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeTab === 'overview'
                  ? 'stripe-button shadow-lg'
                  : 'btn-secondary'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('setup')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-orbitron font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeTab === 'setup'
                  ? 'stripe-button shadow-lg'
                  : 'btn-secondary'
              }`}
            >
              Setup Guide
            </button>
            <button
              onClick={() => setActiveTab('usecases')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-orbitron font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeTab === 'usecases'
                  ? 'stripe-button shadow-lg'
                  : 'btn-secondary'
              }`}
            >
              Use Cases
            </button>
            <button
              onClick={() => setActiveTab('requirements')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-orbitron font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeTab === 'requirements'
                  ? 'stripe-button shadow-lg'
                  : 'btn-secondary'
              }`}
            >
              Requirements
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-[95%]">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              {/* Features */}
              <div>
                <h2 className="text-3xl font-orbitron font-bold text-text-primary mb-8">
                  Key <span className="gradient-neon-text">Features</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {template.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-dark-secondary rounded-xl p-6 border border-dark hover:border-neon-green/30 transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-dark-tertiary border border-neon-green rounded-lg flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-neon-green" />
                        </div>
                        <div>
                          <h3 className="text-lg font-orbitron font-bold text-text-primary mb-2">{feature}</h3>
                          <p className="text-text-secondary text-sm">
                            {/* Feature description would go here in a real implementation */}
                            Enhance your workflow with powerful automation capabilities.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Integrations */}
              <div>
                <h2 className="text-3xl font-orbitron font-bold text-text-primary mb-8">
                  Supported <span className="gradient-neon-text">Integrations</span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {template.integrations.map((integration, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-dark-secondary rounded-xl p-4 border border-dark hover:border-neon-cyan/30 transition-all text-center"
                    >
                      <div className="w-12 h-12 bg-dark-tertiary border border-neon-cyan rounded-full flex items-center justify-center mx-auto mb-3">
                        <ExternalLink className="w-5 h-5 text-neon-cyan" />
                      </div>
                      <p className="text-text-primary font-medium">{integration}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Complexity and Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-dark-secondary rounded-xl p-6 border border-dark"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-dark-tertiary border border-neon-green rounded-lg flex items-center justify-center">
                      <Settings className="w-6 h-6 text-neon-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-orbitron font-bold text-text-primary">Complexity</h3>
                      <p className="text-text-secondary">{template.complexity}</p>
                    </div>
                  </div>
                  <p className="text-text-secondary text-sm">
                    {template.complexity === 'Basic' && 'Easy to set up with minimal technical knowledge required.'}
                    {template.complexity === 'Intermediate' && 'Requires some technical understanding and configuration.'}
                    {template.complexity === 'Advanced' && 'Requires technical expertise and custom configuration.'}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-dark-secondary rounded-xl p-6 border border-dark"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-dark-tertiary border border-neon-cyan rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-neon-cyan" />
                    </div>
                    <div>
                      <h3 className="text-lg font-orbitron font-bold text-text-primary">Setup Time</h3>
                      <p className="text-text-secondary">
                        {template.complexity === 'Basic' && '15-30 minutes'}
                        {template.complexity === 'Intermediate' && '1-2 hours'}
                        {template.complexity === 'Advanced' && '2-4 hours'}
                      </p>
                    </div>
                  </div>
                  <p className="text-text-secondary text-sm">
                    Estimated time to fully configure and deploy this automation template.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-dark-secondary rounded-xl p-6 border border-dark"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-dark-tertiary border border-neon-pink rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-neon-pink" />
                    </div>
                    <div>
                      <h3 className="text-lg font-orbitron font-bold text-text-primary">Pricing</h3>
                      <p className="text-text-secondary">
                        {template.pricing.free ? 'Free' : 'Premium'}
                      </p>
                    </div>
                  </div>
                  <p className="text-text-secondary text-sm">
                    {template.pricing.free 
                      ? 'This template is available for free with basic features.' 
                      : 'This template requires a premium subscription.'}
                    {template.pricing.premium.available && ' Premium features available.'}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Setup Guide Tab */}
          {activeTab === 'setup' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <h2 className="text-3xl font-orbitron font-bold text-text-primary mb-8">
                Setup <span className="gradient-neon-text">Guide</span>
              </h2>

              <div className="space-y-8">
                {template.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-dark-secondary rounded-xl p-6 border border-dark"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-dark-tertiary border border-neon-green rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-neon-green font-orbitron font-bold text-xl">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-orbitron font-bold text-text-primary mb-3">{step}</h3>
                        <div className="bg-dark-tertiary rounded-lg p-4 border border-dark">
                          <p className="text-text-secondary">
                            {/* Step details would go here in a real implementation */}
                            Detailed instructions for this step would be provided here, including screenshots and specific configuration guidance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-dark-tertiary rounded-xl p-6 border border-neon-cyan/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-dark-tertiary border border-neon-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <div>
                    <h3 className="text-xl font-orbitron font-bold text-text-primary mb-3">Pro Tips</h3>
                    <ul className="space-y-2 text-text-secondary">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                        <span>Test your automation with sample data before going live</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                        <span>Set up error notifications to monitor for issues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                        <span>Document your configuration for future reference</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                        <span>Regularly review and optimize your automation rules</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Use Cases Tab */}
          {activeTab === 'usecases' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <h2 className="text-3xl font-orbitron font-bold text-text-primary mb-8">
                Use <span className="gradient-neon-text">Cases</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {template.useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-dark-secondary rounded-xl p-6 border border-dark hover:border-neon-pink/30 transition-all h-full"
                  >
                    <div className="w-12 h-12 bg-dark-tertiary border border-neon-pink rounded-lg flex items-center justify-center mb-4">
                      <Workflow className="w-6 h-6 text-neon-pink" />
                    </div>
                    <h3 className="text-xl font-orbitron font-bold text-text-primary mb-3">{useCase.title}</h3>
                    <p className="text-text-secondary">{useCase.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-dark-tertiary rounded-xl p-6 border border-neon-green/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-dark-tertiary border border-neon-green rounded-lg flex items-center justify-center flex-shrink-0">
                    <Layers className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-orbitron font-bold text-text-primary mb-3">Customization Options</h3>
                    <p className="text-text-secondary mb-4">
                      This template can be customized to fit your specific needs. Here are some ways you can adapt it:
                    </p>
                    <ul className="space-y-2 text-text-secondary">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                        <span>Modify workflow steps to match your internal processes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                        <span>Add or remove integrations based on your tech stack</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                        <span>Customize notification templates and triggers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                        <span>Adjust data processing rules to match your requirements</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Requirements Tab */}
          {activeTab === 'requirements' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <h2 className="text-3xl font-orbitron font-bold text-text-primary mb-8">
                System <span className="gradient-neon-text">Requirements</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Required Components */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-dark-secondary rounded-xl p-6 border border-dark"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-dark-tertiary border border-neon-green rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-neon-green" />
                    </div>
                    <h3 className="text-xl font-orbitron font-bold text-text-primary">Required Components</h3>
                  </div>

                  <div className="space-y-4">
                    {Object.entries(template.requirements).filter(([key]) => key !== 'optional').map(([key, value], index) => (
                      <div key={index} className="bg-dark-tertiary rounded-lg p-4 border border-dark">
                        <h4 className="font-orbitron font-bold text-text-primary mb-2 capitalize">{key}</h4>
                        <p className="text-text-secondary">{value}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Optional Components */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-dark-secondary rounded-xl p-6 border border-dark"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-dark-tertiary border border-neon-cyan rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-neon-cyan" />
                    </div>
                    <h3 className="text-xl font-orbitron font-bold text-text-primary">Optional Enhancements</h3>
                  </div>

                  <div className="space-y-4">
                    {template.requirements.optional && (
                      <div className="bg-dark-tertiary rounded-lg p-4 border border-dark">
                        <h4 className="font-orbitron font-bold text-text-primary mb-2">Optional Components</h4>
                        <p className="text-text-secondary">{template.requirements.optional}</p>
                      </div>
                    )}

                    {template.pricing.premium.available && (
                      <div className="bg-dark-tertiary rounded-lg p-4 border border-neon-pink/30">
                        <h4 className="font-orbitron font-bold text-neon-pink mb-2">Premium Features</h4>
                        <ul className="space-y-2">
                          {template.pricing.premium.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2 text-text-secondary">
                              <Star className="w-4 h-4 text-neon-pink flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Technical Specifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-dark-tertiary rounded-xl p-6 border border-dark"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-dark-tertiary border border-neon-pink rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-neon-pink" />
                  </div>
                  <h3 className="text-xl font-orbitron font-bold text-text-primary">Technical Specifications</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-dark-primary rounded-lg p-4 border border-dark">
                    <h4 className="font-orbitron font-bold text-text-primary mb-2">Execution Environment</h4>
                    <p className="text-text-secondary">Cloud-based with secure API connections</p>
                  </div>
                  <div className="bg-dark-primary rounded-lg p-4 border border-dark">
                    <h4 className="font-orbitron font-bold text-text-primary mb-2">Data Processing</h4>
                    <p className="text-text-secondary">End-to-end encrypted with GDPR compliance</p>
                  </div>
                  <div className="bg-dark-primary rounded-lg p-4 border border-dark">
                    <h4 className="font-orbitron font-bold text-text-primary mb-2">Scalability</h4>
                    <p className="text-text-secondary">Handles up to 10,000 operations per day</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-secondary border-t border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
              Ready to Automate?
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto px-2">
              Start using this template today and transform your workflow
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowDemoModal(true)}
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate('/get-quote');
                }}
                className="stripe-button px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg shadow-button hover:shadow-button-hover transition-all duration-300 flex items-center gap-2 w-full sm:w-auto"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                Submit Buy Request
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate('/get-quote');
                }}
                className="btn-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg transition-all duration-300 w-full sm:w-auto"
              >
                Request Customization
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setShowDemoModal(false)}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-dark-secondary rounded-2xl max-w-2xl w-full shadow-2xl border border-dark"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-dark">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 border border-${template.neonColor} rounded-lg flex items-center justify-center`}>
                    <template.icon className={`w-5 h-5 text-${template.neonColor}`} />
                  </div>
                  <h3 className="text-xl font-orbitron font-bold text-text-primary">{template.name}</h3>
                </div>
                <button
                  onClick={() => setShowDemoModal(false)}
                  className="text-text-secondary hover:text-neon-pink"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="bg-dark-tertiary rounded-lg p-4 border border-neon-green/30 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-orbitron font-bold text-text-primary mb-1">Ready to Run</h4>
                    <p className="text-text-secondary text-sm">
                      This automation template is ready to be configured for your specific needs.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <h4 className="font-orbitron font-bold text-text-primary mb-2">Required Connections</h4>
                <div className="space-y-3">
                  {template.integrations.map((integration, index) => (
                    <div key={index} className="flex items-center justify-between bg-dark-primary p-3 rounded-lg border border-dark">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-dark-tertiary rounded-full flex items-center justify-center">
                          <ExternalLink className="w-4 h-4 text-neon-cyan" />
                        </div>
                        <span className="text-text-primary">{integration}</span>
                      </div>
                      <button className="px-3 py-1 bg-dark-tertiary text-neon-green border border-neon-green rounded-lg text-sm">
                        Connect
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={() => setShowDemoModal(false)}
                  className="flex-1 bg-dark-tertiary text-text-secondary py-3 px-6 rounded-lg font-orbitron font-semibold hover:bg-dark-tertiary/80 border border-dark hover:border-text-secondary transition-all"
                >
                  Cancel
                </button>
                <button
                  className="flex-1 btn-neon py-3 px-6 rounded-lg font-orbitron font-semibold transition-all"
                  onClick={() => {
                    setShowDemoModal(false);
                    window.scrollTo(0, 0);
                    navigate('/get-quote');
                  }}
                >
                  Submit Buy Request
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AutomationDetail;