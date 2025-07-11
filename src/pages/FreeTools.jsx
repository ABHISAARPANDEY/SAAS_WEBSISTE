import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ToolInterface from '../components/tools/ToolInterface';
import WaitlistSignup from '../components/tools/WaitlistSignup';
import {
  Search, 
  Filter, 
  Star, 
  Eye, 
  Download, 
  Copy, 
  Check, 
  Play,
  Pause,
  Upload,
  FileText,
  Image,
  Code,
  Zap,
  Settings,
  Brain,
  Calculator,
  Clock,
  Users,
  TrendingUp,
  Heart,
  Bookmark,
  Share2,
  ExternalLink,
  ChevronRight,
  Grid,
  List,
  X,
  Edit,
  Volume2,
  DollarSign,
  Lock,
  Shield
} from 'lucide-react';

const FreeTools = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [favorites, setFavorites] = useState([]);
  const [copiedTool, setCopiedTool] = useState(null);
  const [toolUsage, setToolUsage] = useState({});
  const [selectedTool, setSelectedTool] = useState(null);
  const [showToolInterface, setShowToolInterface] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [waitlistTool, setWaitlistTool] = useState(null);

  const categories = [
    { id: 'all', name: 'All Tools', icon: Grid, count: 24 },
    { id: 'ai', name: 'AI Tools', icon: Brain, count: 4 },
    { id: 'document', name: 'Document Tools', icon: FileText, count: 4 },
    { id: 'image', name: 'Image Tools', icon: Image, count: 4 },
    { id: 'converter', name: 'Converter Tools', icon: Zap, count: 4 },
    { id: 'developer', name: 'Developer Tools', icon: Code, count: 4 },
    { id: 'utility', name: 'Utility Tools', icon: Calculator, count: 4 }
  ];

  const tools = [
    // AI Tools
    {
      id: 'ai-chat',
      name: 'AI Chat Assistant',
      description: 'Intelligent conversational AI for answering questions and providing assistance',
      category: 'ai',
      icon: Brain,
      gradient: 'from-purple-500 to-indigo-600',
      features: ['Natural Language Processing', 'Multi-language Support', 'Context Awareness'],
      rating: 4.8,
      usage: 15420,
      trending: true,
      tags: ['chatbot', 'ai', 'assistant'],
      isAI: true,
      functional: false
    },
    {
      id: 'text-summarizer',
      name: 'Text Summarizer',
      description: 'Automatically summarize long texts and documents using advanced AI',
      category: 'ai',
      icon: FileText,
      gradient: 'from-blue-500 to-cyan-600',
      features: ['Smart Summarization', 'Key Points Extraction', 'Multiple Formats'],
      rating: 4.6,
      usage: 8930,
      trending: false,
      tags: ['summarize', 'text', 'ai'],
      isAI: true,
      functional: true
    },
    {
      id: 'code-generator',
      name: 'AI Code Generator',
      description: 'Generate code snippets and functions using AI-powered assistance',
      category: 'ai',
      icon: Code,
      gradient: 'from-green-500 to-emerald-600',
      features: ['Multiple Languages', 'Code Optimization', 'Documentation'],
      rating: 4.9,
      usage: 12340,
      trending: true,
      tags: ['code', 'programming', 'ai'],
      isAI: true,
      functional: false
    },
    {
      id: 'content-writer',
      name: 'AI Content Writer',
      description: 'Create engaging content for blogs, social media, and marketing',
      category: 'ai',
      icon: Edit,
      gradient: 'from-pink-500 to-rose-600',
      features: ['SEO Optimized', 'Multiple Tones', 'Plagiarism Free'],
      rating: 4.7,
      usage: 9870,
      trending: false,
      tags: ['content', 'writing', 'marketing'],
      isAI: true,
      functional: false
    },

    // Document Tools
    {
      id: 'pdf-converter',
      name: 'PDF Converter',
      description: 'Convert documents to and from PDF format with high quality',
      category: 'document',
      icon: FileText,
      gradient: 'from-red-500 to-orange-600',
      features: ['Multiple Formats', 'Batch Processing', 'Cloud Storage'],
      rating: 4.5,
      usage: 18750,
      trending: false,
      tags: ['pdf', 'convert', 'document'],
      isAI: false,
      functional: true
    },
    {
      id: 'word-counter',
      name: 'Word Counter',
      description: 'Count words, characters, and analyze text statistics',
      category: 'document',
      icon: Calculator,
      gradient: 'from-yellow-500 to-amber-600',
      features: ['Real-time Counting', 'Reading Time', 'Keyword Density'],
      rating: 4.3,
      usage: 6540,
      trending: false,
      tags: ['words', 'count', 'statistics'],
      isAI: false,
      functional: true
    },
    {
      id: 'markdown-editor',
      name: 'Markdown Editor',
      description: 'Write and preview Markdown with live rendering and export options',
      category: 'document',
      icon: Edit,
      gradient: 'from-indigo-500 to-purple-600',
      features: ['Live Preview', 'Export Options', 'Syntax Highlighting'],
      rating: 4.8,
      usage: 11230,
      trending: true,
      tags: ['markdown', 'editor', 'preview'],
      isAI: false,
      functional: true
    },
    {
      id: 'document-merger',
      name: 'Document Merger',
      description: 'Merge multiple documents into a single file with custom ordering',
      category: 'document',
      icon: FileText,
      gradient: 'from-teal-500 to-cyan-600',
      features: ['Multiple Formats', 'Custom Order', 'Watermarks'],
      rating: 4.4,
      usage: 7890,
      trending: false,
      tags: ['merge', 'combine', 'documents'],
      isAI: false,
      functional: true
    },

    // Image Tools
    {
      id: 'image-compressor',
      name: 'Image Compressor',
      description: 'Reduce image file sizes while maintaining quality',
      category: 'image',
      icon: Image,
      gradient: 'from-emerald-500 to-green-600',
      features: ['Lossless Compression', 'Batch Processing', 'Format Conversion'],
      rating: 4.7,
      usage: 14560,
      trending: true,
      tags: ['compress', 'optimize', 'images'],
      isAI: false,
      functional: true
    },
    {
      id: 'background-remover',
      name: 'Background Remover',
      description: 'Remove backgrounds from images using AI technology',
      category: 'image',
      icon: Zap,
      gradient: 'from-violet-500 to-purple-600',
      features: ['AI-Powered', 'High Quality', 'Transparent PNG'],
      rating: 4.9,
      usage: 22340,
      trending: true,
      tags: ['background', 'remove', 'ai'],
      isAI: true,
      functional: false
    },
    {
      id: 'image-resizer',
      name: 'Image Resizer',
      description: 'Resize images to specific dimensions or percentages',
      category: 'image',
      icon: Settings,
      gradient: 'from-blue-500 to-indigo-600',
      features: ['Custom Dimensions', 'Aspect Ratio Lock', 'Bulk Resize'],
      rating: 4.5,
      usage: 9870,
      trending: false,
      tags: ['resize', 'dimensions', 'scale'],
      isAI: false,
      functional: true
    },
    {
      id: 'color-palette',
      name: 'Color Palette Generator',
      description: 'Extract color palettes from images or generate new ones',
      category: 'image',
      icon: Eye,
      gradient: 'from-pink-500 to-red-600',
      features: ['Color Extraction', 'Palette Generation', 'Export Formats'],
      rating: 4.6,
      usage: 8450,
      trending: false,
      tags: ['colors', 'palette', 'design'],
      isAI: false,
      functional: true
    },

    // Converter Tools
    {
      id: 'video-converter',
      name: 'Video Converter',
      description: 'Convert videos between different formats and resolutions',
      category: 'converter',
      icon: Play,
      gradient: 'from-red-500 to-pink-600',
      features: ['Multiple Formats', 'Quality Control', 'Batch Conversion'],
      rating: 4.8,
      usage: 16780,
      trending: true,
      tags: ['video', 'convert', 'format'],
      isAI: false,
      functional: true
    },
    {
      id: 'audio-converter',
      name: 'Audio Converter',
      description: 'Convert audio files to various formats with quality options',
      category: 'converter',
      icon: Volume2,
      gradient: 'from-orange-500 to-yellow-600',
      features: ['High Quality', 'Metadata Preservation', 'Bitrate Control'],
      rating: 4.6,
      usage: 12450,
      trending: false,
      tags: ['audio', 'convert', 'music'],
      isAI: false,
      functional: true
    },
    {
      id: 'unit-converter',
      name: 'Unit Converter',
      description: 'Convert between different units of measurement',
      category: 'converter',
      icon: Calculator,
      gradient: 'from-green-500 to-teal-600',
      features: ['Multiple Categories', 'Precise Calculations', 'History'],
      rating: 4.4,
      usage: 7890,
      trending: false,
      tags: ['units', 'measurement', 'convert'],
      isAI: false,
      functional: true
    },
    {
      id: 'currency-converter',
      name: 'Currency Converter',
      description: 'Real-time currency conversion with live exchange rates',
      category: 'converter',
      icon: DollarSign,
      gradient: 'from-blue-500 to-cyan-600',
      features: ['Live Rates', 'Historical Data', 'Multiple Currencies'],
      rating: 4.7,
      usage: 19230,
      trending: true,
      tags: ['currency', 'exchange', 'money'],
      isAI: false,
      functional: true
    },

    // Developer Tools
    {
      id: 'json-formatter',
      name: 'JSON Formatter',
      description: 'Format, validate, and beautify JSON data with syntax highlighting',
      category: 'developer',
      icon: Code,
      gradient: 'from-indigo-500 to-blue-600',
      features: ['Syntax Highlighting', 'Validation', 'Minification'],
      rating: 4.8,
      usage: 13560,
      trending: true,
      tags: ['json', 'format', 'validate'],
      isAI: false,
      functional: true
    },
    {
      id: 'base64-encoder',
      name: 'Base64 Encoder/Decoder',
      description: 'Encode and decode Base64 strings with file support',
      category: 'developer',
      icon: Lock,
      gradient: 'from-purple-500 to-indigo-600',
      features: ['Text & Files', 'Batch Processing', 'URL Safe'],
      rating: 4.5,
      usage: 8970,
      trending: false,
      tags: ['base64', 'encode', 'decode'],
      isAI: false,
      functional: true
    },
    {
      id: 'regex-tester',
      name: 'Regex Tester',
      description: 'Test and debug regular expressions with live matching',
      category: 'developer',
      icon: Search,
      gradient: 'from-green-500 to-emerald-600',
      features: ['Live Testing', 'Match Highlighting', 'Cheat Sheet'],
      rating: 4.7,
      usage: 10340,
      trending: false,
      tags: ['regex', 'test', 'pattern'],
      isAI: false,
      functional: true
    },
    {
      id: 'hash-generator',
      name: 'Hash Generator',
      description: 'Generate MD5, SHA1, SHA256 and other hash values',
      category: 'developer',
      icon: Shield,
      gradient: 'from-red-500 to-orange-600',
      features: ['Multiple Algorithms', 'File Hashing', 'Comparison'],
      rating: 4.6,
      usage: 7650,
      trending: false,
      tags: ['hash', 'md5', 'sha256'],
      isAI: false,
      functional: true
    },

    // Utility Tools
    {
      id: 'qr-generator',
      name: 'QR Code Generator',
      description: 'Generate QR codes for text, URLs, and other data',
      category: 'utility',
      icon: Grid,
      gradient: 'from-gray-500 to-slate-600',
      features: ['Custom Design', 'High Resolution', 'Batch Generation'],
      rating: 4.7,
      usage: 15670,
      trending: true,
      tags: ['qr', 'code', 'generator'],
      isAI: false,
      functional: true
    },
    {
      id: 'password-generator',
      name: 'Password Generator',
      description: 'Generate secure passwords with customizable options',
      category: 'utility',
      icon: Lock,
      gradient: 'from-red-500 to-pink-600',
      features: ['Customizable Length', 'Character Sets', 'Strength Meter'],
      rating: 4.8,
      usage: 21340,
      trending: true,
      tags: ['password', 'security', 'generate'],
      isAI: false,
      functional: true
    },
    {
      id: 'lorem-generator',
      name: 'Lorem Ipsum Generator',
      description: 'Generate placeholder text for design and development',
      category: 'utility',
      icon: FileText,
      gradient: 'from-blue-500 to-indigo-600',
      features: ['Custom Length', 'Multiple Formats', 'Copy to Clipboard'],
      rating: 4.4,
      usage: 6780,
      trending: false,
      tags: ['lorem', 'placeholder', 'text'],
      isAI: false,
      functional: true
    },
    {
      id: 'url-shortener',
      name: 'URL Shortener',
      description: 'Create short URLs with analytics and custom aliases',
      category: 'utility',
      icon: ExternalLink,
      gradient: 'from-green-500 to-teal-600',
      features: ['Custom Aliases', 'Analytics', 'QR Codes'],
      rating: 4.6,
      usage: 18920,
      trending: true,
      tags: ['url', 'shorten', 'link'],
      isAI: false,
      functional: true
    }
  ];

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (toolId) => {
    setFavorites(prev => 
      prev.includes(toolId) 
        ? prev.filter(id => id !== toolId)
        : [...prev, toolId]
    );
  };

  const copyToClipboard = (text, toolId) => {
    navigator.clipboard.writeText(text);
    setCopiedTool(toolId);
    setTimeout(() => setCopiedTool(null), 2000);
  };

  const incrementUsage = (toolId) => {
    setToolUsage(prev => ({
      ...prev,
      [toolId]: (prev[toolId] || 0) + 1
    }));
  };

  const handleTryNow = (tool) => {
    if (tool.isAI && !tool.functional) {
      // Show waitlist for AI tools that aren't functional
      setWaitlistTool(tool);
      setShowWaitlist(true);
      return;
    }
    
    if (!tool.functional) {
      // Show waitlist for non-functional tools
      setWaitlistTool(tool);
      setShowWaitlist(true);
      return;
    }
    
    setSelectedTool(tool);
    setShowToolInterface(true);
    incrementUsage(tool.id);
  };

  const closeToolInterface = () => {
    setShowToolInterface(false);
    setSelectedTool(null);
  };
  useEffect(() => {
  const closeWaitlist = () => {
    setShowWaitlist(false);
    setWaitlistTool(null);
  };

    // Load favorites from localStorage
    const savedFavorites = localStorage.getItem('tool-favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    // Save favorites to localStorage
    localStorage.setItem('tool-favorites', JSON.stringify(favorites));
  }, [favorites]);

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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold text-text-primary leading-tight">
              Explore <span className="gradient-neon-text neon-text">Free Tools</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive suite of digital utilities designed to boost your productivity. 
              From AI-powered tools to everyday converters, everything you need is here.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-text-secondary">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-neon-green" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-neon-cyan" />
                <span>Lightning Fast</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-neon-pink" />
                <span>Privacy First</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-neon-green" />
                <span>Always Free</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-dark-secondary border-b border-dark sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
              <input
                type="text"
                placeholder="Search tools by name, description, or tags..."
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

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-dark-tertiary rounded-lg p-1 border border-dark">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-dark-primary shadow-sm text-neon-green' : 'text-text-secondary'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-dark-primary shadow-sm text-neon-green' : 'text-text-secondary'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-dark-secondary border-b border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'btn-neon shadow-lg'
                    : 'bg-dark-tertiary text-text-secondary hover:bg-dark-tertiary/80 border border-dark hover:border-neon-green/50'
                }`}
              >
                <category.icon className={`w-5 h-5 ${selectedCategory === category.id ? 'text-dark-primary' : 'text-text-secondary'}`} />
                <span>{category.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  selectedCategory === category.id
                    ? 'bg-dark-primary/20 text-dark-primary'
                    : 'bg-dark-primary text-text-secondary'
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid/List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold font-orbitron text-text-primary">
                {filteredTools.length} Tools Found
              </h2>
              <p className="text-text-secondary">
                {selectedCategory === 'all' ? 'All categories' : categories.find(c => c.id === selectedCategory)?.name}
                {searchTerm && ` • Searching for "${searchTerm}"`}
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-text-secondary">
                {favorites.length} favorites
              </span>
            </div>
          </div>

          {/* Tools Display */}
          <AnimatePresence mode="wait">
            {viewMode === 'grid' ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredTools.map((tool, index) => (
                  <ToolCard
                    key={tool.id}
                    tool={tool}
                    index={index}
                    isFavorite={favorites.includes(tool.id)}
                    onToggleFavorite={toggleFavorite}
                    onCopy={copyToClipboard}
                    onTryNow={handleTryNow}
                    copied={copiedTool === tool.id}
                    usage={toolUsage[tool.id] || 0}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                {filteredTools.map((tool, index) => (
                  <ToolListItem
                    key={tool.id}
                    tool={tool}
                    index={index}
                    isFavorite={favorites.includes(tool.id)}
                    onToggleFavorite={toggleFavorite}
                    onCopy={copyToClipboard}
                    onTryNow={handleTryNow}
                    copied={copiedTool === tool.id}
                    usage={toolUsage[tool.id] || 0}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* No Results */}
          {filteredTools.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-dark-secondary rounded-xl border border-dark p-8"
            >
              <div className="w-24 h-24 bg-dark-tertiary rounded-full flex items-center justify-center mx-auto mb-6 border border-text-secondary">
                <Search className="w-12 h-12 text-text-secondary" />
              </div>
              <h3 className="text-2xl font-bold font-orbitron text-text-primary mb-4">No tools found</h3>
              <p className="text-text-secondary mb-8">
                Try adjusting your search terms or selecting a different category.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="btn-neon px-6 py-3 rounded-lg font-orbitron font-semibold hover:shadow-lg transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-secondary border-t border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold font-orbitron text-neon-green mb-2">24</div>
              <div className="text-text-secondary">Free Tools</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold font-orbitron text-neon-cyan mb-2">250K+</div>
              <div className="text-text-secondary">Monthly Users</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold font-orbitron text-neon-pink mb-2">1M+</div>
              <div className="text-text-secondary">Tools Used</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold font-orbitron gradient-neon-text mb-2">4.8★</div>
              <div className="text-text-secondary">Average Rating</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tool Interface Modal */}
      {selectedTool && (
        <ToolInterface
          tool={selectedTool}
          isOpen={showToolInterface}
          onClose={closeToolInterface}
        />
      )}

      {/* Waitlist Signup Modal */}
      {waitlistTool && (
        <WaitlistSignup
          tool={waitlistTool}
          isOpen={showWaitlist}
          onClose={closeWaitlist}
        />
      )}
    </div>
  );
};

// Tool Card Component
const ToolCard = ({ tool, index, isFavorite, onToggleFavorite, onCopy, onTryNow, copied, usage }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group cursor-pointer"
    >
      <div className="card-dark rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col relative overflow-hidden">
        {/* Animated background effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
          <div className={`w-full h-full bg-gradient-to-br ${tool.gradient}`}></div>
        </div>
        
        {/* Header */}
        <div className="flex items-start justify-between mb-4 relative z-10">
          <div className={`w-12 h-12 rounded-xl border border-${tool.neonColor || 'neon-green'} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <tool.icon className={`w-6 h-6 text-${tool.neonColor || 'neon-green'}`} />
          </div>
          
          <div className="flex items-center gap-2">
            {tool.trending && (
              <div className="px-2 py-1 bg-dark-tertiary text-neon-pink border border-neon-pink/50 rounded-full text-xs font-medium">
                Trending
              </div>
            )}
            {!tool.functional && (
              <div className="px-2 py-1 bg-dark-tertiary text-neon-cyan border border-neon-cyan/50 rounded-full text-xs font-medium">
                {tool.isAI ? 'Demo' : 'Coming Soon'}
              </div>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(tool.id);
              }}
              className={`p-2 rounded-full transition-colors ${
                isFavorite ? 'text-neon-pink bg-dark-tertiary' : 'text-text-secondary hover:text-neon-pink hover:bg-dark-tertiary'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 relative z-10">
          <h3 className="text-lg font-bold font-orbitron text-text-primary mb-2 group-hover:text-neon-green transition-colors">
            {tool.name}
          </h3>
          
          <p className="text-text-secondary text-sm mb-4 leading-relaxed">
            {tool.description}
          </p>
          
          {/* Features */}
          <div className="space-y-1 mb-4">
            {tool.features.slice(0, 2).map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Check className="w-3 h-3 text-neon-green flex-shrink-0" />
                <span className="text-xs text-text-secondary">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="space-y-3 pt-4 border-t border-dark relative z-10">
          <div className="flex items-center justify-between text-xs text-text-secondary">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 text-neon-green fill-current" />
              <span className="font-medium text-neon-green">{tool.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3 text-neon-cyan" />
              <span>{(tool.usage + usage).toLocaleString()}</span>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onTryNow(tool);
              }}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-orbitron font-medium transition-all duration-300 ${
                tool.functional 
                  ? `btn-neon hover:shadow-lg` 
                  : 'bg-dark-tertiary text-text-secondary border border-dark cursor-not-allowed'
              }`}
              disabled={!tool.functional}
            >
              {tool.functional ? 'Try Now' : (tool.isAI ? 'Demo Only' : 'Coming Soon')}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onCopy(window.location.href + '#' + tool.id, tool.id);
              }}
              className="p-2 border border-dark rounded-lg text-text-secondary hover:bg-dark-tertiary hover:border-neon-green/50 hover:text-neon-green transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-neon-green" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Tool List Item Component
const ToolListItem = ({ tool, index, isFavorite, onToggleFavorite, onCopy, onTryNow, copied, usage }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="card-dark rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
        <div className={`w-full h-full bg-gradient-to-br ${tool.gradient}`}></div>
      </div>
      
      <div className="flex items-center gap-6">
        {/* Icon */}
        <div className={`w-16 h-16 rounded-xl border border-${tool.neonColor || 'neon-green'} flex items-center justify-center flex-shrink-0 relative z-10`}>
          <tool.icon className={`w-8 h-8 text-${tool.neonColor || 'neon-green'}`} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 relative z-10">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-xl font-bold font-orbitron text-text-primary mb-1">{tool.name}</h3>
              <p className="text-text-secondary">{tool.description}</p>
            </div>
            
            <div className="flex items-center gap-2 ml-4">
              {tool.trending && (
                <div className="px-2 py-1 bg-dark-tertiary text-neon-pink border border-neon-pink/50 rounded-full text-xs font-medium">
                  Trending
                </div>
              )}
              {!tool.functional && (
                <div className="px-2 py-1 bg-dark-tertiary text-neon-cyan border border-neon-cyan/50 rounded-full text-xs font-medium">
                  {tool.isAI ? 'Demo' : 'Coming Soon'}
                </div>
              )}
              <button
                onClick={() => onToggleFavorite(tool.id)}
                className={`p-2 rounded-full transition-colors ${
                  isFavorite ? 'text-neon-pink bg-dark-tertiary' : 'text-text-secondary hover:text-neon-pink hover:bg-dark-tertiary'
                }`}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>

          {/* Features and Stats */}
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {tool.features.slice(0, 3).map((feature, idx) => (
                <span key={idx} className="px-2 py-1 bg-dark-tertiary text-text-secondary rounded-md text-xs border border-dark">
                  {feature}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-4 text-sm text-text-secondary">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-neon-green fill-current" />
                <span className="text-neon-green">{tool.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4 text-neon-cyan" />
                <span>{(tool.usage + usage).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 flex-shrink-0 relative z-10">
          <button
            onClick={() => onTryNow(tool)}
            className={`px-6 py-2 rounded-lg font-orbitron font-medium transition-all duration-300 ${
              tool.functional 
                ? `btn-neon hover:shadow-lg` 
                : 'bg-dark-tertiary text-text-secondary border border-dark cursor-not-allowed'
            }`}
            disabled={!tool.functional}
          >
            {tool.functional ? 'Try Now' : (tool.isAI ? 'Demo Only' : 'Coming Soon')}
          </button>
          <button
            onClick={() => onCopy(window.location.href + '#' + tool.id, tool.id)}
            className="p-2 border border-dark rounded-lg text-text-secondary hover:bg-dark-tertiary hover:border-neon-green/50 hover:text-neon-green transition-all"
          >
            {copied ? <Check className="w-5 h-5 text-neon-green" /> : <Share2 className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default FreeTools;