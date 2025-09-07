import React, { useState, useEffect } from 'react';
import { fallbackImages, isExternalCDN } from '../utils/imageUtils';

const SmartImage = ({ 
  src, 
  alt, 
  fallback, 
  category, 
  className = '', 
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  // Determine fallback based on category or provided fallback
  const getFallback = () => {
    if (fallback) return fallback;
    if (category && fallbackImages[category]) return fallbackImages[category];
    return fallbackImages.default;
  };

  useEffect(() => {
    const img = new Image();
    let timeout;
    
    const handleLoad = () => {
      setImgSrc(src);
      setIsLoading(false);
      setHasError(false);
      if (timeout) clearTimeout(timeout);
    };
    
    const handleError = () => {
      console.warn(`Failed to load image: ${src}, using fallback`);
      setImgSrc(getFallback());
      setIsLoading(false);
      setHasError(true);
      if (timeout) clearTimeout(timeout);
    };
    
    // Set a timeout to handle cases where the request is blocked
    timeout = setTimeout(() => {
      if (isLoading) {
        console.warn(`Image load timeout: ${src}, using fallback`);
        setImgSrc(getFallback());
        setIsLoading(false);
        setHasError(true);
      }
    }, 10000); // 10 second timeout for external images
    
    img.onload = handleLoad;
    img.onerror = handleError;
    img.src = src;
    
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [src, isLoading]);

  // Handle manual retry
  const handleRetry = () => {
    if (retryCount < 2) { // Allow up to 2 retries
      setRetryCount(prev => prev + 1);
      setIsLoading(true);
      setHasError(false);
      setImgSrc(src);
    }
  };

  return (
    <div className="relative inline-block">
      <img
        src={imgSrc}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-50' : ''} ${hasError ? 'opacity-75' : ''} transition-opacity duration-300`}
        loading="lazy"
        onError={(e) => {
          if (e.target.src !== getFallback()) {
            e.target.src = getFallback();
          }
        }}
        {...props}
      />
      
      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded">
          <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Error indicator with retry option */}
      {hasError && isExternalCDN(src) && retryCount < 2 && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded">
          <button
            onClick={handleRetry}
            className="text-xs text-gray-600 hover:text-blue-600 transition-colors"
            title="Retry loading image"
          >
            🔄 Retry
          </button>
        </div>
      )}
    </div>
  );
};

export default SmartImage;
