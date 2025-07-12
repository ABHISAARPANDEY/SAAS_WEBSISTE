import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Key, 
  Code, 
  BarChart3, 
  Shield, 
  Copy,
  Check,
  ExternalLink,
  Play,
  Download,
  Calculator
} from 'lucide-react';
import { getApiById } from '../data/marketplaceData';

const ApiDetail = () => {
  const { apiId } = useParams();
  const navigate = useNavigate();
  const api = getApiById(apiId);
  const [selectedPlan, setSelectedPlan] = useState('basic');
  const [showApiKey, setShowApiKey] = useState(false);
  const [copied, setCopied] = useState(false);
  const [monthlyRequests, setMonthlyRequests] = useState(10000);

  if (!api) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-primary">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-4">API Not Found</h1>
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

  const generateApiKey = () => {
    setShowApiKey(true);
  };

  const copyApiKey = () => {
    navigator.clipboard.writeText('sk_live_51234567890abcdef...');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const calculatePrice = () => {
    if (monthlyRequests <= api.pricing.free.requests) return 0;
    if (monthlyRequests <= api.pricing.basic.requests) return api.pricing.basic.price;
    return api.pricing.premium.price;
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
            {/* API Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 relative z-10"
            >
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 border border-neon-green rounded-2xl flex items-center justify-center pulse-neon">
                  <api.icon className="w-10 h-10 text-neon-green" />
                </div>
                <div>
                  <span className="px-3 py-1 bg-dark-tertiary border border-neon-cyan text-neon-cyan rounded-full text-sm font-medium mb-2 inline-block">
                    {api.category}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-text-primary">
                    {api.name}
                  </h1>
                </div>
              </div>

              <p className="text-xl text-text-secondary leading-relaxed">
                {api.description}
              </p>

              <div className="bg-dark-tertiary rounded-xl p-4 border border-dark">
                <div className="text-sm text-text-secondary mb-1">Performance Metrics</div>
                <div className="text-text-primary font-semibold">{api.usageMetrics}</div>
              </div>

              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={generateApiKey}
                  className="btn-neon px-8 py-4 rounded-full font-orbitron font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <Key className="w-5 h-5 text-dark-primary" />
                  Generate API Key
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-effect text-neon-cyan px-8 py-4 rounded-full font-orbitron font-semibold text-lg border border-neon-cyan hover:neon-glow-cyan transition-all duration-300 flex items-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Docs
                </motion.button>
              </div>
            </motion.div>

            {/* API Key Generation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-dark-secondary rounded-2xl p-8 border border-dark"
            >
              <h3 className="text-2xl font-orbitron font-bold text-text-primary mb-6">Quick Start</h3>
              
              {showApiKey ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Your API Key
                    </label>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-dark-primary rounded-lg p-3 font-mono text-sm text-text-primary border border-dark">
                        sk_live_51234567890abcdef...
                      </div>
                      <button
                        onClick={copyApiKey}
                        className="p-3 bg-dark-tertiary hover:bg-dark-tertiary/80 rounded-lg transition-colors border border-dark hover:border-neon-green/50"
                      >
                        {copied ? (
                          <Check className="w-5 h-5 text-neon-green" />
                        ) : (
                          <Copy className="w-5 h-5 text-text-secondary" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="bg-dark-primary rounded-lg p-4 border border-dark">
                    <div className="text-sm text-text-secondary mb-2">Sample Request</div>
                    <pre className="text-sm text-neon-cyan font-mono overflow-x-auto">
{`curl -X GET "https://api.example.com/v1/endpoint" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
                    </pre>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Key className="w-16 h-16 text-text-secondary mx-auto mb-4" />
                  <p className="text-text-secondary mb-6">
                    Generate your API key to start integrating with our service
                  </p>
                  <button
                    onClick={generateApiKey}
                    className="btn-neon px-6 py-3 rounded-lg font-orbitron font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Generate API Key
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* API Documentation */}
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
              API <span className="gradient-neon-text neon-text">Documentation</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8 bg-dark-tertiary p-6 rounded-xl border border-dark"
            >
              <div>
                <h3 className="text-2xl font-orbitron font-bold text-text-primary mb-4">Overview</h3>
                <p className="text-text-secondary leading-relaxed">
                  {api.documentation.overview}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-orbitron font-bold text-text-primary mb-4">Use Cases</h3>
                <ul className="space-y-3">
                  {api.documentation.useCases.map((useCase, index) => (
                    <li key={index} className="flex items-center gap-3 text-text-secondary">
                      <div className="w-2 h-2 bg-neon-green rounded-full" />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Endpoints */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-dark-tertiary p-6 rounded-xl border border-dark"
            >
              <h3 className="text-2xl font-orbitron font-bold text-text-primary mb-6">API Endpoints</h3>
              <div className="space-y-4">
                {api.documentation.endpoints.map((endpoint, index) => (
                  <div key={index} className="bg-dark-primary rounded-xl p-6 border border-dark">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        endpoint.method === 'GET' ? 'bg-dark-tertiary text-neon-green border border-neon-green' :
                        endpoint.method === 'POST' ? 'bg-dark-tertiary text-neon-cyan border border-neon-cyan' :
                        'bg-dark-tertiary text-neon-pink border border-neon-pink'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="font-mono text-text-primary">{endpoint.path}</code>
                    </div>
                    <p className="text-text-secondary">{endpoint.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
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
              Pricing <span className="gradient-neon-text neon-text">Calculator</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calculator */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-dark-secondary rounded-2xl p-8 shadow-lg border border-dark"
            >
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="w-8 h-8 text-neon-green" />
                <h3 className="text-2xl font-orbitron font-bold text-text-primary">Usage Calculator</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Monthly Requests
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="200000"
                    step="1000"
                    value={monthlyRequests}
                    onChange={(e) => setMonthlyRequests(parseInt(e.target.value))}
                    className="w-full h-2 bg-dark-tertiary rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-text-secondary mt-2">
                    <span>0</span>
                    <span className="font-semibold text-text-primary">
                      {monthlyRequests.toLocaleString()} requests
                    </span>
                    <span>200K+</span>
                  </div>
                </div>

                <div className="bg-dark-tertiary rounded-xl p-6 border border-neon-green/30">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-neon-green mb-2">
                      ${calculatePrice()}<span className="text-lg text-text-secondary">/month</span>
                    </div>
                    <div className="text-sm text-text-secondary">
                      {monthlyRequests <= api.pricing.free.requests ? 'Free Plan' :
                       monthlyRequests <= api.pricing.basic.requests ? 'Basic Plan' : 'Premium Plan'}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pricing Tiers */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {Object.entries(api.pricing).map(([plan, details], index) => (
                <div
                  key={plan}
                  className={`bg-dark-secondary rounded-xl p-6 border-2 transition-all duration-300 ${
                    plan === selectedPlan ? 'border-neon-green shadow-lg' : 'border-dark'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-orbitron font-bold text-text-primary capitalize">
                        {plan} Plan
                      </h4>
                      <div className="text-2xl font-bold text-neon-green">
                        ${details.price}<span className="text-sm text-text-secondary">/month</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-text-secondary">Requests/day</div>
                      <div className="font-semibold text-text-primary">
                        {details.requests.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4 text-text-secondary">
                    {details.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-neon-green flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedPlan(plan)}
                    className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      plan === selectedPlan
                        ? 'btn-neon'
                        : 'bg-dark-tertiary text-text-secondary border border-dark hover:bg-dark-tertiary/80'
                    }`}
                  >
                    {selectedPlan === plan ? 'Current Plan' : 'Select Plan'}
                  </button>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Usage Dashboard Preview */}
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
              Usage <span className="gradient-neon-text neon-text">Dashboard</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Monitor your API usage with real-time analytics and insights
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-dark-tertiary rounded-2xl p-8 border border-dark"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-dark-primary rounded-xl p-6 border border-dark">
                <div className="flex items-center gap-3 mb-2">
                  <BarChart3 className="w-6 h-6 text-neon-green" />
                  <span className="text-sm text-text-secondary">Requests Today</span>
                </div>
                <div className="text-3xl font-bold text-text-primary">2,847</div>
                <div className="text-sm text-neon-green">+12% from yesterday</div>
              </div>

              <div className="bg-dark-primary rounded-xl p-6 border border-dark">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-6 h-6 text-neon-cyan" />
                  <span className="text-sm text-text-secondary">Success Rate</span>
                </div>
                <div className="text-3xl font-bold text-text-primary">99.8%</div>
                <div className="text-sm text-text-secondary">Last 30 days</div>
              </div>

              <div className="bg-dark-primary rounded-xl p-6 border border-dark">
                <div className="flex items-center gap-3 mb-2">
                  <Code className="w-6 h-6 text-neon-pink" />
                  <span className="text-sm text-text-secondary">Avg Response</span>
                </div>
                <div className="text-3xl font-bold text-text-primary">45ms</div>
                <div className="text-sm text-text-secondary">Global average</div>
              </div>
            </div>

            <div className="bg-dark-primary rounded-xl p-6 border border-dark">
              <h4 className="text-lg font-orbitron font-semibold text-text-primary mb-4">Request Volume (Last 7 Days)</h4>
              <div className="h-32 bg-dark-tertiary rounded-lg flex items-end justify-center border border-dark">
                <div className="text-text-secondary text-sm">Interactive chart would be displayed here</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-primary border-t border-dark">
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Join thousands of developers using our {api.name} to build amazing applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={generateApiKey}
                className="btn-neon px-8 py-4 rounded-full font-orbitron font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <Key className="w-5 h-5 text-dark-primary" />
                Get Your API Key
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-effect text-neon-cyan px-8 py-4 rounded-full font-orbitron font-semibold text-lg border border-neon-cyan hover:neon-glow-cyan transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download SDK
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ApiDetail;