import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const footerLinks = {
  solutions: [
    { name: 'Training Solutions', sectionId: 'solutions' },
    { name: 'Coaching Solutions', sectionId: 'solutions' },
    { name: 'E-Learning', sectionId: 'solutions' },
    { name: 'HR Consultancy', sectionId: 'solutions' },
  ],
  company: [
    { name: 'About Us', sectionId: 'about' },
    { name: 'Industries Served', sectionId: 'clients' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', sectionId: 'contact' },
  ],
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleFooterClick = (sectionId?: string, path?: string) => {
    if (path) {
      navigate(path);
      return;
    }
    if (sectionId) {
      if (location.pathname === '/') {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  return (
    <footer className="relative bg-dark-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5" />
      
      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

      <div className="relative section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/images/new-logo.png" 
                alt="Rise Global" 
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-dark-300 leading-relaxed mb-6">
              We rise by lifting others. Empowering individuals and organizations to achieve excellence through world-class training, coaching, and HR solutions.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: FaLinkedin, href: 'https://www.linkedin.com/company/rise-middle-east/', label: 'LinkedIn' },
                { icon: FaWhatsapp, href: 'https://wa.me/96179322109', label: 'WhatsApp' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center text-dark-400 hover:bg-primary-500 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Solutions Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading font-semibold text-lg mb-6 text-white">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleFooterClick(link.sectionId)}
                    className="text-dark-400 hover:text-primary-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-heading font-semibold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleFooterClick(link.sectionId, link.path)}
                    className="text-dark-400 hover:text-primary-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-heading font-semibold text-lg mb-6 text-white">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-dark-400 text-sm">
                  38th Floor, Media One Hotel - Office Tower,<br />
                  Dubai Media City, PO Box 334069,<br />
                  Dubai, UAE
                </span>
              </li>
              <li>
                <a
                  href="mailto:cs@riseglobal.me"
                  className="flex items-center gap-3 text-dark-400 hover:text-primary-400 transition-colors"
                >
                  <FaEnvelope className="text-primary-500" />
                  <span>cs@riseglobal.me</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/96179322109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-dark-400 hover:text-primary-400 transition-colors"
                >
                  <FaWhatsapp className="text-primary-500" />
                  <span>+961 79 322 109</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-dark-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <p className="text-dark-500 text-sm">
              © {currentYear} Rise Global. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
