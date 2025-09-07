import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  BarChart3, 
  Clock, 
  Bell, 
  CheckCircle,
  TrendingUp,
  PieChart,
  LineChart,
  BarChart,
  Table,
  Filter,
  RefreshCw,
  Share2,
  Eye,
  Settings,
  Zap,
  Shield,
  Users,
  Target,
  Award,
  Calendar,
  Mail
} from 'lucide-react';

const ExcelDash = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: BarChart3,
      title: 'Excel Integration',
      description: 'Seamlessly import data from Excel files with automatic column detection and data type recognition.'
    },
    {
      icon: PieChart,
      title: 'Power BI Style Dashboards',
      description: 'Create stunning, interactive dashboards that rival Power BI with drag-and-drop functionality.'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Analytics',
      description: 'Get instant insights with real-time data processing and automatic chart updates.'
    },
    {
      icon: Filter,
      title: 'Advanced Visualizations',
      description: 'Choose from 20+ chart types including heatmaps, treemaps, and custom visualizations.'
    },
    {
      icon: Share2,
      title: 'Smart Filtering',
      description: 'Apply complex filters and slicers to drill down into your data with ease.'
    },
    {
      icon: Settings,
      title: 'Easy Sharing',
      description: 'Share dashboards with team members or embed them in presentations and reports.'
    }
  ];

  const comingSoonFeatures = [
    'Excel file import and processing',
    'Interactive dashboard creation',
    'Real-time data visualization',
    'Advanced chart types and customization',
    'Team collaboration features',
    'Export to multiple formats',
    'API integration capabilities',
    'Mobile-responsive dashboards'
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
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="text-green-600">ExcelDash</span>
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Clock className="w-6 h-6 text-orange-500" />
              <span className="text-2xl font-semibold text-orange-600">Coming Soon</span>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8">
              Transform your Excel data into stunning Power BI-style dashboards with advanced analytics and real-time insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2"
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
              We're working hard to bring you the most powerful Excel-to-dashboard solution. Join our waitlist to be the first to know when it's ready!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What's <span className="text-green-600">Coming</span>?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              ExcelDash will bridge the gap between Excel and Power BI, giving you professional-grade dashboards without the complexity
            </p>
          </motion.div>

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
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Features List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Planned <span className="text-green-600">Features</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Here's what you can expect when ExcelDash launches
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {comingSoonFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-4 bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
              >
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-12 border border-green-200"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Be the First to <span className="text-green-600">Experience</span> ExcelDash
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Join our exclusive waitlist and get early access to ExcelDash when it launches. Plus, get a special launch discount!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Join Waitlist
              </motion.button>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              We'll only send you updates about ExcelDash. No spam, ever.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ExcelDash;