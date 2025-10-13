import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Clock, Shield, CreditCard, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RefundCancellationPolicy = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    window.scrollTo(0, 0);
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-primary text-text-primary">
      {/* Header */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-accent-primary/10 via-secondary to-accent-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
            
            <div className="flex items-center justify-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-accent-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
                Refund & Cancellation Policy
              </h1>
            </div>
            
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Our comprehensive refund and cancellation policy ensures transparency and customer satisfaction for all our services and products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-2xl p-8 border border-border-color"
            >
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-accent-primary" />
                Policy Overview
              </h2>
              <p className="text-text-secondary leading-relaxed">
                At Invincible Young Technologies Pvt Ltd (TECKSTAQ), we are committed to providing exceptional service and customer satisfaction. 
                This policy outlines the terms and conditions for refunds and cancellations across all our services, including software development, 
                digital products, API services, and consulting services.
              </p>
            </motion.div>

            {/* Service Categories */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-text-primary text-center">Service Categories</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Custom Development Services */}
                <div className="bg-secondary rounded-xl p-6 border border-border-color">
                  <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-accent-primary" />
                    Custom Development Services
                  </h3>
                  <div className="space-y-4 text-text-secondary">
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Cancellation Policy:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Projects can be cancelled within 48 hours of initiation with full refund</li>
                        <li>After development begins, cancellation fees apply based on work completed</li>
                        <li>50% refund if cancelled within first week of development</li>
                        <li>25% refund if cancelled within first month</li>
                        <li>No refund after 30 days of development</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Refund Policy:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Full refund within 7 days if project requirements are not met</li>
                        <li>Partial refund based on deliverables completed</li>
                        <li>Refunds processed within 5-7 business days</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Digital Products & APIs */}
                <div className="bg-secondary rounded-xl p-6 border border-border-color">
                  <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-accent-primary" />
                    Digital Products & APIs
                  </h3>
                  <div className="space-y-4 text-text-secondary">
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Subscription Cancellation:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Cancel anytime with 30-day notice</li>
                        <li>Service continues until end of billing period</li>
                        <li>No cancellation fees for monthly subscriptions</li>
                        <li>Annual subscriptions: 50% refund if cancelled within 3 months</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Refund Policy:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>7-day money-back guarantee for new subscriptions</li>
                        <li>Pro-rated refunds for unused service periods</li>
                        <li>API usage credits are non-refundable</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Consulting Services */}
                <div className="bg-secondary rounded-xl p-6 border border-border-color">
                  <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-accent-primary" />
                    Consulting Services
                  </h3>
                  <div className="space-y-4 text-text-secondary">
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Cancellation Policy:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>24-hour notice required for session cancellations</li>
                        <li>No charge for cancellations made 24+ hours in advance</li>
                        <li>50% charge for same-day cancellations</li>
                        <li>Full charge for no-shows</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Refund Policy:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Full refund if service quality is unsatisfactory</li>
                        <li>Pro-rated refunds for unused consultation hours</li>
                        <li>Refunds processed within 3-5 business days</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Ready-Made Solutions */}
                <div className="bg-secondary rounded-xl p-6 border border-border-color">
                  <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-accent-primary" />
                    Ready-Made Solutions
                  </h3>
                  <div className="space-y-4 text-text-secondary">
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Cancellation Policy:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>30-day cancellation period for customizations</li>
                        <li>No cancellation fees for standard implementations</li>
                        <li>Custom development follows development service policy</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Refund Policy:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>14-day money-back guarantee</li>
                        <li>Full refund if solution doesn't meet requirements</li>
                        <li>Setup fees are non-refundable after implementation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Refund Process */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-2xl p-8 border border-border-color"
            >
              <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-accent-primary" />
                Refund Process
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-accent-primary">1</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">Submit Request</h3>
                  <p className="text-sm text-text-secondary">
                    Contact our support team with your refund request and reason
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-accent-primary">2</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">Review Process</h3>
                  <p className="text-sm text-text-secondary">
                    Our team reviews your request within 2-3 business days
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-accent-primary">3</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">Refund Processing</h3>
                  <p className="text-sm text-text-secondary">
                    Approved refunds are processed within 5-7 business days
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Important Notes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-accent-primary/5 rounded-2xl p-8 border border-accent-primary/20"
            >
              <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-accent-primary" />
                Important Notes
              </h2>
              
              <div className="space-y-4 text-text-secondary">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    <strong className="text-text-primary">Payment Methods:</strong> Refunds will be processed using the same payment method used for the original transaction.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    <strong className="text-text-primary">Processing Time:</strong> Refund processing times may vary depending on your bank or payment provider (typically 3-10 business days).
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    <strong className="text-text-primary">Dispute Resolution:</strong> If you're not satisfied with our refund decision, you can escalate your concern to our management team.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    <strong className="text-text-primary">Policy Updates:</strong> This policy may be updated from time to time. Changes will be communicated via email and posted on our website.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-2xl p-8 border border-border-color text-center"
            >
              <h2 className="text-2xl font-bold text-text-primary mb-4">Need Help?</h2>
              <p className="text-text-secondary mb-6">
                If you have any questions about our refund and cancellation policy or need assistance with a refund request, please contact us.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@teckstaq.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent-primary text-white rounded-lg hover:bg-accent-secondary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  info@teckstaq.com
                </a>
                
                <button
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate('/get-quote');
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-accent-primary text-accent-primary rounded-lg hover:bg-accent-primary hover:text-white transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  Contact Support
                </button>
              </div>
            </motion.div>

            {/* Last Updated */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center text-text-secondary text-sm"
            >
              <p>Last updated: January 2025</p>
              <p className="mt-2">© 2025 Invincible Young Technologies Pvt Ltd. All rights reserved.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundCancellationPolicy;
