import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const StickyWhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    console.log('Sticky WhatsApp button clicked');
    // Non-functional as requested
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl border-2 border-white/20 backdrop-blur-sm transition-all duration-300 group"
      style={{
        boxShadow: '0 10px 30px rgba(34, 197, 94, 0.3)',
      }}
    >
      <div className="flex items-center gap-3">
        <MessageCircle className="w-6 h-6" />
        <span className="font-semibold text-sm hidden sm:block">Contact Us on WhatsApp</span>
      </div>
      
      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 rounded-full bg-green-400"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.button>
  );
};

export default StickyWhatsAppButton; 