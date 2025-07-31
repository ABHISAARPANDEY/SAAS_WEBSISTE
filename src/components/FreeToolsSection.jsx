import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Calculator, 
  Code, 
  FileText, 
  Settings, 
  Palette, 
  Database, 
  Globe, 
  Shield,
  ChevronRight
} from 'lucide-react';

const FreeToolsSection = () => {
  const navigate = useNavigate();

  const toolCategories = [
    {
      id: 'calculators',
      title: 'Calculators',
      description: 'Financial calculators, unit converters, and mathematical tools for quick calculations.',
      icon: Calculator,
      gradient: 'from-blue-600 via-cyan-500 to-teal-500',
      features: ['Financial', 'Unit Converter', 'Math Tools', 'Currency'],
      buttonText: 'View Calculators',
      action: () => {
        console.log('Calculators card clicked');
        navigate('/free-tools');
      }
    },
    {
      id: 'generators',
      title: 'Generators',
      description: 'Password generators, text generators, and utility tools for content creation.',
      icon: FileText,
      gradient: 'from-purple-600 via-pink-600 to-orange-500',
      features: ['Password', 'Text', 'Content', 'Utilities'],
      buttonText: 'View Generators',
      action: () => {
        console.log('Generators card clicked');
        navigate('/free-tools');
      }
    },
    {
      id: 'development',
      title: 'Development Tools',
      description: 'Code formatters, validators, and development utilities for programmers.',
      icon: Code,
      gradient: 'from-green-600 via-emerald-500 to-teal-500',
      features: ['Code Format', 'Validators', 'Debugging', 'Testing'],
      buttonText: 'View Dev Tools',
      action: () => {
        console.log('Development Tools card clicked');
        navigate('/free-tools');
      }
    },
    {
      id: 'design',
      title: 'Design Tools',
      description: 'Color palettes, typography tools, and design utilities for creatives.',
      icon: Palette,
      gradient: 'from-pink-600 via-rose-500 to-red-500',
      features: ['Color Palettes', 'Typography', 'Icons', 'Templates'],
      buttonText: 'View Design Tools',
      action: () => {
        console.log('Design Tools card clicked');
        navigate('/free-tools');
      }
    },
    {
      id: 'utilities',
      title: 'Utilities',
      description: 'File converters, data tools, and productivity utilities for everyday tasks.',
      icon: Settings,
      gradient: 'from-orange-600 via-red-500 to-pink-500',
      features: ['File Convert', 'Data Tools', 'Productivity', 'System'],
      buttonText: 'View Utilities',
      action: () => {
        console.log('Utilities card clicked');
        navigate('/free-tools');
      }
    },
    {
      id: 'security',
      title: 'Security Tools',
      description: 'Encryption tools, security checkers, and privacy utilities.',
      icon: Shield,
      gradient: 'from-indigo-600 via-purple-500 to-pink-500',
      features: ['Encryption', 'Security Check', 'Privacy', 'VPN'],
      buttonText: 'View Security Tools',
      action: () => {
        console.log('Security Tools card clicked');
        navigate('/free-tools');
      }
    }
  ];

  return (
    <section id="free-tools-section" className="py-20 bg-gradient-to-b from-primary-dark to-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Free <span className="text-accent-primary">Tools</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Access powerful development tools, calculators, generators, and utilities completely free
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolCategories.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group cursor-pointer"
              onClick={tool.action}
            >
              <div className={`bg-gradient-to-br ${tool.gradient} rounded-2xl p-8 h-full shadow-2xl border border-white/20 backdrop-blur-sm hover:shadow-3xl transition-all duration-300`}>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                  <ChevronRight className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{tool.title}</h3>
                <p className="text-white/90 text-sm mb-6 leading-relaxed">
                  {tool.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {tool.features.map((feature, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-white text-xs font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 border border-white/30">
                  {tool.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeToolsSection; 