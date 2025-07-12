import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxSection = ({ 
  children, 
  backgroundImage, 
  overlayColor = 'rgba(0, 0, 0, 0.5)', 
  speed = 0.5,
  className = '',
  height = '60vh'
}) => {
  const ref = useRef(null);
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  
  const { scrollY } = useScroll();
  
  // Calculate the element's position relative to the viewport
  useEffect(() => {
    if (!ref.current) return;
    
    const setValues = () => {
      setElementTop(ref.current.offsetTop);
      setClientHeight(window.innerHeight);
    };
    
    setValues();
    window.addEventListener('resize', setValues);
    
    return () => window.removeEventListener('resize', setValues);
  }, [ref]);
  
  // Transform the y position based on scroll
  const y = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + clientHeight],
    [`${speed * 100}%`, `${-speed * 100}%`]
  );

  return (
    <div 
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ height }}
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y
        }}
      />
      
      <div 
        className="absolute inset-0 w-full h-full" 
        style={{ backgroundColor: overlayColor }}
      />
      
      <div className="relative z-10 h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;