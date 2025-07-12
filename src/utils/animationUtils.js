// Animation utility functions for consistent animations across the website

// Standard page entry animations
export const pageEntryVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

// Staggered children animations
export const staggerContainerVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Child item animations
export const childVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

// Scroll-triggered animations
export const scrollAnimationVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

// Button hover animations
export const buttonHoverVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, y: -4 },
  tap: { scale: 0.95 }
};

// Card hover animations
export const cardHoverVariants = {
  initial: { scale: 1, y: 0 },
  hover: { 
    scale: 1.03, 
    y: -8,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
  }
};

// Fade in animations with delay
export const fadeInWithDelay = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { 
      duration: 0.8, 
      delay,
      ease: [0.16, 1, 0.3, 1]
    }
  }
});

// Text reveal animation
export const textRevealVariants = {
  initial: { y: 100, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

// Pulse animation for accent elements
export const pulseVariants = {
  initial: { opacity: 0.8 },
  animate: {
    opacity: [0.8, 1, 0.8],
    scale: [1, 1.05, 1],
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: "easeInOut"
    }
  }
};

// Consistent animation settings for all pages
export const animationConfig = {
  defaultDuration: 0.8,
  defaultEase: [0.16, 1, 0.3, 1],
  staggerDelay: 0.1,
  buttonHoverScale: 1.05,
  buttonTapScale: 0.95,
  cardHoverScale: 1.03,
  cardHoverY: -8
};