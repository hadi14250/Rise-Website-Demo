import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img src="/images/rise-logo.png" alt="RISE" className="footer-logo" />
            <p className="footer-tagline">
              Empowering organizations through excellence in training and HR solutions.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Solutions</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Our Services</h3>
            <ul className="footer-links">
              <li><a href="#services">Training Solutions</a></li>
              <li><a href="#services">Coaching Solutions</a></li>
              <li><a href="#services">E-Learning</a></li>
              <li><a href="#services">HR Consultancy</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Get in Touch</h3>
            <ul className="footer-contact">
              <li>📧 info@riseglobal.me</li>
              <li>📱 +971 XX XXX XXX</li>
              <li>📍 Dubai, UAE</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} RISE. All rights reserved.</p>
          <button onClick={scrollToTop} className="back-to-top" aria-label="Back to top">
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
