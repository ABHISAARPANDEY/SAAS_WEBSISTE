import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Zap, 
  Globe, 
  Clock, 
  MapPin,
  ChevronRight
} from 'lucide-react';

const Career = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Join our engineering team to build cutting-edge software solutions using React, Node.js, and cloud technologies.',
      requirements: ['React/Next.js', 'Node.js', 'TypeScript', 'AWS/Azure', 'MongoDB/PostgreSQL'],
      benefits: ['Competitive Salary', 'Health Insurance', 'Remote Work', 'Learning Budget']
    },
    {
      id: 2,
      title: 'AI/ML Engineer',
      department: 'AI & Research',
      location: 'Remote',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Develop AI-powered solutions and machine learning models for our automation and content generation platforms.',
      requirements: ['Python', 'TensorFlow/PyTorch', 'NLP', 'Computer Vision', 'MLOps'],
      benefits: ['Competitive Salary', 'Health Insurance', 'Remote Work', 'Conference Budget']
    },
    {
      id: 3,
      title: 'Product Manager',
      department: 'Product',
      location: 'Hybrid',
      type: 'Full-time',
      experience: '4-6 years',
      description: 'Lead product strategy and development for our marketplace and automation platforms.',
      requirements: ['Product Strategy', 'Agile/Scrum', 'Data Analysis', 'User Research', 'Technical Background'],
      benefits: ['Competitive Salary', 'Health Insurance', 'Stock Options', 'Flexible Hours']
    },
    {
      id: 4,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Create beautiful and intuitive user experiences for our web and mobile applications.',
      requirements: ['Figma/Sketch', 'User Research', 'Prototyping', 'Design Systems', 'Frontend Basics'],
      benefits: ['Competitive Salary', 'Health Insurance', 'Remote Work', 'Design Tools Budget']
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Build and maintain our cloud infrastructure, CI/CD pipelines, and deployment systems.',
      requirements: ['AWS/Azure/GCP', 'Docker/Kubernetes', 'Terraform', 'Jenkins/GitHub Actions', 'Linux'],
      benefits: ['Competitive Salary', 'Health Insurance', 'Remote Work', 'Certification Budget']
    },
    {
      id: 6,
      title: 'Sales Development Representative',
      department: 'Sales',
      location: 'Hybrid',
      type: 'Full-time',
      experience: '1-3 years',
      description: 'Generate leads and drive business growth through outbound sales activities.',
      requirements: ['Sales Experience', 'CRM Tools', 'Communication Skills', 'Tech Knowledge', 'Results-Driven'],
      benefits: ['Competitive Salary', 'Commission', 'Health Insurance', 'Career Growth']
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs.'
    },
    {
      icon: Zap,
      title: 'Learning & Growth',
      description: 'Continuous learning opportunities, conference budgets, and career development programs.'
    },
    {
      icon: Globe,
      title: 'Remote Work',
      description: 'Flexible remote work options with home office setup and internet allowances.'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Flexible hours, unlimited PTO, and family-friendly policies.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-primary-dark">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
              Join Our <span className="text-accent-primary">Team</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Build the future of technology with us. We're looking for passionate individuals who want to make a difference.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-text-secondary">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-accent-primary" />
                <span>50+ Team Members</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-accent-primary" />
                <span>Remote First</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent-primary" />
                <span>Fast Growing</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Why Work With Us?
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We believe in creating an environment where you can thrive and grow both personally and professionally.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-accent-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">{benefit.title}</h3>
                <p className="text-text-secondary text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Open Positions
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Explore our current openings and find the perfect role for your next career move.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-border-color hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">{job.title}</h3>
                    <p className="text-accent-primary font-medium">{job.department}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-text-secondary" />
                </div>

                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <Briefcase className="w-4 h-4" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <Clock className="w-4 h-4" />
                    <span>{job.experience}</span>
                  </div>
                </div>

                <p className="text-text-secondary mb-4">{job.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-text-primary mb-2">Requirements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req, i) => (
                      <span key={i} className="px-3 py-1 bg-accent-primary/10 text-accent-primary rounded-full text-sm">
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-text-primary mb-2">Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.benefits.map((benefit, i) => (
                      <span key={i} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-accent-primary text-white py-3 px-6 rounded-xl font-semibold hover:bg-accent-primary/90 transition-colors duration-300">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent-primary to-accent-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don't See Your Role?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button className="bg-white text-accent-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
              Send Resume
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Career; 