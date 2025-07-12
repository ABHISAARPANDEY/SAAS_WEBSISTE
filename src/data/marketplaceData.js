import { 
  ShoppingCart, 
  Smartphone, 
  CreditCard, 
  GraduationCap, 
  Utensils, 
  Store, 
  Building2, 
  Home, 
  Plane, 
  Play,
  Cloud,
  Database,
  Mail,
  MapPin,
  MessageSquare,
  Calendar,
  Users,
  BarChart3,
  Shield,
  Zap,
  Globe,
  Camera,
  Music,
  FileText,
  Search,
  Bell,
  Lock
} from 'lucide-react';

export const industries = [
  'All Industries',
  'Healthcare',
  'Finance',
  'E-commerce',
  'Education',
  'Food Delivery',
  'Retail',
  'Banking',
  'Real Estate',
  'Travel',
  'OTT'
];

export const frameworks = [
  'All Frameworks',
  'React',
  'Vue.js',
  'Angular',
  'React Native',
  'Flutter',
  'Node.js',
  'Python',
  'Laravel'
];

export const readyMadeSolutions = [
  {
    id: 'healthtrack-pro',
    name: 'HealthTrack Pro',
    description: 'Complete patient management system with appointment scheduling, medical records, and telemedicine capabilities.',
    industry: 'Healthcare',
    framework: 'React',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Building2,
    pricing: {
      basic: { price: 299, features: ['Up to 100 patients', 'Basic scheduling', 'Email support'] },
      premium: { price: 599, features: ['Up to 1000 patients', 'Advanced scheduling', 'Telemedicine', 'Priority support'] },
      superPremium: { price: 999, features: ['Unlimited patients', 'Full customization', 'API access', '24/7 support'] }
    },
    features: ['Patient Management', 'Appointment Scheduling', 'Medical Records', 'Telemedicine', 'Billing Integration'],
    techSpecs: {
      frontend: 'React 18, TypeScript, Tailwind CSS',
      backend: 'Node.js, Express, MongoDB',
      deployment: 'AWS, Docker, CI/CD',
      security: 'HIPAA Compliant, End-to-end encryption'
    }
  },
  {
    id: 'fintech-suite',
    name: 'FinTech Suite',
    description: 'Digital banking platform with payment processing, loan management, and financial analytics.',
    industry: 'Finance',
    framework: 'Angular',
    image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: CreditCard,
    pricing: {
      basic: { price: 499, features: ['Basic banking features', 'Payment processing', 'Standard support'] },
      premium: { price: 899, features: ['Advanced analytics', 'Loan management', 'Multi-currency', 'Priority support'] },
      superPremium: { price: 1499, features: ['Full banking suite', 'Custom integrations', 'Compliance tools', 'Dedicated support'] }
    },
    features: ['Digital Banking', 'Payment Processing', 'Loan Management', 'Financial Analytics', 'Compliance Tools'],
    techSpecs: {
      frontend: 'Angular 16, TypeScript, Angular Material',
      backend: 'Java Spring Boot, PostgreSQL',
      deployment: 'Azure, Kubernetes',
      security: 'PCI DSS Compliant, Multi-factor authentication'
    }
  },
  {
    id: 'ecommerce-pro',
    name: 'E-Commerce Pro',
    description: 'Full-featured online store with inventory management, payment gateway, and analytics dashboard.',
    industry: 'E-commerce',
    framework: 'React',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: ShoppingCart,
    pricing: {
      basic: { price: 199, features: ['Up to 100 products', 'Basic payment gateway', 'Email support'] },
      premium: { price: 399, features: ['Up to 1000 products', 'Advanced analytics', 'Multi-payment options', 'Priority support'] },
      superPremium: { price: 699, features: ['Unlimited products', 'Custom integrations', 'Advanced SEO', '24/7 support'] }
    },
    features: ['Product Management', 'Payment Gateway', 'Inventory Tracking', 'Analytics Dashboard', 'SEO Optimization'],
    techSpecs: {
      frontend: 'React 18, Next.js, Tailwind CSS',
      backend: 'Node.js, Express, MongoDB',
      deployment: 'Vercel, AWS S3',
      security: 'SSL encryption, Secure payment processing'
    }
  },
  {
    id: 'edulearn-platform',
    name: 'EduLearn Platform',
    description: 'Learning management system with course creation, student tracking, and assessment tools.',
    industry: 'Education',
    framework: 'Vue.js',
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: GraduationCap,
    pricing: {
      basic: { price: 149, features: ['Up to 50 students', 'Basic course tools', 'Email support'] },
      premium: { price: 299, features: ['Up to 500 students', 'Advanced assessments', 'Video streaming', 'Priority support'] },
      superPremium: { price: 499, features: ['Unlimited students', 'Custom branding', 'API access', '24/7 support'] }
    },
    features: ['Course Management', 'Student Tracking', 'Assessment Tools', 'Video Streaming', 'Progress Analytics'],
    techSpecs: {
      frontend: 'Vue.js 3, Nuxt.js, Vuetify',
      backend: 'Python Django, PostgreSQL',
      deployment: 'Google Cloud, Docker',
      security: 'FERPA compliant, Data encryption'
    }
  },
  {
    id: 'foodie-delivery',
    name: 'Foodie Delivery',
    description: 'Food delivery platform with restaurant management, order tracking, and delivery optimization.',
    industry: 'Food Delivery',
    framework: 'React Native',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Utensils,
    pricing: {
      basic: { price: 249, features: ['Up to 20 restaurants', 'Basic order management', 'Email support'] },
      premium: { price: 449, features: ['Up to 100 restaurants', 'Real-time tracking', 'Driver app', 'Priority support'] },
      superPremium: { price: 749, features: ['Unlimited restaurants', 'Advanced analytics', 'Custom integrations', '24/7 support'] }
    },
    features: ['Restaurant Management', 'Order Tracking', 'Delivery Optimization', 'Payment Integration', 'Customer App'],
    techSpecs: {
      frontend: 'React Native, Expo, Native Base',
      backend: 'Node.js, Express, MongoDB',
      deployment: 'AWS, Firebase',
      security: 'Payment security, Location encryption'
    }
  },
  {
    id: 'retail-pos',
    name: 'Retail POS',
    description: 'Point of sale system with inventory management, customer loyalty, and sales analytics.',
    industry: 'Retail',
    framework: 'Flutter',
    image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Store,
    pricing: {
      basic: { price: 99, features: ['Single location', 'Basic POS', 'Email support'] },
      premium: { price: 199, features: ['Multiple locations', 'Inventory sync', 'Customer loyalty', 'Priority support'] },
      superPremium: { price: 349, features: ['Unlimited locations', 'Advanced analytics', 'Custom integrations', '24/7 support'] }
    },
    features: ['Point of Sale', 'Inventory Management', 'Customer Loyalty', 'Sales Analytics', 'Multi-location Support'],
    techSpecs: {
      frontend: 'Flutter, Dart',
      backend: 'Firebase, Cloud Functions',
      deployment: 'Google Play, App Store',
      security: 'Offline capability, Data sync'
    }
  },
  {
    id: 'banking-core',
    name: 'Banking Core',
    description: 'Core banking system with account management, transaction processing, and regulatory compliance.',
    industry: 'Banking',
    framework: 'Java',
    image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Building2,
    pricing: {
      basic: { price: 999, features: ['Basic banking operations', 'Standard compliance', 'Business hours support'] },
      premium: { price: 1999, features: ['Advanced features', 'Multi-currency', 'Extended compliance', 'Priority support'] },
      superPremium: { price: 3999, features: ['Enterprise features', 'Custom workflows', 'Full compliance suite', 'Dedicated support'] }
    },
    features: ['Account Management', 'Transaction Processing', 'Regulatory Compliance', 'Risk Management', 'Audit Trail'],
    techSpecs: {
      frontend: 'Angular, TypeScript, PrimeNG',
      backend: 'Java Spring Boot, Oracle Database',
      deployment: 'On-premise, Private cloud',
      security: 'Banking grade security, Encryption'
    }
  },
  {
    id: 'property-manager',
    name: 'Property Manager',
    description: 'Real estate management platform with property listings, tenant management, and maintenance tracking.',
    industry: 'Real Estate',
    framework: 'React',
    image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Home,
    pricing: {
      basic: { price: 179, features: ['Up to 50 properties', 'Basic tenant management', 'Email support'] },
      premium: { price: 329, features: ['Up to 200 properties', 'Maintenance tracking', 'Financial reports', 'Priority support'] },
      superPremium: { price: 549, features: ['Unlimited properties', 'Advanced analytics', 'Custom integrations', '24/7 support'] }
    },
    features: ['Property Listings', 'Tenant Management', 'Maintenance Tracking', 'Financial Reports', 'Document Management'],
    techSpecs: {
      frontend: 'React 18, Next.js, Chakra UI',
      backend: 'Node.js, Express, PostgreSQL',
      deployment: 'Vercel, AWS RDS',
      security: 'Document encryption, Access control'
    }
  },
  {
    id: 'travel-booking',
    name: 'Travel Booking',
    description: 'Travel booking platform with flight search, hotel reservations, and itinerary management.',
    industry: 'Travel',
    framework: 'Vue.js',
    image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Plane,
    pricing: {
      basic: { price: 399, features: ['Basic booking features', 'Payment processing', 'Email support'] },
      premium: { price: 699, features: ['Advanced search', 'Multi-provider integration', 'Mobile app', 'Priority support'] },
      superPremium: { price: 1199, features: ['White-label solution', 'Custom integrations', 'Advanced analytics', '24/7 support'] }
    },
    features: ['Flight Search', 'Hotel Reservations', 'Itinerary Management', 'Payment Processing', 'Mobile App'],
    techSpecs: {
      frontend: 'Vue.js 3, Nuxt.js, Quasar',
      backend: 'Python FastAPI, PostgreSQL',
      deployment: 'Google Cloud, Kubernetes',
      security: 'PCI compliance, Data protection'
    }
  },
  {
    id: 'streaming-platform',
    name: 'Streaming Platform',
    description: 'OTT streaming platform with content management, user subscriptions, and analytics.',
    industry: 'OTT',
    framework: 'React',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Play,
    pricing: {
      basic: { price: 599, features: ['Up to 1000 users', 'Basic streaming', 'Email support'] },
      premium: { price: 1199, features: ['Up to 10000 users', 'HD streaming', 'Analytics dashboard', 'Priority support'] },
      superPremium: { price: 2199, features: ['Unlimited users', '4K streaming', 'Advanced analytics', '24/7 support'] }
    },
    features: ['Content Management', 'User Subscriptions', 'Video Streaming', 'Analytics Dashboard', 'Mobile Apps'],
    techSpecs: {
      frontend: 'React 18, Next.js, Styled Components',
      backend: 'Node.js, Express, MongoDB',
      deployment: 'AWS, CloudFront CDN',
      security: 'DRM protection, Content encryption'
    }
  }
];

export const apiCategories = [
  'All Categories',
  'Communication',
  'Payment',
  'Maps & Location',
  'Analytics',
  'Authentication',
  'Cloud Storage',
  'Social Media',
  'E-commerce',
  'Weather',
  'AI & ML'
];

export const apiKeys = [
  {
    id: 'email-service-api',
    name: 'Email Service API',
    description: 'Reliable email delivery service with templates, analytics, and bounce handling.',
    category: 'Communication',
    icon: Mail,
    image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=800',
    usageMetrics: '99.9% delivery rate, 50ms avg response time',
    pricing: {
      free: { requests: 100, price: 0, features: ['Basic email sending', 'Simple templates'] },
      basic: { requests: 10000, price: 29, features: ['Advanced templates', 'Analytics', 'Bounce handling'] },
      premium: { requests: 100000, price: 99, features: ['Priority delivery', 'Custom domains', 'Dedicated IP'] }
    },
    documentation: {
      overview: 'Send transactional and marketing emails with high deliverability rates.',
      useCases: ['User registration emails', 'Password reset', 'Marketing campaigns', 'Notifications'],
      endpoints: [
        { method: 'POST', path: '/send', description: 'Send a single email' },
        { method: 'POST', path: '/send-bulk', description: 'Send bulk emails' },
        { method: 'GET', path: '/analytics', description: 'Get email analytics' }
      ]
    }
  },
  {
    id: 'payment-gateway-api',
    name: 'Payment Gateway API',
    description: 'Secure payment processing with support for multiple payment methods and currencies.',
    category: 'Payment',
    icon: CreditCard,
    image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
    usageMetrics: 'PCI DSS compliant, 150+ currencies supported',
    pricing: {
      free: { requests: 100, price: 0, features: ['Basic payments', 'Test mode'] },
      basic: { requests: 10000, price: 49, features: ['Live payments', 'Webhooks', 'Refunds'] },
      premium: { requests: 100000, price: 149, features: ['Advanced fraud detection', 'Recurring payments', 'Multi-currency'] }
    },
    documentation: {
      overview: 'Process payments securely with comprehensive fraud protection.',
      useCases: ['E-commerce checkout', 'Subscription billing', 'Marketplace payments', 'Mobile payments'],
      endpoints: [
        { method: 'POST', path: '/charge', description: 'Process a payment' },
        { method: 'POST', path: '/refund', description: 'Refund a payment' },
        { method: 'GET', path: '/transactions', description: 'List transactions' }
      ]
    }
  },
  {
    id: 'maps-location-api',
    name: 'Maps & Location API',
    description: 'Geocoding, routing, and mapping services with real-time traffic data.',
    category: 'Maps & Location',
    icon: MapPin,
    image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800',
    usageMetrics: 'Global coverage, real-time updates',
    pricing: {
      free: { requests: 100, price: 0, features: ['Basic geocoding', 'Static maps'] },
      basic: { requests: 10000, price: 19, features: ['Dynamic maps', 'Routing', 'Traffic data'] },
      premium: { requests: 100000, price: 79, features: ['Advanced routing', 'Custom styling', 'Offline maps'] }
    },
    documentation: {
      overview: 'Comprehensive mapping and location services for web and mobile apps.',
      useCases: ['Store locators', 'Delivery tracking', 'Route optimization', 'Location-based services'],
      endpoints: [
        { method: 'GET', path: '/geocode', description: 'Convert addresses to coordinates' },
        { method: 'GET', path: '/route', description: 'Calculate routes between points' },
        { method: 'GET', path: '/places', description: 'Search for places' }
      ]
    }
  },
  {
    id: 'analytics-api',
    name: 'Analytics API',
    description: 'Real-time analytics and reporting with custom dashboards and insights.',
    category: 'Analytics',
    icon: BarChart3,
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    usageMetrics: 'Real-time processing, 99.9% uptime',
    pricing: {
      free: { requests: 100, price: 0, features: ['Basic tracking', 'Simple reports'] },
      basic: { requests: 10000, price: 39, features: ['Custom events', 'Dashboards', 'Exports'] },
      premium: { requests: 100000, price: 129, features: ['Advanced segmentation', 'Real-time alerts', 'API access'] }
    },
    documentation: {
      overview: 'Track user behavior and generate actionable insights for your applications.',
      useCases: ['Website analytics', 'App performance monitoring', 'User behavior tracking', 'A/B testing'],
      endpoints: [
        { method: 'POST', path: '/track', description: 'Track events' },
        { method: 'GET', path: '/reports', description: 'Generate reports' },
        { method: 'GET', path: '/insights', description: 'Get AI-powered insights' }
      ]
    }
  },
  {
    id: 'auth-service-api',
    name: 'Authentication API',
    description: 'Secure user authentication with OAuth, SSO, and multi-factor authentication.',
    category: 'Authentication',
    icon: Shield,
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    usageMetrics: 'Enterprise-grade security, 99.99% uptime',
    pricing: {
      free: { requests: 100, price: 0, features: ['Basic auth', 'Email verification'] },
      basic: { requests: 10000, price: 25, features: ['OAuth providers', 'Password policies', 'Session management'] },
      premium: { requests: 100000, price: 89, features: ['SSO integration', 'MFA', 'Advanced security'] }
    },
    documentation: {
      overview: 'Comprehensive authentication and authorization services for modern applications.',
      useCases: ['User registration/login', 'Social authentication', 'Enterprise SSO', 'API security'],
      endpoints: [
        { method: 'POST', path: '/register', description: 'Register new users' },
        { method: 'POST', path: '/login', description: 'Authenticate users' },
        { method: 'POST', path: '/verify', description: 'Verify tokens' }
      ]
    }
  },
  {
    id: 'cloud-storage-api',
    name: 'Cloud Storage API',
    description: 'Scalable file storage with CDN delivery, image processing, and backup solutions.',
    category: 'Cloud Storage',
    icon: Cloud,
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    usageMetrics: 'Global CDN, 99.9% availability',
    pricing: {
      free: { requests: 100, price: 0, features: ['1GB storage', 'Basic upload'] },
      basic: { requests: 10000, price: 15, features: ['100GB storage', 'CDN delivery', 'Image processing'] },
      premium: { requests: 100000, price: 59, features: ['1TB storage', 'Advanced processing', 'Backup solutions'] }
    },
    documentation: {
      overview: 'Reliable cloud storage with global content delivery and media processing.',
      useCases: ['File uploads', 'Image galleries', 'Video streaming', 'Document storage'],
      endpoints: [
        { method: 'POST', path: '/upload', description: 'Upload files' },
        { method: 'GET', path: '/files', description: 'List files' },
        { method: 'DELETE', path: '/files/:id', description: 'Delete files' }
      ]
    }
  },
  {
    id: 'sms-api',
    name: 'SMS API',
    description: 'Global SMS delivery with two-way messaging, delivery reports, and number verification.',
    category: 'Communication',
    icon: MessageSquare,
    image: 'https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=800',
    usageMetrics: '200+ countries, 99% delivery rate',
    pricing: {
      free: { requests: 100, price: 0, features: ['Basic SMS', 'Delivery reports'] },
      basic: { requests: 10000, price: 35, features: ['Two-way messaging', 'Number verification', 'Templates'] },
      premium: { requests: 100000, price: 119, features: ['Premium routes', 'Advanced analytics', 'Dedicated numbers'] }
    },
    documentation: {
      overview: 'Reliable SMS delivery service with global reach and advanced features.',
      useCases: ['OTP verification', 'Marketing campaigns', 'Notifications', 'Two-factor authentication'],
      endpoints: [
        { method: 'POST', path: '/send', description: 'Send SMS messages' },
        { method: 'GET', path: '/status', description: 'Check delivery status' },
        { method: 'POST', path: '/verify', description: 'Verify phone numbers' }
      ]
    }
  },
  {
    id: 'calendar-api',
    name: 'Calendar API',
    description: 'Calendar integration with scheduling, event management, and availability checking.',
    category: 'Communication',
    icon: Calendar,
    image: 'https://images.pexels.com/photos/1020323/pexels-photo-1020323.jpeg?auto=compress&cs=tinysrgb&w=800',
    usageMetrics: 'Multi-provider sync, real-time updates',
    pricing: {
      free: { requests: 100, price: 0, features: ['Basic events', 'Simple scheduling'] },
      basic: { requests: 10000, price: 29, features: ['Multi-calendar sync', 'Availability checking', 'Reminders'] },
      premium: { requests: 100000, price: 99, features: ['Advanced scheduling', 'Team calendars', 'Custom integrations'] }
    },
    documentation: {
      overview: 'Comprehensive calendar management with multi-provider synchronization.',
      useCases: ['Appointment booking', 'Event management', 'Team scheduling', 'Availability systems'],
      endpoints: [
        { method: 'POST', path: '/events', description: 'Create events' },
        { method: 'GET', path: '/availability', description: 'Check availability' },
        { method: 'PUT', path: '/events/:id', description: 'Update events' }
      ]
    }
  },
  {
    id: 'user-management-api',
    name: 'User Management API',
    description: 'Complete user lifecycle management with profiles, permissions, and team collaboration.',
    category: 'Authentication',
    icon: Users,
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    usageMetrics: 'GDPR compliant, role-based access',
    pricing: {
      free: { requests: 100, price: 0, features: ['Basic user profiles', 'Simple permissions'] },
      basic: { requests: 10000, price: 33, features: ['Advanced profiles', 'Role management', 'Team features'] },
      premium: { requests: 100000, price: 109, features: ['Enterprise features', 'Custom fields', 'Advanced permissions'] }
    },
    documentation: {
      overview: 'Comprehensive user management system with advanced permission controls.',
      useCases: ['User onboarding', 'Team management', 'Permission systems', 'Profile management'],
      endpoints: [
        { method: 'POST', path: '/users', description: 'Create users' },
        { method: 'GET', path: '/users', description: 'List users' },
        { method: 'PUT', path: '/users/:id/permissions', description: 'Update permissions' }
      ]
    }
  },
  {
    id: 'notification-api',
    name: 'Notification API',
    description: 'Multi-channel notifications with push, email, SMS, and in-app messaging.',
    category: 'Communication',
    icon: Bell,
    image: 'https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=800',
    usageMetrics: 'Multi-channel delivery, smart routing',
    pricing: {
      free: { requests: 100, price: 0, features: ['Basic notifications', 'Email only'] },
      basic: { requests: 10000, price: 27, features: ['Multi-channel', 'Templates', 'Scheduling'] },
      premium: { requests: 100000, price: 97, features: ['Smart routing', 'A/B testing', 'Advanced analytics'] }
    },
    documentation: {
      overview: 'Unified notification system supporting multiple delivery channels.',
      useCases: ['User notifications', 'Marketing campaigns', 'System alerts', 'Transactional messages'],
      endpoints: [
        { method: 'POST', path: '/notify', description: 'Send notifications' },
        { method: 'GET', path: '/templates', description: 'Manage templates' },
        { method: 'POST', path: '/schedule', description: 'Schedule notifications' }
      ]
    }
  },
  {
    id: 'search-api',
    name: 'Search API',
    description: 'Powerful search engine with full-text search, filters, and AI-powered recommendations.',
    category: 'AI & ML',
    icon: Search,
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    usageMetrics: 'Sub-second response, 99.9% accuracy',
    pricing: {
      free: { requests: 100, price: 0, features: ['Basic search', 'Simple filters'] },
      basic: { requests: 10000, price: 41, features: ['Full-text search', 'Advanced filters', 'Autocomplete'] },
      premium: { requests: 100000, price: 139, features: ['AI recommendations', 'Analytics', 'Custom ranking'] }
    },
    documentation: {
      overview: 'Advanced search capabilities with machine learning-powered recommendations.',
      useCases: ['E-commerce search', 'Content discovery', 'Document search', 'Product recommendations'],
      endpoints: [
        { method: 'GET', path: '/search', description: 'Perform searches' },
        { method: 'POST', path: '/index', description: 'Index content' },
        { method: 'GET', path: '/suggestions', description: 'Get search suggestions' }
      ]
    }
  },
  {
    id: 'image-processing-api',
    name: 'Image Processing API',
    description: 'AI-powered image processing with resizing, optimization, and content recognition.',
    category: 'AI & ML',
    icon: Camera,
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    usageMetrics: 'AI-powered, 50+ formats supported',
    pricing: {
      free: { requests: 100, price: 0, features: ['Basic resizing', 'Format conversion'] },
      basic: { requests: 10000, price: 37, features: ['Advanced processing', 'Optimization', 'Watermarks'] },
      premium: { requests: 100000, price: 127, features: ['AI recognition', 'Batch processing', 'Custom filters'] }
    },
    documentation: {
      overview: 'Comprehensive image processing with AI-powered content recognition.',
      useCases: ['Image optimization', 'Content moderation', 'Photo editing', 'Visual search'],
      endpoints: [
        { method: 'POST', path: '/process', description: 'Process images' },
        { method: 'POST', path: '/recognize', description: 'Recognize image content' },
        { method: 'POST', path: '/optimize', description: 'Optimize images' }
      ]
    }
  },
  {
    id: 'audio-api',
    name: 'Audio Processing API',
    description: 'Audio processing with transcription, translation, and music analysis capabilities.',
    category: 'AI & ML',
    icon: Music,
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
    usageMetrics: '95% transcription accuracy, 40+ languages',
    pricing: {
      free: { requests: 100, price: 0, features: ['Basic transcription', '5 minutes/month'] },
      basic: { requests: 10000, price: 45, features: ['Advanced transcription', 'Translation', '100 hours/month'] },
      premium: { requests: 100000, price: 155, features: ['Real-time processing', 'Music analysis', 'Unlimited hours'] }
    },
    documentation: {
      overview: 'Advanced audio processing with speech recognition and music analysis.',
      useCases: ['Podcast transcription', 'Voice commands', 'Music analysis', 'Audio translation'],
      endpoints: [
        { method: 'POST', path: '/transcribe', description: 'Transcribe audio' },
        { method: 'POST', path: '/translate', description: 'Translate audio' },
        { method: 'POST', path: '/analyze', description: 'Analyze music' }
      ]
    }
  },
  {
    id: 'document-api',
    name: 'Document Processing API',
    description: 'Document processing with OCR, data extraction, and format conversion.',
    category: 'AI & ML',
    icon: FileText,
    image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=800',
    usageMetrics: '99% OCR accuracy, 50+ document types',
    pricing: {
      free: { requests: 100, price: 0, features: ['Basic OCR', 'Text extraction'] },
      basic: { requests: 10000, price: 43, features: ['Advanced OCR', 'Data extraction', 'Format conversion'] },
      premium: { requests: 100000, price: 143, features: ['AI classification', 'Batch processing', 'Custom models'] }
    },
    documentation: {
      overview: 'Intelligent document processing with OCR and data extraction capabilities.',
      useCases: ['Invoice processing', 'Form digitization', 'Document classification', 'Data extraction'],
      endpoints: [
        { method: 'POST', path: '/extract', description: 'Extract text from documents' },
        { method: 'POST', path: '/classify', description: 'Classify documents' },
        { method: 'POST', path: '/convert', description: 'Convert document formats' }
      ]
    }
  },
  {
    id: 'encryption-api',
    name: 'Encryption API',
    description: 'Enterprise-grade encryption and security services with key management.',
    category: 'Authentication',
    icon: Lock,
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    usageMetrics: 'Military-grade encryption, FIPS 140-2 certified',
    pricing: {
      free: { requests: 100, price: 0, features: ['Basic encryption', 'Simple key management'] },
      basic: { requests: 10000, price: 51, features: ['Advanced encryption', 'Key rotation', 'Audit logs'] },
      premium: { requests: 100000, price: 171, features: ['HSM integration', 'Compliance tools', 'Custom policies'] }
    },
    documentation: {
      overview: 'Enterprise-grade encryption services with comprehensive key management.',
      useCases: ['Data encryption', 'Secure communications', 'Compliance requirements', 'Key management'],
      endpoints: [
        { method: 'POST', path: '/encrypt', description: 'Encrypt data' },
        { method: 'POST', path: '/decrypt', description: 'Decrypt data' },
        { method: 'POST', path: '/keys', description: 'Manage encryption keys' }
      ]
    }
  },
  {
    id: 'workflow-api',
    name: 'Workflow Automation API',
    description: 'Automate business processes with visual workflow builder and integrations.',
    category: 'Analytics',
    icon: Zap,
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    usageMetrics: '1000+ integrations, visual workflow builder',
    pricing: {
      free: { requests: 100, price: 0, features: ['Basic workflows', '5 steps max'] },
      basic: { requests: 10000, price: 47, features: ['Advanced workflows', 'Integrations', 'Scheduling'] },
      premium: { requests: 100000, price: 157, features: ['Enterprise workflows', 'Custom connectors', 'Advanced analytics'] }
    },
    documentation: {
      overview: 'Powerful workflow automation with extensive third-party integrations.',
      useCases: ['Business process automation', 'Data synchronization', 'Approval workflows', 'Integration pipelines'],
      endpoints: [
        { method: 'POST', path: '/workflows', description: 'Create workflows' },
        { method: 'POST', path: '/execute', description: 'Execute workflows' },
        { method: 'GET', path: '/status', description: 'Check workflow status' }
      ]
    }
  },
  {
    id: 'social-media-api',
    name: 'Social Media API',
    description: 'Social media management with posting, analytics, and engagement tracking.',
    category: 'Social Media',
    icon: Users,
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    usageMetrics: '20+ platforms, real-time analytics',
    pricing: {
      free: { requests: 100, price: 0, features: ['Basic posting', '3 platforms'] },
      basic: { requests: 10000, price: 39, features: ['Multi-platform posting', 'Analytics', 'Scheduling'] },
      premium: { requests: 100000, price: 129, features: ['Advanced analytics', 'Team collaboration', 'Custom reports'] }
    },
    documentation: {
      overview: 'Comprehensive social media management across multiple platforms.',
      useCases: ['Social media posting', 'Content scheduling', 'Engagement tracking', 'Social analytics'],
      endpoints: [
        { method: 'POST', path: '/post', description: 'Create social media posts' },
        { method: 'GET', path: '/analytics', description: 'Get social media analytics' },
        { method: 'POST', path: '/schedule', description: 'Schedule posts' }
      ]
    }
  },
  {
    id: 'weather-api',
    name: 'Weather API',
    description: 'Accurate weather data with forecasts, historical data, and severe weather alerts.',
    category: 'Weather',
    icon: Cloud,
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    usageMetrics: 'Global coverage, hourly updates',
    pricing: {
      free: { requests: 100, price: 0, features: ['Current weather', 'Basic forecasts'] },
      basic: { requests: 10000, price: 21, features: ['Extended forecasts', 'Historical data', 'Weather maps'] },
      premium: { requests: 100000, price: 71, features: ['Severe weather alerts', 'Marine data', 'Agricultural data'] }
    },
    documentation: {
      overview: 'Comprehensive weather data service with global coverage and detailed forecasts.',
      useCases: ['Weather apps', 'Agricultural planning', 'Event planning', 'Travel applications'],
      endpoints: [
        { method: 'GET', path: '/current', description: 'Get current weather' },
        { method: 'GET', path: '/forecast', description: 'Get weather forecasts' },
        { method: 'GET', path: '/alerts', description: 'Get weather alerts' }
      ]
    }
  },
  {
    id: 'ecommerce-api',
    name: 'E-commerce API',
    description: 'Complete e-commerce solution with inventory, orders, and payment processing.',
    category: 'E-commerce',
    icon: ShoppingCart,
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    usageMetrics: 'Multi-currency, global shipping',
    pricing: {
      free: { requests: 100, price: 0, features: ['Basic product management', 'Simple orders'] },
      basic: { requests: 10000, price: 55, features: ['Advanced inventory', 'Payment processing', 'Shipping integration'] },
      premium: { requests: 100000, price: 185, features: ['Multi-store management', 'Advanced analytics', 'Custom integrations'] }
    },
    documentation: {
      overview: 'Full-featured e-commerce API with comprehensive business management tools.',
      useCases: ['Online stores', 'Marketplace platforms', 'Inventory management', 'Order processing'],
      endpoints: [
        { method: 'POST', path: '/products', description: 'Manage products' },
        { method: 'POST', path: '/orders', description: 'Process orders' },
        { method: 'GET', path: '/inventory', description: 'Check inventory' }
      ]
    }
  }
];

export const getProductById = (id) => {
  return readyMadeSolutions.find(product => product.id === id);
};

export const getApiById = (id) => {
  return apiKeys.find(api => api.id === id);
};