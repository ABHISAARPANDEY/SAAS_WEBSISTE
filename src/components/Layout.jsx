import React from 'react';
import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion';
import { Menu, X, Zap, ArrowUp } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import ScrollToTopButton from './ScrollToTopButton';


const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { pathname } = useLocation();
  const { scrollY } = useScroll();
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const cursorSize = useMotionValue(20);
  
  // Check if current page is admin or blog
  const isAdminOrBlog = pathname.includes('/admin') || pathname.includes('/blog');
  
  // Track scroll position for navbar styling
  React.useEffect(() => {
    const updateScrolled = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', updateScrolled);
    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);
  
  // Track mouse position for custom cursor
  React.useEffect(() => {
    if (isAdminOrBlog) return; // Don't show custom cursor on admin/blog pages
    
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    
    const handleMouseOver = (e) => {
      if (e.target.tagName === 'BUTTON' || 
          e.target.tagName === 'A' || 
          e.target.closest('button') || 
          e.target.closest('a')) {
        cursorSize.set(40);
      } else {
        cursorSize.set(20);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, cursorSize, isAdminOrBlog]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Add ripple effect to buttons
  const addRipple = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <div className="min-h-screen bg-primary text-text-primary">
      {/* Custom Cursor (not shown on admin/blog pages) */}
      {!isAdminOrBlog && (
        <>
          <motion.div 
            className="custom-cursor"
            style={{ 
              x: cursorX,
              y: cursorY,
              width: cursorSize,
              height: cursorSize
            }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          />
          <motion.div 
            className="custom-cursor-dot"
            style={{ 
              x: cursorX,
              y: cursorY
            }}
            transition={{ type: "spring", damping: 50, stiffness: 500 }}
          />
        </>
      )}
      
      {/* Navigation - Mobile optimized */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 ${scrolled ? 'glass-effect' : 'bg-white/90 backdrop-blur-md'} border-b border-border-color mobile-header transition-all duration-300`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center space-x-2 py-2"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 gradient-bg rounded-lg flex items-center justify-center shadow-button">
                <Zap className="text-white font-bold w-4 h-4 md:w-6 md:h-6" />
              </div>
              <span className="text-lg md:text-2xl font-bold gradient-text tracking-tight">SaaS Agency</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="/" 
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/';
                }}
                className="text-text-primary hover:text-accent-primary transition-colors font-medium animated-underline"
              >
                Home
              </a>
              <a 
                href="/services" 
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/services';
                }}
                className="text-text-primary hover:text-accent-primary transition-colors font-medium animated-underline"
              >
                Services
              </a>
           
              <a 
                href="/marketplace" 
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/marketplace';
                }}
                className="text-text-primary hover:text-accent-primary transition-colors font-medium animated-underline"
              >
                Marketplace
              </a>
              <a 
                href="/automation" 
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/automation';
                }}
                className="text-text-primary hover:text-accent-primary transition-colors font-medium animated-underline"
              >
                Automation
              </a>
              <a 
                href="/free-tools" 
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/free-tools';
                }}
                className="text-text-primary hover:text-accent-primary transition-colors font-medium animated-underline"
              >
                Free Tools
              </a>
              <a 
                href="/about" 
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/about';
                }}
                className="text-text-primary hover:text-accent-primary transition-colors font-medium animated-underline"
              >
                About
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/get-quote'}
                className="stripe-button btn-ripple magnetic-btn"
                onMouseDown={addRipple}
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
      </motion.nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border-color absolute w-full z-50 mobile-nav"
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
                  className="block py-3 px-4 text-text-primary hover:text-accent-primary transition-colors font-medium hover:bg-secondary rounded-lg"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 px-2">
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
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

      {/* Main Content */}
      <main className="pt-[60px]">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-text-primary py-16 border-t border-border-color relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-60 h-60 bg-accent-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-secondary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-[95%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center shadow-button">
                  <Zap className="text-white font-bold text-xl w-6 h-6" />
                </div>
                <span className="text-xl font-bold gradient-text tracking-tight">SaaS Agency</span>
              </div>
              <p className="text-text-secondary leading-relaxed">
                Transforming businesses through innovative technology solutions.
              </p>
            </div>

            {/* Services */}
           {/* Services Dropdown */}
{/* Services + Marketplace block */}
{/* Footer Column: Services + Marketplace */}
<div className="space-y-6 relative">
  {/* SERVICES */}
  <div className="group relative">
    <h3 className="text-lg font-semibold text-accent-primary tracking-wide cursor-pointer">
      Services
    </h3>
    <ul className="py-2 text-sm text-text-secondary bg-white border border-border-color rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 absolute z-50 mt-1 w-56">
      {[
        { slug: 'web-development', label: 'Web Development' },
        { slug: 'mobile-app', label: 'Mobile Apps' },
        { slug: 'agentic-ai', label: 'AI Solutions' },
        { slug: 'process-automation', label: 'Process Automation' },
        { slug: 'custom-software', label: 'Custom Software' },
        { slug: 'product-development', label: 'Product Development' },
        { slug: 'blockchain-integration', label: 'Blockchain Solutions' },
        { slug: 'digital-transformation', label: 'Digital Transformation' },
      ].map((item) => (
        <li key={item.slug}>
          <a
            href={`/services/${item.slug}`}
            className="block px-4 py-2 hover:bg-accent-primary/10 hover:text-accent-primary"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>

  {/* MARKETPLACE */}
  <div className="group relative">
    <h3 className="text-lg font-semibold text-accent-primary tracking-wide cursor-pointer">
      Marketplace
    </h3>
    <ul className="py-2 text-sm text-text-secondary bg-white border border-border-color rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 absolute z-50 mt-1 w-64">
      {[
        'All Industries',
        'Healthcare',
        'Finance',
        'E-commerce',
        'Education',
        'Food Delivery',
        'Retail',
        'Banking',
        'Real Estate',
        'Travel',
        'OTT',
      ].map((industry) => {
        const slug = industry.toLowerCase().replace(/\s+/g, '-');
        return (
          <li key={industry}>
            <a
              href={`/marketplace/`}
              className="block px-4 py-2 hover:bg-accent-primary/10 hover:text-accent-primary"
            >
              {industry}
            </a>
          </li>
        );
      })}
    </ul>
  </div>

  {/* AUTOMATION */}
  <div className="group relative">
    <h3 className="text-lg font-semibold text-accent-primary tracking-wide cursor-pointer">
      Automation
    </h3>
    <ul className="py-2 text-sm text-text-secondary bg-white border border-border-color rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 absolute z-50 mt-1 w-64">
      {[
        'All Industries',
        'Marketing',
        'Sales',
        'HR',
        'Finance',
        'Customer Support',
        'IT',
        'Operations',
        'Product',
        'Legal',
      ].map((area) => {
        const slug = area.toLowerCase().replace(/\s+/g, '-');
        return (
          <li key={area}>
            <a
              href={`/automation/`}
              className="block px-4 py-2 hover:bg-accent-primary/10 hover:text-accent-primary"
            >
              {area}
            </a>
          </li>
        );
      })}
    </ul>
  </div>
</div>




            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-accent-primary tracking-wide">Company</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>
                  <a 
                    href="/about" 
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = '/about';
                    }}
                    className="hover:text-accent-primary transition-colors relative group"
                  >
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-primary/50 group-hover:w-full transition-all duration-300"></span>
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
              <h3 className="text-lg font-semibold text-accent-primary tracking-wide">Resources</h3>
              <ul className="space-y-2 text-text-secondary">
                
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

          <div className="border-t border-border-color mt-12 pt-8 text-center text-text-secondary">
            <p className="opacity-80 text-sm">&copy; 2025 SaaS Agency. All rights reserved.</p>
          </div>
        </div>
        
        {/* Scroll to top button */}
        <ScrollToTopButton />
      </footer>
    </div>
  );
};

export default Layout;