import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Zap, 
  ArrowRight, 
  Workflow, 
  Layers,
  Code,
  Bot,
  X,
  ChevronRight,
  Star
} from 'lucide-react';
import { automationTemplates, industries, categories, integrations, complexityLevels } from '../data/automationData';

const Automation = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedIntegration, setSelectedIntegration] = useState('All Integrations');
  const [selectedComplexity, setSelectedComplexity] = useState('All Levels');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showLiveAnimation, setShowLiveAnimation] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [liveData, setLiveData] = useState({});
  const [processingStatus, setProcessingStatus] = useState('');

  // Filter templates based on selected filters
  const filteredTemplates = useMemo(() => {
    return automationTemplates.filter(template => {
      const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           template.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesIndustry = selectedIndustry === 'All Industries' || template.category.toLowerCase() === selectedIndustry.toLowerCase();
      const matchesCategory = selectedCategory === 'All Categories' || template.useCase.toLowerCase() === selectedCategory.toLowerCase();
      const matchesIntegration = selectedIntegration === 'All Integrations' || 
                                template.integrations.some(integration => 
                                  integration.toLowerCase() === selectedIntegration.toLowerCase()
                                );
      const matchesComplexity = selectedComplexity === 'All Levels' || template.complexity.toLowerCase() === selectedComplexity.toLowerCase();
      
      return matchesSearch && matchesIndustry && matchesCategory && matchesIntegration && matchesComplexity;
    });
  }, [searchTerm, selectedIndustry, selectedCategory, selectedIntegration, selectedComplexity]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedIndustry('All Industries');
    setSelectedCategory('All Categories');
    setSelectedIntegration('All Integrations');
    setSelectedComplexity('All Levels');
  };

  // Auto-progress steps when playing
  React.useEffect(() => {
    if (isPlaying && selectedTemplate) {
      const interval = setInterval(() => {
        setCurrentStep(prev => {
          if (prev >= selectedTemplate.steps.length) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 2000); // 2 seconds per step

      return () => clearInterval(interval);
    }
  }, [isPlaying, selectedTemplate]);

  // Generate realistic mock data based on template
  const generateMockData = (template) => {
    const mockData = {
      'lead-enrichment-clearbit': {
        leads: [
          { email: 'john.doe@techcorp.com', company: 'TechCorp Inc.', size: '50-200', industry: 'Technology', enriched: false },
          { email: 'sarah.smith@innovate.com', company: 'Innovate Solutions', size: '10-50', industry: 'SaaS', enriched: false },
          { email: 'mike@startup.io', company: 'Startup.io', size: '1-10', industry: 'FinTech', enriched: false }
        ],
        enrichedData: [
          { email: 'john.doe@techcorp.com', company: 'TechCorp Inc.', size: '150 employees', industry: 'Technology', revenue: '$5M-10M', linkedin: 'linkedin.com/in/johndoe', twitter: '@johndoe', enriched: true },
          { email: 'sarah.smith@innovate.com', company: 'Innovate Solutions', size: '25 employees', industry: 'SaaS', revenue: '$1M-5M', linkedin: 'linkedin.com/in/sarahsmith', twitter: '@sarahsmith', enriched: true }
        ],
        processingSteps: [
          '🔍 Analyzing lead: john.doe@techcorp.com',
          '📊 Enriching company data from Clearbit',
          '👤 Finding social profiles and contact info',
          '🏢 Updating HubSpot with enriched data',
          '🏷️ Adding segmentation tags automatically'
        ]
      },
      'whatsapp-order-bot': {
        orders: [
          { id: 'ORD-001', customer: 'Alice Johnson', items: ['iPhone 13', 'AirPods Pro'], total: '$1,299', status: 'pending' },
          { id: 'ORD-002', customer: 'Bob Wilson', items: ['MacBook Pro', 'Magic Mouse'], total: '$2,199', status: 'confirmed' },
          { id: 'ORD-003', customer: 'Carol Davis', items: ['iPad Air', 'Apple Pencil'], total: '$799', status: 'shipped' }
        ],
        chatMessages: [
          { from: 'customer', message: 'Hi, I want to order an iPhone 13', time: '2:34 PM' },
          { from: 'bot', message: 'Great! I can help you with that. What color would you prefer?', time: '2:34 PM' },
          { from: 'customer', message: 'Blue please', time: '2:35 PM' },
          { from: 'bot', message: 'Perfect! Your order is being processed. Total: $1,299', time: '2:35 PM' }
        ],
        processingSteps: [
          '💬 Customer initiates order via WhatsApp',
          '🤖 Bot identifies product and preferences',
          '📦 Checking inventory availability',
          '💳 Generating payment link',
          '✅ Order confirmed and tracking sent'
        ]
      },
      'abandoned-cart-recovery': {
        abandonedCarts: [
          { email: 'user1@example.com', items: ['Nike Shoes', 'Sports Bag'], value: '$189', abandoned: '2 hours ago' },
          { email: 'user2@example.com', items: ['Laptop Stand', 'Wireless Mouse'], value: '$145', abandoned: '1 hour ago' },
          { email: 'user3@example.com', items: ['Coffee Maker', 'Coffee Beans'], value: '$89', abandoned: '30 min ago' }
        ],
        recoveryMessages: [
          { type: 'email', subject: 'Your cart is waiting for you!', sent: '2 min ago', opened: true },
          { type: 'whatsapp', message: 'Hey! Your Nike shoes are still in your cart. Complete your order now!', sent: '1 min ago', delivered: true }
        ],
        processingSteps: [
          '🛒 Detecting abandoned cart: Nike Shoes + Sports Bag',
          '📧 Sending personalized email reminder',
          '📱 Sending WhatsApp recovery message',
          '💰 Applying 10% discount code',
          '📊 Tracking recovery campaign performance'
        ]
      }
    };
    return mockData[template.id] || {};
  };

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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-[95%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight">
  Workflow{' '}
  <span className="rainbow-text">
    Automation
  </span>
</h1>

            
            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-2 mt-4">
              Discover ready-to-use automation templates that streamline your business processes, 
              save time, and eliminate repetitive tasks across your organization.
            </p>

            {/* Tech Icons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center space-x-4 sm:space-x-8 mb-6 sm:mb-8"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 border border-accent-primary rounded-lg flex items-center justify-center bg-white shadow-button pulse">
                <Workflow className="w-5 h-5 sm:w-6 sm:h-6 text-accent-primary" />
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 border border-accent-secondary rounded-lg flex items-center justify-center bg-white shadow-button pulse">
                <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-accent-secondary" />
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 border border-accent-tertiary rounded-lg flex items-center justify-center bg-white shadow-button pulse">
                <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-accent-tertiary" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

    {/* Search and Filters */}
<section className="py-12 bg-dark-secondary border-b border-dark relative z-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col gap-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
        <input 
          type="text" 
          placeholder="Search automation templates..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          className="w-full pl-12 pr-4 py-4 bg-dark-tertiary border border-dark text-text-primary rounded-xl focus:ring-2 focus:ring-neon-green focus:border-transparent text-lg placeholder-text-secondary"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-secondary hover:text-neon-pink"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Filter Toggle */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 text-text-secondary hover:text-neon-green transition-colors"
        >
          <Filter className="w-5 h-5" />
          <span className="font-orbitron">{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
          <ChevronRight className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-90' : ''}`} />
        </button>
        
        {(selectedIndustry !== 'All Industries' || 
          selectedCategory !== 'All Categories' || 
          selectedIntegration !== 'All Integrations' || 
          selectedComplexity !== 'All Levels') && (
          <button
            onClick={clearFilters}
            className="text-neon-pink hover:text-neon-pink/80 text-sm flex items-center gap-1"
          >
            <X className="w-4 h-4" />
            Clear Filters
          </button>
        )}
      </div>

      {/* Filters */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4"
        >
          {/* Industry */}
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Industry
            </label>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full px-4 py-3 bg-dark-tertiary border border-dark text-text-primary rounded-xl focus:ring-2 focus:ring-neon-green focus:border-transparent"
            >
              {industries.map(industry => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 bg-dark-tertiary border border-dark text-text-primary rounded-xl focus:ring-2 focus:ring-neon-green focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Integration */}
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Integration
            </label>
            <select
              value={selectedIntegration}
              onChange={(e) => setSelectedIntegration(e.target.value)}
              className="w-full px-4 py-3 bg-dark-tertiary border border-dark text-text-primary rounded-xl focus:ring-2 focus:ring-neon-green focus:border-transparent"
            >
              {integrations.map(integration => (
                <option key={integration} value={integration}>{integration}</option>
              ))}
            </select>
          </div>

          {/* Complexity */}
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Complexity
            </label>
            <select
              value={selectedComplexity}
              onChange={(e) => setSelectedComplexity(e.target.value)}
              className="w-full px-4 py-3 bg-dark-tertiary border border-dark text-text-primary rounded-xl focus:ring-2 focus:ring-neon-green focus:border-transparent"
            >
              {complexityLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
        </motion.div>
      )}
    </div>
  </div>
</section>

      {/* Templates Grid */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-[95%]">
          {/* Results Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-orbitron text-text-primary">
                {filteredTemplates.length} Templates Found
              </h2>
              <p className="text-text-secondary text-sm sm:text-base">
                {selectedIndustry !== 'All Industries' && `Industry: ${selectedIndustry}`}
                {selectedCategory !== 'All Categories' && ` • Category: ${selectedCategory}`}
                {selectedIntegration !== 'All Integrations' && ` • Integration: ${selectedIntegration}`}
                {selectedComplexity !== 'All Levels' && ` • Complexity: ${selectedComplexity}`}
                {searchTerm && ` • Search: "${searchTerm}"`}
              </p>
            </div>
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mobile-grid-1">
            {filteredTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer template-card"
                onClick={(e) => {
                  window.scrollTo(0, 0);
                  navigate(`/automation/${template.id}`);
                }}
              >
                <div className="h-full flex flex-col relative overflow-hidden rounded-xl shadow-sm">
                  {/* Template Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={template.image}
                      alt={template.name}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute top-4 left-4 z-10">
                      <span className="category-label px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                        {template.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 z-10">
                      <div className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-accent-secondary shadow-lg">
                        <template.icon className="w-5 h-5 text-accent-secondary" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <h3 className="text-xl font-bold text-white group-hover:text-accent-primary transition-colors">
                        {template.name}
                      </h3>
                    </div>
                  </div>

                  {/* Template Info */}
                  <div className="p-6 flex-1 flex flex-col relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="stripe-badge rounded-md text-xs font-medium">
                        {template.useCase}
                      </span>
                      <span className="px-2 py-1 bg-secondary text-text-secondary rounded-md text-xs font-medium border border-border-color">
                        {template.complexity}
                      </span>
                    </div>
                    
                    <p className="text-text-secondary mb-4 leading-relaxed flex-1 line-clamp-3">
                      {template.description}
                    </p>
                    
                    {/* Integrations */}
                    <div className="mb-4">
                      <div className="text-sm text-text-secondary mb-2">Integrations:</div>
                      <div className="flex flex-wrap gap-2">
                        {template.integrations.slice(0, 3).map((integration, idx) => (
                          <span key={idx} className="integration-badge px-2 py-1 rounded-md text-xs">
                            {integration}
                          </span>
                        ))}
                        {template.integrations.length > 3 && (
                          <span className="integration-badge px-2 py-1 rounded-md text-xs">
                            +{template.integrations.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2 sm:gap-3">
                      <button
                        className="learn-more-btn w-full py-3 px-4 rounded-lg text-sm font-medium shadow-sm flex items-center justify-center gap-2 min-h-[44px]"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.scrollTo(0, 0);
                          navigate(`/automation/${template.id}`);
                        }}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 text-white" />
                      </button>
                      <button
                        className="live-demo-btn w-full py-3 px-4 rounded-lg text-sm font-medium shadow-sm flex items-center justify-center gap-2 border border-neon-green text-neon-green hover:bg-neon-green hover:text-dark-primary transition-all duration-300 min-h-[44px]"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Open live working animation modal
                          setSelectedTemplate(template);
                          setShowLiveAnimation(true);
                        }}
                      >
                        <Zap className="w-4 h-4" />
                        <span className="hidden sm:inline">Live Demo</span>
                        <span className="sm:hidden">Demo</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredTemplates.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 sm:py-20 bg-dark-secondary rounded-xl border border-dark p-6 sm:p-8"
            >
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-dark-tertiary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 border border-text-secondary">
                <Search className="w-8 h-8 sm:w-12 sm:h-12 text-text-secondary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-orbitron text-text-primary mb-3 sm:mb-4">No templates found</h3>
              <p className="text-text-secondary mb-6 sm:mb-8 text-sm sm:text-base">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={clearFilters}
                className="btn-neon px-5 sm:px-6 py-2 sm:py-3 rounded-lg font-orbitron font-semibold hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-secondary border-t border-border-color">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 border border-accent-primary rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 border border-accent-secondary rounded-full opacity-15 animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-accent-primary opacity-5 rounded-full animate-ping"></div>
          <div className="absolute bottom-40 right-10 w-24 h-24 border border-accent-tertiary rounded-full opacity-10 animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-[95%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
              Need a Custom Automation?
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto px-2">
              Can't find what you're looking for? Our expert team can build custom automation solutions tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate('/get-quote');
                }}
                className="bg-accent-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg shadow-button hover:shadow-button-hover hover:bg-accent-secondary transition-all duration-300 flex items-center gap-2 w-full sm:w-auto"
              >
                <Code className="w-5 h-5 text-white" />
                Request Custom Automation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Animation Modal */}
      {showLiveAnimation && selectedTemplate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => {
            setShowLiveAnimation(false);
            setCurrentStep(0);
            setIsPlaying(false);
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            className="bg-white rounded-2xl p-6 sm:p-8 max-w-5xl w-full shadow-2xl border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-r ${selectedTemplate.gradient} shadow-lg`}>
                  <selectedTemplate.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedTemplate.name}</h3>
                  <p className="text-gray-600 text-sm">Live Working Demo</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setShowLiveAnimation(false);
                  setCurrentStep(0);
                  setIsPlaying(false);
                }}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-lg hover:bg-gray-100"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Animation Container */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 mb-8 border border-gray-200 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-bold text-gray-900">How it Works</h4>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      if (isPlaying) {
                        setIsPlaying(false);
                      } else {
                        setIsPlaying(true);
                        setCurrentStep(0);
                      }
                    }}
                    className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md ${
                      isPlaying 
                        ? 'bg-red-500 text-white hover:bg-red-600' 
                        : 'bg-green-500 text-white hover:bg-green-600'
                    }`}
                  >
                    {isPlaying ? '⏸️ Pause' : '▶️ Play'}
                  </button>
                  <button
                    onClick={() => {
                      setCurrentStep(0);
                      setIsPlaying(false);
                    }}
                    className="px-6 py-3 rounded-lg text-sm font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors shadow-md"
                  >
                    🔄 Reset
                  </button>
                </div>
              </div>

              {/* Step Progress */}
              <div className="flex items-center gap-3 mb-8">
                {selectedTemplate.steps.map((step, index) => (
                  <div key={index} className="flex-1 relative">
                    <div className={`h-3 rounded-full transition-all duration-700 ${
                      index <= currentStep ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-gray-200'
                    }`} />
                    {index < selectedTemplate.steps.length - 1 && (
                      <div className={`absolute top-1/2 -right-1.5 w-3 h-3 rounded-full transition-all duration-500 ${
                        index < currentStep ? 'bg-green-500' : 'bg-gray-300'
                      }`} />
                    )}
                  </div>
                ))}
              </div>

              {/* Current Step Display */}
              <motion.div 
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-6 mb-6 border border-gray-200 shadow-md"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shadow-lg ${
                    currentStep < selectedTemplate.steps.length 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                      : 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                  }`}>
                    {currentStep < selectedTemplate.steps.length ? currentStep + 1 : '✓'}
                  </div>
                  <div>
                    <span className="text-gray-900 font-bold text-lg">
                      {currentStep < selectedTemplate.steps.length 
                        ? `Step ${currentStep + 1}` 
                        : 'Complete!'
                      }
                    </span>
                    <p className="text-gray-600 text-sm">
                      {currentStep < selectedTemplate.steps.length 
                        ? selectedTemplate.steps[currentStep]
                        : 'Automation is now live and working!'
                      }
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Visual Animation - Integration Flow */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {selectedTemplate.integrations.slice(0, 3).map((integration, index) => (
                  <motion.div
                    key={integration}
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    animate={{ 
                      opacity: currentStep >= index ? 1 : 0.4,
                      y: currentStep >= index ? 0 : 30,
                      scale: currentStep >= index ? 1 : 0.8
                    }}
                    transition={{ duration: 0.6, delay: index * 0.3 }}
                    className={`relative p-6 rounded-xl border-2 transition-all duration-500 ${
                      currentStep >= index 
                        ? 'bg-gradient-to-br from-green-50 to-green-100 border-green-300 shadow-lg' 
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-4 h-4 rounded-full transition-all duration-500 ${
                        currentStep >= index ? 'bg-green-500 animate-pulse' : 'bg-gray-300'
                      }`} />
                      <span className={`font-semibold text-sm ${
                        currentStep >= index ? 'text-green-700' : 'text-gray-500'
                      }`}>{integration}</span>
                    </div>
                    <div className={`text-xs font-medium ${
                      currentStep >= index ? 'text-green-600' : 'text-gray-400'
                    }`}>
                      {currentStep >= index ? '✅ Connected' : '⏳ Pending'}
                    </div>
                    
                    {/* Connection Lines */}
                    {index < 2 && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ 
                          scaleX: currentStep > index ? 1 : 0 
                        }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-green-400 to-green-600 transform -translate-y-1/2 origin-left"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Features and Use Cases */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">✨ Key Features</h4>
                <div className="space-y-3">
                  {selectedTemplate.features.slice(0, 3).map((feature, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">🎯 Use Cases</h4>
                <div className="space-y-4">
                  {selectedTemplate.useCases.slice(0, 2).map((useCase, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                      <div>
                        <span className="text-gray-900 text-sm font-semibold">{useCase.title}</span>
                        <p className="text-gray-600 text-xs mt-1">{useCase.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Automation;