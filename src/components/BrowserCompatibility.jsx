import React, { useState, useEffect } from 'react';
import { AlertTriangle, Shield, Globe, CheckCircle } from 'lucide-react';
import { getBrowserInfo, detectAdBlocker } from '../utils/imageUtils';

const BrowserCompatibility = () => {
  const [browserInfo, setBrowserInfo] = useState(null);
  const [adBlockerDetected, setAdBlockerDetected] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const checkCompatibility = async () => {
      const browser = getBrowserInfo();
      setBrowserInfo(browser);
      
      // Check for ad blocker
      const hasAdBlocker = await detectAdBlocker();
      setAdBlockerDetected(hasAdBlocker);
      
      // Show warning for Brave browser or if ad blocker is detected
      if (browser.name === 'Brave' || hasAdBlocker) {
        setShowWarning(true);
        
        // Auto-hide warning after 8 seconds (longer for better UX)
        setTimeout(() => {
          setShowWarning(false);
        }, 8000);
      }
    };

    checkCompatibility();
  }, []);

  if (!showWarning || !browserInfo) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm">
      <div className="bg-white border border-orange-200 rounded-lg shadow-lg p-4">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            {adBlockerDetected ? (
              <Shield className="h-5 w-5 text-orange-500" />
            ) : (
              <Globe className="h-5 w-5 text-blue-500" />
            )}
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-900">
              {browserInfo.name === 'Brave' ? 'Brave Browser Detected' : 'Ad Blocker Detected'}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {browserInfo.name === 'Brave' 
                ? 'Some external images may be blocked by Brave\'s built-in ad blocking. Our smart fallback system will automatically use local alternatives when needed.'
                : 'Some external resources may be blocked by your ad blocker. Our smart fallback system ensures all content displays properly with local alternatives.'
              }
            </p>
            <div className="mt-2 flex items-center text-xs text-green-600">
              <CheckCircle className="h-3 w-3 mr-1" />
              Fallback system active
            </div>
          </div>
          <button
            onClick={() => setShowWarning(false)}
            className="flex-shrink-0 text-gray-400 hover:text-gray-600"
          >
            <span className="sr-only">Close</span>
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrowserCompatibility;
