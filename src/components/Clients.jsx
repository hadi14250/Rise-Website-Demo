import React from 'react';
import '../styles/Clients.css';

const Clients = () => {
  const industries = [
    { icon: '🏭', name: 'Manufacturing', desc: 'Industrial & Production' },
    { icon: '🏥', name: 'Healthcare', desc: 'Medical & Wellness' },
    { icon: '🏦', name: 'Financial Services', desc: 'Banking & Finance' },
    { icon: '🛒', name: 'Retail', desc: 'Consumer & Distribution' },
    { icon: '⚡', name: 'Energy', desc: 'Oil, Gas & Utilities' },
    { icon: '🏗️', name: 'Construction', desc: 'Engineering & Building' },
    { icon: '📱', name: 'Technology', desc: 'IT & Telecommunications' },
    { icon: '🎓', name: 'Education', desc: 'Academic & Training' },
    { icon: '🚗', name: 'Automotive', desc: 'Transportation' },
    { icon: '✈️', name: 'Hospitality', desc: 'Travel & Tourism' },
    { icon: '📦', name: 'Logistics', desc: 'Supply Chain' },
    { icon: '🏛️', name: 'Government', desc: 'Public Sector' }
  ];

  return (
    <section className="clients section" id="clients">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Trusted by Leading Organizations</h2>
        <p className="section-subtitle animate-on-scroll">
          We've partnered with companies across diverse industries to drive meaningful change
        </p>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`industry-card animate-on-scroll stagger-${(index % 4) + 1}`}
            >
              <div className="industry-icon">{industry.icon}</div>
              <h3 className="industry-name">{industry.name}</h3>
              <p className="industry-desc">{industry.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
