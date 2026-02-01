import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiPlay, HiArrowDown } from 'react-icons/hi';
import Button from '../ui/Button';

// Animated counter component
const AnimatedCounter: React.FC<{ target: number; duration?: number; prefix?: string }> = ({ 
  target, 
  duration = 2000,
  prefix = '+' 
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return <span ref={ref}>{prefix}{count}</span>;
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-primary-900" />
        
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl"
        />

        {/* Pattern Overlay */}
        <div className="absolute inset-0 bg-hero-pattern opacity-10" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center py-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium border border-white/10">
            <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
            Professional Development Excellence
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight"
        >
          Your Professional{' '}
          <span className="relative inline-block">
            <span className="text-primary-400">Development</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 origin-left rounded-full"
            />
          </span>
          <br />
          Partner
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          We enable people and businesses to achieve their highest capabilities through 
          personalized guidance & customized programs
        </motion.p>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <span className="inline-block text-lg md:text-xl font-accent italic text-primary-300">
            "We rise by lifting others"
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button to="/#solutions" variant="primary" size="lg">
            Explore Solutions
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            {/* Stat 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary-400 mb-1">
                <AnimatedCounter target={101} duration={2000} />
              </div>
              <div className="text-white/60 text-sm md:text-base font-medium tracking-wide">
                Programs Offered
              </div>
            </motion.div>

            {/* Divider */}
            <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
            <div className="md:hidden w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {/* Stat 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary-400 mb-1">
                <AnimatedCounter target={41} duration={1800} />
              </div>
              <div className="text-white/60 text-sm md:text-base font-medium tracking-wide">
                Industries Served
              </div>
            </motion.div>

            {/* Divider */}
            <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
            <div className="md:hidden w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {/* Stat 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary-400 mb-1">
                <AnimatedCounter target={20} duration={1500} />
              </div>
              <div className="text-white/60 text-sm md:text-base font-medium tracking-wide">
                Years of Experience
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <HiArrowDown className="text-2xl" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
