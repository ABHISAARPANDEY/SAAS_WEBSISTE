import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Store, 
  ShoppingCart, 
  Package, 
  TrendingUp, 
  BarChart3, 
  Bell, 
  Calendar, 
  Clock, 
  Users, 
  Zap, 
  Globe, 
  CheckCircle, 
  Target, 
  Rocket, 
  Shield, 
  RefreshCw, 
  Mail,
  DollarSign,
  Eye,
  Link,
  Minus
} from 'lucide-react';

const EcommerceAutoPilot = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: Store,
      title: 'Multi-Store Management',
      description: 'Connect and manage all your ecommerce stores from one unified dashboard',
      details: ['Shopify Integration', 'Amazon Seller Central', 'Flipkart Seller Hub', 'WooCommerce Support', 'Magento Integration', 'Custom Store APIs']
    },
    {
      icon: Package,
      title: 'Inventory Synchronization',
      description: 'Real-time inventory sync across all platforms with automated stock updates',
      details: ['Real-time Sync', 'Low Stock Alerts', 'Automated Reordering', 'Bulk Inventory Updates', 'SKU Management', 'Variant Tracking']
    },
    {
      icon: ShoppingCart,
      title: 'Order Processing',
      description: 'Streamlined order management with automated fulfillment and tracking',
      details: ['Order Aggregation', 'Automated Fulfillment', 'Shipping Integration', 'Tracking Updates', 'Return Management', 'Customer Notifications']
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting across all your sales channels',
      details: ['Sales Analytics', 'Performance Metrics', 'Revenue Tracking', 'Customer Insights', 'Product Performance', 'Custom Reports']
    },
    {
      icon: Zap,
      title: 'Automation Rules',
      description: 'Set up intelligent automation rules to streamline your operations',
      details: ['Price Optimization', 'Stock Management', 'Order Routing', 'Customer Service', 'Marketing Automation', 'Workflow Automation']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with compliance for all major ecommerce regulations',
      details: ['Data Encryption', 'PCI Compliance', 'GDPR Compliance', 'SOC 2 Certified', 'Two-Factor Auth', 'Audit Logs']
    }
  ];

  const platforms = [
    { 
      name: 'Shopify', 
      logo: 'https://cdn.shopify.com/s/files/1/0070/7032/files/shopify-logo.png', 
      color: 'from-green-500 to-green-700',
      features: ['Store Management', 'Product Sync', 'Order Processing', 'Analytics']
    },
    { 
      name: 'Amazon', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', 
      color: 'from-orange-500 to-orange-700',
      features: ['Seller Central', 'FBA Integration', 'Advertising', 'Reviews']
    },
    { 
      name: 'Flipkart', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flipkart_logo.svg', 
      color: 'from-blue-500 to-blue-700',
      features: ['Seller Hub', 'Product Catalog', 'Order Management', 'Payments']
    },
    { 
      name: 'WooCommerce', 
      logo: 'https://woocommerce.com/wp-content/uploads/2011/03/woocommerce-logo.png', 
      color: 'from-purple-500 to-purple-700',
      features: ['WordPress Integration', 'Custom Themes', 'Extensions', 'SEO']
    },
    { 
      name: 'Magento', 
      logo: 'https://magento.com/sites/default/files/magento-logo.svg', 
      color: 'from-red-500 to-red-700',
      features: ['Enterprise Features', 'B2B Commerce', 'Multi-store', 'Customization']
    },
    { 
      name: 'Custom APIs', 
      logo: 'https://cdn-icons-png.flaticon.com/512/2165/2165004.png', 
      color: 'from-gray-500 to-gray-700',
      features: ['REST APIs', 'GraphQL', 'Webhooks', 'Custom Integration']
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'features', label: 'Features', icon: Zap },
    { id: 'platforms', label: 'Platforms', icon: Globe }
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
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center">
                <Store className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                Ecommerce Auto Pilot
              </span>
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Clock className="w-6 h-6 text-orange-500" />
              <span className="text-2xl font-semibold text-orange-600">Coming Soon</span>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8">
              Link your Shopify, Amazon, Flipkart stores and manage all from one platform with automated inventory sync, order processing, and analytics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2"
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
              <h3 className="text-2xl font-bold text-orange-800">Expected Launch: Q2 2025</h3>
            </div>
            <p className="text-lg text-orange-700 max-w-2xl mx-auto">
              We're building the most comprehensive ecommerce management platform. Join our waitlist to be the first to experience the future of multi-store management!
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
                    ? 'bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white shadow-lg'
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
                  The Future of <span className="text-blue-600">Multi-Store Management</span>
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                  Ecommerce Auto Pilot revolutionizes how you manage multiple online stores with intelligent automation, 
                  real-time synchronization, and comprehensive analytics.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Multi-Platform Integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Real-time Inventory Sync</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Automated Order Processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Advanced Analytics</span>
                  </div>
                </div>
              </div>

              {/* Key Benefits Section */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Ecommerce Auto Pilot?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">10x Faster Operations</h4>
                    <p className="text-gray-700">
                      Automate repetitive tasks and manage all your stores from one dashboard. Save hours every day with intelligent automation.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Increase Sales by 40%</h4>
                    <p className="text-gray-700">
                      Optimize inventory across all platforms, reduce stockouts, and never miss a sale with real-time synchronization.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Enterprise Security</h4>
                    <p className="text-gray-700">
                      Bank-level security with PCI compliance, data encryption, and audit logs to protect your business data.
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* How It Works Section */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">How Ecommerce Auto Pilot Works</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {[
                    {
                      step: "01",
                      title: "Connect Your Stores",
                      description: "Link all your ecommerce platforms with secure API connections.",
                      icon: Link
                    },
                    {
                      step: "02", 
                      title: "Sync Inventory",
                      description: "Real-time inventory synchronization across all platforms.",
                      icon: RefreshCw
                    },
                    {
                      step: "03",
                      title: "Automate Orders",
                      description: "Intelligent order processing and fulfillment automation.",
                      icon: Zap
                    },
                    {
                      step: "04",
                      title: "Analyze & Optimize",
                      description: "Comprehensive analytics to optimize your operations.",
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
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
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

              {/* Stats Section */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Trusted by Ecommerce Leaders</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { number: "10,000+", label: "Stores Connected" },
                    { number: "$2.5B+", label: "GMV Processed" },
                    { number: "99.9%", label: "Uptime Guarantee" },
                    { number: "50+", label: "Platform Integrations" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                      <div className="text-gray-600">{stat.label}</div>
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
                  Powerful <span className="text-blue-600">Features</span>
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Everything you need to manage multiple ecommerce stores efficiently
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
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-6">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-700 mb-6">{feature.description}</p>
                    <div className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Platforms Tab */}
          {activeTab === 'platforms' && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Supported <span className="text-blue-600">Platforms</span>
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Connect with all major ecommerce platforms and marketplaces
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {platforms.map((platform, index) => (
                  <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`bg-gradient-to-br ${platform.color} rounded-2xl p-8 text-white hover:scale-105 transition-transform duration-300`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                        <img 
                          src={platform.logo} 
                          alt={platform.name}
                          className="w-10 h-10 object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            if (e.target.nextSibling) {
                              e.target.nextSibling.style.display = 'block';
                            }
                          }}
                        />
                        <div className="w-10 h-10 bg-white/20 rounded flex items-center justify-center" style={{ display: 'none' }}>
                          <span className="text-white text-lg font-bold">{platform.name.charAt(0)}</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{platform.name}</h3>
                        <p className="text-white/80">Full Integration</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {platform.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-white/80 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
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
            className="text-center bg-gradient-to-r from-blue-50 via-cyan-50 to-teal-50 rounded-3xl p-12 border border-blue-200"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Be the First to <span className="text-blue-600">Experience</span> Ecommerce Auto Pilot
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Join our exclusive waitlist and get early access to Ecommerce Auto Pilot when it launches. Plus, get a special launch discount!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Join Waitlist
              </motion.button>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              We'll only send you updates about Ecommerce Auto Pilot. No spam, ever.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceAutoPilot;
