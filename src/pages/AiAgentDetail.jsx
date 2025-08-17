import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Star, 
  CheckCircle, 
  Zap, 
  Bot, 
  TrendingUp, 
  Rocket,
  Play,
  Pause,
  RefreshCw
} from 'lucide-react';
import { pageEntryVariants, buttonHoverVariants } from '../utils/animationUtils';

const AiAgentDetail = () => {
  const { agentId } = useParams();
  const navigate = useNavigate();
  const [agent, setAgent] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  // AI Agents Data
  const aiAgents = [
    {
      id: 'sales-agent',
      name: 'Sales Pro Agent',
      description: 'AI-powered sales assistant that qualifies leads, schedules meetings, and follows up automatically',
      category: 'Sales',
      icon: Bot,
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Lead Qualification', 'Meeting Scheduling', 'Follow-up Automation', 'Sales Analytics'],
      rating: 4.9,
      pricing: { monthly: 99, yearly: 990 },
      integrations: ['HubSpot', 'Salesforce', 'Calendly', 'Gmail'],
      capabilities: ['Natural Language Processing', 'CRM Integration', 'Email Automation', 'Performance Tracking'],
      detailedDescription: 'The Sales Pro Agent is an intelligent AI assistant designed to revolutionize your sales process. It automatically qualifies leads, schedules meetings, and maintains consistent follow-up communication, ensuring no opportunity is missed.',
      howItWorks: [
        'Automatically analyzes incoming leads and scores them based on engagement and fit',
        'Schedules meetings with qualified prospects using integrated calendar systems',
        'Sends personalized follow-up emails and tracks response rates',
        'Provides real-time analytics and insights to optimize sales performance'
      ],
      productivityEnhancement: [
        'Reduces manual lead qualification time by 80%',
        'Increases meeting booking rates by 60%',
        'Improves follow-up response rates by 45%',
        'Provides 24/7 lead engagement without human intervention'
      ],
      useCases: [
        'B2B lead qualification and nurturing',
        'Sales team productivity optimization',
        'Customer relationship management',
        'Sales pipeline automation'
      ]
    },
    {
      id: 'marketing-agent',
      name: 'Marketing Genius Agent',
      description: 'Intelligent marketing assistant that creates campaigns, analyzes performance, and optimizes strategies',
      category: 'Marketing',
      icon: Bot,
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Campaign Creation', 'Performance Analysis', 'A/B Testing', 'Audience Targeting'],
      rating: 4.8,
      pricing: { monthly: 129, yearly: 1290 },
      integrations: ['Google Ads', 'Facebook Ads', 'Mailchimp', 'Analytics'],
      capabilities: ['Content Generation', 'Ad Optimization', 'ROI Analysis', 'Trend Prediction'],
      detailedDescription: 'The Marketing Genius Agent is your AI-powered marketing strategist that creates compelling campaigns, analyzes performance metrics, and continuously optimizes your marketing efforts for maximum ROI.',
      howItWorks: [
        'Analyzes market trends and competitor strategies to identify opportunities',
        'Creates personalized marketing campaigns based on audience segmentation',
        'Monitors campaign performance and automatically adjusts targeting',
        'Generates content and optimizes ad copy for better engagement'
      ],
      productivityEnhancement: [
        'Reduces campaign creation time by 70%',
        'Improves campaign ROI by 40% through continuous optimization',
        'Automates A/B testing and performance analysis',
        'Provides predictive insights for better decision making'
      ],
      useCases: [
        'Digital advertising campaign management',
        'Content marketing strategy optimization',
        'Social media marketing automation',
        'Email marketing campaign creation'
      ]
    },
    {
      id: 'crm-agent',
      name: 'CRM Assistant Agent',
      description: 'Smart CRM agent that manages customer relationships, tracks interactions, and provides insights',
      category: 'CRM',
      icon: Bot,
      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Contact Management', 'Interaction Tracking', 'Pipeline Management', 'Reporting'],
      rating: 4.7,
      pricing: { monthly: 89, yearly: 890 },
      integrations: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho'],
      capabilities: ['Data Enrichment', 'Automated Workflows', 'Predictive Analytics', 'Custom Dashboards'],
      detailedDescription: 'The CRM Assistant Agent intelligently manages your customer relationships by automating data entry, tracking interactions, and providing actionable insights to improve customer satisfaction and retention.',
      howItWorks: [
        'Automatically captures and enriches customer data from multiple sources',
        'Tracks all customer interactions across channels and touchpoints',
        'Manages sales pipelines and predicts deal outcomes',
        'Generates comprehensive reports and actionable insights'
      ],
      productivityEnhancement: [
        'Reduces manual data entry by 90%',
        'Improves customer response times by 65%',
        'Increases customer retention rates by 35%',
        'Provides real-time visibility into customer relationships'
      ],
      useCases: [
        'Customer relationship management',
        'Sales pipeline optimization',
        'Customer service automation',
        'Business intelligence and reporting'
      ]
    },
    {
      id: 'support-agent',
      name: 'Customer Support Agent',
      description: '24/7 customer support agent that handles inquiries, resolves issues, and escalates when needed',
      category: 'Customer Support',
      icon: Bot,
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['24/7 Support', 'Ticket Management', 'Knowledge Base', 'Escalation Handling'],
      rating: 4.9,
      pricing: { monthly: 149, yearly: 1490 },
      integrations: ['Zendesk', 'Intercom', 'Slack', 'Email'],
      capabilities: ['Natural Language Understanding', 'Multi-language Support', 'Sentiment Analysis', 'Self-learning'],
      detailedDescription: 'The Customer Support Agent provides round-the-clock customer assistance, automatically resolving common issues while intelligently escalating complex problems to human agents when necessary.',
      howItWorks: [
        'Understands customer inquiries using advanced natural language processing',
        'Accesses knowledge base to provide accurate and helpful responses',
        'Automatically creates and manages support tickets',
        'Escalates complex issues to human agents with full context'
      ],
      productivityEnhancement: [
        'Handles 80% of customer inquiries automatically',
        'Reduces response times from hours to seconds',
        'Improves customer satisfaction scores by 50%',
        'Provides 24/7 support without additional staffing costs'
      ],
      useCases: [
        'Customer service automation',
        'Technical support assistance',
        'FAQ management and responses',
        'Support ticket routing and management'
      ]
    },
    {
      id: 'analytics-agent',
      name: 'Business Intelligence Agent',
      description: 'Advanced analytics agent that processes data, generates insights, and creates actionable reports',
      category: 'Analytics',
      icon: Bot,
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Data Processing', 'Insight Generation', 'Report Creation', 'Predictive Modeling'],
      rating: 4.8,
      pricing: { monthly: 179, yearly: 1790 },
      integrations: ['Tableau', 'Power BI', 'Google Analytics', 'Database APIs'],
      capabilities: ['Machine Learning', 'Data Visualization', 'Real-time Monitoring', 'Custom Alerts'],
      detailedDescription: 'The Business Intelligence Agent transforms your raw data into actionable insights using advanced machine learning algorithms, helping you make data-driven decisions and predict future trends.',
      howItWorks: [
        'Collects and processes data from multiple sources automatically',
        'Applies machine learning algorithms to identify patterns and trends',
        'Generates interactive dashboards and visualizations',
        'Provides predictive analytics and forecasting capabilities'
      ],
      productivityEnhancement: [
        'Reduces data analysis time by 85%',
        'Improves decision-making accuracy by 60%',
        'Provides real-time insights and alerts',
        'Automates report generation and distribution'
      ],
      useCases: [
        'Business performance monitoring',
        'Predictive analytics and forecasting',
        'Data visualization and reporting',
        'Real-time business intelligence'
      ]
    }
  ];

  useEffect(() => {
    console.log('Agent ID:', agentId);
    console.log('Available agents:', aiAgents.map(a => a.id));
    const foundAgent = aiAgents.find(a => a.id === agentId);
    console.log('Found agent:', foundAgent);
    if (foundAgent) {
      setAgent(foundAgent);
    } else {
      console.log('Agent not found, navigating back to marketplace');
      navigate('/marketplace');
    }
  }, [agentId]);

  if (!agent) {
    return (
      <div className="min-h-screen bg-dark-primary flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-neon-green mx-auto"></div>
          <p className="text-text-secondary mt-4">Loading agent details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-primary">
      {/* Hero Section */}
      <section className="relative py-20 bg-dark-primary overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/marketplace')}
            className="flex items-center gap-2 text-text-secondary hover:text-neon-green transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Marketplace
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Agent Info */}
            <motion.div
              variants={pageEntryVariants}
              initial="initial"
              animate="animate"
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="px-4 py-2 bg-neon-green/10 text-neon-green rounded-full text-sm font-medium border border-neon-green/30">
                  {agent.category}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-neon-green fill-current" />
                  <span className="text-text-secondary">{agent.rating}</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-text-primary leading-tight">
                {agent.name}
              </h1>
              
              <p className="text-xl text-text-secondary leading-relaxed">
                {agent.detailedDescription}
              </p>

              

              <div className="flex flex-col sm:flex-row gap-4">
                                 <motion.button
                   variants={buttonHoverVariants}
                   whileHover="hover"
                   whileTap="tap"
                   onClick={() => navigate('/get-quote')}
                   className="btn-neon px-8 py-4 rounded-full font-orbitron font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                 >
                   <Rocket className="w-5 h-5 text-dark-primary" />
                   Get Started
                 </motion.button>
              </div>
            </motion.div>

            {/* Agent Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="w-16 h-16 glass-effect rounded-xl flex items-center justify-center border border-neon-cyan mb-4">
                    <agent.icon className="w-8 h-8 text-neon-cyan" />
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold text-white mb-2">{agent.name}</h3>
                  <p className="text-white/80">{agent.description}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-dark-secondary border-b border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4">
            {[
              { id: 'overview', label: 'Overview', icon: Bot },
              { id: 'how-it-works', label: 'How It Works', icon: Zap },
              { id: 'productivity', label: 'Productivity', icon: TrendingUp }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'btn-neon shadow-lg'
                    : 'glass-effect text-text-secondary hover:text-text-primary border border-dark'
                }`}
              >
                <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-dark-primary' : ''}`} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              {/* Features */}
              <div>
                <h2 className="text-3xl font-orbitron font-bold text-text-primary mb-8">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {agent.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center gap-4 p-6 glass-effect rounded-xl border border-dark hover:border-neon-green/50 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-neon-green/10 rounded-xl flex items-center justify-center border border-neon-green/30">
                        <CheckCircle className="w-6 h-6 text-neon-green" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary">{feature}</h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Capabilities */}
              <div>
                <h2 className="text-3xl font-orbitron font-bold text-text-primary mb-8">AI Capabilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {agent.capabilities.map((capability, index) => (
                    <motion.div
                      key={capability}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center gap-4 p-6 glass-effect rounded-xl border border-dark hover:border-neon-cyan/50 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-neon-cyan/10 rounded-xl flex items-center justify-center border border-neon-cyan/30">
                        <Zap className="w-6 h-6 text-neon-cyan" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary">{capability}</h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div>
                <h2 className="text-3xl font-orbitron font-bold text-text-primary mb-8">Use Cases</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {agent.useCases.map((useCase, index) => (
                    <motion.div
                      key={useCase}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="p-6 glass-effect rounded-xl border border-dark hover:border-neon-pink/50 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 bg-neon-pink rounded-full"></div>
                        <h3 className="text-lg font-semibold text-text-primary">{useCase}</h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* How It Works Tab */}
          {activeTab === 'how-it-works' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <h2 className="text-3xl font-orbitron font-bold text-text-primary mb-8">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {agent.howItWorks.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative"
                  >
                    <div className="p-8 glass-effect rounded-2xl border border-dark hover:border-neon-green/50 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-neon-green/10 rounded-xl flex items-center justify-center border border-neon-green/30 flex-shrink-0">
                          <span className="text-xl font-bold text-neon-green">{index + 1}</span>
                        </div>
                        <div>
                          <p className="text-lg text-text-primary leading-relaxed">{step}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Productivity Tab */}
          {activeTab === 'productivity' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <h2 className="text-3xl font-orbitron font-bold text-text-primary mb-8">Productivity Enhancement</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {agent.productivityEnhancement.map((enhancement, index) => (
                  <motion.div
                    key={enhancement}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-8 glass-effect rounded-2xl border border-dark hover:border-neon-pink/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-neon-pink/10 rounded-2xl flex items-center justify-center border border-neon-pink/30">
                        <TrendingUp className="w-8 h-8 text-neon-pink" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-text-primary">Improvement #{index + 1}</h3>
                      </div>
                    </div>
                    <p className="text-lg text-text-secondary leading-relaxed">{enhancement}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-secondary border-t border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-text-primary">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Start using {agent.name} today and experience the power of AI-driven automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                             <motion.button
                 variants={buttonHoverVariants}
                 whileHover="hover"
                 whileTap="tap"
                 onClick={() => navigate('/get-quote')}
                 className="btn-neon px-8 py-4 rounded-full font-orbitron font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
               >
                 <Rocket className="w-5 h-5 text-dark-primary" />
                 Get Started Now
               </motion.button>
              
              <motion.button
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => navigate('/marketplace')}
                className="glass-effect text-neon-cyan px-8 py-4 rounded-full font-orbitron font-semibold text-lg border border-neon-cyan hover:neon-glow-cyan transition-all duration-300 flex items-center gap-2"
              >
                <Bot className="w-5 h-5" />
                Explore Other Agents
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AiAgentDetail;
