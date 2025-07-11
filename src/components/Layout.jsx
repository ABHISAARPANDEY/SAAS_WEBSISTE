import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Zap, Sun, Moon } from 'lucide-react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-primary text-text-primary">
      {/* Navigation - Mobile optimized */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b mobile-header bg-white/90 border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center space-x-2 py-2 transition-colors duration-300"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center shadow-button gradient-bg">
                <Zap className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
              <span className="text-lg md:text-2xl font-bold tracking-tight gradient-text">SaaS Agency</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="/" 
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/';
                }}
                className="transition-colors font-medium relative group text-text-primary hover:text-accent-primary"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-accent-primary"></span>
              </a>
              <a 
                href="/services" 
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/services';
                }}
                className="transition-colors font-medium relative group text-text-primary hover:text-accent-primary"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-accent-primary"></span>
              </a>
           
              <a 
                href="/marketplace" 
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/marketplace';
                }}
                className="transition-colors font-medium relative group text-text-primary hover:text-accent-primary"
              >
                Marketplace
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-accent-primary"></span>
              </a>
              <a 
                href="/automation" 
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/automation';
                }}
                className="transition-colors font-medium relative group text-text-primary hover:text-accent-primary"
              >
                Automation
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-accent-primary"></span>
              </a>
              <a 
                href="/free-tools" 
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/free-tools';
                }}
                className="transition-colors font-medium relative group text-text-primary hover:text-accent-primary"
              >
                Free Tools
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-accent-primary"></span>
              </a>
              <a 
                href="/about" 
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/about';
                }}
                className="transition-colors font-medium relative group text-text-primary hover:text-accent-primary"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-accent-primary"></span>
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/get-quote'}
                className="stripe-button"
              >
                Get Quote
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMenu}
                className="text-text-primary hover:text-accent-primary transition-colors p-2 min-h-[44px] min-w-[44px]"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden absolute w-full z-50 mobile-nav border-t transition-colors duration-300 ${
              isDarkMode ? 'bg-dark-secondary border-dark' : 'bg-white border-border-color'
            }`}
          >
            <div className="py-2 space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/free-tools', label: 'Free Tools' },
                { href: '/marketplace', label: 'Marketplace' },
                { href: '/automation', label: 'Automation' },
                { href: '/about', label: 'About' }
              ].map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    window.location.href = item.href;
                  }}
                className="block py-3 px-4 transition-colors font-medium rounded-lg text-text-primary hover:text-accent-primary hover:bg-secondary"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 px-2">
                <button 
                  onClick={() => {
                    window.location.href = '/get-quote';
                  }}
                  className="w-full stripe-button"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-[60px] bg-primary">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-16 border-t bg-secondary text-text-primary border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-[95%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-button gradient-bg">
                  <Zap className="font-bold text-xl w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight gradient-text">SaaS Agency</span>
              </div>
              <p className="leading-relaxed text-text-secondary">
                Transforming businesses through innovative technology solutions.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold tracking-wide text-accent-primary">Services</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>
                  <a 
                    href="/services/web-development" 
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = '/services/web-development';
                    }}
                    className="transition-colors relative group hover:text-accent-primary"
                  >
                    Web Development
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-accent-primary/50"></span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/services/mobile-app" 
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = '/services/mobile-app';
                    }}
                    className="transition-colors hover:text-accent-primary"
                  >
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a 
                    href="/services/agentic-ai" 
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = '/services/agentic-ai';
                    }}
                    className="hover:text-accent-primary transition-colors"
                  >
                    AI Solutions
                  </a>
                </li>
                <li>
                  <a 
                    href="/services/process-automation" 
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = '/services/process-automation';
                    }}
                    className="hover:text-accent-primary transition-colors"
                  >
                    Process Automation
                  </a>
                </li>
                <li>
                  <a 
                    href="/services/custom-software" 
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = '/services/custom-software';
                    }}
                    className="hover:text-accent-primary transition-colors"
                  >
                    Custom Software
                  </a>
                </li>
                <li>
                  <a 
                    href="/services/product-development" 
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = '/services/product-development';
                    }}
                    className="hover:text-accent-primary transition-colors"
                  >
                    Product Development
                  </a>
                </li>
                <li>
                  <a 
                    href="/services/blockchain-integration" 
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = '/services/blockchain-integration';
                    }}
                    className="hover:text-accent-primary transition-colors"
                  >
                    Blockchain Solutions
                  </a>
                </li>
                <li>
                  <a 
                    href="/services/digital-transformation" 
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = '/services/digital-transformation';
                    }}
                    className="hover:text-accent-primary transition-colors"
                  >
                    Digital Transformation
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold tracking-wide text-accent-primary">Company</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>
                  <a 
                    href="/about" 
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = '/about';
                    }}
                    className="transition-colors relative group hover:text-accent-primary"
                  >
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-accent-primary/50"></span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/get-quote" 
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = '/get-quote';
                    }}
                    className="hover:text-accent-primary transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a 
                    href="/blog" 
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = '/blog';
                    }}
                    className="hover:text-accent-primary transition-colors font-medium"
                  >
                  Blog
                  </a>
                </li>
                   
              </ul>
            </div>
             <div className="space-y-4">
              <h3 className="text-lg font-semibold tracking-wide text-accent-primary">Resources</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>
                  <a 
                    href="/marketplace" 
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = '/marketplace';
                    }}
                    className="transition-colors relative group hover:text-accent-primary"
                  >
                    Marketplace
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-accent-primary/50"></span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/automation" 
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = '/automation';
                    }}
                    className="hover:text-accent-primary transition-colors"
                  >
                  Automation
                  </a>
                </li>
                <li>
                  <a 
                    href="/free-tools" 
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = '/free-tools';
                    }}
                    className="hover:text-accent-primary transition-colors"
                  >
                  Free Tools
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center border-border-color text-text-secondary">
            <p className="opacity-80 text-sm">
              &copy; 2025 SaaS Agency. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;