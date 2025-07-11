import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import { ArrowRight, Play, Zap, Code, Cpu } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Particles loaded callback
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
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
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-accent-primary rounded-full opacity-10 animate-pulse blur-[1px]"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-accent-secondary rounded-full opacity-15 animate-bounce blur-[1px]"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-accent-primary opacity-5 rounded-full animate-ping blur-[1px]"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 border-2 border-accent-tertiary rounded-full opacity-10 animate-pulse blur-[1px]"></div>
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
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex justify-center space-x-10 mb-10"
          >
            <div className="w-14 h-14 border-2 border-accent-primary rounded-lg flex items-center justify-center shadow-lg bg-white">
              <Code className="w-6 h-6 text-accent-primary" />
            </div>
            <div className="w-14 h-14 border-2 border-accent-secondary rounded-lg flex items-center justify-center shadow-lg bg-white">
              <Cpu className="w-6 h-6 text-accent-secondary" />
            </div>
            <div className="w-14 h-14 border-2 border-accent-tertiary rounded-lg flex items-center justify-center shadow-lg bg-white">
              <Zap className="w-6 h-6 text-accent-tertiary" />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Transform Your 
            <span className="sm:hidden">Business</span>
            <span className="hidden sm:inline">Business with</span>
            <span className="block stripe-gradient-text mt-2 sm:mt-4 font-bold tracking-tight"> 
              Next-Gen Solutions
            </span>
          </motion.h1>
          
          {/* Subheading */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            We build cutting-edge software solutions that accelerate growth, streamline operations,
            and unlock new possibilities for forward-thinking businesses in the digital age.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-8 sm:mt-12 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const servicesSection = document.getElementById('services-section');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="stripe-button px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg flex items-center gap-2 sm:gap-3 group w-full sm:w-auto"
            >
              Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </motion.button>

            <div className="grid grid-cols-2 gap-3 w-full sm:flex sm:flex-row sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/marketplace'}
                className="btn-secondary px-4 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-lg flex items-center justify-center gap-2 sm:gap-3 group"
              >
                <Code className="w-4 h-4 sm:w-5 sm:h-5 text-accent-primary" />
                <span className="sm:inline">Marketplace</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/automation'}
                className="btn-secondary px-4 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-lg flex items-center justify-center gap-2 sm:gap-3 group"
              >
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-accent-primary" />
                <span className="sm:inline">Automation</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/free-tools'}
                className="btn-secondary px-4 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-lg flex items-center justify-center gap-2 sm:gap-3 group"
              >
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-accent-primary" />
                <span className="sm:inline">Free Tools</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/get-quote'}
                className="btn-secondary px-4 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-lg flex items-center justify-center gap-2 sm:gap-3 group"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 text-accent-primary" />
                <span className="sm:inline">Get Quote</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 mt-12 sm:mt-20 max-w-4xl mx-auto"
          >
            <div className="text-center transform hover:scale-105 transition-transform duration-300 bg-white p-4 rounded-xl shadow-card hover:shadow-card-hover">
              <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-accent-primary">200+</div>
              <div className="text-text-secondary mt-1 sm:mt-2 text-sm sm:text-base">Projects</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300 bg-white p-4 rounded-xl shadow-card hover:shadow-card-hover">
              <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-accent-secondary">50+</div>
              <div className="text-text-secondary mt-1 sm:mt-2 text-sm sm:text-base">Clients</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300 bg-white p-4 rounded-xl shadow-card hover:shadow-card-hover">
              <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-accent-tertiary">8+</div>
              <div className="text-text-secondary mt-1 sm:mt-2 text-sm sm:text-base">Years</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300 bg-white p-4 rounded-xl shadow-card hover:shadow-card-hover">
              <div className="text-2xl sm:text-3xl md:text-5xl font-bold gradient-text">24/7</div>
              <div className="text-text-secondary mt-1 sm:mt-2 text-sm sm:text-base">Support</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;