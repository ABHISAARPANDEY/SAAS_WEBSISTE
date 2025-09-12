import { 
  Smartphone, 
  Globe, 
  Zap, 
  Code, 
  Lightbulb, 
  Shield, 
  TrendingUp, 
  Bot,
  Database,
  Cloud,
  Server,
  Cpu,
  Monitor,
  Layers,
  GitBranch,
  Container,
  BarChart3
} from 'lucide-react';

export const servicesData = {
  'mobile-app': {
    id: 'mobile-app',
    title: 'Mobile App Development',
    icon: Smartphone,
    gradient: 'from-pink-500 to-rose-500',
    description: `Transform your business with cutting-edge mobile applications that deliver exceptional user experiences across iOS and Android platforms. Our expert team combines innovative design with robust functionality to create apps that not only look stunning but also drive real business results.

We specialize in both native and cross-platform development, ensuring your app performs flawlessly while reaching the widest possible audience. From concept to deployment, we handle every aspect of mobile app development with precision and creativity.`,
    
    techStack: [
      { name: 'React Native', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', category: 'Mobile' },
      { name: 'Flutter', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg', category: 'Mobile' },
      { name: 'React', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', category: 'Web' },
      { name: 'Next.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg', category: 'Web' },
      { name: 'Vue.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg', category: 'Web' },
      { name: 'Swift', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg', category: 'iOS' },
      { name: 'Kotlin', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg', category: 'Android' },
      { name: 'Node.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg', category: 'Backend' },
      { name: 'Firebase', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg', category: 'Database' },
      { name: 'AWS', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg', category: 'Cloud' },
      { name: 'Docker', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg', category: 'Tools' }
    ],

    methodology: [
      {
        phase: 'Discovery & Planning',
        steps: [
          'Market research and competitor analysis',
          'User persona development',
          'Feature prioritization and roadmap',
          'Technical architecture planning'
        ]
      },
      {
        phase: 'Design Phase',
        steps: [
          'User experience wireframing',
          'Interactive prototype development',
          'Visual design and branding',
          'Usability testing and refinement'
        ]
      },
      {
        phase: 'Development',
        steps: [
          'Agile development sprints',
          'Cross-platform optimization',
          'API integration and backend setup',
          'Continuous testing and quality assurance'
        ]
      },
      {
        phase: 'Deployment & Support',
        steps: [
          'App store optimization',
          'Beta testing and feedback integration',
          'Production deployment',
          'Ongoing maintenance and updates'
        ]
      }
    ],

    industrySolutions: [
      {
        sector: 'E-commerce',
        websiteName: 'ShopFlow',
        previewImage: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Revolutionary shopping experience with AR try-on features',
        techUsed: ['React Native', 'Node.js', 'MongoDB', 'AWS']
      },
      {
        sector: 'Healthcare',
        websiteName: 'MediConnect',
        previewImage: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Telemedicine platform connecting patients with doctors',
        techUsed: ['Flutter', 'Firebase', 'WebRTC', 'Google Cloud']
      },
      {
        sector: 'Finance',
        websiteName: 'CryptoWallet',
        previewImage: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Secure cryptocurrency wallet with trading features',
        techUsed: ['Swift', 'Kotlin', 'Blockchain', 'AWS']
      },
      {
        sector: 'Education',
        websiteName: 'LearnHub',
        previewImage: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Interactive learning platform with gamification',
        techUsed: ['React Native', 'GraphQL', 'PostgreSQL', 'Azure']
      },
      {
        sector: 'Food & Delivery',
        websiteName: 'QuickBite',
        previewImage: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Food delivery app with real-time tracking',
        techUsed: ['Flutter', 'Node.js', 'Redis', 'Google Maps API']
      },
      {
        sector: 'Fitness',
        websiteName: 'FitTracker',
        previewImage: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Personal fitness tracking with AI coaching',
        techUsed: ['Swift', 'Python', 'TensorFlow', 'HealthKit']
      },
      {
        sector: 'Travel',
        websiteName: 'WanderGuide',
        previewImage: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Smart travel companion with offline maps',
        techUsed: ['React Native', 'MapBox', 'SQLite', 'AWS']
      },
      {
        sector: 'Social Media',
        websiteName: 'ConnectPro',
        previewImage: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Professional networking platform for creatives',
        techUsed: ['Flutter', 'Firebase', 'Cloud Functions', 'ML Kit']
      },
      {
        sector: 'Real Estate',
        websiteName: 'PropertyVR',
        previewImage: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Virtual reality property viewing platform',
        techUsed: ['Unity', 'ARKit', 'Node.js', 'MongoDB']
      },
      {
        sector: 'Entertainment',
        websiteName: 'StreamVibe',
        previewImage: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Music streaming with social features',
        techUsed: ['React Native', 'WebRTC', 'Redis', 'CDN']
      }
    ]
  },

  'web-development': {
    id: 'web-development',
    title: 'Web Development',
    icon: Globe,
    gradient: 'from-blue-500 to-cyan-500',
    description: `Create powerful, scalable web applications that drive business growth and deliver exceptional user experiences. Our full-stack development expertise spans modern frameworks, cloud technologies, and cutting-edge design principles to build web solutions that perform flawlessly across all devices and platforms.

From simple landing pages to complex enterprise applications, we craft digital experiences that not only look stunning but also convert visitors into customers and streamline your business operations.`,
    
    techStack: [
      { name: 'React', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', category: 'Frontend' },
      { name: 'Vue.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg', category: 'Frontend' },
      { name: 'Angular', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angular/angular-original.svg', category: 'Frontend' },
      { name: 'JavaScript', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', category: 'Frontend' },
      { name: 'Node.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg', category: 'Backend' },
      { name: 'Python', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', category: 'Backend' },
      { name: 'PostgreSQL', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg', category: 'Database' },
      { name: 'AWS', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg', category: 'Cloud' }
    ],

    methodology: [
      {
        phase: 'Discovery & Planning',
        steps: [
          'Business requirements analysis',
          'User journey mapping',
          'Technical architecture design',
          'Performance and scalability planning'
        ]
      },
      {
        phase: 'Design Phase',
        steps: [
          'Responsive wireframe creation',
          'UI/UX design system development',
          'Interactive prototype building',
          'Accessibility compliance review'
        ]
      },
      {
        phase: 'Development',
        steps: [
          'Frontend and backend development',
          'API integration and optimization',
          'Database design and implementation',
          'Security implementation and testing'
        ]
      },
      {
        phase: 'Deployment & Support',
        steps: [
          'Performance optimization',
          'Cross-browser testing',
          'Production deployment',
          'Monitoring and maintenance'
        ]
      }
    ],

    industrySolutions: [
      {
        sector: 'E-commerce',
        websiteName: 'TechMart',
        previewImage: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
        description: 'Modern e-commerce platform with advanced filtering',
        techUsed: ['React', 'Node.js', 'MongoDB', 'Stripe']
      },
      {
        sector: 'SaaS',
        websiteName: 'DataFlow',
        previewImage: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Analytics dashboard with real-time data visualization',
        techUsed: ['Vue.js', 'Python', 'PostgreSQL', 'D3.js']
      },
      {
        sector: 'Healthcare',
        websiteName: 'HealthPortal',
        previewImage: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Patient management system with appointment scheduling',
        techUsed: ['Angular', 'Java', 'MySQL', 'AWS']
      },
      {
        sector: 'Education',
        websiteName: 'EduPlatform',
        previewImage: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Online learning management system',
        techUsed: ['React', 'Node.js', 'MongoDB', 'WebRTC']
      },
      {
        sector: 'Finance',
        websiteName: 'InvestPro',
        previewImage: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Investment portfolio management platform',
        techUsed: ['Vue.js', 'Python', 'Redis', 'Chart.js']
      },
      {
        sector: 'Real Estate',
        websiteName: 'PropertyHub',
        previewImage: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Property listing and management system',
        techUsed: ['React', 'Node.js', 'PostgreSQL', 'MapBox']
      },
      {
        sector: 'Restaurant',
        websiteName: 'DineReserve',
        previewImage: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Restaurant reservation and ordering system',
        techUsed: ['Angular', 'Node.js', 'MongoDB', 'Socket.io']
      },
      {
        sector: 'Manufacturing',
        websiteName: 'FactoryOps',
        previewImage: 'https://images.pexels.com/photos/236722/pexels-photo-236722.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Industrial IoT monitoring dashboard',
        techUsed: ['React', 'Python', 'InfluxDB', 'Grafana']
      },
      {
        sector: 'Non-Profit',
        websiteName: 'CharityConnect',
        previewImage: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Donation platform with impact tracking',
        techUsed: ['Vue.js', 'Node.js', 'PostgreSQL', 'PayPal API']
      },
      {
        sector: 'Media',
        websiteName: 'NewsFlow',
        previewImage: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Content management system for news organizations',
        techUsed: ['React', 'GraphQL', 'MongoDB', 'Elasticsearch']
      }
    ]
  },

  'process-automation': {
    id: 'process-automation',
    title: 'Process Automation',
    icon: Zap,
    gradient: 'from-yellow-500 to-orange-500',
    description: `Revolutionize your business operations with intelligent automation solutions that eliminate manual tasks, reduce errors, and dramatically increase efficiency. Our automation expertise spans workflow optimization, robotic process automation (RPA), and AI-powered decision making systems.

Transform repetitive, time-consuming processes into streamlined, automated workflows that free up your team to focus on high-value strategic activities while ensuring consistent, error-free execution of routine operations.`,
    
    techStack: [
      { name: 'Python', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', category: 'Automation' },
      { name: 'Zapier', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/zapier/zapier-original.svg', category: 'Integration' },
      { name: 'Power Automate', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoft/microsoft-original.svg', category: 'Microsoft' },
      { name: 'Selenium', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/selenium/selenium-original.svg', category: 'Testing' },
      { name: 'Node.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg', category: 'Backend' },
      { name: 'MongoDB', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg', category: 'Database' },
      { name: 'AWS Lambda', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg', category: 'Serverless' },
      { name: 'Docker', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg', category: 'Containerization' }
    ],

    methodology: [
      {
        phase: 'Process Analysis',
        steps: [
          'Current workflow documentation',
          'Bottleneck identification',
          'ROI calculation and prioritization',
          'Automation feasibility assessment'
        ]
      },
      {
        phase: 'Solution Design',
        steps: [
          'Automation architecture planning',
          'Integration point mapping',
          'Error handling strategy',
          'Security and compliance review'
        ]
      },
      {
        phase: 'Implementation',
        steps: [
          'Automated workflow development',
          'System integration and testing',
          'User training and documentation',
          'Gradual rollout and monitoring'
        ]
      },
      {
        phase: 'Optimization',
        steps: [
          'Performance monitoring',
          'Continuous improvement',
          'Scaling and expansion',
          'Maintenance and support'
        ]
      }
    ],

    industrySolutions: [
      {
        sector: 'Finance',
        websiteName: 'AutoFinance',
        previewImage: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Automated invoice processing and payment workflows',
        techUsed: ['Python', 'OCR', 'SAP API', 'Power BI']
      },
      {
        sector: 'HR Management',
        websiteName: 'TalentFlow',
        previewImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Recruitment and onboarding automation system',
        techUsed: ['Zapier', 'ATS Integration', 'Slack API', 'DocuSign']
      },
      {
        sector: 'E-commerce',
        websiteName: 'OrderSync',
        previewImage: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Inventory management and order fulfillment automation',
        techUsed: ['Node.js', 'Shopify API', 'WMS Integration', 'AWS']
      },
      {
        sector: 'Manufacturing',
        websiteName: 'ProdOptimize',
        previewImage: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Production line monitoring and quality control',
        techUsed: ['Python', 'IoT Sensors', 'Machine Learning', 'InfluxDB']
      },
      {
        sector: 'Healthcare',
        websiteName: 'MedAutomate',
        previewImage: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Patient data processing and appointment scheduling',
        techUsed: ['Power Automate', 'FHIR API', 'Azure', 'Twilio']
      },
      {
        sector: 'Marketing',
        websiteName: 'CampaignBot',
        previewImage: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Multi-channel marketing campaign automation',
        techUsed: ['Zapier', 'HubSpot API', 'Google Ads API', 'Analytics']
      },
      {
        sector: 'Legal',
        websiteName: 'LegalFlow',
        previewImage: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Document review and contract management automation',
        techUsed: ['Python', 'NLP', 'Document AI', 'SharePoint']
      },
      {
        sector: 'Real Estate',
        websiteName: 'PropertyAuto',
        previewImage: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Lead qualification and follow-up automation',
        techUsed: ['Zapier', 'CRM Integration', 'Email Marketing', 'SMS API']
      },
      {
        sector: 'Education',
        websiteName: 'EduAutomate',
        previewImage: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Student enrollment and grading automation',
        techUsed: ['Python', 'LMS API', 'Google Workspace', 'Canvas']
      },
      {
        sector: 'Logistics',
        websiteName: 'ShipTrack',
        previewImage: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Shipping and delivery tracking automation',
        techUsed: ['Node.js', 'Carrier APIs', 'GPS Tracking', 'Notifications']
      }
    ]
  },

  'custom-software': {
    id: 'custom-software',
    title: 'Custom Software Solutions',
    icon: Code,
    gradient: 'from-purple-500 to-indigo-500',
    description: `Build bespoke software solutions tailored precisely to your unique business requirements and operational challenges. Our custom development approach ensures that every feature, workflow, and integration is designed specifically for your organization's needs, providing competitive advantages that off-the-shelf solutions simply cannot deliver.

From enterprise-grade applications to specialized tools, we create software that grows with your business and adapts to changing market demands while maintaining the highest standards of security, performance, and user experience.`,
    
    techStack: [
      { name: 'React', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', category: 'Frontend' },
      { name: 'Angular', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angular/angular-original.svg', category: 'Frontend' },
      { name: 'Vue.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg', category: 'Frontend' },
      { name: 'Node.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg', category: 'Backend' },
      { name: 'Python', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', category: 'Backend' },
      { name: 'Java', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg', category: 'Backend' },
      { name: '.NET', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg', category: 'Backend' },
      { name: 'PostgreSQL', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg', category: 'Database' }
    ],

    methodology: [
      {
        phase: 'Requirements Engineering',
        steps: [
          'Stakeholder interviews and workshops',
          'Business process mapping',
          'Functional and non-functional requirements',
          'Technical feasibility analysis'
        ]
      },
      {
        phase: 'Architecture Design',
        steps: [
          'System architecture planning',
          'Database design and modeling',
          'API specification and design',
          'Security architecture implementation'
        ]
      },
      {
        phase: 'Agile Development',
        steps: [
          'Sprint planning and execution',
          'Continuous integration and testing',
          'Regular stakeholder demos',
          'Iterative feedback incorporation'
        ]
      },
      {
        phase: 'Deployment & Evolution',
        steps: [
          'Production deployment strategy',
          'User training and documentation',
          'Performance monitoring setup',
          'Ongoing feature development'
        ]
      }
    ],

    industrySolutions: [
      {
        sector: 'Enterprise',
        websiteName: 'CorpSuite',
        previewImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Comprehensive business management platform',
        techUsed: ['Angular', 'Java', 'PostgreSQL', 'Microservices']
      },
      {
        sector: 'Healthcare',
        websiteName: 'MedSystem',
        previewImage: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Electronic health records management system',
        techUsed: ['React', '.NET', 'SQL Server', 'HL7 FHIR']
      },
      {
        sector: 'Manufacturing',
        websiteName: 'FactoryMgmt',
        previewImage: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Production planning and resource management',
        techUsed: ['Vue.js', 'Python', 'MongoDB', 'IoT Integration']
      },
      {
        sector: 'Financial Services',
        websiteName: 'FinanceCore',
        previewImage: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Risk management and compliance platform',
        techUsed: ['Angular', 'Java', 'Oracle', 'Blockchain']
      },
      {
        sector: 'Education',
        websiteName: 'EduManage',
        previewImage: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Student information and learning management',
        techUsed: ['React', 'Node.js', 'PostgreSQL', 'Redis']
      },
      {
        sector: 'Logistics',
        websiteName: 'LogiTrack',
        previewImage: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Supply chain and inventory optimization',
        techUsed: ['Vue.js', 'Python', 'MySQL', 'Machine Learning']
      },
      {
        sector: 'Retail',
        websiteName: 'RetailPro',
        previewImage: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Point of sale and customer management system',
        techUsed: ['React', 'Node.js', 'MongoDB', 'Payment APIs']
      },
      {
        sector: 'Government',
        websiteName: 'GovPortal',
        previewImage: 'https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Citizen services and document management',
        techUsed: ['Angular', '.NET', 'SQL Server', 'Azure']
      },
      {
        sector: 'Non-Profit',
        websiteName: 'ImpactTracker',
        previewImage: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Donor management and impact measurement',
        techUsed: ['React', 'Python', 'PostgreSQL', 'Analytics']
      },
      {
        sector: 'Energy',
        websiteName: 'EnergyOps',
        previewImage: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Smart grid monitoring and optimization',
        techUsed: ['Vue.js', 'Python', 'InfluxDB', 'IoT Sensors']
      }
    ]
  },

  'product-development': {
    id: 'product-development',
    title: 'Product Development',
    icon: Lightbulb,
    gradient: 'from-green-500 to-emerald-500',
    description: `Transform innovative ideas into market-ready products through our comprehensive end-to-end development process. We combine strategic thinking, user-centered design, and cutting-edge technology to create products that not only meet market demands but exceed user expectations and drive business growth.

Our product development expertise spans ideation, market validation, MVP development, and full-scale product launch, ensuring your vision becomes a successful, scalable reality in the competitive digital marketplace.`,
    
    techStack: [
      { name: 'React', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', category: 'Frontend' },
      { name: 'React Native', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', category: 'Mobile' },
      { name: 'Node.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg', category: 'Backend' },
      { name: 'Python', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', category: 'Backend' },
      { name: 'PostgreSQL', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg', category: 'Database' },
      { name: 'MongoDB', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg', category: 'Database' },
      { name: 'AWS', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg', category: 'Cloud' },
      { name: 'Docker', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg', category: 'DevOps' }
    ],

    methodology: [
      {
        phase: 'Discovery & Validation',
        steps: [
          'Market research and competitive analysis',
          'User interviews and persona development',
          'Problem-solution fit validation',
          'Technical feasibility assessment'
        ]
      },
      {
        phase: 'MVP Development',
        steps: [
          'Core feature prioritization',
          'Rapid prototyping and testing',
          'User feedback integration',
          'Iterative development cycles'
        ]
      },
      {
        phase: 'Product Scaling',
        steps: [
          'Feature expansion and optimization',
          'Performance and security enhancements',
          'User acquisition strategy implementation',
          'Analytics and monitoring setup'
        ]
      },
      {
        phase: 'Market Launch',
        steps: [
          'Go-to-market strategy execution',
          'User onboarding optimization',
          'Continuous product improvement',
          'Growth metrics tracking'
        ]
      }
    ],

    industrySolutions: [
      {
        sector: 'SaaS',
        websiteName: 'ProjectFlow',
        previewImage: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Team collaboration and project management platform',
        techUsed: ['React', 'Node.js', 'PostgreSQL', 'WebSocket']
      },
      {
        sector: 'FinTech',
        websiteName: 'PayEasy',
        previewImage: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Digital payment and expense tracking solution',
        techUsed: ['React Native', 'Python', 'MongoDB', 'Stripe API']
      },
      {
        sector: 'EdTech',
        websiteName: 'SkillBuilder',
        previewImage: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Personalized learning and skill development platform',
        techUsed: ['Vue.js', 'Python', 'PostgreSQL', 'Machine Learning']
      },
      {
        sector: 'HealthTech',
        websiteName: 'WellnessTracker',
        previewImage: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Personal health monitoring and wellness coaching',
        techUsed: ['React Native', 'Node.js', 'MongoDB', 'HealthKit']
      },
      {
        sector: 'E-commerce',
        websiteName: 'MarketPlace',
        previewImage: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Multi-vendor marketplace with AI recommendations',
        techUsed: ['React', 'Python', 'PostgreSQL', 'Elasticsearch']
      },
      {
        sector: 'PropTech',
        websiteName: 'SmartRent',
        previewImage: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Property rental and management platform',
        techUsed: ['Angular', 'Node.js', 'MongoDB', 'Payment Gateway']
      },
      {
        sector: 'FoodTech',
        websiteName: 'FoodieConnect',
        previewImage: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Social dining and restaurant discovery app',
        techUsed: ['React Native', 'Node.js', 'PostgreSQL', 'Google Maps']
      },
      {
        sector: 'TravelTech',
        websiteName: 'TripPlanner',
        previewImage: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'AI-powered travel planning and booking platform',
        techUsed: ['React', 'Python', 'MongoDB', 'Travel APIs']
      },
      {
        sector: 'AgriTech',
        websiteName: 'FarmSmart',
        previewImage: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Smart farming and crop management system',
        techUsed: ['Vue.js', 'Python', 'InfluxDB', 'IoT Sensors']
      },
      {
        sector: 'CleanTech',
        websiteName: 'EcoTrack',
        previewImage: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Carbon footprint tracking and sustainability platform',
        techUsed: ['React', 'Node.js', 'PostgreSQL', 'Analytics']
      }
    ]
  },

  'blockchain-integration': {
    id: 'blockchain-integration',
    title: 'Blockchain Integration',
    icon: Shield,
    gradient: 'from-teal-500 to-blue-500',
    description: `Harness the power of blockchain technology to create secure, transparent, and decentralized solutions that revolutionize how your business operates. Our blockchain expertise spans smart contracts, DeFi applications, NFT platforms, and enterprise blockchain integration.

We help organizations leverage blockchain's immutable ledger technology to enhance security, reduce costs, eliminate intermediaries, and create new business models that weren't possible with traditional centralized systems.`,
    
    techStack: [
      { name: 'Solidity', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/solidity/solidity-original.svg', category: 'Smart Contracts' },
      { name: 'Web3.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/web3js/web3js-original.svg', category: 'Frontend' },
      { name: 'Ethereum', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/ethereum/ethereum-original.svg', category: 'Blockchain' },
      { name: 'Polygon', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/polygon/polygon-original.svg', category: 'Layer 2' },
      { name: 'Node.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg', category: 'Backend' },
      { name: 'IPFS', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/ipfs/ipfs-original.svg', category: 'Storage' },
      { name: 'MetaMask', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/metamask/metamask-original.svg', category: 'Wallet' },
      { name: 'Hardhat', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/hardhat/hardhat-original.svg', category: 'Development' }
    ],

    methodology: [
      {
        phase: 'Blockchain Strategy',
        steps: [
          'Use case identification and validation',
          'Blockchain platform selection',
          'Tokenomics and governance design',
          'Regulatory compliance assessment'
        ]
      },
      {
        phase: 'Smart Contract Development',
        steps: [
          'Contract architecture design',
          'Security-first development approach',
          'Comprehensive testing and auditing',
          'Gas optimization strategies'
        ]
      },
      {
        phase: 'DApp Development',
        steps: [
          'Frontend integration with Web3',
          'Wallet connectivity implementation',
          'User experience optimization',
          'Cross-chain compatibility'
        ]
      },
      {
        phase: 'Deployment & Monitoring',
        steps: [
          'Mainnet deployment strategy',
          'Security monitoring setup',
          'Community building and governance',
          'Continuous protocol upgrades'
        ]
      }
    ],

    industrySolutions: [
      {
        sector: 'DeFi',
        websiteName: 'YieldFarm',
        previewImage: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Decentralized yield farming and liquidity mining platform',
        techUsed: ['Solidity', 'React', 'Web3.js', 'Ethereum']
      },
      {
        sector: 'NFT Marketplace',
        websiteName: 'ArtChain',
        previewImage: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Digital art and collectibles trading platform',
        techUsed: ['Solidity', 'Next.js', 'IPFS', 'Polygon']
      },
      {
        sector: 'Supply Chain',
        websiteName: 'TraceChain',
        previewImage: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Product authenticity and supply chain tracking',
        techUsed: ['Hyperledger', 'Node.js', 'QR Codes', 'IoT']
      },
      {
        sector: 'Real Estate',
        websiteName: 'PropertyToken',
        previewImage: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Fractional real estate ownership and trading',
        techUsed: ['Solidity', 'React', 'Chainlink', 'Ethereum']
      },
      {
        sector: 'Gaming',
        websiteName: 'GameFi',
        previewImage: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Play-to-earn gaming with NFT rewards',
        techUsed: ['Solidity', 'Unity', 'Web3.js', 'Polygon']
      },
      {
        sector: 'Identity',
        websiteName: 'IDChain',
        previewImage: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Self-sovereign identity and credential verification',
        techUsed: ['Hyperledger Indy', 'React', 'Zero-Knowledge', 'DID']
      },
      {
        sector: 'Healthcare',
        websiteName: 'MedRecord',
        previewImage: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Secure medical records and data sharing',
        techUsed: ['Hyperledger Fabric', 'Node.js', 'Encryption', 'HIPAA']
      },
      {
        sector: 'Voting',
        websiteName: 'VoteSecure',
        previewImage: 'https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Transparent and tamper-proof voting system',
        techUsed: ['Solidity', 'React', 'Zero-Knowledge', 'Ethereum']
      },
      {
        sector: 'Energy',
        websiteName: 'EnergyTrade',
        previewImage: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Peer-to-peer renewable energy trading',
        techUsed: ['Solidity', 'IoT', 'Smart Meters', 'Ethereum']
      },
      {
        sector: 'Insurance',
        websiteName: 'InsureChain',
        previewImage: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Parametric insurance with smart contracts',
        techUsed: ['Solidity', 'Chainlink', 'Weather APIs', 'Polygon']
      }
    ]
  },

  'digital-transformation': {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    icon: TrendingUp,
    gradient: 'from-violet-500 to-purple-500',
    description: `Lead your organization through comprehensive digital transformation that modernizes operations, enhances customer experiences, and creates new revenue streams. Our strategic approach combines technology innovation with change management to ensure successful adoption and measurable business outcomes.

We help businesses navigate the complex journey from legacy systems to modern, cloud-native architectures while maintaining operational continuity and maximizing return on investment.`,
    
    techStack: [
      { name: 'Cloud Migration', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg', category: 'Infrastructure' },
      { name: 'Microservices', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg', category: 'Architecture' },
      { name: 'API Gateway', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg', category: 'Integration' },
      { name: 'DevOps', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg', category: 'Operations' },
      { name: 'Analytics', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', category: 'Data' },
      { name: 'AI/ML', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg', category: 'Intelligence' },
      { name: 'Security', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-original.svg', category: 'Protection' },
      { name: 'Monitoring', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/prometheus/prometheus-original.svg', category: 'Observability' }
    ],

    methodology: [
      {
        phase: 'Assessment & Strategy',
        steps: [
          'Current state analysis and gap identification',
          'Digital maturity assessment',
          'Transformation roadmap development',
          'ROI modeling and business case creation'
        ]
      },
      {
        phase: 'Architecture Modernization',
        steps: [
          'Legacy system analysis and migration planning',
          'Cloud-native architecture design',
          'Data strategy and governance framework',
          'Security and compliance implementation'
        ]
      },
      {
        phase: 'Implementation & Integration',
        steps: [
          'Phased migration and deployment',
          'System integration and API development',
          'Process automation and optimization',
          'User training and change management'
        ]
      },
      {
        phase: 'Optimization & Evolution',
        steps: [
          'Performance monitoring and optimization',
          'Continuous improvement processes',
          'Innovation pipeline establishment',
          'Digital culture development'
        ]
      }
    ],

    industrySolutions: [
      {
        sector: 'Banking',
        websiteName: 'DigitalBank',
        previewImage: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Core banking system modernization and digital channels',
        techUsed: ['Microservices', 'AWS', 'React', 'API Gateway']
      },
      {
        sector: 'Retail',
        websiteName: 'OmniRetail',
        previewImage: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Omnichannel retail experience and inventory management',
        techUsed: ['Cloud Native', 'React', 'Node.js', 'Analytics']
      },
      {
        sector: 'Manufacturing',
        websiteName: 'SmartFactory',
        previewImage: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Industry 4.0 transformation with IoT and AI',
        techUsed: ['IoT Platform', 'Machine Learning', 'Edge Computing', 'Analytics']
      },
      {
        sector: 'Healthcare',
        websiteName: 'HealthCloud',
        previewImage: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Digital health platform with telemedicine capabilities',
        techUsed: ['FHIR', 'React', 'WebRTC', 'Cloud Security']
      },
      {
        sector: 'Education',
        websiteName: 'EduDigital',
        previewImage: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Digital learning ecosystem and student management',
        techUsed: ['LMS Integration', 'React', 'Analytics', 'Mobile Apps']
      },
      {
        sector: 'Government',
        websiteName: 'GovDigital',
        previewImage: 'https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Citizen services digitization and process automation',
        techUsed: ['Microservices', 'Identity Management', 'Workflow', 'Security']
      },
      {
        sector: 'Insurance',
        websiteName: 'InsureTech',
        previewImage: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Digital insurance platform with AI-driven underwriting',
        techUsed: ['Machine Learning', 'React', 'API Integration', 'Analytics']
      },
      {
        sector: 'Logistics',
        websiteName: 'LogiDigital',
        previewImage: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'End-to-end supply chain digitization and tracking',
        techUsed: ['IoT', 'Blockchain', 'Machine Learning', 'Mobile Apps']
      },
      {
        sector: 'Energy',
        websiteName: 'SmartGrid',
        previewImage: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Smart grid infrastructure and energy management',
        techUsed: ['IoT Platform', 'Time Series DB', 'Machine Learning', 'Analytics']
      },
      {
        sector: 'Telecommunications',
        websiteName: 'TelecoDigital',
        previewImage: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: '5G network optimization and customer experience platform',
        techUsed: ['Network APIs', 'Real-time Analytics', 'AI/ML', 'Cloud Native']
      }
    ]
  },

  'agentic-ai': {
    id: 'agentic-ai',
    title: 'Agentic AI Solutions',
    icon: Bot,
    gradient: 'from-cyan-500 to-blue-500',
    description: `Deploy intelligent AI agents that autonomously handle complex tasks, make informed decisions, and continuously learn from interactions to improve performance. Our agentic AI solutions go beyond simple automation to create truly intelligent systems that can reason, plan, and execute multi-step workflows.

These AI agents can operate independently or collaborate with human teams, providing 24/7 intelligent assistance that scales with your business needs while maintaining high accuracy and reliability.`,
    
    techStack: [
      { name: 'LangChain', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', category: 'AI Framework' },
      { name: 'OpenAI GPT', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/openai/openai-original.svg', category: 'LLM' },
      { name: 'Python', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', category: 'Backend' },
      { name: 'TensorFlow', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg', category: 'ML' },
      { name: 'Vector DB', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg', category: 'Storage' },
      { name: 'FastAPI', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg', category: 'API' },
      { name: 'Redis', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg', category: 'Cache' },
      { name: 'Docker', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg', category: 'Deployment' }
    ],

    methodology: [
      {
        phase: 'AI Strategy & Planning',
        steps: [
          'Use case identification and prioritization',
          'Data assessment and preparation strategy',
          'AI model selection and architecture design',
          'Ethical AI and bias mitigation planning'
        ]
      },
      {
        phase: 'Agent Development',
        steps: [
          'Multi-agent system architecture',
          'Knowledge base creation and training',
          'Decision-making logic implementation',
          'Human-AI interaction design'
        ]
      },
      {
        phase: 'Training & Optimization',
        steps: [
          'Model training and fine-tuning',
          'Performance testing and validation',
          'Continuous learning implementation',
          'Safety and reliability testing'
        ]
      },
      {
        phase: 'Deployment & Monitoring',
        steps: [
          'Production deployment and scaling',
          'Performance monitoring and analytics',
          'Continuous improvement and updates',
          'User feedback integration'
        ]
      }
    ],

    industrySolutions: [
      {
        sector: 'Customer Service',
        websiteName: 'ServiceBot',
        previewImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Intelligent customer support agent with multi-channel capabilities',
        techUsed: ['LangChain', 'OpenAI', 'FastAPI', 'Vector DB']
      },
      {
        sector: 'Sales & Marketing',
        websiteName: 'SalesAI',
        previewImage: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'AI-powered lead qualification and nurturing system',
        techUsed: ['GPT-4', 'CRM Integration', 'Python', 'Analytics']
      },
      {
        sector: 'Financial Analysis',
        websiteName: 'FinanceAI',
        previewImage: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Autonomous financial analysis and reporting agent',
        techUsed: ['LangChain', 'Pandas', 'Time Series', 'Visualization']
      },
      {
        sector: 'Content Creation',
        websiteName: 'ContentBot',
        previewImage: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Multi-modal content generation and optimization platform',
        techUsed: ['GPT-4', 'DALL-E', 'Content APIs', 'Workflow Engine']
      },
      {
        sector: 'HR & Recruitment',
        websiteName: 'TalentAI',
        previewImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Intelligent recruitment and employee engagement system',
        techUsed: ['NLP', 'Resume Parsing', 'Matching Algorithms', 'Chatbots']
      },
      {
        sector: 'Legal Research',
        websiteName: 'LegalAI',
        previewImage: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Legal document analysis and research assistant',
        techUsed: ['Legal LLMs', 'Document Processing', 'Knowledge Graphs', 'Search']
      },
      {
        sector: 'Healthcare',
        websiteName: 'MedAI',
        previewImage: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Medical diagnosis support and patient monitoring agent',
        techUsed: ['Medical AI', 'Computer Vision', 'FHIR', 'Privacy Tech']
      },
      {
        sector: 'Education',
        websiteName: 'TeachAI',
        previewImage: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Personalized learning and tutoring AI assistant',
        techUsed: ['Educational AI', 'Adaptive Learning', 'Progress Tracking', 'Gamification']
      },
      {
        sector: 'Research & Development',
        websiteName: 'ResearchAI',
        previewImage: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Scientific research and literature analysis agent',
        techUsed: ['Scientific LLMs', 'Data Mining', 'Hypothesis Generation', 'Visualization']
      },
      {
        sector: 'Cybersecurity',
        websiteName: 'SecureAI',
        previewImage: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Autonomous threat detection and response system',
        techUsed: ['Anomaly Detection', 'Behavioral Analysis', 'Incident Response', 'SIEM Integration']
      }
    ]
  },

  'data-analytics-visualization': {
    id: 'data-analytics-visualization',
    title: 'Data Analytics & Visualization',
    icon: BarChart3,
    gradient: 'from-indigo-500 to-purple-500',
    description: `Transform your data into actionable insights with advanced analytics and stunning visualizations that drive informed business decisions. Our data analytics expertise spans business intelligence, predictive modeling, real-time dashboards, and interactive data exploration tools.

We help organizations unlock the hidden value in their data through sophisticated analysis techniques, machine learning algorithms, and intuitive visualization interfaces that make complex data accessible to stakeholders at all levels.`,
    
    techStack: [
      { name: 'Python', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', category: 'Analytics' },
      { name: 'R', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/r/r-original.svg', category: 'Statistics' },
      { name: 'Tableau', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tableau/tableau-original.svg', category: 'Visualization' },
      { name: 'Power BI', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoft/microsoft-original.svg', category: 'BI' },
      { name: 'D3.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/d3js/d3js-original.svg', category: 'Web Viz' },
      { name: 'Apache Spark', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/apache/apache-original.svg', category: 'Big Data' },
      { name: 'PostgreSQL', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg', category: 'Database' },
      { name: 'AWS', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg', category: 'Cloud' }
    ],

    methodology: [
      {
        phase: 'Data Discovery & Assessment',
        steps: [
          'Data source identification and mapping',
          'Data quality assessment and cleaning',
          'Business requirements analysis',
          'Analytics strategy development'
        ]
      },
      {
        phase: 'Data Preparation & Modeling',
        steps: [
          'ETL pipeline development',
          'Data warehouse design and implementation',
          'Statistical modeling and machine learning',
          'Data validation and testing'
        ]
      },
      {
        phase: 'Visualization & Dashboard Development',
        steps: [
          'Interactive dashboard design',
          'Custom visualization creation',
          'Real-time data integration',
          'User experience optimization'
        ]
      },
      {
        phase: 'Deployment & Training',
        steps: [
          'Production deployment and monitoring',
          'User training and documentation',
          'Performance optimization',
          'Continuous improvement and updates'
        ]
      }
    ],

    industrySolutions: [
      {
        sector: 'E-commerce',
        websiteName: 'SalesAnalytics',
        previewImage: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Customer behavior analysis and sales forecasting platform',
        techUsed: ['Python', 'Tableau', 'Machine Learning', 'Real-time Analytics']
      },
      {
        sector: 'Healthcare',
        websiteName: 'HealthInsights',
        previewImage: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Patient outcome prediction and treatment optimization',
        techUsed: ['R', 'Power BI', 'Predictive Modeling', 'Clinical Data']
      },
      {
        sector: 'Finance',
        websiteName: 'RiskAnalytics',
        previewImage: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Credit risk assessment and fraud detection system',
        techUsed: ['Python', 'Apache Spark', 'Machine Learning', 'Real-time Processing']
      },
      {
        sector: 'Manufacturing',
        websiteName: 'QualityControl',
        previewImage: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Production quality monitoring and predictive maintenance',
        techUsed: ['IoT Analytics', 'D3.js', 'Time Series', 'Anomaly Detection']
      },
      {
        sector: 'Marketing',
        websiteName: 'CampaignAnalytics',
        previewImage: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Multi-channel marketing performance and ROI analysis',
        techUsed: ['Tableau', 'Python', 'Attribution Modeling', 'Customer Journey']
      },
      {
        sector: 'Education',
        websiteName: 'LearningAnalytics',
        previewImage: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Student performance tracking and learning outcome prediction',
        techUsed: ['R', 'Power BI', 'Educational Data Mining', 'Predictive Analytics']
      },
      {
        sector: 'Retail',
        websiteName: 'InventoryOptimization',
        previewImage: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Demand forecasting and inventory management optimization',
        techUsed: ['Python', 'Time Series', 'Machine Learning', 'Supply Chain Analytics']
      },
      {
        sector: 'Energy',
        websiteName: 'EnergyEfficiency',
        previewImage: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Energy consumption analysis and optimization recommendations',
        techUsed: ['IoT Data', 'D3.js', 'Energy Analytics', 'Sustainability Metrics']
      },
      {
        sector: 'Transportation',
        websiteName: 'FleetAnalytics',
        previewImage: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Fleet performance monitoring and route optimization',
        techUsed: ['GPS Data', 'Tableau', 'Route Optimization', 'Performance Metrics']
      },
      {
        sector: 'Real Estate',
        websiteName: 'PropertyAnalytics',
        previewImage: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Property valuation and market trend analysis',
        techUsed: ['Geospatial Analytics', 'Power BI', 'Market Analysis', 'Property Valuation']
      }
    ]
  },

  'custom-mcp-servers': {
    id: 'custom-mcp-servers',
    title: 'Custom MCP Servers',
    icon: Server,
    gradient: 'from-green-500 to-emerald-500',
    description: `Build custom Model Context Protocol (MCP) servers that enable seamless integration between AI models and your existing systems. Our MCP server development expertise allows you to create intelligent, context-aware applications that can interact with your data, APIs, and business logic in real-time.

We design and implement MCP servers that extend AI capabilities beyond standard interactions, enabling sophisticated workflows, data processing, and system integrations that transform how AI models understand and interact with your business environment.`,
    
    techStack: [
      { name: 'Python', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', category: 'Backend' },
      { name: 'Node.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg', category: 'Runtime' },
      { name: 'FastAPI', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg', category: 'API Framework' },
      { name: 'OpenAI', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/openai/openai-original.svg', category: 'AI Integration' },
      { name: 'PostgreSQL', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg', category: 'Database' },
      { name: 'Redis', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg', category: 'Cache' },
      { name: 'Docker', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg', category: 'Containerization' },
      { name: 'AWS', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg', category: 'Cloud' }
    ],

    methodology: [
      {
        phase: 'MCP Architecture Design',
        steps: [
          'System integration requirements analysis',
          'MCP server architecture planning',
          'API endpoint design and specification',
          'Security and authentication strategy'
        ]
      },
      {
        phase: 'Server Development',
        steps: [
          'MCP protocol implementation',
          'Custom tool and resource development',
          'Data processing and transformation logic',
          'Error handling and logging implementation'
        ]
      },
      {
        phase: 'Integration & Testing',
        steps: [
          'AI model integration and testing',
          'End-to-end workflow validation',
          'Performance optimization and scaling',
          'Security testing and vulnerability assessment'
        ]
      },
      {
        phase: 'Deployment & Monitoring',
        steps: [
          'Production deployment and configuration',
          'Monitoring and alerting setup',
          'Documentation and user training',
          'Ongoing maintenance and updates'
        ]
      }
    ],

    industrySolutions: [
      {
        sector: 'CRM Integration',
        websiteName: 'CRM-MCP',
        previewImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'AI-powered CRM data analysis and customer insights',
        techUsed: ['Python', 'Salesforce API', 'OpenAI', 'Data Processing']
      },
      {
        sector: 'E-commerce',
        websiteName: 'ShopMCP',
        previewImage: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Product catalog management and inventory optimization',
        techUsed: ['Node.js', 'Shopify API', 'Machine Learning', 'Inventory Analytics']
      },
      {
        sector: 'Healthcare',
        websiteName: 'MedMCP',
        previewImage: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Medical record analysis and patient data processing',
        techUsed: ['Python', 'FHIR API', 'HIPAA Compliance', 'Medical AI']
      },
      {
        sector: 'Finance',
        websiteName: 'FinanceMCP',
        previewImage: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Financial data analysis and risk assessment',
        techUsed: ['Python', 'Financial APIs', 'Risk Modeling', 'Real-time Processing']
      },
      {
        sector: 'Education',
        websiteName: 'EduMCP',
        previewImage: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Learning management system integration and analytics',
        techUsed: ['Node.js', 'LMS APIs', 'Learning Analytics', 'Student Data']
      },
      {
        sector: 'Manufacturing',
        websiteName: 'FactoryMCP',
        previewImage: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Production monitoring and quality control automation',
        techUsed: ['Python', 'IoT Integration', 'Quality Analytics', 'Predictive Maintenance']
      },
      {
        sector: 'Real Estate',
        websiteName: 'PropertyMCP',
        previewImage: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Property listing management and market analysis',
        techUsed: ['Node.js', 'MLS APIs', 'Market Analysis', 'Property Valuation']
      },
      {
        sector: 'Logistics',
        websiteName: 'LogisticsMCP',
        previewImage: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Supply chain optimization and tracking automation',
        techUsed: ['Python', 'Shipping APIs', 'Route Optimization', 'Supply Chain Analytics']
      },
      {
        sector: 'Marketing',
        websiteName: 'MarketingMCP',
        previewImage: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Campaign management and performance analytics',
        techUsed: ['Node.js', 'Marketing APIs', 'Campaign Analytics', 'ROI Optimization']
      },
      {
        sector: 'Legal',
        websiteName: 'LegalMCP',
        previewImage: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Document analysis and legal research automation',
        techUsed: ['Python', 'Legal APIs', 'Document Processing', 'Legal Research']
      }
    ]
  }
};

export const getServiceById = (id) => {
  return servicesData[id] || null;
};

export const getAllServices = () => {
  return Object.values(servicesData);
};