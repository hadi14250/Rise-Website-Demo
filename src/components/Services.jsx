import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      title: 'Training Solutions',
      description: 'Customized training programs designed to enhance skills, boost performance, and drive organizational excellence.',
      image: '/images/training-solutions.avif',
      features: ['Leadership Development', 'Technical Skills', 'Soft Skills Training']
    },
    {
      title: 'Coaching Solutions',
      description: 'One-on-one and group coaching to unlock potential, improve performance, and achieve professional goals.',
      image: '/images/coaching-solutions.avif',
      features: ['Executive Coaching', 'Team Coaching', 'Career Development']
    },
    {
      title: 'E-Learning',
      description: 'Flexible digital learning platforms delivering engaging content anytime, anywhere for modern workforces.',
      image: '/images/e-learning.avif',
      features: ['Custom Content', 'Interactive Modules', 'Mobile Learning']
    },
    {
      title: 'HR Consultancy',
      description: 'Strategic HR advisory services to optimize talent management, organizational design, and people processes.',
      image: '/images/hr-consultancy.avif',
      features: ['Talent Strategy', 'Change Management', 'HR Systems']
    }
  ];

  return (
    <section className="services section" id="services">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Our Solutions</h2>
        <p className="section-subtitle animate-on-scroll">
          Comprehensive services tailored to your organization's unique needs
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card animate-on-scroll stagger-${index + 1}`}
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} loading="lazy" />
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
