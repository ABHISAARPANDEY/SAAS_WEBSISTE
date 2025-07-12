// Utility for creating and managing Intersection Observer instances
// This helps with efficient scroll-triggered animations

export const createObserver = (options = {}, callback) => {
  const defaultOptions = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.1 // trigger when 10% of the element is visible
  };
  
  const mergedOptions = { ...defaultOptions, ...options };
  
  return new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      callback(entry);
    });
  }, mergedOptions);
};

// Hook to add reveal animation classes when elements enter viewport
export const initScrollReveal = () => {
  const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
  
  if (revealElements.length === 0) return;
  
  const revealObserver = createObserver(
    { threshold: 0.15 },
    (entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    }
  );
  
  revealElements.forEach(element => {
    revealObserver.observe(element);
  });
  
  return () => {
    revealElements.forEach(element => {
      revealObserver.unobserve(element);
    });
  };
};

// Hook to add parallax effect to elements
export const initParallaxElements = () => {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  if (parallaxElements.length === 0) return;
  
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    
    parallaxElements.forEach(element => {
      const speed = parseFloat(element.dataset.parallax) || 0.2;
      const offset = scrollTop * speed;
      element.style.transform = `translateY(${offset}px)`;
    });
  };
  
  window.addEventListener('scroll', handleScroll);
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

// Initialize all scroll effects
export const initScrollEffects = () => {
  const cleanupReveal = initScrollReveal();
  const cleanupParallax = initParallaxElements();
  
  return () => {
    if (cleanupReveal) cleanupReveal();
    if (cleanupParallax) cleanupParallax();
  };
};