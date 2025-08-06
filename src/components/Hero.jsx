import React, { useCallback } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Particles from 'react-particles'; 
import { loadSlim } from 'tsparticles-slim'; 
import { 
  ArrowRight, 
  Play, 
  Zap, 
  Code, 
  Cpu, 
  TrendingUp, 
  Lightbulb, 
  RefreshCw, 
  BarChart3, 
  Cloud, 
  Shield, 
  Users, 
  Clock, 
  DollarSign, 
  Bot, 
  Wifi, 
  Link2, 
  Smartphone, 
  Globe, 
  Monitor,
  Sparkles,
  Camera,
  Video,
  MessageSquare,
  Share2,
  Target,
  Store,
  ShoppingCart,
  Bell,
  Building2,
  CreditCard,
  GraduationCap,
  Workflow,
  Calculator,
  FileText,
  Settings,
  CheckCircle
} from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();
  const [currentBanner, setCurrentBanner] = React.useState(0);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [timeLeft, setTimeLeft] = React.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [timerKey, setTimerKey] = React.useState(0);
  const [showBetaForm, setShowBetaForm] = React.useState(false);
  const [showThankYou, setShowThankYou] = React.useState(false);
  const [betaFormData, setBetaFormData] = React.useState({ name: '', email: '', phone: '' });
  const [isSparkwaveActive, setIsSparkwaveActive] = React.useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const controls = useAnimation();
  
  // Track mouse position for parallax effects
  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      });
      
      // Update cursor position with smooth animation
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);
  
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Particles loaded callback
  }, []);

  // Banner sets that will cycle
  const banners = [
    {
      id: 'services',
      title: 'OUR SERVICES',
      description: 'Comprehensive software development services including custom web applications, mobile apps, automation solutions, and digital transformation.',
      features: [
        { icon: Code, label: "Web Development" },
        { icon: Smartphone, label: "Mobile Apps" },
        { icon: Bot, label: "Automation" },
        { icon: Cloud, label: "Cloud Solutions" }
      ],
      gradient: 'from-emerald-600 via-teal-500 to-cyan-500',
      buttonText: 'View Our Services',
      buttonAction: () => {
        const servicesSection = document.getElementById('services-section');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      },
      offerText: '🎁 Special Offers',
      subtitle: 'FREE 1 Month Support + 10% Discount!'
    },
    {
      id: 'sparkwave',
      title: 'SPARKWAVE',
      description: 'Create AI-powered text, image, and video content for all social media platforms. Automatically post to Facebook, Instagram, Twitter, YouTube, LinkedIn & TikTok with advanced AI models for stunning visuals and engaging content.',
      features: [
        { icon: Camera, label: "AI Images" },
        { icon: Video, label: "AI Videos" },
        { icon: MessageSquare, label: "AI Text" },
        { icon: Share2, label: "Auto Post" }
      ],
      gradient: 'from-purple-600 via-pink-600 to-orange-500',
      buttonText: 'Beta Applications Start Soon',
      buttonAction: () => {
        // Non-functional button - just for display
        console.log('Beta applications coming soon');
      },
      offerText: '🚀 Close Beta Testing',
      subtitle: 'Starts from 15 Sep',
      showTimer: false
    },
    {
      id: 'ecommerce',
      title: 'ECOMMERCE AUTO PILOT',
      description: 'Link your Shopify, Amazon, Flipkart or any stores and manage all from one platform. Product management, instant invoice generation, real-time notifications, and multi-store dashboard.',
      features: [
        { icon: Store, label: "Multi-Store" },
        { icon: ShoppingCart, label: "Inventory" },
        { icon: Zap, label: "Auto Sync" },
        { icon: Bell, label: "Notifications" }
      ],
      gradient: 'from-blue-600 via-cyan-500 to-teal-500',
      buttonText: 'Coming Soon',
      buttonAction: () => console.log('Ecommerce coming soon clicked'),
      offerText: '🚀 Launching Soon',
      subtitle: 'Multi-Platform Management'
    },
    {
      id: 'industry',
      title: 'INDUSTRY SOLUTIONS',
      description: 'Complete ready-made solutions for Healthcare, Finance, E-commerce, Education, Food Delivery, Retail, Banking, Real Estate, Travel & OTT industries.',
      features: [
        { icon: Building2, label: "Healthcare" },
        { icon: CreditCard, label: "Finance" },
        { icon: ShoppingCart, label: "E-commerce" },
        { icon: GraduationCap, label: "Education" }
      ],
      gradient: 'from-green-600 via-emerald-500 to-teal-500',
      buttonText: 'View Industry Solutions',
      buttonAction: () => {
        console.log('Industry Solutions button clicked - navigating to marketplace');
        console.log('Current URL before navigation:', window.location.href);
        window.scrollTo(0, 0);
        setTimeout(() => {
          console.log('About to navigate to /marketplace');
          window.location.href = '/marketplace';
          console.log('Navigation triggered to /marketplace');
        }, 100);
      },
      offerText: '🏢 10+ Industries',
      subtitle: 'Ready-Made Solutions'
    },
    {
      id: 'automation',
      title: 'WORKFLOW AUTOMATION',
      description: 'Discover ready-to-use automation templates that streamline your business processes, save time, and eliminate repetitive tasks across your organization.',
      features: [
        { icon: Workflow, label: "Templates" },
        { icon: Bot, label: "AI Powered" },
        { icon: Zap, label: "Automation" },
        { icon: Clock, label: "Time Saving" }
      ],
      gradient: 'from-orange-600 via-red-500 to-pink-500',
      buttonText: 'View Prebuilt Automations',
      buttonAction: () => {
        console.log('Workflow Automation button clicked - navigating to automation');
        console.log('Current URL before navigation:', window.location.href);
        window.scrollTo(0, 0);
        setTimeout(() => {
          console.log('About to navigate to /automation');
          window.location.href = '/automation';
          console.log('Navigation triggered to /automation');
        }, 100);
      },
      offerText: '⚡ 150+ Templates',
      subtitle: 'Streamline Your Business'
    },
    {
      id: 'tools',
      title: 'FREE TOOLS',
      description: 'Access powerful development tools, calculators, generators, and utilities completely free. Boost your productivity with our collection of professional tools.',
      features: [
        { icon: Code, label: "Development" },
        { icon: Calculator, label: "Calculators" },
        { icon: FileText, label: "Generators" },
        { icon: Settings, label: "Utilities" }
      ],
      gradient: 'from-indigo-600 via-purple-500 to-pink-500',
      buttonText: 'Explore Free Tools',
      buttonAction: () => {
        console.log('Free Tools button clicked - navigating to free-tools');
        console.log('Current URL before navigation:', window.location.href);
        window.scrollTo(0, 0);
        setTimeout(() => {
          window.location.href = '/free-tools';
          console.log('Navigation triggered to /free-tools');
        }, 100);
      },
      offerText: '🛠️ 100% Free',
      subtitle: 'Professional Tools'
    }
  ];
  
  // Countdown timer for beta testing
  React.useEffect(() => {
    // Set target date to March 15, 2025 (future date)
    const targetDate = new Date('2025-03-15T00:00:00').getTime();
    
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      const calculatedDays = Math.floor(distance / (1000 * 60 * 60 * 24));
      const calculatedHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const calculatedMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const calculatedSeconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      console.log('Timer update:', {
        now: new Date(now).toLocaleString(),
        target: new Date(targetDate).toLocaleString(),
        distance: distance,
        days: calculatedDays,
        hours: calculatedHours,
        minutes: calculatedMinutes,
        seconds: calculatedSeconds,
        isPositive: distance > 0
      });
      
      if (distance > 0) {
        setTimeLeft({ 
          days: calculatedDays, 
          hours: calculatedHours, 
          minutes: calculatedMinutes, 
          seconds: calculatedSeconds 
        });
        setTimerKey(Date.now()); // Use timestamp for unique key
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setTimerKey(Date.now()); // Use timestamp for unique key
      }
    };
    
    // Update immediately
    updateTimer();
    
    // Then update every second
    const timer = setInterval(updateTimer, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Cycle through banners every 8 seconds (longer for SPARKWAVE)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [banners.length]);

  // Track when SPARKWAVE banner is active
  React.useEffect(() => {
    setIsSparkwaveActive(currentBanner === 0);
  }, [currentBanner]);
  
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary parallax-container">
      {/* Enhanced Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#635bff", "#7a73ff", "#0a2540"],
            },
            links: {
              color: "#635bff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.4,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden parallax-layer">
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 border-2 border-accent-primary rounded-full opacity-10 blur-[1px]"
          animate={{
            x: mousePosition.x * -30,
            y: mousePosition.y * -30,
          }}
          transition={{ type: "spring", damping: 15 }}
        ></motion.div>
        <motion.div 
          className="absolute top-40 right-20 w-16 h-16 border-2 border-accent-secondary rounded-full opacity-15 blur-[1px]"
          animate={{
            x: mousePosition.x * -20,
            y: mousePosition.y * -20,
          }}
          transition={{ type: "spring", damping: 15 }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 left-20 w-12 h-12 bg-accent-primary opacity-5 rounded-full blur-[1px]"
          animate={{
            x: mousePosition.x * -40,
            y: mousePosition.y * -40,
          }}
          transition={{ type: "spring", damping: 15 }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-40 right-10 w-24 h-24 border-2 border-accent-tertiary rounded-full opacity-10 blur-[1px]"
          animate={{
            x: mousePosition.x * -25,
            y: mousePosition.y * -25,
          }}
          transition={{ type: "spring", damping: 15 }}
        ></motion.div>
        
        {/* Additional floating elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 rounded-full blur-xl"
          animate={{
            x: mousePosition.x * -50,
            y: mousePosition.y * -50,
          }}
          transition={{ type: "spring", damping: 15 }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-br from-accent-secondary/5 to-accent-tertiary/5 rounded-full blur-xl"
          animate={{
            x: mousePosition.x * -60,
            y: mousePosition.y * -60,
          }}
          transition={{ type: "spring", damping: 15 }}
        ></motion.div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Animated Banners */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [10, 0] }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-16 sm:mb-20 relative h-[320px] sm:h-[280px]"
          >
            {banners.map((banner, index) => (
              <motion.div 
                key={banner.id}
                className="absolute left-0 right-0 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: currentBanner === index ? 1 : 0,
                  y: currentBanner === index ? 0 : 20,
                  transition: { duration: 0.5 }
                }}
              >
                <div className={`bg-gradient-to-r ${banner.gradient} rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/20 backdrop-blur-sm max-w-4xl mx-auto min-h-[320px] sm:min-h-[280px]`}>
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 h-full">
                    {/* Left Content */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center">
                          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                          {banner.title}
                        </h3>
                      </div>
                      <p className={`text-white/90 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 max-w-2xl line-clamp-3 sm:line-clamp-2`}>
                        {banner.description}
                      </p>
                      <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-4 mb-3 sm:mb-4">
                        {banner.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-1 sm:gap-2 bg-white/10 px-2 sm:px-3 py-1 rounded-full">
                            <feature.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                            <span className="text-white text-xs font-medium">{feature.label}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Timer for SPARKWAVE banner */}
                      {banner.showTimer && (
                        <motion.div 
                          key={`timer-${timerKey}`} 
                          className="flex justify-center md:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                          style={{ 
                            border: isSparkwaveActive ? '1px solid rgba(255,255,255,0.3)' : 'none',
                            borderRadius: '8px',
                            padding: isSparkwaveActive ? '8px' : '0'
                          }}
                        >
                          <div className="bg-white/30 rounded-lg px-3 py-2 text-center border border-white/20">
                            <div className="text-white text-sm font-bold">{timeLeft.days}</div>
                            <div className="text-white/90 text-xs">Days</div>
                          </div>
                          <div className="bg-white/30 rounded-lg px-3 py-2 text-center border border-white/20">
                            <div className="text-white text-sm font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                            <div className="text-white/90 text-xs">Hours</div>
                          </div>
                          <div className="bg-white/30 rounded-lg px-3 py-2 text-center border border-white/20">
                            <div className="text-white text-sm font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                            <div className="text-white/90 text-xs">Minutes</div>
                          </div>
                          <div className="bg-white/30 rounded-lg px-3 py-2 text-center border border-white/20">
                            <div className="text-white text-sm font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                            <div className="text-white/90 text-xs">Seconds</div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                    
                    {/* Right Content - CTA */}
                    <div className="flex flex-col items-center md:items-end gap-3 sm:gap-4">
                      <div className="text-center md:text-right">
                        <div className="text-white/80 text-xs sm:text-sm mb-1 sm:mb-2">{banner.offerText}</div>
                        <div className="text-white text-base sm:text-lg font-bold">{banner.subtitle}</div>
                      </div>
                      <motion.div
                        className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-lg transition-all duration-300 flex items-center gap-2 ${
                          banner.id === 'sparkwave' 
                            ? 'bg-white/20 text-white border border-white/30 backdrop-blur-sm' 
                            : 'bg-white text-gray-800 shadow-lg hover:shadow-xl'
                        }`}
                      >
                        {banner.id === 'sparkwave' ? (
                          <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                        ) : (
                          <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                        )}
                        {banner.buttonText}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight font-jakarta"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Transform Your 
            <span className="sm:hidden">Business</span>
            <span className="hidden sm:inline">Business with</span>
            <span className="block inline-block-text mt-2 sm:mt-4 font-bold tracking-tight
             rainbow-text"> 
              Next-Gen Solutions
            </span>
          </motion.h1>
          
          {/* Subheading */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-2 font-jakarta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            We build cutting-edge software solutions that accelerate growth, streamline operations,
            and unlock new possibilities for forward-thinking businesses in the digital age.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-8 sm:mt-12 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3, boxShadow: "0 10px 25px rgba(99, 91, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const servicesSection = document.getElementById('services-section');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-secondary px-4 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-lg flex items-center justify-center gap-2 sm:gap-3 group btn-ripple magnetic-btn"
              onMouseDown={addRipple}
            >
              Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </motion.button>

            <div className="grid grid-cols-2 gap-3 w-full sm:flex sm:flex-row sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -3, boxShadow: "0 10px 25px rgba(99, 91, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  console.log('Marketplace button clicked - scrolling to marketplace section');
                  const marketplaceSection = document.getElementById('marketplace-section');
                  if (marketplaceSection) {
                    marketplaceSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-secondary px-4 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-lg flex items-center justify-center gap-2 sm:gap-3 group btn-ripple magnetic-btn"
                onMouseDown={addRipple}
              >
                <Code className="w-4 h-4 sm:w-5 sm:h-5 text-accent-primary" />
                <span className="sm:inline">Marketplace</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -3, boxShadow: "0 10px 25px rgba(99, 91, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  console.log('Free Tools button clicked - scrolling to free tools section');
                  const freeToolsSection = document.getElementById('free-tools-section');
                  if (freeToolsSection) {
                    freeToolsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-secondary px-4 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-lg flex items-center justify-center gap-2 sm:gap-3 group btn-ripple magnetic-btn"
                onMouseDown={addRipple}
              >
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-accent-primary" />
                <span className="sm:inline">Free Tools</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -3, boxShadow: "0 10px 25px rgba(99, 91, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/get-quote'}
                className="btn-secondary px-4 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-lg flex items-center justify-center gap-2 sm:gap-3 group btn-ripple magnetic-btn"
                onMouseDown={addRipple}
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 text-accent-primary" />
                <span className="sm:inline">Contact Us</span>
              </motion.button>
              
            </div>
          </motion.div>

      



          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] } }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 mt-12 sm:mt-20 max-w-4xl mx-auto stagger-children"
          >
            <motion.div 
              className="text-center glass-card p-4 rounded-xl tilt-effect"
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 15px 30px rgba(99, 91, 255, 0.2)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-accent-primary tilt-effect-inner">200+</div>
              <div className="text-text-secondary mt-1 sm:mt-2 text-sm sm:text-base">Projects</div>
            </motion.div>
            <motion.div 
              className="text-center glass-card p-4 rounded-xl tilt-effect"
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 15px 30px rgba(122, 115, 255, 0.2)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-accent-secondary tilt-effect-inner">50+</div>
              <div className="text-text-secondary mt-1 sm:mt-2 text-sm sm:text-base">Clients</div>
            </motion.div>
            <motion.div 
              className="text-center glass-card p-4 rounded-xl tilt-effect"
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 15px 30px rgba(10, 37, 64, 0.2)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-accent-tertiary tilt-effect-inner">8+</div>
              <div className="text-text-secondary mt-1 sm:mt-2 text-sm sm:text-base">Years</div>
            </motion.div>
            <motion.div 
              className="text-center glass-card p-4 rounded-xl tilt-effect"
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 15px 30px rgba(99, 91, 255, 0.2)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="text-2xl sm:text-3xl md:text-5xl font-bold animated-gradient-text tilt-effect-inner">24/7</div>
              <div className="text-text-secondary mt-1 sm:mt-2 text-sm sm:text-base">Support</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none"
        style={{
          y: useTransform(
            useMotionValue(0),
            [0, 1],
            [0, -50]
          )
        }}
      />

      {/* Beta Testing Form Modal */}
      {showBetaForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md"
          onClick={() => setShowBetaForm(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-border-color"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                Apply for SPARKWAVE Beta
              </h3>
              <p className="text-text-secondary">
                Join our exclusive beta testing program starting September 15th
              </p>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              console.log('Beta form submitted:', betaFormData);
              setShowBetaForm(false);
              setShowThankYou(true);
              // Reset form data
              setBetaFormData({ name: '', email: '', phone: '' });
              // Hide thank you message after 5 seconds
              setTimeout(() => {
                setShowThankYou(false);
              }, 5000);
            }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={betaFormData.name}
                  onChange={(e) => setBetaFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 border border-border-color rounded-xl focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={betaFormData.email}
                  onChange={(e) => setBetaFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 border border-border-color rounded-xl focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={betaFormData.phone}
                  onChange={(e) => setBetaFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-4 py-3 border border-border-color rounded-xl focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowBetaForm(false)}
                  className="flex-1 px-4 py-3 bg-tertiary text-text-secondary rounded-xl font-medium transition-colors hover:bg-tertiary/80"
                >
                  Cancel
                </motion.button>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium transition-all hover:shadow-lg"
                >
                  Apply Now
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}

      {/* Thank You Message Modal */}
      {showThankYou && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-border-color text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              Thank You!
            </h3>
            <p className="text-text-secondary mb-4">
              Your beta testing application has been submitted successfully. We'll contact you soon with further details.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowThankYou(false)}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-medium transition-all hover:shadow-lg"
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;