import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children, className, onClick, strength = 50 }) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Calculate distance from center as a percentage of button size
    const maxDistanceX = width / 2;
    const maxDistanceY = height / 2;
    
    // Calculate magnetic pull (stronger when closer to the button)
    const magneticX = (distanceX / maxDistanceX) * strength;
    const magneticY = (distanceY / maxDistanceY) * strength;
    
    setPosition({ x: magneticX, y: magneticY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;
    
    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return (
    <motion.button
      ref={buttonRef}
      className={`magnetic-btn ${className}`}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 15 }}
    >
      {children}
    </motion.button>
  );
};

export default MagneticButton;