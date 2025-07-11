import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  Award, 
  Clock, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Star,
  Globe,
  Zap,
  Heart,
  Target,
  TrendingUp,
  Code,
  Smartphone,
  Bot,
  Database,
  Cloud,
  Layers,
  FileText,
  MessageSquare,
  TestTube,
  Rocket,
  HeadphonesIcon,
  Gift
} from 'lucide-react';

const About = () => {
  const navigate = useNavigate();
  const [activeProcess, setActiveProcess] = useState(0);

  const expertise = [
    { name: 'Custom Software Development', icon: Code, years: '8+' },
    { name: 'Mobile App Development', icon: Smartphone, years: '6+' },
    { name: 'Web Application Development', icon: Globe, years: '8+' },
    { name: 'E-commerce Solutions', icon: TrendingUp, years: '5+' },
    { name: 'Cloud Computing Services', icon: Cloud, years: '4+' },
    { name: 'UI/UX Design', icon: Layers, years: '7+' },
    { name: 'Digital Transformation', icon: Zap, years: '5+' },
    { name: 'Enterprise Solutions', icon: Database, years: '6+' }
  ];

  const workingProcess = [
    {
      id: 1,
      title: 'Project Quotation',
      icon: FileText,
      description: 'We provide detailed cost estimates based on your requirements, ensuring transparency and value for your investment.',
      details: [
        'Comprehensive requirement analysis',
        'Transparent pricing breakdown',
        'Timeline estimation',
        'Technology stack recommendation'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Service Agreement',
      icon: Shield,
      description: 'We formalize our partnership through a comprehensive agreement that protects your interests and outlines deliverables.',
      details: [
        'Legal protection for both parties',
        'Clear deliverable definitions',
        'Milestone-based payments',
        'Intellectual property rights'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      title: 'Development Phases',
      icon: Code,
      description: 'Structured development approach ensuring quality delivery at every stage.',
      phases: [
        {
          name: 'Phase 1: Planning & Design',
          items: ['Requirements analysis', 'Architecture planning', 'UI/UX design approval']
        },
        {
          name: 'Phase 2: Core Development',
          items: ['Foundation building', 'Core functionality implementation', 'Database integration']
        },
        {
          name: 'Phase 3: Advanced Features',
          items: ['Implementation of complex features', 'Integration of third-party services', 'Security implementation']
        },
        {
          name: 'Phase 4: Quality Assurance',
          items: ['Comprehensive testing', 'Performance optimization', 'Bug fixing']
        }
      ],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 4,
      title: 'Weekly Updates',
      icon: MessageSquare,
      description: 'We maintain constant communication through regular progress reports and milestone reviews.',
      details: [
        'Weekly progress reports',
        'Milestone reviews',
        'Client feedback integration',
        'Real-time project tracking'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'Beta Testing',
      icon: TestTube,
      description: 'Rigorous testing in controlled environments to ensure optimal performance before launch.',
      details: [
        'Controlled environment testing',
        'Performance monitoring',
        'User feedback collection',
        'Security vulnerability assessment'
      ],
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 6,
      title: 'Global Launch',
      icon: Rocket,
      description: 'Final optimization and deployment to bring your solution to market successfully.',
      details: [
        'Final optimization',
        'Production deployment',
        'Market release strategy',
        'Launch monitoring'
      ],
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const whyChooseUs = [
    { title: 'Proven Track Record', icon: Award, description: 'Successfully delivered 200+ projects across various industries' },
    { title: 'Dedicated Project Teams', icon: Users, description: 'Assigned dedicated teams for focused project execution' },
    { title: 'Cutting-edge Technology', icon: Zap, description: 'Latest technologies and frameworks for modern solutions' },
    { title: 'Transparent Communication', icon: MessageSquare, description: 'Regular updates and clear communication throughout' },
    { title: 'Cost-effective Solutions', icon: Target, description: 'Competitive pricing without compromising on quality' },
    { title: '24/7 Technical Support', icon: HeadphonesIcon, description: 'Round-the-clock support for critical issues' },
    { title: 'Industry Best Practices', icon: CheckCircle, description: 'Following established standards and methodologies' },
    { title: 'Scalable Solutions', icon: TrendingUp, description: 'Built to grow with your business needs' }
  ];

  const stats = [
    { number: '200+', label: 'Projects Completed', icon: Award },
    { number: '50+', label: 'Happy Clients', icon: Heart },
    { number: '8+', label: 'Years Experience', icon: Clock },
    { number: '15+', label: 'Team Members', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-dark-primary">
      {/* Hero Section */}
      <section className="relative py-20 bg-dark-primary overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 border border-neon-green rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 border border-neon-cyan rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-neon-green opacity-10 rounded-full animate-ping"></div>
          <div className="absolute bottom-40 right-10 w-24 h-24 border border-neon-pink rounded-full opacity-20 animate-pulse"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold text-text-primary leading-tight mb-6"
            >
              About <span className="gradient-neon-text neon-text">SaaS Agency</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed mb-8"
            >
              We transform digital ideas into powerful solutions. With over 8 years of industry experience, 
              we specialize in delivering cutting-edge technology solutions that drive business growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/get-quote')}
                className="btn-neon px-8 py-4 rounded-full font-orbitron font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 text-dark-primary" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/marketplace')}
                className="glass-effect text-neon-cyan px-8 py-4 rounded-full font-orbitron font-semibold text-lg border border-neon-cyan hover:neon-glow-cyan transition-all duration-300"
              >
                Explore Solutions
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-dark-secondary border-t border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 border border-neon-green rounded-2xl flex items-center justify-center mx-auto mb-4 pulse-neon">
                  <stat.icon className="w-8 h-8 text-neon-green" />
                </div>
                <div className="text-4xl md:text-5xl font-orbitron font-bold text-neon-green neon-text mb-2">{stat.number}</div>
                <div className="text-text-secondary font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 bg-dark-primary border-t border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-text-primary mb-6">
              Our <span className="gradient-neon-text neon-text">Expertise</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Comprehensive technology solutions backed by years of experience and industry expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card-dark rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 border border-neon-cyan rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 pulse-neon">
                  <skill.icon className="w-8 h-8 text-neon-cyan" />
                </div>
                <h3 className="text-lg font-orbitron font-bold text-text-primary mb-2 group-hover:text-neon-cyan transition-colors">
                  {skill.name}
                </h3>
                <div className="text-2xl font-bold text-neon-cyan">{skill.years}</div>
                <div className="text-sm text-text-secondary">Experience</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Process */}
      <section className="py-20 bg-dark-secondary border-t border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-text-primary mb-6">
              Our Working <span className="gradient-neon-text neon-text">Process</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery from concept to launch
            </p>
          </motion.div>

          {/* Process Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {workingProcess.map((process, index) => (
              <button
                key={process.id}
                onClick={() => setActiveProcess(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeProcess === index
                    ? 'btn-neon shadow-lg'
                    : 'bg-dark-tertiary text-text-secondary hover:bg-dark-tertiary/80 border border-dark hover:border-neon-green/50'
                }`}
              >
                {process.title}
              </button>
            ))}
          </div>

          {/* Active Process Details */}
          <motion.div
            key={activeProcess}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-dark-tertiary rounded-2xl p-8 shadow-lg border border-dark"
          >
            <div className="flex items-start gap-6">
              <div className={`w-20 h-20 rounded-2xl border border-neon-green flex items-center justify-center flex-shrink-0 pulse-neon`}>
                {(() => {
                  const CurrentIcon = workingProcess[activeProcess].icon;
                  return <CurrentIcon className="w-10 h-10 text-neon-green" />;
                })()}
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-orbitron font-bold text-text-primary mb-4">
                  {workingProcess[activeProcess].title}
                </h3>
                <p className="text-lg text-text-secondary mb-6">
                  {workingProcess[activeProcess].description}
                </p>

                {workingProcess[activeProcess].details && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {workingProcess[activeProcess].details.map((detail, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-neon-green flex-shrink-0" />
                        <span className="text-text-secondary">{detail}</span>
                      </div>
                    ))}
                  </div>
                )}

                {workingProcess[activeProcess].phases && (
                  <div className="space-y-6">
                    {workingProcess[activeProcess].phases.map((phase, phaseIndex) => (
                      <div key={phaseIndex} className="bg-dark-primary rounded-xl p-6 border border-dark">
                        <h4 className="text-lg font-orbitron font-bold text-text-primary mb-3">{phase.name}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {phase.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-neon-green flex-shrink-0" />
                              <span className="text-sm text-text-secondary">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-dark-primary border-t border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-text-primary mb-6">
              Why Choose <span className="gradient-neon-text neon-text">Us?</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              We deliver exceptional value through our commitment to quality, innovation, and client success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card-dark rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 border border-neon-pink rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 pulse-neon">
                  <reason.icon className="w-8 h-8 text-neon-pink" />
                </div>
                <h3 className="text-lg font-orbitron font-bold text-text-primary mb-3 group-hover:text-neon-pink transition-colors">
                  {reason.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offering */}
      <section className="py-20 bg-dark-secondary border-t border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-dark-tertiary rounded-2xl p-8 md:p-12 shadow-xl border border-neon-green max-w-4xl mx-auto">
              <div className="w-20 h-20 border border-neon-green rounded-2xl flex items-center justify-center mx-auto mb-6 pulse-neon">
                <Gift className="w-10 h-10 text-neon-green" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-text-primary mb-4">
                Special Offering: <span className="text-neon-green neon-text">3 Months Free Support</span>
              </h2>
              
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Every project comes with three months of complimentary maintenance and support, 
                ensuring your solution operates at peak performance from day one.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-dark-primary border border-neon-green rounded-xl flex items-center justify-center mx-auto mb-3">
                    <HeadphonesIcon className="w-6 h-6 text-neon-green" />
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">24/7 Support</h3>
                  <p className="text-sm text-text-secondary">Round-the-clock technical assistance</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-dark-primary border border-neon-cyan rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">Performance Monitoring</h3>
                  <p className="text-sm text-text-secondary">Continuous system optimization</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-dark-primary border border-neon-pink rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-neon-pink" />
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">Security Updates</h3>
                  <p className="text-sm text-text-secondary">Regular security patches and updates</p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/get-quote')}
                className="btn-neon px-8 py-4 rounded-full font-orbitron font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
              >
                Claim Free Support
                <ArrowRight className="w-5 h-5 text-dark-primary" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-primary border-t border-dark">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 border border-neon-green rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 border border-neon-cyan rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-neon-green opacity-10 rounded-full animate-ping"></div>
          <div className="absolute bottom-40 right-10 w-24 h-24 border border-neon-pink rounded-full opacity-20 animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-text-primary">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Let's discuss how our expertise can help you achieve your digital transformation goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/get-quote')}
                className="btn-neon px-8 py-4 rounded-full font-orbitron font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5 text-dark-primary" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/marketplace')}
                className="glass-effect text-neon-cyan px-8 py-4 rounded-full font-orbitron font-semibold text-lg border border-neon-cyan hover:neon-glow-cyan transition-all duration-300"
              >
                Explore Our Solutions
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;