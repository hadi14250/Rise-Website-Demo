import React from 'react';
import { motion } from 'framer-motion';
import { HiCheck, HiStar, HiLightningBolt, HiGlobe } from 'react-icons/hi';
import { FaTrophy, FaCheckCircle } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';

const differentiators = [
  {
    icon: <HiGlobe className="w-8 h-8" />,
    title: 'Integrated Professional Development Ecosystem',
    description: 'A comprehensive suite of interconnected solutions that work seamlessly together to accelerate your organizational growth.',
  },
  {
    icon: <HiStar className="w-8 h-8" />,
    title: 'Premium Client Experience',
    description: 'Dedicated account management and personalized support ensure every engagement exceeds expectations.',
  },
  {
    icon: <HiLightningBolt className="w-8 h-8" />,
    title: 'Real-World Practicality',
    description: 'Programs designed with practical application in mind, ensuring immediate impact in your workplace.',
  },
  {
    icon: <HiCheck className="w-8 h-8" />,
    title: '40+ Industries Track Record',
    description: 'Proven expertise across diverse sectors from automotive to telecommunications, healthcare to government.',
  },
];

const Differentiators: React.FC = () => {
  return (
    <section id="differentiators" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-950 to-primary-900" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 border border-white/5 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-1/4 -left-1/4 w-2/3 h-2/3 border border-white/5 rounded-full"
        />
      </div>

      <div className="relative z-10 section-container">
        <SectionHeading
          badge="Why Choose Us"
          title="What Differentiates Us"
          titleHighlight="Differentiates"
          subtitle="Discover the unique advantages that make Rise Global your ideal professional development partner."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative h-full p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-primary-500/50 transition-all duration-500"
              >
                {/* Icon */}
                <div className="flex items-start gap-5">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white shadow-glow"
                  >
                    {item.icon}
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-transparent transform rotate-45 translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-500" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Differentiators;
