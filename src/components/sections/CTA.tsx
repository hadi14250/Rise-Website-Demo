import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import Button from '../ui/Button';

const CTA: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 right-0 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 section-container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-6">
              Ready to Transform?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
          >
            Let's Elevate Your{' '}
            <span className="relative inline-block">
              Team's Potential
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-white/50 origin-left rounded-full"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Connect with our team to discover how Rise Global can help you build a stronger, more capable organization.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              href="https://wa.me/971506669529"
              variant="white"
              size="lg"
              icon={<FaWhatsapp className="text-xl text-green-500" />}
              iconPosition="left"
            >
              Chat on WhatsApp
            </Button>
            <Button
              href="mailto:cs@riseglobal.me"
              variant="secondary"
              size="lg"
              icon={<FaEnvelope className="text-lg" />}
              iconPosition="left"
              className="border-white text-white hover:bg-white hover:text-primary-600"
            >
              Send Email
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 pt-12 border-t border-white/20"
          >
            <p className="text-white/60 text-sm mb-4">Or reach us directly at</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white">
              <a
                href="mailto:cs@riseglobal.me"
                className="flex items-center gap-2 hover:text-accent-300 transition-colors"
              >
                <FaEnvelope />
                <span>cs@riseglobal.me</span>
              </a>
              <span className="hidden sm:inline text-white/30">|</span>
              <a
                href="tel:+971506669529"
                className="flex items-center gap-2 hover:text-accent-300 transition-colors"
              >
                <FaWhatsapp />
                <span>+971 50 666 9529</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
