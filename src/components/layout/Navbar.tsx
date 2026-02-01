import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { useMobileMenu } from '../../context/MobileMenuContext';

const navLinks = [
  { name: 'Home', path: '/', sectionId: 'home' },
  { name: 'About Us', path: '/#about', sectionId: 'about' },
  { name: 'Solutions', path: '/#solutions', sectionId: 'solutions' },
  { name: 'What Differentiates Us', path: '/#differentiators', sectionId: 'differentiators' },
  { name: 'Industries Served', path: '/#clients', sectionId: 'clients' },
  { name: 'Contact', path: '/#contact', sectionId: 'contact' },
  { name: 'Careers', path: '/careers', sectionId: null },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Scroll spy - detect which section is currently in view
      if (location.pathname === '/') {
        const sections = ['home', 'about', 'solutions', 'differentiators', 'clients', 'contact'];
        const scrollPosition = window.scrollY + 150;
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    // Reset active section when navigating to a different page
    if (location.pathname !== '/') {
      setActiveSection('');
    } else {
      setActiveSection('home');
    }
  }, [location]);

  const handleNavClick = (path: string, sectionId: string | null) => {
    if (sectionId && location.pathname === '/') {
      // On home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (sectionId) {
      // Not on home page, navigate to home first then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Regular page navigation
      navigate(path);
    }
    setIsMobileMenuOpen(false);
  };

  const isActive = (link: typeof navLinks[0]) => {
    // For Careers page
    if (link.sectionId === null) {
      return location.pathname === link.path;
    }
    // For home page sections
    if (location.pathname === '/') {
      return activeSection === link.sectionId;
    }
    return false;
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-hidden ${
          isScrolled
            ? 'bg-dark-900/95 backdrop-blur-lg shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="section-container">
          <nav className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link to="/" className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center"
              >
                <img 
                  src="/images/new-logo.png" 
                  alt="Rise Global" 
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path, link.sectionId)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg group ${
                    isActive(link)
                      ? 'text-primary-400'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                  <motion.span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{
                      width: isActive(link) ? '60%' : 0,
                    }}
                    whileHover={{ width: '60%' }}
                    transition={{ duration: 0.3 }}
                  />
                </button>
              ))}
            </div>

            {/* CTA & Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <motion.a
                href="https://wa.me/96179322109"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <FaWhatsapp className="text-lg" />
                <span>WhatsApp</span>
              </motion.a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${isMobileMenuOpen ? 'text-dark-800' : 'text-white'}`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-dark-900/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-2xl"
            >
              <div className="flex flex-col h-full pt-24 pb-8 px-6">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <button
                        onClick={() => handleNavClick(link.path, link.sectionId)}
                        className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-colors ${
                          isActive(link)
                            ? 'bg-primary-50 text-primary-600'
                            : 'text-dark-600 hover:bg-dark-50'
                        }`}
                      >
                        {link.name}
                      </button>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-dark-100">
                  <motion.a
                    href="https://wa.me/96179322109"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl"
                  >
                    <FaWhatsapp className="text-xl" />
                    <span>Chat on WhatsApp</span>
                  </motion.a>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
