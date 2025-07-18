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
  Monitor 
} from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();
  const [currentIconSet, setCurrentIconSet] = React.useState(0);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
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

  // Icon sets that will cycle
  const iconSets = [
    // Set 1: Business Growth, Innovation, Digital Transformation
    [
      { icon: TrendingUp, label: "Growth" },
      { icon: Lightbulb, label: "Innovation" },
      { icon: RefreshCw, label: "Transformation" }
    ],
    // Set 2: Analytics, Cloud Computing, Security
    [
      { icon: BarChart3, label: "Analytics" },
      { icon: Cloud, label: "Cloud" },
      { icon: Shield, label: "Security" }
    ],
    // Set 3: Collaboration, Efficiency, ROI
    [
      { icon: Users, label: "Collaboration" },
      { icon: Clock, label: "Efficiency" },
      { icon: DollarSign, label: "ROI" }
    ],
    // Set 4: AI/ML, IoT, Blockchain
    [
      { icon: Bot, label: "AI/ML" },
      { icon: Wifi, label: "IoT" },
      { icon: Link2, label: "Blockchain" }
    ],
    // Set 5: Mobile, Web, Desktop
    [
      { icon: Smartphone, label: "Mobile" },
      { icon: Globe, label: "Web" },
      { icon: Monitor, label: "Desktop" }
    ]
  ];
  
  // Cycle through icon sets every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconSet((prev) => (prev + 1) % iconSets.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [iconSets.length]);
  
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
          {/* Tech Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [10, 0] }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center space-x-10 mb-10 relative h-[72px]"
          >
            {iconSets.map((set, setIndex) => (
              <motion.div 
                key={setIndex}
                className="absolute left-0 right-0 flex justify-center space-x-10"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: currentIconSet === setIndex ? 1 : 0,
                  transition: { duration: 0.3 }
                }}
              >
                {set.map((item, i) => {
                  const IconComponent = item.icon;
                  const colors = [
                    { border: "border-accent-primary", text: "text-accent-primary" },
                    { border: "border-accent-secondary", text: "text-accent-secondary" },
                    { border: "border-accent-tertiary", text: "text-accent-tertiary" }
                  ];
                  return (
                    <motion.div 
                      key={i} 
                      className="text-center"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <motion.div 
                        className={`w-12 h-12 md:w-14 md:h-14 border-2 ${colors[i].border} rounded-lg flex items-center justify-center shadow-lg bg-white hover:shadow-xl transition-all duration-300 mx-auto glow-effect`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <IconComponent className={`w-5 h-5 md:w-6 md:h-6 ${colors[i].text}`} />
                      </motion.div>
                      <span className={`text-xs mt-1 block ${colors[i].text}`}>{item.label}</span>
                    </motion.div>
                  );
                })}
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
                onClick={() => window.location.href = '/marketplace'}
                className="btn-secondary px-4 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-lg flex items-center justify-center gap-2 sm:gap-3 group btn-ripple magnetic-btn"
                onMouseDown={addRipple}
              >
                <Code className="w-4 h-4 sm:w-5 sm:h-5 text-accent-primary" />
                <span className="sm:inline">Marketplace</span>
              </motion.button>
              
              
              <motion.button
                whileHover={{ scale: 1.05, y: -3, boxShadow: "0 10px 25px rgba(99, 91, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/automation'}
                className="btn-secondary px-4 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-lg flex items-center justify-center gap-2 sm:gap-3 group btn-ripple magnetic-btn"
                onMouseDown={addRipple}
              >
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-accent-primary" />
                <span className="sm:inline">Automation</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -3, boxShadow: "0 10px 25px rgba(99, 91, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/free-tools'}
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
                <span className="sm:inline">Get Quote</span>
              </motion.button>
              
            </div>
          </motion.div>

            <div className="w-full flex justify-center col-span-2">
  <motion.button
    whileHover={{ scale: 1.05, y: -3, boxShadow: "0 10px 25px rgba(99, 91, 255, 0.3)" }}
    whileTap={{ scale: 0.95 }}
   onClick={(e) => {
                      e.preventDefault();
                      window.location.href = 'https://workflowwizard.replit.app/';
                    }}
    className="btn-secondary px-4 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-lg flex items-center justify-center gap-2 sm:gap-3 group btn-ripple magnetic-btn mt-2"
    onMouseDown={addRipple}
  >
    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-accent-primary" />
    <span className="sm:inline">Workflow Wizard</span>
  </motion.button>
</div>



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
    </section>
  );
};

export default Hero;