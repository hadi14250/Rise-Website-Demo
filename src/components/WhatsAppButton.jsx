import React, { useState, useEffect } from 'react';
import '../styles/WhatsAppButton.css';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const whatsappNumber = '971506669529'; // Replace with actual number
  const message = 'Hello! I would like to learn more about RISE solutions.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-button ${isVisible ? 'visible' : ''}`}
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-4.713 1.262 1.262-4.669-0.292-0.508c-1.207-2.100-1.847-4.507-1.847-6.924 0-7.435 6.049-13.485 13.485-13.485s13.485 6.049 13.485 13.485c0 7.435-6.049 13.485-13.485 13.485zM21.605 18.605c-0.292-0.146-1.727-0.852-1.996-0.95-0.269-0.097-0.464-0.146-0.659 0.146s-0.757 0.95-0.928 1.146c-0.171 0.195-0.342 0.22-0.634 0.073-0.292-0.146-1.232-0.454-2.346-1.448-0.867-0.774-1.453-1.729-1.623-2.021s-0.018-0.45 0.128-0.595c0.131-0.131 0.292-0.342 0.439-0.513s0.195-0.293 0.293-0.488c0.098-0.195 0.049-0.366-0.024-0.513s-0.659-1.587-0.903-2.174c-0.238-0.571-0.479-0.494-0.659-0.503-0.171-0.008-0.366-0.010-0.561-0.010s-0.513 0.073-0.781 0.366c-0.269 0.292-1.025 1.001-1.025 2.442s1.050 2.833 1.197 3.028c0.146 0.195 2.064 3.148 5.001 4.417 0.699 0.302 1.244 0.483 1.669 0.618 0.703 0.223 1.342 0.191 1.847 0.116 0.564-0.084 1.727-0.706 1.970-1.388s0.244-1.267 0.171-1.388c-0.073-0.122-0.269-0.195-0.561-0.342z"/>
      </svg>
      <span className="whatsapp-tooltip">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
