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
  Key
} from 'lucide-react';
import { 
  readyMadeSolutions, 
  apiKeys, 
  industries, 
  frameworks, 
  apiCategories 
} from '../data/marketplaceData';

const Marketplace = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('solutions');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedFramework, setSelectedFramework] = useState('All Frameworks');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  // Filter ready-made solutions
  const filteredSolutions = useMemo(() => {
    return readyMadeSolutions.filter(solution => {
      const matchesSearch = solution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           solution.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesIndustry = selectedIndustry === 'All Industries' || solution.industry === selectedIndustry;
      const matchesFramework = selectedFramework === 'All Frameworks' || solution.framework === selectedFramework;
      
      return matchesSearch && matchesIndustry && matchesFramework;
    });
  }, [searchTerm, selectedIndustry, selectedFramework]);

  // Filter APIs
  const filteredApis = useMemo(() => {
    return apiKeys.filter(api => {
      const matchesSearch = api.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           api.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All Categories' || api.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

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
              Digital <span className="gradient-neon-text neon-text">Marketplace</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              Discover ready-made solutions and powerful APIs to accelerate your development process. 
              From complete applications to specialized services, find everything you need to build exceptional digital experiences.
            </p>

            {/* Tab Navigation */}
            <div className="flex justify-center mt-12">
              <div className="glass-effect rounded-full p-2 border border-dark">
                <button
                  onClick={() => setActiveTab('solutions')}
                  className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeTab === 'solutions'
                      ? 'btn-neon shadow-lg'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  <ShoppingCart className={`w-5 h-5 ${activeTab === 'solutions' ? 'text-dark-primary' : ''}`} />
                  Ready-Made Solutions
                </button>
                <button
                  onClick={() => setActiveTab('apis')}
                  className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeTab === 'apis'
                      ? 'btn-neon shadow-lg'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  <Key className={`w-5 h-5 ${activeTab === 'apis' ? 'text-dark-primary' : ''}`} />
                  API Keys
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-dark-secondary border-b border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
              <input
                type="text"
                placeholder={`Search ${activeTab === 'solutions' ? 'solutions' : 'APIs'}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-dark-tertiary border border-dark text-text-primary rounded-xl focus:ring-2 focus:ring-neon-green focus:border-transparent text-lg placeholder-text-secondary"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              {activeTab === 'solutions' ? (
                <>
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="px-4 py-3 bg-dark-tertiary border border-dark text-text-primary rounded-xl focus:ring-2 focus:ring-neon-green focus:border-transparent"
                  >
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                  
                  <select
                    value={selectedFramework}
                    onChange={(e) => setSelectedFramework(e.target.value)}
                    className="px-4 py-3 bg-dark-tertiary border border-dark text-text-primary rounded-xl focus:ring-2 focus:ring-neon-green focus:border-transparent"
                  >
                    {frameworks.map(framework => (
                      <option key={framework} value={framework}>{framework}</option>
                    ))}
                  </select>
                </>
              ) : (
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-dark-tertiary border border-dark text-text-primary rounded-xl focus:ring-2 focus:ring-neon-green focus:border-transparent"
                >
                  {apiCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'solutions' ? (
            <>
              {/* Ready-Made Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-text-primary mb-4">
                  Ready-Made Solutions
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
                          <span className="px-3 py-1 bg-dark-tertiary border border-neon-green text-neon-green rounded-full text-sm font-medium">
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
          ) : (
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
            </div>
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
      </section>
    </div>
  );
};

export default Marketplace;