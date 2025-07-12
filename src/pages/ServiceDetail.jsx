import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  ExternalLink,
  Play,
  Pause
} from 'lucide-react';
import { getServiceById } from '../data/servicesData';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = getServiceById(serviceId);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const carouselRef = useRef(null);
  const autoScrollRef = useRef(null);

  useEffect(() => {
    if (isAutoScrolling && service?.industrySolutions) {
      autoScrollRef.current = setInterval(() => {
        setCurrentSlide((prev) => 
          prev === service.industrySolutions.length - 1 ? 0 : prev + 1
        );
      }, 4000);
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isAutoScrolling, service?.industrySolutions]);

  useEffect(() => {
    if (carouselRef.current && service?.industrySolutions) {
      const slideWidth = carouselRef.current.children[0]?.offsetWidth || 0;
      const gap = 32; // 2rem gap
      carouselRef.current.scrollTo({
        left: currentSlide * (slideWidth + gap),
        behavior: 'smooth'
      });
    }
  }, [currentSlide]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              navigate('/');
            }}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === service.industrySolutions.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? service.industrySolutions.length - 1 : prev - 1
    );
  };

  const toggleAutoScroll = () => {
    setIsAutoScrolling(!isAutoScrolling);
  };

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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => {
              window.scrollTo(0, 0);
              navigate('/');
            }}
            className="flex items-center gap-2 text-text-secondary hover:text-neon-green transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </motion.button>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Service Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className={`w-32 h-32 rounded-3xl border border-${service.neonColor || 'neon-green'} flex items-center justify-center pulse-neon`}
            >
              <service.icon className={`w-16 h-16 text-${service.neonColor || 'neon-green'}`} />
            </motion.div>

            {/* Service Title and Description */}
            <div className="flex-1 text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl font-orbitron font-bold text-text-primary mb-6"
              >
                {service.title}
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-text-secondary leading-relaxed max-w-4xl"
              >
                {service.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className={index > 0 ? 'mt-4' : ''}>
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-dark-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-text-primary mb-6">
              Technology <span className="gradient-neon-text neon-text">Stack</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Modern technologies and frameworks we use to build exceptional solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {service.techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group cursor-pointer"
              >
                <div className="card-dark rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center h-full flex flex-col items-center justify-center">
                  <div className={`w-12 h-12 rounded-xl border border-${service.neonColor || 'neon-green'} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon className={`w-6 h-6 text-${service.neonColor || 'neon-green'}`} />
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">{tech.name}</h3>
                  <span className="text-sm text-text-secondary">{tech.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Methodology */}
      <section className="py-20 bg-dark-secondary border-t border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-text-primary mb-6">
              Development <span className="gradient-neon-text neon-text">Methodology</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Our proven approach to delivering successful projects on time and within budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.methodology.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Phase Number */}
                <div className={`w-12 h-12 rounded-full border border-${service.neonColor || 'neon-green'} flex items-center justify-center text-${service.neonColor || 'neon-green'} font-bold text-lg mb-6 mx-auto pulse-neon`}>
                  <span className={`text-${service.neonColor || 'neon-green'}`}>{index + 1}</span>
                </div>

                {/* Phase Content */}
                <div className="text-center">
                  <h3 className="text-xl font-orbitron font-bold text-text-primary mb-4">{phase.phase}</h3>
                  <ul className="space-y-2 text-text-secondary">
                    {phase.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="text-sm leading-relaxed">
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Connector Line */}
                {index < service.methodology.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-dark/50 to-transparent transform translate-x-4" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Showcase */}
      <section className="py-20 bg-dark-primary border-t border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-text-primary mb-6">
              Industry <span className="gradient-neon-text neon-text">Solutions</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Explore our portfolio of successful implementations across various industries
            </p>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-dark-tertiary shadow-lg hover:shadow-xl transition-all duration-300 border border-dark hover:border-neon-green/50 text-text-secondary hover:text-neon-green"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={toggleAutoScroll}
                className={`p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isAutoScrolling 
                    ? 'bg-dark-tertiary border border-neon-green text-neon-green' 
                    : 'bg-dark-tertiary border border-dark text-text-secondary'
                }`}
              >
                {isAutoScrolling ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-dark-tertiary shadow-lg hover:shadow-xl transition-all duration-300 border border-dark hover:border-neon-green/50 text-text-secondary hover:text-neon-green"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Carousel */}
          <div className="relative overflow-hidden">
            <div
              ref={carouselRef}
              className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {service.industrySolutions.map((solution, index) => (
                <motion.div
                  key={solution.sector}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-80 cursor-pointer group"
                  onClick={() => setSelectedProject(solution)}
                >
                  <div className="card-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:border-neon-green/50">
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={solution.previewImage}
                        alt={solution.websiteName}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink className="w-6 h-6 text-neon-green" />
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium bg-dark-tertiary border border-${service.neonColor || 'neon-green'} text-${service.neonColor || 'neon-green'}`}>
                          {solution.sector}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-orbitron font-bold text-text-primary mb-2 group-hover:text-neon-green transition-colors">
                        {solution.websiteName}
                      </h3>
                      
                      <p className="text-text-secondary mb-4 leading-relaxed">
                        {solution.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {solution.techUsed.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-dark-tertiary text-text-secondary rounded-md text-xs font-medium border border-dark"
                          >
                            {tech}
                          </span>
                        ))}
                        {solution.techUsed.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">
                            +{solution.techUsed.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {service.industrySolutions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 border ${
                  index === currentSlide 
                    ? `border-${service.neonColor || 'neon-green'} bg-${service.neonColor || 'neon-green'}` 
                    : 'border-dark bg-dark-tertiary hover:bg-dark-tertiary/80'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Project Preview */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-dark-secondary rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-dark"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-dark">
                <div>
                  <h3 className="text-2xl font-orbitron font-bold text-text-primary">{selectedProject.websiteName}</h3>
                  <p className="text-text-secondary">{selectedProject.sector}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-dark-tertiary rounded-full transition-colors text-text-secondary hover:text-neon-pink"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Project Image */}
                <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-6 border border-dark">
                  <img
                    src={selectedProject.previewImage}
                    alt={selectedProject.websiteName}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/50 to-transparent" />
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-orbitron font-semibold text-text-primary mb-2">Project Overview</h4>
                    <p className="text-text-secondary leading-relaxed">{selectedProject.description}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-orbitron font-semibold text-text-primary mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.techUsed.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-4 py-2 rounded-full text-sm font-medium bg-dark-tertiary border border-${service.neonColor || 'neon-green'} text-${service.neonColor || 'neon-green'}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-dark-secondary border-t border-dark">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 border border-neon-green rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 border border-neon-cyan rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-neon-green opacity-10 rounded-full animate-ping"></div>
          <div className="absolute bottom-40 right-10 w-24 h-24 border border-neon-pink rounded-full opacity-20 animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-text-primary">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Let's discuss how our {service.title.toLowerCase()} expertise can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate('/get-quote');
                }}
                className="btn-neon px-8 py-4 rounded-full font-orbitron font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate('/marketplace');
                }}
                className="glass-effect text-neon-cyan px-8 py-4 rounded-full font-orbitron font-semibold text-lg border border-neon-cyan hover:neon-glow-cyan transition-all duration-300"
              >
                Explore Marketplace
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;