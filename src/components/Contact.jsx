import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo purposes only - in production, this would send to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Let's Start a Conversation</h2>
        <p className="section-subtitle animate-on-scroll">
          Ready to transform your organization? Get in touch with us today.
        </p>
        <div className="contact-wrapper">
          <div className="contact-info animate-on-scroll slide-in-left">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h3>Email Us</h3>
                <p>info@riseglobal.me</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div>
                <h3>Call Us</h3>
                <p>+961 XX XXX XXX</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h3>Visit Us</h3>
                <p>Dubai, UAE</p>
              </div>
            </div>
            <div className="contact-cta">
              <p className="cta-text">Prefer instant messaging?</p>
              <a
                href="https://wa.me/971506669529"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <form className="contact-form animate-on-scroll slide-in-right" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell us about your needs..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block" disabled={submitted}>
              {submitted ? 'Message Sent! ✓' : 'Send Message'}
            </button>
            {submitted && (
              <p className="success-message">Thank you! We'll get back to you soon.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
