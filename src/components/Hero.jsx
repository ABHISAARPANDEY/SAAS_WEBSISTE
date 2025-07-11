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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-primary">
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
              value: ["#00FF9C", "#0FF4C6", "#FF0080"],
            },
            links: {
              color: "#00FF9C",
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
              value: 100,
            },
            opacity: {
              value: 0.6,
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
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-neon-green rounded-full opacity-20 animate-pulse blur-[1px]"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-neon-cyan rounded-full opacity-30 animate-bounce blur-[1px]"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-neon-green opacity-10 rounded-full animate-ping blur-[1px]"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 border-2 border-neon-pink rounded-full opacity-20 animate-pulse blur-[1px]"></div>
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
            <div className="w-14 h-14 border-2 border-neon-green rounded-lg flex items-center justify-center neon-border pulse-neon shadow-lg">
              <Code className="w-6 h-6 text-neon-green" />
            </div>
            <div className="w-14 h-14 border-2 border-neon-cyan rounded-lg flex items-center justify-center neon-border-cyan pulse-neon shadow-lg">
              <Cpu className="w-6 h-6 text-neon-cyan" />
            </div>
            <div className="w-14 h-14 border-2 border-neon-pink rounded-lg flex items-center justify-center border-neon-pink pulse-neon shadow-lg">
              <Zap className="w-6 h-6 text-neon-pink" />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold text-dark-primary leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Transform Your 
            <span className="sm:hidden">Business</span>
            <span className="hidden sm:inline">Business with</span>
            <span className="block gradient-neon-text mt-2 sm:mt-4 font-bold tracking-tight"> 
              Next-Gen Solutions
            </span>
          </motion.h1>
          
          {/* Subheading */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-custom-white max-w-4xl mx-auto leading-relaxed px-2"
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
              className="btn-neon !text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-orbitron font-semibold text-base sm:text-lg shadow-button hover:shadow-button-hover flex items-center gap-2 sm:gap-3 group w-full sm:w-auto"
            >
              Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </motion.button>

            <div className="grid grid-cols-2 gap-3 w-full sm:flex sm:flex-row sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/marketplace'}
                className="btn-neon !text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full font-orbitron font-semibold text-sm sm:text-lg shadow-button hover:shadow-button-hover flex items-center justify-center gap-2 sm:gap-3 group"
              >
                <Code className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="sm:inline">Marketplace</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/automation'}
                className="btn-neon !text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full font-orbitron font-semibold text-sm sm:text-lg shadow-button hover:shadow-button-hover flex items-center justify-center gap-2 sm:gap-3 group"
              >
                <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="sm:inline">Automation</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/free-tools'}
                className="btn-neon !text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full font-orbitron font-semibold text-sm sm:text-lg shadow-button hover:shadow-button-hover flex items-center justify-center gap-2 sm:gap-3 group"
              >
                <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="sm:inline">Free Tools</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/get-quote'}
                className="btn-neon !text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full font-orbitron font-semibold text-sm sm:text-lg shadow-button hover:shadow-button-hover flex items-center justify-center gap-2 sm:gap-3 group"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
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
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl md:text-5xl font-orbitron font-bold text-neon-green neon-text">200+</div>
              <div className="text-dark-secondary mt-1 sm:mt-2 text-sm sm:text-base">Projects</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl md:text-5xl font-orbitron font-bold text-neon-cyan neon-text-cyan">50+</div>
              <div className="text-dark-secondary mt-1 sm:mt-2 text-sm sm:text-base">Clients</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl md:text-5xl font-orbitron font-bold text-neon-pink neon-text-pink">8+</div>
              <div className="text-dark-secondary mt-1 sm:mt-2 text-sm sm:text-base">Years</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl md:text-5xl font-orbitron font-bold gradient-neon-text">24/7</div>
              <div className="text-dark-secondary mt-1 sm:mt-2 text-sm sm:text-base">Support</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/20 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;