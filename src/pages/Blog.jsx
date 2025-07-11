import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { pageEntryVariants, scrollAnimationVariants, childVariants, staggerContainerVariants, buttonHoverVariants } from '../utils/animationUtils';
import { 
  Search, 
  Calendar, 
  User, 
  Tag, 
  ChevronRight, 
  Clock,
  ArrowRight,
  Zap
} from 'lucide-react';
import { blogPosts } from '../data/blogData';

const Blog = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = [
    'All', 
    'Artificial Intelligence', 
    'Blockchain', 
    'Web Development', 
    'Mobile Development', 
    'Cloud Computing',
    'Cybersecurity',
    'Data Science'
  ];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

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
              Our <span className="gradient-neon-text neon-text">Blog</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              Insights, tutorials, and thought leadership on the latest technology trends and innovations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-dark-secondary border-b border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-dark-tertiary border border-dark text-text-primary rounded-xl focus:ring-2 focus:ring-neon-green focus:border-transparent text-lg placeholder-text-secondary"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-dark-tertiary border border-neon-cyan text-neon-cyan'
                      : 'bg-dark-tertiary border border-dark text-text-secondary hover:border-neon-cyan/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={scrollAnimationVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-dark-secondary rounded-2xl overflow-hidden shadow-xl border border-dark"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto overflow-hidden">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-dark-tertiary text-neon-green rounded-full text-sm font-medium border border-neon-green/30">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-text-secondary text-sm flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {blogPosts[0].date}
                  </span>
                </div>
                <h2 className="text-3xl font-orbitron font-bold text-text-primary mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-text-secondary mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-dark-tertiary border border-neon-cyan flex items-center justify-center">
                      <User className="w-4 h-4 text-neon-cyan" />
                    </div>
                    <span className="text-text-primary">{blogPosts[0].author}</span>
                  </div>
                  <button
                    onClick={() => navigate(`/blog/${blogPosts[0].id}`)}
                    className="btn-neon px-4 py-2 rounded-lg font-orbitron font-semibold text-sm flex items-center gap-2"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 text-dark-primary" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                variants={childVariants}
                initial="initial"
                whileInView="animate"
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-secondary rounded-xl overflow-hidden shadow-lg border border-dark hover:border-neon-green/30 transition-all cursor-pointer"
                onClick={() => navigate(`/blog/${post.id}`)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-dark-tertiary text-neon-cyan rounded-full text-xs font-medium border border-neon-cyan/30">
                      {post.category}
                    </span>
                    <span className="text-text-secondary text-xs flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-orbitron font-bold text-text-primary mb-3 hover:text-neon-green transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-dark-tertiary border border-neon-cyan flex items-center justify-center">
                        <User className="w-3 h-3 text-neon-cyan" />
                      </div>
                      <span className="text-text-secondary text-sm">{post.author}</span>
                    </div>
                    <span className="text-text-secondary text-xs flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime} min read
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Let's discuss how our expertise can help you achieve your digital transformation goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/get-quote')}
                className="btn-neon px-8 py-4 rounded-full font-orbitron font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <Zap className="w-5 h-5 text-dark-primary" />
                Get Your Free Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;