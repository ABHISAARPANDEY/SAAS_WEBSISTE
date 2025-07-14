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
  ExternalLink
} from 'lucide-react';
import { getProductById } from '../data/marketplaceData';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = getProductById(productId);
  const [selectedPlan, setSelectedPlan] = useState('premium');
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    industry: '',
    message: ''
  });

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-primary">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-4">Product Not Found</h1>
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              navigate('/marketplace');
            }}
            className="btn-neon px-6 py-3 rounded-full font-orbitron font-semibold hover:shadow-lg transition-all duration-300"
          >
            Back to Marketplace
          </button>
        </div>
      </div>
    );
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Consultation request:', formData);
    alert('Consultation request submitted successfully!');
    setShowConsultationForm(false);
    setFormData({ name: '', email: '', phone: '', industry: '', message: '' });
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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          onClick={() => {
            window.scrollTo(0, 0);
            navigate('/marketplace');
          }}
            className="flex items-center gap-2 text-text-secondary hover:text-neon-green transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Marketplace
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-dark">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-dark-tertiary border border-neon-green text-neon-green rounded-full text-sm font-medium">
                      {product.industry}
                    </span>
                    <span className="px-3 py-1 bg-dark-tertiary border border-neon-cyan text-neon-cyan rounded-full text-sm font-medium">
                      {product.framework}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-16 h-16 border border-neon-green rounded-2xl flex items-center justify-center pulse-neon">
                  <product.icon className="w-8 h-8 text-neon-green" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-text-primary mb-2">
                    {product.name}
                  </h1>
                  <div className="flex items-center gap-2 text-text-secondary">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-neon-green fill-current" />
                      ))}
                    </div>
                    <span>(4.8/5 from 127 reviews)</span>
                  </div>
                </div>
              </div>

              <p className="text-xl text-text-secondary leading-relaxed">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {product.features.slice(0, 4).map((feature, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-dark-tertiary text-text-secondary rounded-full text-sm font-medium border border-dark"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    // Navigate to the appropriate demo page based on product ID
                    window.scrollTo(0, 0);
                    if (product.id === 'healthtrack-pro') {
                      navigate('/product-demos/healthtrack-pro');
                    } else if (product.id === 'fintech-suite') {
                      navigate('/product-demos/fintech-suite');
                    } else if (product.id === 'ecommerce-pro') {
                      navigate('/product-demos/ecommerce-pro');
                    } else {
                      // Navigate to the appropriate demo page for other products
                      if (product.id === 'edulearn-platform') {
                        navigate('/product-demos/edulearn-platform');
                      } else if (product.id === 'banking-core') {
                        navigate('/product-demos/banking-core');
                      } else if (product.id === 'property-manager') {
                        navigate('/product-demos/property-manager');
                      } else if (product.id === 'travel-booking') {
                        navigate('/product-demos/travel-booking');
                      } else if (product.id === 'streaming-platform') {
                        navigate('/product-demos/streaming-platform');
                      } else if (product.id === 'foodie-delivery') {
                        navigate('/product-demos/foodie-delivery');
                      } else if (product.id === 'retail-pos') {
                        navigate('/product-demos/retail-pos');
                      } else {
                        // For any remaining products, show a coming soon message
                        alert('Demo coming soon!');
                      }
                    }
                  }}
                  className="btn-neon px-8 py-4 rounded-full font-orbitron font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <Play className="w-5 h-5 text-dark-primary" />
                  Live Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowConsultationForm(true)}
                  className="glass-effect text-neon-cyan px-8 py-4 rounded-full font-orbitron font-semibold text-lg border border-neon-cyan hover:neon-glow-cyan transition-all duration-300"
                >
                  Book Consultation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-dark-secondary border-t border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-text-primary mb-6">
              Technical <span className="gradient-neon-text neon-text">Specifications</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(product.techSpecs).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-tertiary p-6 rounded-2xl border border-dark hover:border-neon-green/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-dark-primary border border-neon-green rounded-xl flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-neon-green" />
                </div>
                <h3 className="text-lg font-orbitron font-bold text-text-primary mb-2 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <p className="text-text-secondary">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-dark-primary border-t border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-text-primary mb-6">
              Feature <span className="gradient-neon-text neon-text">Comparison</span>
            </h2>
          </motion.div>

          <div className="bg-dark-secondary rounded-2xl shadow-xl overflow-hidden border border-dark">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="bg-dark-tertiary border-b border-dark">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Features</th>
                    <th className="px-6 py-4 text-center font-semibold">Basic</th>
                    <th className="px-6 py-4 text-center font-semibold">Premium</th>
                    <th className="px-6 py-4 text-center font-semibold">Super Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-dark">
                  {product.features.map((feature, index) => (
                    <tr key={index} className="hover:bg-dark-tertiary/50">
                      <td className="px-6 py-4 font-medium text-text-primary">{feature}</td>
                      <td className="px-6 py-4 text-center">
                        <Check className="w-5 h-5 text-neon-green mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="w-5 h-5 text-neon-green mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="w-5 h-5 text-neon-green mx-auto" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-dark-secondary border-t border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-text-primary mb-6">
              Pricing <span className="gradient-neon-text neon-text">Plans</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(product.pricing).map(([plan, details], index) => (
              <motion.div
                key={plan}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative bg-dark-tertiary rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-2xl ${
                  plan === 'premium' 
                    ? 'border-neon-green scale-105' 
                    : 'border-dark hover:border-neon-green/30'
                }`}
              >
                {plan === 'premium' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-dark-primary border border-neon-green text-neon-green px-6 py-2 rounded-full text-sm font-orbitron font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-orbitron font-bold text-text-primary mb-2 capitalize">
                    {plan.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-neon-green">${details.price}</span>
                    <span className="text-text-secondary">/month</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {details.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-neon-green flex-shrink-0" />
                        <span className="text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedPlan(plan)}
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      plan === 'premium'
                        ? 'btn-neon hover:shadow-lg'
                        : 'bg-dark-primary text-text-primary hover:bg-dark-primary/80 border border-dark'
                    }`}
                  >
                    {selectedPlan === plan ? 'Selected' : 'Select Plan'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
                onClick={() => {
        window.scrollTo(0, 0);
       navigate('/get-quote');
      }}
              className="btn-neon px-12 py-4 rounded-full font-orbitron font-semibold text-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              <Download className="w-6 h-6 text-dark-primary" />
              Purchase {selectedPlan.replace(/([A-Z])/g, ' $1').trim()} Plan
            </motion.button>
          </div>
        </div>
      </section>

      {/* Consultation Form Modal */}
      {showConsultationForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-dark-secondary rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-dark"
          >
            <div className="p-8 bg-dark-primary">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-orbitron font-bold text-text-primary">Book Consultation</h3>
                <button
                  onClick={() => setShowConsultationForm(false)}
                  className="p-2 hover:bg-dark-tertiary rounded-full transition-colors text-text-secondary hover:text-neon-pink"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-tertiary border border-dark text-text-primary rounded-xl focus:ring-2 focus:ring-neon-green focus:border-transparent placeholder-text-secondary"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-tertiary border border-dark text-text-primary rounded-xl focus:ring-2 focus:ring-neon-green focus:border-transparent placeholder-text-secondary"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-tertiary border border-dark text-text-primary rounded-xl focus:ring-2 focus:ring-neon-green focus:border-transparent placeholder-text-secondary"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Industry
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-tertiary border border-dark text-text-primary rounded-xl focus:ring-2 focus:ring-neon-green focus:border-transparent"
                    >
                      <option value="">Select your industry</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Finance">Finance</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Education">Education</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-dark-tertiary border border-dark text-text-primary rounded-xl focus:ring-2 focus:ring-neon-green focus:border-transparent placeholder-text-secondary"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-neon py-4 px-6 rounded-xl font-orbitron font-semibold text-lg hover:shadow-lg transition-all duration-300"
                >
                  Submit Consultation Request
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;