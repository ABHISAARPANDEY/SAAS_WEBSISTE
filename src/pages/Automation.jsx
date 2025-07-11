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
                    
                    <div className="flex items-center justify-between">
                      <button
                        className="learn-more-btn w-full py-3 px-4 rounded-lg text-sm font-medium shadow-sm flex items-center justify-center gap-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.scrollTo(0, 0);
                          navigate(`/automation/${template.id}`);
                        }}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 text-white" />
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
    </div>
  );
};

export default Automation;