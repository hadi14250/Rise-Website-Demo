import React, { useState, useEffect, useRef } from 'react';
import '../styles/Stats.css';

const Stats = () => {
  const [counts, setCounts] = useState({ programs: 0, industries: 0, years: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  const finalValues = { programs: 101, industries: 41, years: 20 };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        programs: Math.floor(finalValues.programs * progress),
        industries: Math.floor(finalValues.industries * progress),
        years: Math.floor(finalValues.years * progress)
      });

      if (step >= steps) {
        setCounts(finalValues);
        clearInterval(timer);
      }
    }, interval);
  };

  return (
    <section className="stats section" ref={statsRef}>
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item animate-on-scroll stagger-1">
            <div className="stat-number">{counts.programs}+</div>
            <div className="stat-label">Programs Offered</div>
          </div>
          <div className="stat-item animate-on-scroll stagger-2">
            <div className="stat-number">{counts.industries}+</div>
            <div className="stat-label">Industries Served</div>
          </div>
          <div className="stat-item animate-on-scroll stagger-3">
            <div className="stat-number">{counts.years}+</div>
            <div className="stat-label">Years of Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
