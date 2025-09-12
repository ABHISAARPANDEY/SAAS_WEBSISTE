import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, FileText, Users, Database, Globe } from 'lucide-react';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: FileText,
      content: `This Privacy Policy describes how we collect, use, and protect your personal information when you use our services. We are committed to protecting your privacy and ensuring the security of your personal data.

By using our services, you agree to the collection and use of information in accordance with this policy. We will not use or share your information with anyone except as described in this Privacy Policy.`
    },
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: Database,
      content: `We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.

Personal Information:
- Name and contact information (email address, phone number)
- Account credentials and profile information
- Payment and billing information
- Communication preferences

Usage Information:
- Information about how you use our services
- Device information and IP address
- Browser type and version
- Pages visited and time spent on our platform
- Cookies and similar tracking technologies`
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: Eye,
      content: `We use the information we collect to provide, maintain, and improve our services:

Service Delivery:
- Provide and maintain our services
- Process transactions and send related information
- Send technical notices and support messages
- Respond to your comments and questions

Improvement and Analytics:
- Analyze usage patterns and trends
- Improve our services and develop new features
- Conduct research and analytics
- Monitor and analyze trends and usage

Communication:
- Send you marketing communications (with your consent)
- Provide customer support
- Send important updates about our services`
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing',
      icon: Users,
      content: `We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:

Service Providers:
- We may share information with trusted third-party service providers who assist us in operating our services
- These providers are bound by confidentiality agreements and are prohibited from using your information for other purposes

Legal Requirements:
- We may disclose information if required by law or in response to valid legal requests
- We may share information to protect our rights, property, or safety, or that of our users

Business Transfers:
- In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction`
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Lock,
      content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.

Security Measures:
- Encryption of data in transit and at rest
- Regular security assessments and updates
- Access controls and authentication mechanisms
- Employee training on data protection practices

Data Retention:
- We retain your information for as long as necessary to provide our services
- We may retain certain information for legitimate business purposes or legal requirements
- You can request deletion of your information at any time`
    },
    {
      id: 'cookies',
      title: 'Cookies and Tracking',
      icon: Globe,
      content: `We use cookies and similar tracking technologies to enhance your experience on our platform.

Types of Cookies:
- Essential cookies: Required for basic functionality
- Performance cookies: Help us understand how visitors use our site
- Functionality cookies: Remember your preferences and settings
- Marketing cookies: Used to deliver relevant advertisements

Cookie Management:
- You can control cookies through your browser settings
- Disabling certain cookies may affect the functionality of our services
- We use third-party analytics services that may set their own cookies`
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      icon: Shield,
      content: `You have certain rights regarding your personal information:

Access and Portability:
- Request access to your personal information
- Request a copy of your data in a portable format
- Request correction of inaccurate information

Control and Deletion:
- Request deletion of your personal information
- Object to processing of your information
- Withdraw consent where applicable

Communication Preferences:
- Opt out of marketing communications
- Update your communication preferences
- Unsubscribe from our newsletters

To exercise these rights, please contact us using the information provided in the Contact section.`
    },
    {
      id: 'contact',
      title: 'Contact Us',
      icon: Shield,
      content: `If you have any questions about this Privacy Policy or our data practices, please contact us:

Email: info@teckstaq.com
Phone: +91 9119671030
Address: Innvincible Young Technologies Private Limited Innov8 Okhla 3rd Floor 211, Okhla Indl, Estate Phase - III, Delhi, India 110020

Data Protection Officer:
Email: info@teckstaq.com

We will respond to your inquiry within 30 days of receipt.

Last Updated: September 2025`
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="pt-20 pb-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
        </div>
      </div>

      {/* Header */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Privacy <span className="text-blue-600">Policy</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <div className="mt-8 text-sm text-gray-600">
              Last updated: September 2025
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Summary Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Privacy Policy Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">What We Collect</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Contact information and account details</li>
                  <li>• Usage data and analytics</li>
                  <li>• Communication preferences</li>
                  <li>• Payment and billing information</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">How We Use It</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Provide and improve our services</li>
                  <li>• Process transactions</li>
                  <li>• Send important updates</li>
                  <li>• Provide customer support</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Questions About Your Privacy?
            </h3>
            <p className="text-gray-700 mb-6">
              If you have any questions about this Privacy Policy or our data practices, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold"
              >
                Contact Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors"
              >
                Download PDF
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;