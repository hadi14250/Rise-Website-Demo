import React from 'react';
import '../styles/Differentiators.css';

const Differentiators = () => {
  return (
    <section className="differentiators section" id="differentiators">
      <div className="container">
        <h2 className="section-title animate-on-scroll">What Differentiates Us</h2>
        <p className="section-subtitle animate-on-scroll">
          Our unique approach sets us apart in the industry
        </p>
        <div className="diff-grid">
          <div className="diff-image animate-on-scroll">
            <img src="/images/differentiates-us.avif" alt="What makes RISE different" loading="lazy" />
          </div>
          <div className="diff-content">
            <div className="diff-item animate-on-scroll stagger-1">
              <div className="diff-number">01</div>
              <div className="diff-text">
                <h3>Tailored Solutions</h3>
                <p>We don't believe in one-size-fits-all. Every program is customized to your specific challenges and goals.</p>
              </div>
            </div>
            <div className="diff-item animate-on-scroll stagger-2">
              <div className="diff-number">02</div>
              <div className="diff-text">
                <h3>Proven Track Record</h3>
                <p>20+ years of experience delivering results across diverse industries with measurable business impact.</p>
              </div>
            </div>
            <div className="diff-item animate-on-scroll stagger-3">
              <div className="diff-number">03</div>
              <div className="diff-text">
                <h3>Expert Team</h3>
                <p>Industry-leading facilitators and consultants with deep expertise and real-world business experience.</p>
              </div>
            </div>
            <div className="diff-item animate-on-scroll stagger-4">
              <div className="diff-number">04</div>
              <div className="diff-text">
                <h3>Sustainable Impact</h3>
                <p>We focus on long-term transformation, not quick fixes. Our solutions create lasting organizational change.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
