import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Sparkles, 
  Play, 
  Download, 
  Eye, 
  Share2, 
  Heart,
  MessageSquare,
  ThumbsUp,
  Calendar,
  Clock,
  Users,
  Zap,
  Camera,
  Video,
  Image,
  FileText,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  CheckCircle,
  Star,
  Award,
  TrendingUp,
  BarChart3,
  Target,
  Rocket,
  Shield,
  Lock,
  RefreshCw,
  Bell,
  Mail
} from 'lucide-react';

const SparkWave = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // All 21 demo videos from the /public/demo folder
  const demoVideos = [
    {
      id: 1,
      title: 'Clothing Brand Ad',
      description: 'AI-generated clothing advertisement with dynamic visuals',
      video: '/demo/clothing.mp4',
      category: 'Fashion',
      duration: '0:30',
      views: '12.5K',
      likes: '1.2K'
    },
    {
      id: 2,
      title: 'Coca-Cola Campaign',
      description: 'Classic brand refresh with modern AI effects',
      video: '/demo/coke.mp4',
      category: 'Beverage',
      duration: '0:45',
      views: '8.9K',
      likes: '856'
    },
    {
      id: 3,
      title: 'Coca-Cola Ad',
      description: 'Another Coca-Cola advertisement variation',
      video: '/demo/coke_ad.mp4',
      category: 'Beverage',
      duration: '0:40',
      views: '7.2K',
      likes: '634'
    },
    {
      id: 4,
      title: 'KFC Promotional Video',
      description: 'Mouth-watering food content with AI enhancement',
      video: '/demo/kfc (2).mp4',
      category: 'Food',
      duration: '1:00',
      views: '15.2K',
      likes: '2.1K'
    },
    {
      id: 5,
      title: 'Uber Eats Delivery',
      description: 'Fast-paced delivery service advertisement',
      video: '/demo/uber_eats.mp4',
      category: 'Delivery',
      duration: '0:40',
      views: '6.7K',
      likes: '743'
    },
    {
      id: 6,
      title: 'GPU Technology Showcase',
      description: 'High-tech product demonstration with AI effects',
      video: '/demo/gpu.mp4',
      category: 'Technology',
      duration: '1:15',
      views: '9.3K',
      likes: '1.4K'
    },
    {
      id: 7,
      title: 'Smeg Appliance Ad',
      description: 'Premium kitchen appliance marketing content',
      video: '/demo/smeg.mp4',
      category: 'Appliances',
      duration: '0:50',
      views: '4.8K',
      likes: '567'
    },
    {
      id: 8,
      title: 'Adobe Express Final',
      description: 'Professional video editing showcase',
      video: '/demo/Adobe Express - final_video (3).mp4',
      category: 'Software',
      duration: '1:20',
      views: '11.8K',
      likes: '1.6K'
    },
    {
      id: 9,
      title: 'Adobe Express VFX',
      description: 'Visual effects demonstration',
      video: '/demo/Adobe-Express-ad-vfx-online-vide.mp4',
      category: 'Software',
      duration: '0:55',
      views: '8.4K',
      likes: '923'
    },
    {
      id: 10,
      title: 'General Ads',
      description: 'Collection of various advertisement styles',
      video: '/demo/ads.mp4',
      category: 'Marketing',
      duration: '1:10',
      views: '13.7K',
      likes: '1.8K'
    },
    {
      id: 11,
      title: 'Final Ad 1 Minute',
      description: 'Complete one-minute advertisement',
      video: '/demo/final-ad-1min.mp4',
      category: 'Marketing',
      duration: '1:00',
      views: '16.3K',
      likes: '2.3K'
    },
    {
      id: 12,
      title: 'Illusion Effects',
      description: 'Mind-bending visual effects showcase',
      video: '/demo/illution.mp4',
      category: 'Effects',
      duration: '0:35',
      views: '5.9K',
      likes: '678'
    },
    {
      id: 13,
      title: 'Creative Video 1',
      description: 'AI-generated creative content',
      video: '/demo/2eec520975d59c766786158692678dd9_1755858155.mp4',
      category: 'Creative',
      duration: '0:45',
      views: '7.8K',
      likes: '891'
    },
    {
      id: 14,
      title: 'Creative Video 2',
      description: 'Another creative AI-generated video',
      video: '/demo/31f00682e98068b5c4e99107dafea7dd_1754075357.mp4',
      category: 'Creative',
      duration: '0:50',
      views: '6.2K',
      likes: '745'
    },
    {
      id: 15,
      title: 'Creative Video 3',
      description: 'Dynamic visual content creation',
      video: '/demo/5bb0e6c2990d6479afc91b8e830ebbf8_1754074474.mp4',
      category: 'Creative',
      duration: '0:40',
      views: '8.1K',
      likes: '934'
    },
    {
      id: 16,
      title: 'Creative Video 4',
      description: 'Advanced AI video generation',
      video: '/demo/a2aabaca1de9fa48fd3cf1bc8a3679ae_1755857914.mp4',
      category: 'Creative',
      duration: '0:55',
      views: '9.7K',
      likes: '1.1K'
    },
    {
      id: 17,
      title: 'Creative Video 5',
      description: 'Professional video content',
      video: '/demo/cc9573b945b977a40fbb74de5eff9ca8_1754077873.mp4',
      category: 'Creative',
      duration: '0:35',
      views: '5.4K',
      likes: '612'
    },
    {
      id: 18,
      title: 'Creative Video 6',
      description: 'Innovative visual storytelling',
      video: '/demo/d117ac2c5ff20aeb7620c1630c31b25b_1754075543.mp4',
      category: 'Creative',
      duration: '0:48',
      views: '7.3K',
      likes: '823'
    },
    {
      id: 19,
      title: 'Creative Video 7',
      description: 'Modern content creation',
      video: '/demo/dd6d2866634ef7fa91e4947a5c4a84a5_1755644649.mp4',
      category: 'Creative',
      duration: '0:42',
      views: '6.8K',
      likes: '789'
    },
    {
      id: 20,
      title: 'Creative Video 8',
      description: 'AI-powered visual effects',
      video: '/demo/f28ee64a2e118684a2c5dc3ebb9a4bbe_1754057929.mp4',
      category: 'Creative',
      duration: '0:38',
      views: '5.7K',
      likes: '654'
    },
    {
      id: 21,
      title: 'Advanced Video',
      description: 'High-end video production showcase',
      video: '/demo/r2jW1OBdYMlDfc1F_out.mp4',
      category: 'Production',
      duration: '1:05',
      views: '12.1K',
      likes: '1.7K'
    }
  ];

  const features = [
    {
      icon: Sparkles,
      title: 'AI Content Generation',
      description: 'Create stunning text, images, and videos using advanced AI technology'
    },
    {
      icon: Globe,
      title: 'Multi-Platform Support',
      description: 'Generate content optimized for all major social media platforms'
    },
    {
      icon: Zap,
      title: 'Auto-Posting',
      description: 'Schedule and automatically post content across all your social channels'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Track performance and optimize your content strategy with detailed analytics'
    },
    {
      icon: Target,
      title: 'Audience Targeting',
      description: 'AI-powered audience analysis and content personalization'
    },
    {
      icon: Shield,
      title: 'Brand Safety',
      description: 'Advanced content moderation and brand compliance features'
    }
  ];

  const platforms = [
    { name: 'Instagram', logo: '/logos/instagram.png', color: 'from-pink-500 to-purple-600' },
    { name: 'Facebook', logo: '/logos/facebook.png', color: 'from-blue-600 to-blue-800' },
    { name: 'TikTok', logo: '/logos/ticktok.png', color: 'from-black to-gray-800' },
    { name: 'YouTube', logo: '/logos/youtube.png', color: 'from-red-500 to-red-700' },
    { name: 'Twitter', logo: '/logos/twitter.png', color: 'from-blue-400 to-blue-600' },
    { name: 'LinkedIn', logo: '/logos/linkedin.png', color: 'from-blue-700 to-blue-900' }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'features', label: 'Features', icon: Zap },
    { id: 'gallery', label: 'Video Gallery', icon: Video }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="pt-20 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/marketplace')}
            className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Products</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                SparkWave
              </span>
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Clock className="w-6 h-6 text-orange-500" />
              <span className="text-2xl font-semibold text-orange-600">Coming Soon</span>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8">
              Create AI-powered text, image, and video content for all social media platforms with automatic posting and analytics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2"
              >
                <Bell className="w-5 h-5" />
                Notify Me When Ready
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors"
              >
                View Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="py-8 bg-gradient-to-r from-orange-50 to-yellow-50 border-y border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-orange-600" />
              <h3 className="text-2xl font-bold text-orange-800">Expected Launch: Q4 2025</h3>
            </div>
            <p className="text-lg text-orange-700 max-w-2xl mx-auto">
              We're working hard to bring you the most powerful AI content creation platform. Join our waitlist to be the first to know when it's ready!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  The Future of <span className="text-purple-600">Content Creation</span>
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                  SparkWave revolutionizes social media marketing with AI-powered content generation, 
                  multi-platform optimization, and intelligent automation.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>AI-Powered Content Generation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Multi-Platform Optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Automated Scheduling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Advanced Analytics</span>
                  </div>
                </div>
              </div>

              {/* Key Benefits Section */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose SparkWave?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">10x Faster Content Creation</h4>
                    <p className="text-gray-700">
                      Generate professional-quality content in minutes, not hours. Our AI creates text, images, and videos tailored to your brand and audience.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Smart Audience Targeting</h4>
                    <p className="text-gray-700">
                      AI analyzes your audience preferences and creates content that resonates. Get higher engagement rates and better conversion.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Performance Optimization</h4>
                    <p className="text-gray-700">
                      Real-time analytics and AI insights help you optimize your content strategy for maximum reach and engagement.
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* How It Works Section */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">How SparkWave Works</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {[
                    {
                      step: "01",
                      title: "Define Your Brand",
                      description: "Set up your brand guidelines, tone, and target audience preferences.",
                      icon: Shield
                    },
                    {
                      step: "02", 
                      title: "AI Content Generation",
                      description: "Our AI creates text, images, and videos based on your specifications.",
                      icon: Sparkles
                    },
                    {
                      step: "03",
                      title: "Multi-Platform Optimization",
                      description: "Content is automatically optimized for each social media platform.",
                      icon: Globe
                    },
                    {
                      step: "04",
                      title: "Auto-Publish & Analyze",
                      description: "Schedule posts and track performance with detailed analytics.",
                      icon: BarChart3
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="relative mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <item.icon className="w-10 h-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {item.step}
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                      <p className="text-gray-700">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Platform Support */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Supported Platforms</h3>
                <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto">
                  SparkWave seamlessly integrates with all major social media platforms, ensuring your content looks perfect everywhere.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {platforms.map((platform, index) => (
                    <motion.div
                      key={platform.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className={`bg-gradient-to-br ${platform.color} rounded-xl p-6 text-center text-white hover:scale-105 transition-transform duration-300`}
                    >
                      <div className="flex justify-center mb-2">
                        <img 
                          src={platform.logo} 
                          alt={platform.name}
                          className="w-8 h-8 object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            if (e.target.nextSibling) {
                              e.target.nextSibling.style.display = 'block';
                            }
                          }}
                        />
                        <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center" style={{ display: 'none' }}>
                          <span className="text-white text-sm font-bold">{platform.name.charAt(0)}</span>
                        </div>
                      </div>
                      <div className="font-semibold">{platform.name}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Pricing Preview */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Simple, Transparent Pricing</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {[
                    {
                      name: "Starter",
                      price: "$29",
                      period: "/month",
                      description: "Perfect for small businesses and individual creators",
                      features: ["5 AI-generated posts/day", "2 social platforms", "Basic analytics", "Email support"]
                    },
                    {
                      name: "Professional", 
                      price: "$79",
                      period: "/month",
                      description: "Ideal for growing businesses and marketing teams",
                      features: ["20 AI-generated posts/day", "All social platforms", "Advanced analytics", "Priority support", "Team collaboration"],
                      popular: true
                    },
                    {
                      name: "Enterprise",
                      price: "$199",
                      period: "/month", 
                      description: "For large organizations with advanced needs",
                      features: ["Unlimited AI posts", "All platforms + custom", "White-label analytics", "Dedicated support", "API access", "Custom integrations"]
                    }
                  ].map((plan, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`relative rounded-2xl p-8 border-2 ${
                        plan.popular 
                          ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50' 
                          : 'border-gray-200 bg-white'
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                            Most Popular
                          </span>
                        </div>
                      )}
                      <div className="text-center mb-6">
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                        <div className="flex items-baseline justify-center">
                          <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                          <span className="text-gray-600 ml-1">{plan.period}</span>
                        </div>
                        <p className="text-gray-600 mt-2">{plan.description}</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                          plan.popular
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {plan.popular ? 'Get Started' : 'Learn More'}
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Features Tab */}
          {activeTab === 'features' && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Planned <span className="text-purple-600">Features</span>
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Here's what you can expect when SparkWave launches
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-2xl p-8 border border-gray-200 relative"
                  >
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-orange-100 text-orange-600 text-xs font-semibold rounded-full">
                        Coming Soon
                      </span>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center mb-6">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Video Gallery Tab */}
          {activeTab === 'gallery' && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  AI-Generated <span className="text-purple-600">Content Gallery</span>
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Explore our collection of AI-generated videos and content created with SparkWave
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {demoVideos.map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="group cursor-pointer"
                  >
                    <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-purple-300 transition-all duration-300">
                      <div className="relative">
                        <video
                          src={video.video}
                          className="w-full h-48 object-contain bg-black"
                          controls
                          preload="metadata"
                          poster=""
                        >
                          Your browser does not support the video tag.
                        </video>
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full">
                            {video.duration}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-3 py-1 bg-purple-100 text-purple-600 text-sm rounded-full">
                            {video.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
                        <p className="text-gray-700 text-sm mb-4">{video.description}</p>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {video.views}
                            </span>
                            <span className="flex items-center gap-1">
                              <Heart className="w-4 h-4" />
                              {video.likes}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 rounded-3xl p-12 border border-purple-200"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Be the First to <span className="text-purple-600">Experience</span> SparkWave
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Join our exclusive waitlist and get early access to SparkWave when it launches. Plus, get a special launch discount!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Join Waitlist
              </motion.button>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              We'll only send you updates about SparkWave. No spam, ever.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SparkWave;