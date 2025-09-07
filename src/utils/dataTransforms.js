// Data transformation utilities to handle external CDN images and ad-blocker compatibility

// Local fallback images for different categories
export const localFallbacks = {
  // Tech stack icons
  react: '/images/fallbacks/react-icon.svg',
  flutter: '/images/fallbacks/flutter-icon.svg',
  nodejs: '/images/fallbacks/nodejs-icon.svg',
  firebase: '/images/fallbacks/firebase-icon.svg',
  aws: '/images/fallbacks/aws-icon.svg',
  docker: '/images/fallbacks/docker-icon.svg',
  
  // Project categories
  mobile: '/images/fallbacks/mobile-app.jpg',
  web: '/images/fallbacks/web-app.jpg',
  ecommerce: '/images/fallbacks/ecommerce.jpg',
  healthcare: '/images/fallbacks/healthcare.jpg',
  education: '/images/fallbacks/education.jpg',
  finance: '/images/fallbacks/finance.jpg',
  realestate: '/images/fallbacks/realestate.jpg',
  food: '/images/fallbacks/food.jpg',
  travel: '/images/fallbacks/travel.jpg',
  streaming: '/images/fallbacks/streaming.jpg',
  retail: '/images/fallbacks/retail.jpg',
  
  // Default fallbacks
  default: '/logos/logo_teckstack.png',
  placeholder: '/images/fallbacks/placeholder.jpg'
};

// Function to replace external CDN URLs with local fallbacks
export const replaceExternalImages = (data) => {
  if (!data) return data;
  
  // Deep clone the data to avoid mutations
  const transformedData = JSON.parse(JSON.stringify(data));
  
  // Recursively process the data structure
  const processObject = (obj) => {
    if (Array.isArray(obj)) {
      return obj.map(processObject);
    } else if (obj && typeof obj === 'object') {
      const processed = {};
      for (const [key, value] of Object.entries(obj)) {
        if (key === 'logo' || key === 'previewImage' || key === 'image') {
          processed[key] = getLocalFallback(value, obj);
        } else {
          processed[key] = processObject(value);
        }
      }
      return processed;
    }
    return obj;
  };
  
  return processObject(transformedData);
};

// Function to get appropriate local fallback based on context
export const getLocalFallback = (originalUrl, context = {}) => {
  if (!originalUrl) return localFallbacks.default;
  
  // If it's already a local URL, return as is
  if (!originalUrl.startsWith('http')) {
    return originalUrl;
  }
  
  // Map external URLs to local fallbacks based on context
  const url = originalUrl.toLowerCase();
  
  // Tech stack mapping
  if (url.includes('react')) return localFallbacks.react;
  if (url.includes('flutter')) return localFallbacks.flutter;
  if (url.includes('nodejs') || url.includes('node.js')) return localFallbacks.nodejs;
  if (url.includes('firebase')) return localFallbacks.firebase;
  if (url.includes('amazonwebservices') || url.includes('aws')) return localFallbacks.aws;
  if (url.includes('docker')) return localFallbacks.docker;
  
  // Project category mapping based on context
  if (context.category) {
    const category = context.category.toLowerCase();
    if (category.includes('mobile')) return localFallbacks.mobile;
    if (category.includes('web')) return localFallbacks.web;
    if (category.includes('ecommerce') || category.includes('e-commerce')) return localFallbacks.ecommerce;
    if (category.includes('health') || category.includes('medical')) return localFallbacks.healthcare;
    if (category.includes('education') || category.includes('learning')) return localFallbacks.education;
    if (category.includes('finance') || category.includes('fintech')) return localFallbacks.finance;
    if (category.includes('real') || category.includes('property')) return localFallbacks.realestate;
    if (category.includes('food') || category.includes('restaurant')) return localFallbacks.food;
    if (category.includes('travel') || category.includes('booking')) return localFallbacks.travel;
    if (category.includes('streaming') || category.includes('media')) return localFallbacks.streaming;
    if (category.includes('retail') || category.includes('pos')) return localFallbacks.retail;
  }
  
  // Description-based mapping
  if (context.description) {
    const desc = context.description.toLowerCase();
    if (desc.includes('mobile') || desc.includes('app')) return localFallbacks.mobile;
    if (desc.includes('ecommerce') || desc.includes('shop')) return localFallbacks.ecommerce;
    if (desc.includes('health') || desc.includes('medical')) return localFallbacks.healthcare;
    if (desc.includes('education') || desc.includes('learning')) return localFallbacks.education;
    if (desc.includes('finance') || desc.includes('banking')) return localFallbacks.finance;
    if (desc.includes('real estate') || desc.includes('property')) return localFallbacks.realestate;
    if (desc.includes('food') || desc.includes('restaurant')) return localFallbacks.food;
    if (desc.includes('travel') || desc.includes('booking')) return localFallbacks.travel;
    if (desc.includes('streaming') || desc.includes('video')) return localFallbacks.streaming;
    if (desc.includes('retail') || desc.includes('pos')) return localFallbacks.retail;
  }
  
  // Default fallback
  return localFallbacks.default;
};

// Function to create SVG icons for tech stack
export const createTechIcon = (techName) => {
  const icons = {
    'React': '⚛️',
    'Flutter': '📱',
    'Node.js': '🟢',
    'Firebase': '🔥',
    'AWS': '☁️',
    'Docker': '🐳',
    'JavaScript': '🟨',
    'TypeScript': '🔷',
    'Python': '🐍',
    'Java': '☕',
    'Swift': '🍎',
    'Kotlin': '🟣'
  };
  
  return icons[techName] || '💻';
};

// Function to generate placeholder images
export const generatePlaceholder = (width = 400, height = 300, text = 'Image') => {
  return `data:image/svg+xml;base64,${btoa(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="#6b7280" text-anchor="middle" dy=".3em">${text}</text>
    </svg>
  `)}`;
};

// Browser compatibility check
export const checkBrowserCompatibility = () => {
  const issues = [];
  
  // Check for required features
  if (!window.fetch) {
    issues.push('Fetch API not supported');
  }
  
  if (!window.Promise) {
    issues.push('Promises not supported');
  }
  
  if (!document.querySelector) {
    issues.push('QuerySelector not supported');
  }
  
  // Check for ad blocker indicators
  if (window.chrome && window.chrome.runtime && window.chrome.runtime.onConnect) {
    // Likely Chrome with extensions
  }
  
  return {
    compatible: issues.length === 0,
    issues
  };
};

// Error boundary for image loading
export const createImageErrorHandler = (fallbackUrl) => {
  return (event) => {
    console.warn('Image failed to load, using fallback:', event.target.src);
    if (event.target.src !== fallbackUrl) {
      event.target.src = fallbackUrl;
    }
  };
};
