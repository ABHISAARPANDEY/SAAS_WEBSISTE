import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Bot, Mic, MicOff } from 'lucide-react';

const HospitalAgentModal = ({ isOpen, onClose }) => {
  const [isWidgetLoaded, setIsWidgetLoaded] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [widgetCreated, setWidgetCreated] = useState(false);

  // Function to move ElevenLabs widget into our modal
  const moveWidgetToModal = () => {
    // Find any existing ElevenLabs widgets
    const allWidgets = document.querySelectorAll('elevenlabs-convai');
    const modalContainer = document.querySelector('[data-modal="hospital-agent"] .widget-container');
    
    if (modalContainer && allWidgets.length > 0) {
      allWidgets.forEach(widget => {
        // Only move if widget is not already in our modal
        if (!modalContainer.contains(widget)) {
          // Move the widget into our modal container
          modalContainer.appendChild(widget);
          
          // Update widget styles to fit our modal
          widget.style.width = '100%';
          widget.style.height = '400px';
          widget.style.borderRadius = '12px';
          widget.style.display = 'block';
          widget.style.position = 'relative';
          widget.style.zIndex = '10';
        }
      });
    }
  };

  useEffect(() => {
    if (isOpen && !isScriptLoaded) {
      // Load the ElevenLabs ConvAI widget script
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
      script.async = true;
      script.type = 'text/javascript';
      script.onload = () => {
        setIsScriptLoaded(true);
        
        // Wait a bit for the script to fully initialize
        setTimeout(() => {
          // Only create widget if not already created
          if (!widgetCreated) {
            // Create the widget element
            const widget = document.createElement('elevenlabs-convai');
            widget.setAttribute('agent-id', 'agent_3501k4hwv61jf7w815naa52dtnsp');
            widget.style.cssText = 'width: 100%; height: 400px; border-radius: 12px; display: block; position: relative; z-index: 10;';
            document.body.appendChild(widget);
            
            setWidgetCreated(true);
          }
          
          // Set widget as loaded
          setIsWidgetLoaded(true);
        }, 1000);
      };
      script.onerror = () => {
        console.error('Failed to load ElevenLabs ConvAI widget script');
        setIsWidgetLoaded(true); // Show the widget area even if script fails
      };
      document.head.appendChild(script);

      return () => {
        // Cleanup script when component unmounts
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
  }, [isOpen, isScriptLoaded]);

  // Move ElevenLabs widget into our modal when it opens
  useEffect(() => {
    if (isOpen) {
      // Wait a bit for the widget to load, then move it
      const moveWidget = () => {
        moveWidgetToModal();
      };
      
      // Try to move widget immediately
      moveWidget();
      
      // Set up interval to check and move widget, but less frequently
      const interval = setInterval(moveWidget, 3000);
      
      return () => clearInterval(interval);
    } else {
      // Reset states when modal closes
      setIsWidgetLoaded(false);
      setWidgetCreated(false);
    }
  }, [isOpen]);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            data-modal="hospital-agent"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-red-600 via-pink-500 to-rose-500 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Hospital AI Agent</h2>
                    <p className="text-white/80">Test our intelligent hospital assistant in real-time</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors text-white hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {!isWidgetLoaded ? (
                <div className="flex flex-col items-center justify-center py-16 space-y-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Bot className="w-8 h-8 text-blue-600 animate-pulse" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Loading AI Agent...
                    </h3>
                    <p className="text-gray-600">
                      Preparing your hospital assistant for real-time testing
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Instructions */}
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <Mic className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-1">How to Test</h4>
                        <p className="text-blue-800 text-sm">
                          Click the microphone button below to start a conversation with our Hospital AI Agent. 
                          Try asking about appointments, medical services, patient support, or any healthcare-related questions.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ElevenLabs ConvAI Widget Container */}
                  <div className="widget-container min-h-[400px] bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center">
                    {!isWidgetLoaded ? (
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Bot className="w-8 h-8 text-blue-600 animate-pulse" />
                        </div>
                        <p className="text-gray-600">Loading AI Agent...</p>
                        <p className="text-sm text-gray-500 mt-2">The widget will appear here once loaded</p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Bot className="w-8 h-8 text-green-600" />
                        </div>
                        <p className="text-gray-600">AI Agent Ready!</p>
                        <p className="text-sm text-gray-500 mt-2">Widget should be visible above</p>
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <Heart className="w-5 h-5 text-red-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">Appointment Scheduling</h4>
                      <p className="text-sm text-gray-600">Book and manage medical appointments</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <Bot className="w-5 h-5 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">Patient Support</h4>
                      <p className="text-sm text-gray-600">Get help with medical inquiries and support</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <Mic className="w-5 h-5 text-purple-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">Voice Interaction</h4>
                      <p className="text-sm text-gray-600">Natural conversation with voice recognition</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Powered by ElevenLabs ConvAI</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>AI Agent Active</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HospitalAgentModal;
