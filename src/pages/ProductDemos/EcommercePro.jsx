import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  ArrowLeft,
  Search, 
  User, 
  Heart, 
  Menu, 
  X, 
  ChevronDown, 
  Package, 
  Truck, 
  BarChart3, 
  Grid, 
  List, 
  Filter, 
  Star, 
  Plus, 
  Minus, 
  ArrowRight
} from 'lucide-react';

const EcommercePro = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Sample products
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 129.99,
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Electronics',
      rating: 4.5,
      inStock: true
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Electronics',
      rating: 4.2,
      inStock: true
    },
    {
      id: 3,
      name: 'Leather Backpack',
      price: 79.99,
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Fashion',
      rating: 4.7,
      inStock: true
    },
    {
      id: 4,
      name: 'Ceramic Coffee Mug',
      price: 24.99,
      image: 'https://images.pexels.com/photos/1566308/pexels-photo-1566308.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Home',
      rating: 4.8,
      inStock: true
    },
    {
      id: 5,
      name: 'Fitness Tracker',
      price: 89.99,
      image: 'https://images.pexels.com/photos/4498482/pexels-photo-4498482.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Electronics',
      rating: 4.3,
      inStock: false
    },
    {
      id: 6,
      name: 'Desk Lamp',
      price: 49.99,
      image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Home',
      rating: 4.1,
      inStock: true
    }
  ];
  
  // Filter products by category
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);
  
  // Categories
  const categories = ['All', 'Electronics', 'Fashion', 'Home'];
  
  return (
    <div className="min-h-screen bg-dark-primary text-text-primary">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => navigate('/marketplace')}
          className="flex items-center gap-2 bg-dark-tertiary text-white px-4 py-2 rounded-full hover:bg-dark-secondary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Marketplace</span>
        </button>
      </div>
      
      {/* Header */}
      <header className="bg-dark-secondary border-b border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 font-orbitron font-bold text-xl">E-Commerce Pro</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-neon-cyan font-medium">Home</a>
              <a href="#" className="text-text-secondary hover:text-text-primary font-medium">Shop</a>
              <a href="#" className="text-text-secondary hover:text-text-primary font-medium">Categories</a>
              <a href="#" className="text-text-secondary hover:text-text-primary font-medium">Deals</a>
              <a href="#" className="text-text-secondary hover:text-text-primary font-medium">About</a>
            </nav>
            
            {/* Search, User, Cart */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-text-secondary hover:text-neon-cyan">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-text-secondary hover:text-neon-cyan">
                <User className="w-5 h-5" />
              </button>
              <button 
                className="p-2 text-text-secondary hover:text-neon-cyan relative"
                onClick={() => setCartOpen(!cartOpen)}
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-neon-pink rounded-full text-xs flex items-center justify-center">3</span>
              </button>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden p-2 text-text-secondary hover:text-neon-cyan"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-dark"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 rounded-md text-neon-cyan font-medium">Home</a>
              <a href="#" className="block px-3 py-2 rounded-md text-text-secondary hover:text-text-primary font-medium">Shop</a>
              <a href="#" className="block px-3 py-2 rounded-md text-text-secondary hover:text-text-primary font-medium">Categories</a>
              <a href="#" className="block px-3 py-2 rounded-md text-text-secondary hover:text-text-primary font-medium">Deals</a>
              <a href="#" className="block px-3 py-2 rounded-md text-text-secondary hover:text-text-primary font-medium">About</a>
            </div>
          </motion.div>
        )}
      </header>
      
      {/* Shopping Cart Sidebar */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
              onClick={() => setCartOpen(false)}
            ></div>
            <div className="absolute inset-y-0 right-0 max-w-full flex">
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3 }}
                className="w-screen max-w-md"
              >
                <div className="h-full flex flex-col bg-dark-secondary shadow-xl">
                  <div className="flex-1 overflow-y-auto py-6 px-4">
                    <div className="flex items-start justify-between">
                      <h2 className="text-xl font-orbitron font-bold">Shopping Cart</h2>
                      <button 
                        className="text-text-secondary hover:text-neon-pink"
                        onClick={() => setCartOpen(false)}
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>
                    
                    <div className="mt-8">
                      <div className="flow-root">
                        <ul className="divide-y divide-dark">
                          {[
                            { id: 1, name: 'Wireless Headphones', price: 129.99, image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800', quantity: 1 },
                            { id: 3, name: 'Leather Backpack', price: 79.99, image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800', quantity: 1 },
                            { id: 4, name: 'Ceramic Coffee Mug', price: 24.99, image: 'https://images.pexels.com/photos/1566308/pexels-photo-1566308.jpeg?auto=compress&cs=tinysrgb&w=800', quantity: 1 }
                          ].map((item) => (
                            <li key={item.id} className="py-6 flex">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-dark">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                              
                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium">
                                    <h3>{item.name}</h3>
                                    <p className="ml-4">${item.price.toFixed(2)}</p>
                                  </div>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <div className="flex items-center border border-dark rounded-lg">
                                    <button className="p-2 text-text-secondary hover:text-neon-pink">
                                      <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="px-2">{item.quantity}</span>
                                    <button className="p-2 text-text-secondary hover:text-neon-green">
                                      <Plus className="w-4 h-4" />
                                    </button>
                                  </div>
                                  
                                  <button className="text-neon-pink hover:text-neon-pink/80">
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-dark py-6 px-4">
                    <div className="flex justify-between text-base font-medium mb-4">
                      <p>Subtotal</p>
                      <p>$234.97</p>
                    </div>
                    <p className="text-text-secondary text-sm mb-6">Shipping and taxes calculated at checkout.</p>
                    <button className="w-full btn-neon py-3 rounded-lg font-orbitron font-semibold flex items-center justify-center gap-2">
                      Checkout
                      <ArrowRight className="w-5 h-5 text-dark-primary" />
                    </button>
                    <div className="mt-4 flex justify-center text-sm text-text-secondary">
                      <p>
                        or <button className="text-neon-cyan hover:text-neon-cyan/80">Continue Shopping</button>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      )}
      
      {/* Hero Banner */}
      <div className="relative bg-dark-tertiary border-b border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="md:w-2/3">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-orbitron font-bold mb-4"
            >
              Spring Collection <span className="text-neon-cyan">2025</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-text-secondary text-lg md:text-xl mb-8"
            >
              Discover our latest products with exclusive deals and discounts.
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="btn-neon px-6 py-3 rounded-lg font-orbitron font-semibold"
            >
              Shop Now
            </motion.button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-20 h-20 border border-neon-cyan rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-16 h-16 border border-neon-pink rounded-full opacity-30 animate-bounce"></div>
      </div>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category and Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
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
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="py-2 pl-10 pr-4 bg-dark-tertiary border border-dark rounded-lg text-text-primary focus:ring-2 focus:ring-neon-cyan focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
            </div>
            
            <div className="flex items-center gap-2 bg-dark-tertiary rounded-lg p-1 border border-dark">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-dark-primary text-neon-cyan' : 'text-text-secondary'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-dark-primary text-neon-cyan' : 'text-text-secondary'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
            
            <button className="p-2 bg-dark-tertiary rounded-lg border border-dark text-text-secondary hover:text-neon-cyan hover:border-neon-cyan/50">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Products Grid */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-dark-secondary rounded-xl border border-dark overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <button className="w-8 h-8 rounded-full bg-dark-tertiary/80 backdrop-blur-sm flex items-center justify-center text-text-secondary hover:text-neon-pink">
                      <Heart className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-dark-tertiary/80 backdrop-blur-sm flex items-center justify-center text-text-secondary hover:text-neon-cyan">
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-dark-primary/80 backdrop-blur-sm flex items-center justify-center">
                      <span className="px-4 py-2 bg-neon-pink/20 border border-neon-pink text-neon-pink rounded-lg font-medium">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-text-secondary">{product.category}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-neon-green fill-current" />
                      <span className="text-sm">{product.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-medium mb-2">{product.name}</h3>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                    <button 
                      className={`px-3 py-1 rounded-lg text-sm font-medium ${
                        product.inStock 
                          ? 'bg-dark-tertiary border border-neon-green text-neon-green hover:bg-dark-tertiary/80' 
                          : 'bg-dark-tertiary border border-dark text-text-secondary cursor-not-allowed'
                      }`}
                      disabled={!product.inStock}
                    >
                      {product.inStock ? 'Add to Cart' : 'Sold Out'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-dark-secondary rounded-xl border border-dark overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-48 h-48 relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-dark-primary/80 backdrop-blur-sm flex items-center justify-center">
                        <span className="px-4 py-2 bg-neon-pink/20 border border-neon-pink text-neon-pink rounded-lg font-medium">
                          Out of Stock
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-text-secondary">{product.category}</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-neon-green fill-current" />
                          <span className="text-sm">{product.rating}</span>
                        </div>
                      </div>
                      
                      <h3 className="font-medium mb-2">{product.name}</h3>
                      <p className="text-text-secondary text-sm mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                      <div className="flex items-center gap-2">
                        <button className="p-2 rounded-lg bg-dark-tertiary border border-dark text-text-secondary hover:text-neon-pink hover:border-neon-pink/50">
                          <Heart className="w-5 h-5" />
                        </button>
                        <button 
                          className={`px-4 py-2 rounded-lg font-medium ${
                            product.inStock 
                              ? 'bg-dark-tertiary border border-neon-green text-neon-green hover:bg-dark-tertiary/80' 
                              : 'bg-dark-tertiary border border-dark text-text-secondary cursor-not-allowed'
                          }`}
                          disabled={!product.inStock}
                        >
                          {product.inStock ? 'Add to Cart' : 'Sold Out'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        
        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-dark-secondary rounded-xl p-6 border border-dark text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-dark-tertiary border border-neon-green flex items-center justify-center">
              <Truck className="w-6 h-6 text-neon-green" />
            </div>
            <h3 className="text-lg font-orbitron font-bold mb-2">Free Shipping</h3>
            <p className="text-text-secondary text-sm">
              Free shipping on all orders over $50. International shipping available.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-dark-secondary rounded-xl p-6 border border-dark text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-dark-tertiary border border-neon-cyan flex items-center justify-center">
              <Package className="w-6 h-6 text-neon-cyan" />
            </div>
            <h3 className="text-lg font-orbitron font-bold mb-2">Easy Returns</h3>
            <p className="text-text-secondary text-sm">
              30-day easy return policy. No questions asked refund policy.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-dark-secondary rounded-xl p-6 border border-dark text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-dark-tertiary border border-neon-pink flex items-center justify-center">
              <User className="w-6 h-6 text-neon-pink" />
            </div>
            <h3 className="text-lg font-orbitron font-bold mb-2">Customer Support</h3>
            <p className="text-text-secondary text-sm">
              24/7 customer support. We're always here to help you.
            </p>
          </motion.div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-dark-secondary border-t border-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <span className="ml-3 font-orbitron font-bold text-xl">E-Commerce Pro</span>
              </div>
              <p className="text-text-secondary text-sm">
                Your one-stop shop for all your needs. Quality products at affordable prices.
              </p>
            </div>
            
            <div>
              <h3 className="font-orbitron font-bold mb-4">Shop</h3>
              <ul className="space-y-2 text-text-secondary">
                <li><a href="#" className="hover:text-neon-cyan">All Products</a></li>
                <li><a href="#" className="hover:text-neon-cyan">New Arrivals</a></li>
                <li><a href="#" className="hover:text-neon-cyan">Featured</a></li>
                <li><a href="#" className="hover:text-neon-cyan">Discounts</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-orbitron font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-text-secondary">
                <li><a href="#" className="hover:text-neon-cyan">About Us</a></li>
                <li><a href="#" className="hover:text-neon-cyan">Contact</a></li>
                <li><a href="#" className="hover:text-neon-cyan">Careers</a></li>
                <li><a href="#" className="hover:text-neon-cyan">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-orbitron font-bold mb-4">Customer Service</h3>
              <ul className="space-y-2 text-text-secondary">
                <li><a href="#" className="hover:text-neon-cyan">Help Center</a></li>
                <li><a href="#" className="hover:text-neon-cyan">Shipping</a></li>
                <li><a href="#" className="hover:text-neon-cyan">Returns</a></li>
                <li><a href="#" className="hover:text-neon-cyan">Track Order</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-dark mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-secondary text-sm">
              &copy; 2025 E-Commerce Pro. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a href="#" className="text-text-secondary hover:text-neon-cyan">Privacy Policy</a>
              <a href="#" className="text-text-secondary hover:text-neon-cyan">Terms of Service</a>
              <a href="#" className="text-text-secondary hover:text-neon-cyan">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EcommercePro;