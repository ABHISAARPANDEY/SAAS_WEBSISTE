import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { pageEntryVariants, scrollAnimationVariants, childVariants, staggerContainerVariants, buttonHoverVariants } from '../utils/animationUtils';
import { 
  Search, 
  Filter, 
  Star, 
  ArrowRight, 
  Code, 
  Zap,
  ShoppingCart,
  Key,
  ChevronDown,
  X,
  Sparkles,
  Store,
  Workflow,
  Bot,
  Layers,
  ChevronRight,
  Play,
  Pause,
  RefreshCw,
  CheckCircle
} from 'lucide-react';
import { 
  readyMadeSolutions, 
  apiKeys, 
  industries, 
  frameworks, 
  apiCategories 
} from '../data/marketplaceData';
import { automationTemplates, industries as automationIndustries, categories, integrations, complexityLevels } from '../data/automationData';

const Marketplace = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('sparkwave');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedFramework, setSelectedFramework] = useState('All Frameworks');
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
  const videoRef = React.useRef(null);

  // Filter ready-made solutions
  const filteredSolutions = useMemo(() => {
    return readyMadeSolutions.filter(solution => {
      const name = solution.name?.toLowerCase().trim();
      const desc = solution.description?.toLowerCase().trim();
      const industry = solution.industry?.toLowerCase().trim();
      const framework = solution.framework?.toLowerCase().trim();

      const search = searchTerm.toLowerCase().trim();
      const selIndustry = selectedIndustry.toLowerCase().trim();
      const selFramework = selectedFramework.toLowerCase().trim();

      const matchesSearch = name.includes(search) || desc.includes(search);
      const matchesIndustry = selIndustry === 'all industries' || industry === selIndustry;
      const matchesFramework = selFramework === 'all frameworks' || framework === selFramework;

      return matchesSearch && matchesIndustry && matchesFramework;
    });
  }, [searchTerm, selectedIndustry, selectedFramework]);

  // Filter APIs
  const filteredApis = useMemo(() => {
    return apiKeys.filter(api => {
      const name = api.name?.toLowerCase() || '';
      const desc = api.description?.toLowerCase() || '';
      const category = api.category;
      
      const search = searchTerm.toLowerCase().trim();
      const selCategory = selectedCategory;
      
      const matchesSearch = name.includes(search) || desc.includes(search);
      const matchesCategory = selCategory === 'All Categories' || category === selCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Filter automation templates
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
    setSelectedFramework('All Frameworks');
    setSelectedCategory('All Categories');
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

  // Pause video when switching tabs
  React.useEffect(() => {
    if (videoRef.current && activeTab !== 'sparkwave') {
      videoRef.current.pause();
    }
  }, [activeTab]);

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
              Digital{' '}
              <span className="rainbow-text">
                Marketplace
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              Discover ready-made solutions and powerful tools to accelerate your development process. 
              From complete applications to specialized services, find everything you need to build exceptional digital experiences.
            </p>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <button
                onClick={() => setActiveTab('sparkwave')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'sparkwave'
                    ? 'btn-neon shadow-lg'
                    : 'glass-effect text-text-secondary hover:text-text-primary border border-dark'
                }`}
              >
                <Sparkles className={`w-5 h-5 ${activeTab === 'sparkwave' ? 'text-dark-primary' : ''}`} />
                SPARKWAVE
              </button>
              <button
                onClick={() => setActiveTab('ecommerce')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'ecommerce'
                    ? 'btn-neon shadow-lg'
                    : 'glass-effect text-text-secondary hover:text-text-primary border border-dark'
                }`}
              >
                <Store className={`w-5 h-5 ${activeTab === 'ecommerce' ? 'text-dark-primary' : ''}`} />
                ECOMMERCE AUTO PILOT
              </button>
              <button
                onClick={() => setActiveTab('automation')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'automation'
                    ? 'btn-neon shadow-lg'
                    : 'glass-effect text-text-secondary hover:text-text-primary border border-dark'
                }`}
              >
                <Workflow className={`w-5 h-5 ${activeTab === 'automation' ? 'text-dark-primary' : ''}`} />
                AUTOMATION
              </button>
              <button
                onClick={() => setActiveTab('apis')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'apis'
                    ? 'btn-neon shadow-lg'
                    : 'glass-effect text-text-secondary hover:text-text-primary border border-dark'
                }`}
              >
                <Key className={`w-5 h-5 ${activeTab === 'apis' ? 'text-dark-primary' : ''}`} />
                API KEYS
              </button>
              <button
                onClick={() => setActiveTab('solutions')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'solutions'
                    ? 'btn-neon shadow-lg'
                    : 'glass-effect text-text-secondary hover:text-text-primary border border-dark'
                }`}
              >
                <Layers className={`w-5 h-5 ${activeTab === 'solutions' ? 'text-dark-primary' : ''}`} />
                INDUSTRY SOLUTIONS
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-dark-secondary border-b border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center w-full">
            {/* Search Bar */}
            <div className="flex-1 relative w-full">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary w-5 h-5 pointer-events-none z-10" />
                <input
                  type="text"
                  placeholder={`Search ${activeTab === 'sparkwave' ? 'content' : activeTab === 'ecommerce' ? 'stores' : activeTab === 'automation' ? 'templates' : activeTab === 'apis' ? 'APIs' : 'solutions'}...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-dark-tertiary border border-dark text-text-primary rounded-xl focus:ring-2 focus:ring-neon-green focus:border-transparent text-lg placeholder-text-secondary relative z-20"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="w-full lg:w-auto flex flex-wrap gap-4 z-20">
              {activeTab === 'solutions' ? (
                <>
                  <div className="relative">
                    <select
                      value={selectedIndustry}
                      onChange={(e) => setSelectedIndustry(e.target.value)}
                      className="appearance-none w-full px-4 py-3 pr-10 bg-dark-tertiary border border-dark text-text-primary rounded-xl focus:ring-2 focus:ring-neon-green focus:border-transparent cursor-pointer"
                      style={{ minWidth: "180px" }}
                    >
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>
                          {industry}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5 pointer-events-none" />
                  </div>

                  <div className="relative">
                    <select
                      value={selectedFramework}
                      onChange={(e) => setSelectedFramework(e.target.value)}
                      className="appearance-none w-full px-4 py-3 pr-10 bg-dark-tertiary border border-dark text-text-primary rounded-xl focus:ring-2 focus:ring-neon-green focus:border-transparent cursor-pointer"
                      style={{ minWidth: "180px" }}
                    >
                      {frameworks.map((framework) => (
                        <option key={framework} value={framework}>
                          {framework}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5 pointer-events-none" />
                  </div>
                </>
              ) : activeTab === 'apis' ? (
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="appearance-none w-full px-4 py-3 pr-10 bg-dark-tertiary border border-dark text-text-primary rounded-xl focus:ring-2 focus:ring-neon-green focus:border-transparent cursor-pointer"
                    style={{ minWidth: "180px" }}
                  >
                    {apiCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5 pointer-events-none" />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'sparkwave' && (
            <>
              {/* SPARKWAVE Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-text-primary mb-4">
                  SPARKWAVE
                </h2>
                <p className="text-xl text-text-secondary mb-8">
                  Take Your Content Creating Journey to New Heights
                </p>
              </motion.div>

              {/* Video Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mb-16 text-center"
              >
                <div className="relative max-w-4xl mx-auto">
                              <div className="relative">
              <video
                ref={videoRef}
                className="w-full rounded-2xl shadow-2xl cursor-pointer hover:shadow-3xl transition-shadow duration-300"
                autoPlay
                playsInline
                onLoadedData={(e) => {
                  // Set video to restart after 20 seconds
                  setTimeout(() => {
                    e.target.currentTime = 0;
                    e.target.play();
                  }, 20000);
                }}
                onTimeUpdate={(e) => {
                  // Check if video has played for 20 seconds and restart
                  if (e.target.currentTime >= 20) {
                    e.target.currentTime = 0;
                    e.target.play();
                  }
                }}
                onPlay={(e) => {
                  // Ensure video has sound when it starts playing
                  e.target.muted = false;
                }}
                onClick={(e) => {
                  // Handle user interaction to enable sound on mobile
                  if (e.target.paused) {
                    e.target.play();
                  } else {
                    e.target.pause();
                  }
                  e.target.muted = false;
                }}
              >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
                🔊 Click for sound
              </div>
            </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </motion.div>

              {/* Platform Overview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="mb-16"
              >
                <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-text-primary mb-8 text-center">
                  AI-Powered Content Creation Platform
                </h3>
                <p className="text-lg text-text-secondary text-center max-w-4xl mx-auto mb-12">
                  Create text, image, and video posts with automatic posting using the latest AI models. 
                  SparkWave revolutionizes content creation with cutting-edge AI technology.
                </p>
              </motion.div>

              {/* Content Types */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Text Posts */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 2 }}
                  className="space-y-6"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-neon-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-8 h-8 text-dark-primary" />
                    </div>
                    <h4 className="text-xl font-orbitron font-bold text-text-primary mb-3">Text Posts</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 glass-effect rounded-xl border border-dark">
                      <h5 className="font-semibold text-neon-green mb-2">AI-Generated Content</h5>
                      <p className="text-text-secondary text-sm">Create engaging captions, hashtags, and post descriptions using advanced language models</p>
                    </div>
                    
                    <div className="p-4 glass-effect rounded-xl border border-dark">
                      <h5 className="font-semibold text-neon-green mb-2">Multi-Platform Optimization</h5>
                      <p className="text-text-secondary text-sm">Automatically adapt content for different social media platforms and their unique requirements</p>
                    </div>
                    
                    <div className="p-4 glass-effect rounded-xl border border-dark">
                      <h5 className="font-semibold text-neon-green mb-2">Trending Topics</h5>
                      <p className="text-text-secondary text-sm">Stay relevant with AI-powered trending topic detection and content suggestions</p>
                    </div>
                  </div>
                </motion.div>

                {/* Image Posts */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 2.2 }}
                  className="space-y-6"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-neon-cyan rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-8 h-8 text-dark-primary" />
                    </div>
                    <h4 className="text-xl font-orbitron font-bold text-text-primary mb-3">Image Posts</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 glass-effect rounded-xl border border-dark">
                      <h5 className="font-semibold text-neon-cyan mb-2">AI Image Generation</h5>
                      <p className="text-text-secondary text-sm">Generate stunning visuals from text descriptions using state-of-the-art image AI models</p>
                    </div>
                    
                    <div className="p-4 glass-effect rounded-xl border border-dark">
                      <h5 className="font-semibold text-neon-cyan mb-2">Brand Consistency</h5>
                      <p className="text-text-secondary text-sm">Maintain your brand identity with AI-powered style consistency across all generated images</p>
                    </div>
                    
                    <div className="p-4 glass-effect rounded-xl border border-dark">
                      <h5 className="font-semibold text-neon-cyan mb-2">Smart Editing</h5>
                      <p className="text-text-secondary text-sm">Automatically resize, crop, and optimize images for different platform requirements</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Video Creation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.5 }}
                className="mb-16"
              >
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-neon-pink rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-dark-primary" />
                  </div>
                  <h4 className="text-2xl font-orbitron font-bold text-text-primary mb-3">Video Creation</h4>
                  <p className="text-text-secondary max-w-2xl mx-auto">
                    Create professional videos with AI-powered editing, effects, and automatic optimization for social media platforms
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    'Explainer Videos', 'Talking Head/AI Presenter Videos', 'Reels/Short-Form Social Clips',
                    'Storytelling/Scripted Scenes', 'Promos & Commercials', 'Product Demos & Walkthroughs',
                    'Music/Visualizer Videos', 'Slideshows & Timelines', 'Memes & Fun Animations',
                    'Interview/Podcast Clips', 'Virtual Tours & Environments', 'Reaction & Commentary Videos'
                  ].map((type, index) => (
                    <motion.div
                      key={type}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 2.8 + index * 0.1 }}
                      className="p-4 glass-effect rounded-xl border border-dark hover:border-neon-pink/50 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-neon-pink rounded-full"></div>
                        <span className="text-text-secondary text-sm font-medium">{type}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Supported Platforms */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3 }}
                className="mb-16"
              >
                <h3 className="text-2xl font-orbitron font-bold text-text-primary mb-8 text-center">
                  Supported Platforms
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {[
                    { name: 'Facebook', logo: '/logos/facebook.png' },
                    { name: 'Twitter', logo: '/logos/twitter.png' },
                    { name: 'Instagram', logo: '/logos/instagram.png' },
                    { name: 'YouTube', logo: '/logos/youtube.png' },
                    { name: 'LinkedIn', logo: '/logos/linkedin.png' },
                    { name: 'TikTok', logo: '/logos/ticktok.png' }
                  ].map((platform, index) => (
                    <motion.div
                      key={platform.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 3.2 + index * 0.1 }}
                      className="group cursor-pointer"
                    >
                      <div className="p-6 glass-effect rounded-xl border border-dark hover:border-neon-green/50 transition-all duration-300 text-center">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                          <img 
                            src={platform.logo} 
                            alt={platform.name}
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                        <span className="text-text-primary font-medium text-sm">{platform.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* What We Provide */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3.5 }}
                className="mb-16"
              >
                <h3 className="text-2xl font-orbitron font-bold text-text-primary mb-8 text-center">
                  What We Provide
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'AI-Powered Creation',
                      description: 'Advanced AI models for generating text, images, and videos with human-like quality',
                      icon: '🤖'
                    },
                    {
                      title: 'Automatic Posting',
                      description: 'Schedule and automatically post content across all your social media platforms',
                      icon: '📅'
                    },
                    {
                      title: 'Multi-Platform Support',
                      description: 'Optimize content for each platform\'s unique requirements and audience',
                      icon: '🌐'
                    },
                    {
                      title: 'Brand Consistency',
                      description: 'Maintain your brand identity across all content with AI-powered style matching',
                      icon: '🎨'
                    },
                    {
                      title: 'Analytics & Insights',
                      description: 'Track performance and get AI-powered recommendations for content improvement',
                      icon: '📊'
                    },
                    {
                      title: '24/7 Content Generation',
                      description: 'Never run out of content with continuous AI-powered content creation',
                      icon: '⚡'
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 3.8 + index * 0.1 }}
                      className="p-6 glass-effect rounded-xl border border-dark hover:border-neon-green/50 transition-all duration-300"
                    >
                      <div className="text-3xl mb-3">{feature.icon}</div>
                      <h4 className="text-lg font-orbitron font-bold text-text-primary mb-2">{feature.title}</h4>
                      <p className="text-text-secondary text-sm">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 4 }}
                className="text-center"
              >
                <motion.button
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="btn-neon px-8 py-4 rounded-full font-orbitron font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Beta Testing Starts on 15th September
                </motion.button>
              </motion.div>
            </>
          )}

          {activeTab === 'ecommerce' && (
            <>
              {/* ECOMMERCE AUTO PILOT Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-text-primary mb-4">
                  ECOMMERCE AUTO PILOT
                </h2>
                <p className="text-xl text-text-secondary mb-8">
                  Link your Shopify, Amazon, Flipkart or any stores and manage all from one platform
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Features */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-orbitron font-bold text-text-primary mb-4">Platform Features</h3>
                  <div className="space-y-4">
                    {[
                      'Product Add & Management',
                      'Instant Invoice Generation',
                      'Real-time Notifications',
                      'Order Booking System',
                      'Multi-store Dashboard'
                    ].map((feature, index) => (
                      <div key={feature} className="flex items-center gap-3 p-4 glass-effect rounded-xl border border-dark">
                        <div className="w-8 h-8 bg-neon-green rounded-full flex items-center justify-center">
                          <Store className="w-4 h-4 text-dark-primary" />
                        </div>
                        <span className="text-text-primary font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Supported Platforms */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-orbitron font-bold text-text-primary mb-4">Supported Platforms</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {['Shopify', 'Amazon', 'Flipkart', 'WooCommerce', 'Magento', 'BigCommerce'].map((platform, index) => (
                      <div key={platform} className="flex items-center gap-3 p-4 glass-effect rounded-xl border border-dark">
                        <div className="w-8 h-8 bg-neon-cyan rounded-full flex items-center justify-center">
                          <ShoppingCart className="w-4 h-4 text-dark-primary" />
                        </div>
                        <span className="text-text-primary font-medium">{platform}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <motion.button
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="glass-effect text-neon-cyan px-8 py-4 rounded-full font-orbitron font-semibold text-lg border border-neon-cyan hover:neon-glow-cyan transition-all duration-300"
                >
                  COMING SOON
                </motion.button>
              </div>
            </>
          )}

          {activeTab === 'automation' && (
            <>
              {/* AUTOMATION Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-text-primary mb-4">
                  Workflow Automation
                </h2>
                <p className="text-xl text-text-secondary mb-8">
                  Discover ready-to-use automation templates that streamline your business processes, 
                  save time, and eliminate repetitive tasks across your organization.
                </p>
              </motion.div>

              {/* Tech Icons */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex justify-center space-x-8 mb-12"
              >
                <div className="w-12 h-12 border border-neon-green rounded-lg flex items-center justify-center bg-white shadow-lg pulse">
                  <Workflow className="w-6 h-6 text-neon-green" />
                </div>
                <div className="w-12 h-12 border border-neon-cyan rounded-lg flex items-center justify-center bg-white shadow-lg pulse">
                  <Layers className="w-6 h-6 text-neon-cyan" />
                </div>
                <div className="w-12 h-12 border border-neon-pink rounded-lg flex items-center justify-center bg-white shadow-lg pulse">
                  <Bot className="w-6 h-6 text-neon-pink" />
                </div>
              </motion.div>

              {/* Templates Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {automationTemplates.slice(0, 6).map((template, index) => (
                  <motion.div
                    key={template.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => {
                      window.scrollTo(0, 0);
                      navigate(`/automation/${template.id}`);
                    }}
                  >
                    <div className="card-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col relative">
                      {/* Template Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={template.image}
                          alt={template.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 z-10">
                          <span className="enhanced-category-label">
                            {template.category}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4 z-10">
                          <div className="w-10 h-10 glass-effect rounded-full flex items-center justify-center border border-neon-cyan">
                            <template.icon className="w-5 h-5 text-neon-cyan" />
                          </div>
                        </div>
                      </div>

                      {/* Template Info */}
                      <div className="p-6 flex-1 flex flex-col relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-2 py-1 bg-dark-tertiary text-text-secondary rounded-md text-sm font-medium border border-dark">
                            {template.useCase}
                          </span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-neon-green fill-current" />
                            <span className="text-sm text-text-secondary">4.8</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-orbitron font-bold text-text-primary mb-2 group-hover:text-neon-green transition-colors">
                          {template.name}
                        </h3>
                        
                        <p className="text-text-secondary mb-4 leading-relaxed flex-1">
                          {template.description}
                        </p>
                        
                        <div className="space-y-3">
                          <div className="flex flex-col gap-2">
                            <button 
                              className="w-full btn-neon py-2 px-4 rounded-lg font-orbitron font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.scrollTo(0, 0);
                                navigate(`/automation/${template.id}`);
                              }}
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4" />
                            </button>
                            <button 
                              className="w-full py-2 px-4 border border-neon-green text-neon-green hover:bg-neon-green hover:text-dark-primary transition-all duration-300 rounded-lg font-orbitron font-semibold flex items-center justify-center gap-2"
                              onClick={(e) => {
                                e.stopPropagation();
                                // Open live working animation modal
                                setSelectedTemplate(template);
                                setShowLiveAnimation(true);
                                setCurrentStep(0);
                                setIsPlaying(false);
                                setLiveData(generateMockData(template));
                                setProcessingStatus('Initializing...');
                              }}
                            >
                              <Zap className="w-4 h-4" />
                              <span className="hidden sm:inline">Live Demo</span>
                              <span className="sm:hidden">Demo</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* View All Button */}
              <div className="text-center mt-12">
                <motion.button
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => navigate('/automation')}
                  className="btn-neon px-8 py-4 rounded-full font-orbitron font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View All Automation Templates
                </motion.button>
              </div>
            </>
          )}

          {activeTab === 'apis' && (
            <>
              {/* API Keys */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-text-primary mb-4">
                  API Marketplace
                </h2>
                <p className="text-xl text-text-secondary mb-8">
                  Powerful APIs to enhance your applications with advanced functionality
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredApis.map((api, index) => (
                  <motion.div
                    key={api.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => {
                      window.scrollTo(0, 0);
                      navigate(`/marketplace/api/${api.id}`);
                    }}
                  >
                    <div className="card-dark rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col relative">
                      {/* API Icon */}
                      <div className="p-6 text-center relative z-10">
                        <div className="w-16 h-16 border border-neon-cyan rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 pulse-neon">
                          <api.icon className="w-8 h-8 text-neon-cyan" />
                        </div>
                        
                        <span className="px-3 py-1 bg-dark-tertiary text-neon-cyan rounded-full text-sm font-medium border border-neon-cyan/30">
                          {api.category}
                        </span>
                      </div>

                      {/* API Info */}
                      <div className="px-6 pb-6 flex-1 flex flex-col relative z-10">
                        <h3 className="text-lg font-orbitron font-bold text-text-primary mb-2 group-hover:text-neon-green transition-colors">
                          {api.name}
                        </h3>
                        
                        <p className="text-text-secondary text-sm mb-4 leading-relaxed flex-1">
                          {api.description}
                        </p>
                        
                        <div className="space-y-3">
                          <div className="text-xs text-text-secondary">
                            {api.usageMetrics}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm text-text-secondary">Free tier</div>
                              <div className="font-semibold text-neon-green">
                                {api.pricing.free.requests} req/day
                              </div>
                            </div>
                            <button className="btn-neon py-2 px-4 rounded-lg text-sm font-orbitron font-semibold hover:shadow-lg transition-all duration-300">
                              Get API Key
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'solutions' && (
            <>
              {/* Ready-Made Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-text-primary mb-4">
                  Industry Solutions
                </h2>
                <p className="text-xl text-text-secondary mb-8">
                  Complete applications ready for deployment and customization
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredSolutions.map((solution, index) => (
                  <motion.div
                    key={solution.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => {
                      window.scrollTo(0, 0);
                      navigate(`/marketplace/product/${solution.id}`);
                    }}
                  >
                    <div className="card-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col relative">
                      {/* Product Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={solution.image}
                          alt={solution.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 z-10">
                          <span className="enhanced-category-label">
                            {solution.industry}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4 z-10">
                          <div className="w-10 h-10 glass-effect rounded-full flex items-center justify-center border border-neon-cyan">
                            <solution.icon className="w-5 h-5 text-neon-cyan" />
                          </div>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-6 flex-1 flex flex-col relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-2 py-1 bg-dark-tertiary text-text-secondary rounded-md text-sm font-medium border border-dark">
                            {solution.framework}
                          </span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-neon-green fill-current" />
                            <span className="text-sm text-text-secondary">4.8</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-orbitron font-bold text-text-primary mb-2 group-hover:text-neon-green transition-colors">
                          {solution.name}
                        </h3>
                        
                        <p className="text-text-secondary mb-4 leading-relaxed flex-1">
                          {solution.description}
                        </p>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm text-text-secondary">
                            <span>Starting from</span>
                            <span className="text-2xl font-bold text-neon-green">
                              ${solution.pricing.basic.price}<span className="text-sm text-text-secondary">/mo</span>
                            </span>
                          </div>
                          
                          <div className="flex gap-2">
                            <button className="flex-1 btn-neon py-2 px-4 rounded-lg font-orbitron font-semibold hover:shadow-lg transition-all duration-300">
                              Learn More
                            </button>
                            <button className="px-4 py-2 border border-dark rounded-lg text-text-secondary hover:bg-dark-tertiary hover:border-neon-green/50 hover:text-neon-green transition-all">
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {/* No Results */}
          {((activeTab === 'solutions' && filteredSolutions.length === 0) || 
            (activeTab === 'apis' && filteredApis.length === 0)) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-dark-tertiary rounded-full flex items-center justify-center mx-auto mb-6 border border-dark">
                <Search className="w-12 h-12 text-text-secondary" />
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-text-primary mb-4">No results found</h3>
              <p className="text-text-secondary mb-8">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedIndustry('All Industries');
                  setSelectedFramework('All Frameworks');
                  setSelectedCategory('All Categories');
                }}
                className="btn-neon px-6 py-3 rounded-lg font-orbitron font-semibold hover:shadow-lg transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
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
              Need Something Custom?
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Can't find what you're looking for? Our expert team can build custom solutions tailored to your specific requirements.
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
                  <Code className="w-5 h-5 text-dark-primary" />
                  Request Custom Development
                </motion.button>
                
                <motion.button
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => navigate('/automation')}
                  className="glass-effect text-neon-cyan px-8 py-4 rounded-full font-orbitron font-semibold text-lg border border-neon-cyan hover:neon-glow-cyan transition-all duration-300 flex items-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  Automation
                </motion.button>
              </div>
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
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowLiveAnimation(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <selectedTemplate.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{selectedTemplate.name}</h3>
                    <p className="text-white/80 text-sm">Live Working Demo</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowLiveAnimation(false)}
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 flex-1 overflow-y-auto">
              {/* Controls */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4" />
                      Pause
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      Play
                    </>
                  )}
                </button>
                <button
                  onClick={() => {
                    setCurrentStep(0);
                    setIsPlaying(false);
                  }}
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Reset
                </button>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${((currentStep + 1) / selectedTemplate.steps.length) * 100}%` }}
                  ></div>
                </div>
                <div className="text-center mt-2 text-sm text-gray-600">
                  Step {Math.min(currentStep + 1, selectedTemplate.steps.length)} of {selectedTemplate.steps.length}
                </div>
              </div>

              {/* Current Step */}
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200"
              >
                <h4 className="font-bold text-green-800 mb-2">
                  Step {Math.min(currentStep + 1, selectedTemplate.steps.length)}
                </h4>
                <p className="text-green-700">
                  {selectedTemplate.steps[Math.min(currentStep, selectedTemplate.steps.length - 1)] || 'Step description...'}
                </p>
                {liveData.processingSteps && (
                  <div className="mt-3 p-3 bg-white rounded border border-green-200">
                    <div className="text-sm text-green-600 font-medium mb-2">Live Processing:</div>
                    <div className="text-xs text-green-700">
                      {liveData.processingSteps[currentStep] || 'Processing...'}
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Integrations Animation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {selectedTemplate.integrations.map((integration, index) => (
                  <motion.div
                    key={integration}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: index <= currentStep ? 1 : 0.3,
                      y: index <= currentStep ? 0 : 20,
                      scale: index <= currentStep ? 1 : 0.95
                    }}
                    className={`p-4 rounded-lg border-2 transition-all duration-500 ${
                      index <= currentStep 
                        ? 'bg-gradient-to-br from-green-50 to-green-100 border-green-300 shadow-lg' 
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="text-center">
                      <div className={`w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center ${
                        index <= currentStep ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
                      }`}>
                        <Bot className="w-6 h-6" />
                      </div>
                      <h5 className="font-semibold text-sm">{integration}</h5>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Connection Lines */}
              <div className="relative mb-6">
                {selectedTemplate.integrations.slice(0, -1).map((_, index) => (
                  <div
                    key={index}
                    className={`absolute top-1/2 -right-3 w-6 h-0.5 transition-all duration-500 ${
                      index < currentStep 
                        ? 'bg-gradient-to-r from-green-400 to-green-600' 
                        : 'bg-gray-300'
                    }`}
                    style={{ left: `${(index + 1) * (100 / selectedTemplate.integrations.length)}%` }}
                  ></div>
                ))}
              </div>

              {/* Live Data Display */}
              {liveData && Object.keys(liveData).length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6"
                >
                  <h4 className="font-bold text-gray-800 mb-3">Live Data Processing</h4>
                  
                  {/* Lead Enrichment Data */}
                  {liveData.leads && (
                    <div className="bg-blue-50 rounded-lg p-4 mb-4">
                      <h5 className="font-semibold text-blue-800 mb-2">📊 Lead Enrichment Progress</h5>
                      <div className="space-y-2">
                        {liveData.leads.map((lead, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className={`flex items-center justify-between p-2 rounded ${
                              index <= currentStep ? 'bg-green-100 border border-green-300' : 'bg-gray-100'
                            }`}
                          >
                            <div className="flex-1">
                              <div className="font-medium text-sm">{lead.email}</div>
                              <div className="text-xs text-gray-600">{lead.company}</div>
                            </div>
                            <div className="text-xs">
                              {index <= currentStep ? (
                                <span className="text-green-600">✅ Enriched</span>
                              ) : (
                                <span className="text-gray-500">⏳ Pending</span>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* WhatsApp Order Data */}
                  {liveData.orders && (
                    <div className="bg-green-50 rounded-lg p-4 mb-4">
                      <h5 className="font-semibold text-green-800 mb-2">💬 WhatsApp Orders</h5>
                      <div className="space-y-2">
                        {liveData.orders.map((order, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="flex items-center justify-between p-2 bg-white rounded border"
                          >
                            <div className="flex-1">
                              <div className="font-medium text-sm">{order.id}</div>
                              <div className="text-xs text-gray-600">{order.customer}</div>
                            </div>
                            <div className="text-right">
                              <div className="font-medium text-sm">{order.total}</div>
                              <div className={`text-xs px-2 py-1 rounded ${
                                order.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                                order.status === 'shipped' ? 'bg-blue-100 text-blue-700' :
                                'bg-yellow-100 text-yellow-700'
                              }`}>
                                {order.status}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Abandoned Cart Data */}
                  {liveData.abandonedCarts && (
                    <div className="bg-orange-50 rounded-lg p-4 mb-4">
                      <h5 className="font-semibold text-orange-800 mb-2">🛒 Abandoned Cart Recovery</h5>
                      <div className="space-y-2">
                        {liveData.abandonedCarts.map((cart, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="flex items-center justify-between p-2 bg-white rounded border"
                          >
                            <div className="flex-1">
                              <div className="font-medium text-sm">{cart.email}</div>
                              <div className="text-xs text-gray-600">{cart.items.join(', ')}</div>
                            </div>
                            <div className="text-right">
                              <div className="font-medium text-sm">{cart.value}</div>
                              <div className="text-xs text-gray-500">{cart.abandoned}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
              >
                <h4 className="font-bold text-gray-800 mb-3">Key Features</h4>
                <div className="grid grid-cols-1 gap-2">
                  {selectedTemplate.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="flex-1">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Use Cases */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h4 className="font-bold text-gray-800 mb-3">Use Cases</h4>
                <div className="grid grid-cols-1 gap-3">
                  {selectedTemplate.useCases.map((useCase, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800">{useCase.title}</div>
                        <div className="text-gray-500 text-xs mt-1">{useCase.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Marketplace;