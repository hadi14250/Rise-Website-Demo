import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image animate-on-scroll slide-in-left">
            <img src="/images/handshake.webp" alt="Partnership and collaboration" loading="lazy" />
          </div>
          <div className="about-content animate-on-scroll slide-in-right">
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              We Rise By Lifting Others
            </h2>
            <p className="about-text">
              RISE is a leading provider of integrated training and human resource solutions.
              We partner with organizations to unlock their full potential through tailored
              programs that address real business challenges.
            </p>
            <p className="about-text">
              With over 20 years of experience and 100+ programs delivered across 40+ industries,
              we combine proven methodologies with innovative approaches to deliver measurable results.
            </p>
            <div className="about-values">
              <div className="value-item">
                <div className="value-icon">🎯</div>
                <h3>Results-Driven</h3>
                <p>Focused on measurable business impact</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <h3>Collaborative</h3>
                <p>True partnership at every step</p>
              </div>
              <div className="value-item">
                <div className="value-icon">💡</div>
                <h3>Innovative</h3>
                <p>Cutting-edge learning solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
