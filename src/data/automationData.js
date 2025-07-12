import { 
  Zap, 
  Mail, 
  MessageSquare, 
  Calendar, 
  FileText, 
  BarChart3, 
  ShoppingCart, 
  Users, 
  Bell, 
  Database, 
  Briefcase, 
  Megaphone, 
  Clipboard, 
  Truck, 
  CreditCard, 
  Headphones, 
  Layers, 
  Repeat, 
  Workflow
} from 'lucide-react';

export const industries = [
  'All Industries',
  'Marketing',
  'Sales',
  'HR',
  'Finance',
  'Customer Support',
  'IT',
  'Operations',
  'Product',
  'Legal'
];

export const categories = [
  'All Categories',
  'Communication',
  'Analytics',
  'Content',
  'Workflow',
  'Notifications',
  'Data Processing'
];

export const integrations = [
  'All Integrations',
  'Slack',
  'Gmail',
  'Google Sheets',
  'Trello',
  'Asana',
  'Jira',
  'Salesforce',
  'HubSpot',
  'Zapier',
  'Airtable'
];

export const complexityLevels = [
  'All Levels',
  'Basic',
  'Intermediate',
  'Advanced'
];

export const automationTemplates = [
  {
    id: 'email-campaign-automation',
    name: 'Email Campaign Automation',
    description: 'Automate your email marketing campaigns with personalized content, scheduling, and analytics tracking.',
    category: 'Marketing',
    useCase: 'Communication',
    integrations: ['Gmail', 'HubSpot', 'Google Sheets'],
    complexity: 'Intermediate',
    icon: Mail,
    gradient: 'from-blue-500 to-indigo-600',
    neonColor: 'neon-cyan',
    image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Personalized email templates',
      'Scheduled sending',
      'A/B testing',
      'Open and click tracking',
      'Automated follow-ups'
    ],
    steps: [
      'Connect your email service provider',
      'Import contact list or connect CRM',
      'Set up email templates with personalization tokens',
      'Configure sending schedule and follow-up rules',
      'Set up analytics tracking'
    ],
    useCases: [
      {
        title: 'Customer Onboarding',
        description: 'Send a series of welcome emails to new customers with product information and tips.'
      },
      {
        title: 'Re-engagement Campaign',
        description: 'Automatically send targeted emails to inactive customers based on their past behavior.'
      },
      {
        title: 'Event Promotion',
        description: 'Schedule and send event announcements, reminders, and follow-ups to registered attendees.'
      }
    ],
    requirements: {
      email: 'Gmail, Outlook, or other SMTP service',
      data: 'Contact list with name and email fields',
      optional: 'CRM integration for advanced personalization'
    },
    pricing: {
      free: false,
      premium: {
        available: true,
        features: ['Advanced analytics', 'Unlimited contacts', 'Priority support']
      }
    }
  },
  {
    id: 'customer-support-chatbot',
    name: 'Customer Support Chatbot',
    description: 'Deploy an AI-powered chatbot that handles common customer inquiries and escalates complex issues to human agents.',
    category: 'Customer Support',
    useCase: 'Communication',
    integrations: ['Slack', 'Zendesk', 'Intercom'],
    complexity: 'Advanced',
    icon: MessageSquare,
    gradient: 'from-green-500 to-emerald-600',
    neonColor: 'neon-green',
    image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Natural language understanding',
      'Pre-built response templates',
      'Seamless human handoff',
      'Conversation history',
      'Performance analytics'
    ],
    steps: [
      'Define common customer questions and appropriate responses',
      'Configure chatbot personality and tone',
      'Set up escalation rules for human support',
      'Integrate with your support ticketing system',
      'Train the AI with your product documentation'
    ],
    useCases: [
      {
        title: 'Product FAQs',
        description: 'Answer common product questions instantly without human intervention.'
      },
      {
        title: 'Order Status Tracking',
        description: 'Allow customers to check their order status through the chatbot interface.'
      },
      {
        title: 'Technical Troubleshooting',
        description: 'Guide customers through basic troubleshooting steps before escalating to support.'
      }
    ],
    requirements: {
      platform: 'Website or mobile app with chat interface',
      data: 'FAQ documentation, product information',
      optional: 'Customer support ticketing system'
    },
    pricing: {
      free: false,
      premium: {
        available: true,
        features: ['Advanced NLP capabilities', 'Multi-language support', 'Custom integrations']
      }
    }
  },
  {
    id: 'meeting-scheduler',
    name: 'Intelligent Meeting Scheduler',
    description: 'Eliminate the back-and-forth of scheduling meetings with an automated system that finds the perfect time for everyone.',
    category: 'Operations',
    useCase: 'Workflow',
    integrations: ['Google Calendar', 'Outlook', 'Zoom', 'Teams'],
    complexity: 'Basic',
    icon: Calendar,
    gradient: 'from-purple-500 to-violet-600',
    neonColor: 'neon-pink',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Calendar availability detection',
      'Time zone handling',
      'Meeting link generation',
      'Automated reminders',
      'Rescheduling options'
    ],
    steps: [
      'Connect your calendar service',
      'Configure your availability preferences',
      'Set up meeting types and durations',
      'Customize booking page and notifications',
      'Share your booking link with others'
    ],
    useCases: [
      {
        title: 'Client Consultations',
        description: 'Allow clients to book time slots based on your real-time availability.'
      },
      {
        title: 'Team Coordination',
        description: 'Find meeting times that work for everyone on your team automatically.'
      },
      {
        title: 'Interview Scheduling',
        description: 'Streamline the interview process by letting candidates pick available time slots.'
      }
    ],
    requirements: {
      calendar: 'Google Calendar, Outlook, or iCloud',
      optional: 'Video conferencing software (Zoom, Teams, etc.)'
    },
    pricing: {
      free: false,
      premium: {
        available: true,
        features: ['Group scheduling', 'Custom branding', 'Advanced availability rules']
      }
    }
  },
  {
    id: 'document-approval-workflow',
    name: 'Document Approval Workflow',
    description: 'Streamline your document approval process with automated routing, notifications, and tracking.',
    category: 'Operations',
    useCase: 'Workflow',
    integrations: ['Google Drive', 'Dropbox', 'Slack', 'Microsoft 365'],
    complexity: 'Intermediate',
    icon: FileText,
    gradient: 'from-yellow-500 to-amber-600',
    neonColor: 'neon-green',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Multi-stage approval flows',
      'Conditional routing',
      'Digital signatures',
      'Deadline tracking',
      'Audit trail'
    ],
    steps: [
      'Define your approval workflow stages and participants',
      'Configure document routing rules',
      'Set up notification templates',
      'Establish escalation procedures for delays',
      'Connect your document storage system'
    ],
    useCases: [
      {
        title: 'Contract Approvals',
        description: 'Route contracts through legal, finance, and executive review with tracking and reminders.'
      },
      {
        title: 'Marketing Content Review',
        description: 'Ensure all marketing materials receive proper review and approval before publication.'
      },
      {
        title: 'Expense Approvals',
        description: 'Streamline the expense approval process with proper routing based on amount and category.'
      }
    ],
    requirements: {
      storage: 'Cloud document storage (Google Drive, Dropbox, etc.)',
      communication: 'Email or messaging platform for notifications'
    },
    pricing: {
      free: false,
      premium: {
        available: true,
        features: ['Advanced workflow rules', 'Custom approval forms', 'API access']
      }
    }
  },
  {
    id: 'sales-dashboard-automation',
    name: 'Sales Dashboard Automation',
    description: 'Automatically collect, process, and visualize sales data from multiple sources in real-time customizable dashboards.',
    category: 'Sales',
    useCase: 'Analytics',
    integrations: ['Salesforce', 'HubSpot', 'Google Sheets', 'Stripe'],
    complexity: 'Intermediate',
    icon: BarChart3,
    gradient: 'from-red-500 to-pink-600',
    neonColor: 'neon-pink',
    image: 'https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Multi-source data integration',
      'Automated data processing',
      'Real-time visualization',
      'Custom KPI tracking',
      'Scheduled reports'
    ],
    steps: [
      'Connect your sales data sources',
      'Define key metrics and KPIs to track',
      'Configure data transformation rules',
      'Design dashboard layouts and visualizations',
      'Set up automated reporting schedule'
    ],
    useCases: [
      {
        title: 'Sales Performance Monitoring',
        description: 'Track team and individual performance against targets in real-time.'
      },
      {
        title: 'Pipeline Analysis',
        description: 'Visualize your sales pipeline and identify bottlenecks or opportunities.'
      },
      {
        title: 'Revenue Forecasting',
        description: 'Generate accurate revenue forecasts based on historical data and current pipeline.'
      }
    ],
    requirements: {
      data: 'CRM system or sales data source',
      optional: 'Payment processor integration for revenue data'
    },
    pricing: {
      free: false,
      premium: {
        available: true,
        features: ['Advanced analytics', 'Custom metrics', 'White-label options']
      }
    }
  },
  {
    id: 'inventory-management',
    name: 'Inventory Management Automation',
    description: 'Automate inventory tracking, reordering, and reporting to optimize stock levels and prevent stockouts.',
    category: 'Operations',
    useCase: 'Workflow',
    integrations: ['Shopify', 'WooCommerce', 'QuickBooks', 'Xero'],
    complexity: 'Advanced',
    icon: ShoppingCart,
    gradient: 'from-cyan-500 to-blue-600',
    neonColor: 'neon-cyan',
    image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Real-time inventory tracking',
      'Automated reordering',
      'Low stock alerts',
      'Supplier management',
      'Inventory forecasting'
    ],
    steps: [
      'Connect your e-commerce platform or POS system',
      'Import product catalog and current inventory levels',
      'Set up reorder points and preferred suppliers',
      'Configure notification rules for stock events',
      'Set up regular inventory reports'
    ],
    useCases: [
      {
        title: 'E-commerce Inventory',
        description: 'Keep your online store stocked with automatic reordering based on sales velocity.'
      },
      {
        title: 'Warehouse Management',
        description: 'Track inventory across multiple locations with real-time updates and transfers.'
      },
      {
        title: 'Seasonal Planning',
        description: 'Forecast inventory needs based on historical seasonal patterns.'
      }
    ],
    requirements: {
      system: 'E-commerce platform, POS, or ERP system',
      data: 'Product catalog with SKUs and current inventory levels'
    },
    pricing: {
      free: false,
      premium: {
        available: true,
        features: ['Multi-location support', 'Advanced forecasting', 'Barcode scanning']
      }
    }
  },
  {
    id: 'employee-onboarding',
    name: 'Employee Onboarding Automation',
    description: 'Streamline the employee onboarding process with automated workflows, document collection, and training assignments.',
    category: 'HR',
    useCase: 'Workflow',
    integrations: ['Workday', 'BambooHR', 'Google Workspace', 'Slack'],
    complexity: 'Intermediate',
    icon: Users,
    gradient: 'from-indigo-500 to-purple-600',
    neonColor: 'neon-pink',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Paperwork automation',
      'Equipment provisioning',
      'Training assignment',
      'Team introductions',
      'Progress tracking'
    ],
    steps: [
      'Define your onboarding process stages',
      'Create document templates and forms',
      'Set up approval workflows for equipment requests',
      'Configure training assignments based on role',
      'Establish progress tracking and reporting'
    ],
    useCases: [
      {
        title: 'New Hire Onboarding',
        description: 'Guide new employees through all necessary steps from offer acceptance to first day.'
      },
      {
        title: 'Department Transfers',
        description: 'Manage the process when employees change roles or departments.'
      },
      {
        title: 'Remote Worker Setup',
        description: 'Specialized workflow for remote employees with virtual orientation.'
      }
    ],
    requirements: {
      hr: 'HR management system or spreadsheet',
      communication: 'Email or team messaging platform'
    },
    pricing: {
      free: false,
      premium: {
        available: true,
        features: ['Custom onboarding paths', 'Advanced reporting', 'Integration with HRIS']
      }
    }
  },
  {
    id: 'social-media-scheduler',
    name: 'Social Media Content Scheduler',
    description: 'Plan, create, and schedule social media content across multiple platforms with analytics and engagement tracking.',
    category: 'Marketing',
    useCase: 'Content',
    integrations: ['Twitter', 'Instagram', 'LinkedIn', 'Facebook', 'Buffer'],
    complexity: 'Basic',
    icon: Bell,
    gradient: 'from-pink-500 to-rose-600',
    neonColor: 'neon-pink',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Multi-platform scheduling',
      'Content calendar',
      'Media library',
      'Hashtag suggestions',
      'Performance analytics'
    ],
    steps: [
      'Connect your social media accounts',
      'Import or create content for your posts',
      'Set up posting schedule and frequency',
      'Configure post customization for each platform',
      'Set up performance tracking'
    ],
    useCases: [
      {
        title: 'Content Marketing',
        description: 'Schedule and publish blog posts and articles across multiple channels.'
      },
      {
        title: 'Product Launches',
        description: 'Coordinate announcement posts across platforms for maximum impact.'
      },
      {
        title: 'Engagement Campaigns',
        description: 'Schedule regular engagement posts to maintain audience connection.'
      }
    ],
    requirements: {
      accounts: 'Social media accounts with API access',
      content: 'Images, videos, or text content to share'
    },
    pricing: {
      free: false,
      premium: {
        available: true,
        features: ['AI content suggestions', 'Advanced analytics', 'Team collaboration']
      }
    }
  },
  {
    id: 'data-sync-automation',
    name: 'Cross-Platform Data Synchronization',
    description: 'Keep your data in sync across multiple platforms and databases with automated bidirectional updates.',
    category: 'IT',
    useCase: 'Data Processing',
    integrations: ['Airtable', 'MySQL', 'MongoDB', 'PostgreSQL', 'Salesforce'],
    complexity: 'Advanced',
    icon: Database,
    gradient: 'from-blue-500 to-cyan-600',
    neonColor: 'neon-cyan',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Bidirectional syncing',
      'Field mapping',
      'Conflict resolution',
      'Change tracking',
      'Error handling'
    ],
    steps: [
      'Connect your data sources',
      'Define field mappings between systems',
      'Configure sync frequency and triggers',
      'Set up conflict resolution rules',
      'Establish error notification procedures'
    ],
    useCases: [
      {
        title: 'CRM and Marketing Integration',
        description: 'Keep customer data in sync between your CRM and marketing automation platforms.'
      },
      {
        title: 'E-commerce Data Management',
        description: 'Synchronize product, inventory, and order data across multiple sales channels.'
      },
      {
        title: 'Cross-Department Collaboration',
        description: 'Share relevant data between sales, support, and product teams automatically.'
      }
    ],
    requirements: {
      data: 'At least two data sources with API access',
      technical: 'Database schema or data structure documentation'
    },
    pricing: {
      free: false,
      premium: {
        available: true,
        features: ['Real-time syncing', 'Custom transformations', 'Historical data migration']
      }
    }
  },
  {
    id: 'recruitment-pipeline',
    name: 'Recruitment Pipeline Automation',
    description: 'Streamline your hiring process with automated candidate sourcing, screening, and interview scheduling.',
    category: 'HR',
    useCase: 'Workflow',
    integrations: ['LinkedIn', 'Indeed', 'Greenhouse', 'Workable'],
    complexity: 'Intermediate',
    icon: Briefcase,
    gradient: 'from-green-500 to-teal-600',
    neonColor: 'neon-green',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Job posting distribution',
      'Resume parsing',
      'Candidate scoring',
      'Interview scheduling',
      'Automated communications'
    ],
    steps: [
      'Connect your job boards and recruitment platforms',
      'Set up job templates and requirements',
      'Configure candidate screening criteria',
      'Establish interview scheduling rules',
      'Create email templates for candidate communication'
    ],
    useCases: [
      {
        title: 'High-Volume Recruiting',
        description: 'Efficiently process large numbers of applications with automated screening.'
      },
      {
        title: 'Technical Hiring',
        description: 'Streamline the process of finding and evaluating technical candidates.'
      },
      {
        title: 'Internship Programs',
        description: 'Manage seasonal recruitment for internship or graduate programs.'
      }
    ],
    requirements: {
      job: 'Active job openings and descriptions',
      calendar: 'Calendar access for interview scheduling'
    },
    pricing: {
      free: false,
      premium: {
        available: true,
        features: ['AI candidate matching', 'Custom assessment integration', 'Advanced analytics']
      }
    }
  },
  {
    id: 'marketing-campaign-automation',
    name: 'Multi-Channel Marketing Campaign',
    description: 'Create, execute, and track marketing campaigns across email, social media, and advertising platforms.',
    category: 'Marketing',
    useCase: 'Content',
    integrations: ['Mailchimp', 'Facebook Ads', 'Google Ads', 'HubSpot'],
    complexity: 'Advanced',
    icon: Megaphone,
    gradient: 'from-orange-500 to-red-600',
    neonColor: 'neon-pink',
    image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Cross-channel coordination',
      'Audience segmentation',
      'Content personalization',
      'Performance tracking',
      'Budget management'
    ],
    steps: [
      'Define campaign objectives and target audience',
      'Connect your marketing platforms',
      'Create content templates for each channel',
      'Set up campaign schedule and triggers',
      'Configure unified analytics tracking'
    ],
    useCases: [
      {
        title: 'Product Launch',
        description: 'Coordinate announcements and promotions across all marketing channels.'
      },
      {
        title: 'Seasonal Promotions',
        description: 'Run coordinated holiday or seasonal campaigns with consistent messaging.'
      },
      {
        title: 'Lead Nurturing',
        description: 'Guide prospects through the sales funnel with targeted multi-channel content.'
      }
    ],
    requirements: {
      platforms: 'Accounts on relevant marketing platforms',
      content: 'Marketing assets and copy for each channel'
    },
    pricing: {
      free: false,
      premium: {
        available: true,
        features: ['AI content optimization', 'Advanced attribution', 'Competitor tracking']
      }
    }
  },
  {
    id: 'customer-feedback-collection',
    name: 'Customer Feedback Collection',
    description: 'Automatically collect, analyze, and route customer feedback from multiple touchpoints.',
    category: 'Customer Support',
    useCase: 'Data Processing',
    integrations: ['SurveyMonkey', 'Google Forms', 'Zendesk', 'Intercom'],
    complexity: 'Basic',
    icon: Clipboard,
    gradient: 'from-teal-500 to-emerald-600',
    neonColor: 'neon-green',
    image: 'https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Multi-channel feedback collection',
      'Sentiment analysis',
      'Theme categorization',
      'Priority scoring',
      'Response automation'
    ],
    steps: [
      'Set up feedback collection points (email, website, app)',
      'Create survey templates and questions',
      'Configure feedback routing rules',
      'Set up sentiment analysis and categorization',
      'Establish response workflows for critical feedback'
    ],
    useCases: [
      {
        title: 'Product Feedback',
        description: 'Collect and organize user suggestions for product improvements.'
      },
      {
        title: 'Service Quality Monitoring',
        description: 'Track customer satisfaction with support interactions.'
      },
      {
        title: 'NPS Tracking',
        description: 'Measure Net Promoter Score and track changes over time.'
      }
    ],
    requirements: {
      touchpoints: 'Customer interaction channels (website, email, app)',
      optional: 'Customer support or CRM system'
    },
    pricing: {
      free: false,
      premium: {
        available: true,
        features: ['Advanced sentiment analysis', 'Custom reporting', 'Integration with BI tools']
      }
    }
  },
  {
    id: 'order-fulfillment-automation',
    name: 'Order Fulfillment Automation',
    description: 'Streamline your order processing workflow from receipt to delivery with automated tracking and notifications.',
    category: 'Operations',
    useCase: 'Workflow',
    integrations: ['Shopify', 'WooCommerce', 'ShipStation', 'QuickBooks'],
    complexity: 'Intermediate',
    icon: Truck,
    gradient: 'from-blue-500 to-indigo-600',
    neonColor: 'neon-cyan',
    image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Order processing automation',
      'Inventory updates',
      'Shipping label generation',
      'Customer notifications',
      'Delivery tracking'
    ],
    steps: [
      'Connect your e-commerce platform',
      'Set up inventory synchronization',
      'Configure shipping rules and carriers',
      'Create customer notification templates',
      'Establish exception handling procedures'
    ],
    useCases: [
      {
        title: 'E-commerce Fulfillment',
        description: 'Automate the entire process from order receipt to shipping confirmation.'
      },
      {
        title: 'Subscription Box Delivery',
        description: 'Manage recurring orders and shipments for subscription products.'
      },
      {
        title: 'Dropshipping Operations',
        description: 'Coordinate orders between your store and third-party suppliers.'
      }
    ],
    requirements: {
      store: 'E-commerce platform or order management system',
      shipping: 'Shipping carrier accounts'
    },
    pricing: {
      free: false,
      premium: {
        available: true,
        features: ['International shipping', 'Return processing', 'Custom packing slips']
      }
    }
  },
  {
    id: 'invoice-processing',
    name: 'Invoice Processing Automation',
    description: 'Automate the capture, approval, and payment of vendor invoices with intelligent data extraction.',
    category: 'Finance',
    useCase: 'Data Processing',
    integrations: ['QuickBooks', 'Xero', 'SAP', 'DocuSign'],
    complexity: 'Intermediate',
    icon: CreditCard,
    gradient: 'from-green-500 to-lime-600',
    neonColor: 'neon-green',
    image: 'https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'OCR data extraction',
      'Approval workflow',
      'Payment scheduling',
      'Vendor management',
      'Expense categorization'
    ],
    steps: [
      'Set up invoice capture methods (email, upload, scan)',
      'Configure data extraction rules',
      'Establish approval workflows based on amount and department',
      'Connect payment systems',
      'Set up reconciliation and reporting'
    ],
    useCases: [
      {
        title: 'Accounts Payable',
        description: 'Streamline the entire vendor invoice processing workflow.'
      },
      {
        title: 'Expense Reimbursement',
        description: 'Process employee expense reports and receipts automatically.'
      },
      {
        title: 'Contractor Payments',
        description: 'Manage freelancer invoices and payment schedules.'
      }
    ],
    requirements: {
      accounting: 'Accounting software or ERP system',
      optional: 'Digital signature solution for approvals'
    },
    pricing: {
      free: false,
      premium: {
        available: true,
        features: ['Advanced OCR capabilities', 'Fraud detection', 'Multi-currency support']
      }
    }
  },
  {
    id: 'helpdesk-ticket-routing',
    name: 'Helpdesk Ticket Routing',
    description: 'Automatically categorize, prioritize, and route support tickets to the right team members based on content and context.',
    category: 'Customer Support',
    useCase: 'Workflow',
    integrations: ['Zendesk', 'Freshdesk', 'Jira', 'Slack'],
    complexity: 'Intermediate',
    icon: Headphones,
    gradient: 'from-purple-500 to-pink-600',
    neonColor: 'neon-pink',
    image: 'https://images.pexels.com/photos/4064835/pexels-photo-4064835.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Intelligent ticket categorization',
      'Priority assignment',
      'Agent skill matching',
      'SLA monitoring',
      'Automated responses'
    ],
    steps: [
      'Connect your helpdesk system',
      'Define ticket categories and tags',
      'Configure routing rules based on content and context',
      'Set up SLA monitoring and escalation',
      'Create templates for common responses'
    ],
    useCases: [
      {
        title: 'Technical Support',
        description: 'Route technical issues to the appropriate specialist based on product area.'
      },
      {
        title: 'Multi-tier Support',
        description: 'Automatically escalate complex issues to higher support tiers.'
      },
      {
        title: 'Multi-language Support',
        description: 'Route tickets to agents based on language detection.'
      }
    ],
    requirements: {
      helpdesk: 'Support ticketing system with API access',
      optional: 'Team communication platform for notifications'
    },
    pricing: {
      free: false,
      premium: {
        available: true,
        features: ['AI-powered categorization', 'Predictive routing', 'Advanced analytics']
      }
    }
  },
  {
    id: 'content-approval-workflow',
    name: 'Content Approval Workflow',
    description: 'Streamline the creation, review, and publication of content with automated workflows and version control.',
    category: 'Marketing',
    useCase: 'Workflow',
    integrations: ['WordPress', 'Contentful', 'Google Docs', 'Asana'],
    complexity: 'Basic',
    icon: Layers,
    gradient: 'from-amber-500 to-orange-600',
    neonColor: 'neon-green',
    image: 'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Multi-stage approval process',
      'Version tracking',
      'Feedback collection',
      'Publication scheduling',
      'Content calendar'
    ],
    steps: [
      'Define your content workflow stages',
      'Set up reviewer roles and permissions',
      'Configure notification templates',
      'Connect your CMS or publication platform',
      'Set up content calendar and scheduling'
    ],
    useCases: [
      {
        title: 'Blog Publishing',
        description: 'Manage the entire process from draft to publication with proper approvals.'
      },
      {
        title: 'Social Media Content',
        description: 'Ensure all social posts receive necessary review before scheduling.'
      },
      {
        title: 'Marketing Materials',
        description: 'Coordinate review of marketing collateral by stakeholders and legal.'
      }
    ],
    requirements: {
      content: 'Content management system or document storage',
      optional: 'Project management tool for tracking'
    },
    pricing: {
      free: false,
      premium: {
        available: true,
        features: ['Advanced workflow rules', 'Content analytics', 'AI-powered suggestions']
      }
    }
  },
  {
    id: 'data-backup-automation',
    name: 'Automated Data Backup System',
    description: 'Ensure your critical data is regularly backed up, verified, and securely stored with automated backup procedures.',
    category: 'IT',
    useCase: 'Data Processing',
    integrations: ['Google Drive', 'Dropbox', 'AWS S3', 'OneDrive'],
    complexity: 'Intermediate',
    icon: Repeat,
    gradient: 'from-blue-500 to-sky-600',
    neonColor: 'neon-cyan',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Scheduled backups',
      'Incremental backup support',
      'Backup verification',
      'Secure encryption',
      'Retention policy management'
    ],
    steps: [
      'Identify critical data sources to back up',
      'Configure backup frequency and timing',
      'Set up storage locations and redundancy',
      'Establish encryption and security measures',
      'Configure monitoring and alerting'
    ],
    useCases: [
      {
        title: 'Database Backup',
        description: 'Regularly back up production databases with minimal performance impact.'
      },
      {
        title: 'Document Archive',
        description: 'Maintain secure, searchable archives of important business documents.'
      },
      {
        title: 'Code Repository Backup',
        description: 'Ensure your source code is backed up independently from your main repository.'
      }
    ],
    requirements: {
      storage: 'Cloud storage or backup target location',
      access: 'Appropriate permissions to data sources'
    },
    pricing: {
      free: false,
      premium: {
        available: true,
        features: ['Advanced encryption', 'Multi-site replication', 'Disaster recovery testing']
      }
    }
  },
  {
    id: 'project-status-reporting',
    name: 'Automated Project Status Reporting',
    description: 'Generate comprehensive project status reports by automatically collecting data from multiple tools and systems.',
    category: 'Operations',
    useCase: 'Analytics',
    integrations: ['Jira', 'GitHub', 'Asana', 'Slack'],
    complexity: 'Intermediate',
    icon: Workflow,
    gradient: 'from-indigo-500 to-violet-600',
    neonColor: 'neon-pink',
    image: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Multi-source data collection',
      'Automated report generation',
      'Customizable templates',
      'Scheduled distribution',
      'Interactive dashboards'
    ],
    steps: [
      'Connect your project management and development tools',
      'Define key metrics and data points to track',
      'Create report templates for different stakeholders',
      'Set up report generation schedule',
      'Configure distribution channels (email, Slack, etc.)'
    ],
    useCases: [
      {
        title: 'Executive Updates',
        description: 'Provide high-level status reports to leadership with key metrics and highlights.'
      },
      {
        title: 'Client Reporting',
        description: 'Generate client-ready progress reports with appropriate detail and branding.'
      },
      {
        title: 'Team Dashboards',
        description: 'Create real-time dashboards for teams to track their own progress.'
      }
    ],
    requirements: {
      tools: 'Project management and development tracking tools',
      optional: 'BI or reporting platform for advanced visualizations'
    },
    pricing: {
      free: false,
      premium: {
        available: true,
        features: ['Advanced visualizations', 'Custom metrics', 'White-labeled reports']
      }
    }
  }
];

export const getTemplateById = (id) => {
  return automationTemplates.find(template => template.id === id);
};