import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const cardPoints = ['one', 'two', 'three', 'four', 'five', 'six'];

  return (
    <section id="services" className="services-reference-section" aria-label="Our services">
      <Link to="/contact" style={{ display: 'block', textDecoration: 'none' }}>
        <div className="services-reference-frame" style={{ cursor: 'pointer' }}>
          <img
            className="services-reference-art"
            src="/services-reference.png"
            alt="Solutions that drive impact services"
          />
          <span className="services-ambient-glow" aria-hidden="true"></span>
          <span className="services-title-shine" aria-hidden="true"></span>
          <span className="services-line-spark" aria-hidden="true"></span>
          {cardPoints.map((point, index) => (
            <span
              key={point}
              className={`services-card-pulse services-card-pulse-${point}`}
              style={{ animationDelay: `${0.5 + index * 0.18}s` }}
              aria-hidden="true"
            />
          ))}
        </div>
      </Link>
    </section>
  );
};

export default Services;
