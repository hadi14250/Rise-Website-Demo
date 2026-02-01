import React from 'react';
import { motion, Variants } from 'framer-motion';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  titleHighlight?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  titleHighlight,
  centered = true,
  light = false,
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`mb-12 lg:mb-16 ${centered ? 'text-center' : ''}`}
    >
      {badge && (
        <motion.span
          variants={itemVariants}
          className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
            light
              ? 'bg-white/10 text-white/80'
              : 'bg-primary-50 text-primary-600'
          }`}
        >
          {badge}
        </motion.span>
      )}

      <motion.h2
        variants={itemVariants}
        className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 ${
          light ? 'text-white' : 'text-dark-800'
        }`}
      >
        {titleHighlight ? (
          <>
            {title.split(titleHighlight)[0]}
            <span className={light ? 'text-primary-400' : 'text-primary-500'}>{titleHighlight}</span>
            {title.split(titleHighlight)[1]}
          </>
        ) : (
          title
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={itemVariants}
          className={`text-lg md:text-xl max-w-3xl leading-relaxed ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-white/70' : 'text-dark-500'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
