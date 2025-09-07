// Image utility functions for handling blocked resources and fallbacks
import React, { useState, useEffect } from 'react';

// Fallback images for different categories
export const fallbackImages = {
  tech: '/logos/logo_teckstack.png',
  mobile: '/logos/logo_teckstack.png',
  web: '/logos/logo_teckstack.png',
  backend: '/logos/logo_teckstack.png',
  database: '/logos/logo_teckstack.png',
  cloud: '/logos/logo_teckstack.png',
  tools: '/logos/logo_teckstack.png',
  project: '/logos/logo_teckstack.png',
  default: '/logos/logo_teckstack.png'
};

// Custom hook for handling image loading with fallbacks
export const useImageWithFallback = (src, fallback = fallbackImages.default) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // If it's already a local fallback, don't try to load it again
    if (src && src.includes('logo_teckstack')) {
      setImgSrc(src);
      setIsLoading(false);
      setHasError(false);
      return;
    }

    const img = new Image();
    
    img.onload = () => {
      setImgSrc(src);
      setIsLoading(false);
      setHasError(false);
    };
    
    img.onerror = () => {
      console.warn(`Failed to load image: ${src}, using fallback`);
      setImgSrc(fallback);
      setIsLoading(false);
      setHasError(true);
    };
    
    // Set a timeout to handle cases where the request is blocked
    const timeout = setTimeout(() => {
      if (isLoading) {
        console.warn(`Image load timeout: ${src}, using fallback`);
        setImgSrc(fallback);
        setIsLoading(false);
        setHasError(true);
      }
    }, 8000); // 8 second timeout for external images
    
    img.src = src;
    
    return () => {
      clearTimeout(timeout);
    };
  }, [src, fallback, isLoading]);

  return { imgSrc, isLoading, hasError };
};

// Function to check if an image URL is from an external CDN
export const isExternalCDN = (url) => {
  if (!url) return false;
  
  const externalDomains = [
    'pexels.com',
    'githubusercontent.com',
    'raw.githubusercontent.com',
    'cdn.jsdelivr.net',
    'unpkg.com',
    'googleapis.com',
    'gstatic.com'
  ];
  
  return externalDomains.some(domain => url.includes(domain));
};

// Function to get appropriate fallback based on category
export const getFallbackForCategory = (category) => {
  return fallbackImages[category] || fallbackImages.default;
};

// Enhanced image component with error handling (React component)
// Note: This should be used in a .jsx file, not .js file
export const createSafeImageComponent = () => {
  return ({ 
    src, 
    alt, 
    fallback, 
    category, 
    className = '', 
    ...props 
  }) => {
    const { imgSrc, isLoading, hasError } = useImageWithFallback(
      src, 
      fallback || getFallbackForCategory(category)
    );

    return React.createElement('img', {
      src: imgSrc,
      alt: alt,
      className: `${className} ${isLoading ? 'opacity-50' : ''} ${hasError ? 'opacity-75' : ''}`,
      loading: 'lazy',
      onError: (e) => {
        if (e.target.src !== fallback) {
          e.target.src = fallback || fallbackImages.default;
        }
      },
      ...props
    });
  };
};

// Function to preload critical images
export const preloadImages = (imageUrls) => {
  imageUrls.forEach(url => {
    if (!isExternalCDN(url)) {
      const img = new Image();
      img.src = url;
    }
  });
};

// Browser detection utility
export const getBrowserInfo = () => {
  const userAgent = navigator.userAgent;
  
  if (userAgent.includes('Brave')) {
    return { name: 'Brave', hasAdBlocker: true };
  } else if (userAgent.includes('Chrome')) {
    return { name: 'Chrome', hasAdBlocker: false };
  } else if (userAgent.includes('Firefox')) {
    return { name: 'Firefox', hasAdBlocker: false };
  } else if (userAgent.includes('Safari')) {
    return { name: 'Safari', hasAdBlocker: false };
  } else if (userAgent.includes('Edge')) {
    return { name: 'Edge', hasAdBlocker: false };
  }
  
  return { name: 'Unknown', hasAdBlocker: false };
};

// Check if ad blocker is likely active
export const detectAdBlocker = () => {
  return new Promise((resolve) => {
    const testAd = document.createElement('div');
    testAd.innerHTML = '&nbsp;';
    testAd.className = 'adsbox';
    testAd.style.cssText = 'position:absolute;left:-10000px;';
    
    document.body.appendChild(testAd);
    
    setTimeout(() => {
      const isBlocked = testAd.offsetHeight === 0;
      document.body.removeChild(testAd);
      resolve(isBlocked);
    }, 100);
  });
};
