import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
  index?: number;
  color?: 'primary' | 'gold' | 'teal' | 'blue';
  image?: string;
}

const colorClasses = {
  primary: {
    bg: 'bg-primary-50',
    iconBg: 'bg-gradient-to-br from-primary-500 to-primary-600',
    hover: 'group-hover:bg-primary-500',
    text: 'text-primary-600',
  },
  gold: {
    bg: 'bg-amber-50',
    iconBg: 'bg-gradient-to-br from-accent-500 to-accent-600',
    hover: 'group-hover:bg-accent-500',
    text: 'text-accent-600',
  },
  teal: {
    bg: 'bg-teal-50',
    iconBg: 'bg-gradient-to-br from-teal-500 to-teal-600',
    hover: 'group-hover:bg-teal-500',
    text: 'text-teal-600',
  },
  blue: {
    bg: 'bg-blue-50',
    iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600',
    hover: 'group-hover:bg-blue-500',
    text: 'text-blue-600',
  },
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  index = 0,
  color = 'primary',
  image,
}) => {
  const colors = colorClasses[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="block group h-full">
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
        >
          {/* Image */}
          {image && (
            <div className="relative h-48 overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`absolute bottom-4 left-4 w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center text-white text-xl shadow-lg`}
              >
                {icon}
              </motion.div>
            </div>
          )}

          {/* Content */}
          <div className="relative z-10 p-6">
            {/* Icon (only if no image) */}
            {!image && (
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-16 h-16 ${colors.iconBg} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg mb-6`}
              >
                {icon}
              </motion.div>
            )}

            {/* Title */}
            <h3 className="text-xl font-heading font-bold text-dark-800 mb-3 group-hover:text-dark-900 transition-colors">
              {title}
            </h3>

            {/* Description */}
            <p className="text-dark-500 leading-relaxed text-sm">
              {description}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
