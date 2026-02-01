import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'gold' | 'white' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  icon,
  iconPosition = 'right',
  className = '',
  disabled = false,
  loading = false,
  fullWidth = false,
}) => {
  const baseClasses = `
    inline-flex items-center justify-center gap-2 font-semibold rounded-full 
    transition-all duration-300 transform 
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
  `;

  const sizeClasses = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-8 py-3.5 text-base',
    lg: 'px-10 py-4.5 text-lg',
  };

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-primary-500 to-primary-600 text-white 
      hover:from-primary-600 hover:to-primary-700 
      hover:shadow-glow hover:scale-105 active:scale-95
      focus:ring-primary-500
    `,
    secondary: `
      border-2 border-primary-500 text-primary-500 bg-transparent
      hover:bg-primary-500 hover:text-white hover:shadow-glow
      focus:ring-primary-500
    `,
    gold: `
      bg-gradient-to-r from-accent-500 to-accent-600 text-white 
      hover:from-accent-600 hover:to-accent-700 
      hover:shadow-glow-gold hover:scale-105 active:scale-95
      focus:ring-accent-500
    `,
    white: `
      bg-white text-dark-800 
      hover:bg-dark-50 hover:shadow-lg hover:scale-105 active:scale-95
      focus:ring-white
    `,
    ghost: `
      text-dark-600 hover:text-primary-500 hover:bg-primary-50
      focus:ring-primary-500
    `,
  };

  const classes = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  const content = (
    <>
      {loading && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
        />
      )}
      {!loading && icon && iconPosition === 'left' && icon}
      <span>{children}</span>
      {!loading && icon && iconPosition === 'right' && icon}
      {!loading && !icon && (
        <motion.span
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          className="inline-block"
        >
          <HiArrowRight />
        </motion.span>
      )}
    </>
  );

  if (to) {
    // Handle hash links for smooth scrolling
    if (to.includes('#')) {
      const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const sectionId = to.split('#')[1];
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      
      return (
        <motion.div whileHover={{ scale: disabled ? 1 : 1.02 }} whileTap={{ scale: disabled ? 1 : 0.98 }}>
          <a href={to} onClick={handleClick} className={classes}>
            {content}
          </a>
        </motion.div>
      );
    }
    
    return (
      <motion.div whileHover={{ scale: disabled ? 1 : 1.02 }} whileTap={{ scale: disabled ? 1 : 0.98 }}>
        <Link to={to} className={classes}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        className={classes}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={classes}
    >
      {content}
    </motion.button>
  );
};

export default Button;
