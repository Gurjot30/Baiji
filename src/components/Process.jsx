import React from 'react';
import './Process.css';

const Process = () => {
  const pulsePoints = [
    { className: 'research' },
    { className: 'strategy' },
    { className: 'creative' },
    { className: 'media' },
    { className: 'performance' },
  ];

  return (
    <section className="process-reference-section" id="process" aria-label="Our strategic process">
      <div className="process-reference-frame">
        <img
          className="process-reference-art"
          src="/strategic-process-reference.png"
          alt="Behind every successful campaign strategic process"
        />
        <span className="process-shine" aria-hidden="true"></span>
        <span className="process-ribbon-glow" aria-hidden="true"></span>
        {pulsePoints.map((point, index) => (
          <span
            key={point.className}
            className={`process-pulse process-pulse-${point.className}`}
            style={{ animationDelay: `${0.45 + index * 0.22}s` }}
            aria-hidden="true"
          />
        ))}
      </div>
    </section>
  );
};

export default Process;
