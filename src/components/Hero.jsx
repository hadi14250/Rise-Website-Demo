import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="badge fade-in">🚀 Transforming Organizations Since 2003</div>
          <h1 className="hero-title fade-in">
            <span className="title-line">Empowering Organizations</span>
            <span className="title-line highlight">Through Excellence</span>
          </h1>
          <p className="hero-subtitle fade-in" style={{ animationDelay: '0.2s' }}>
            Transform your workforce with innovative training, coaching, and HR solutions
            designed to drive sustainable growth and lasting impact.
          </p>
          <div className="hero-stats fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="stat-item">
              <div className="stat-number">101+</div>
              <div className="stat-label">Programs Delivered</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">41+</div>
              <div className="stat-label">Industries Served</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
          <div className="hero-cta fade-in" style={{ animationDelay: '0.4s' }}>
            <button onClick={scrollToContact} className="btn btn-primary btn-lg">
              <span>Let's Talk</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-secondary btn-lg"
            >
              <span>Discover More</span>
            </button>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero;
