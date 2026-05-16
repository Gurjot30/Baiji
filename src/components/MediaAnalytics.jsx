import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './MediaAnalytics.css';

const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (!isInView) return;
    
    // Extract numeric value and suffix (e.g., "500M+" -> 500, "M+")
    const numericPart = parseInt(value.replace(/[^0-9]/g, '')) || 0;
    const suffix = value.replace(/[0-9]/g, '');
    
    let start = 0;
    const end = numericPart;
    if (start === end) {
        setCount(value);
        return;
    }

    let startTime = null;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const currentCount = Math.floor(progress * (end - start) + start);
      
      setCount(`${currentCount}${suffix}`);
      
      if (progress < 1) {
        window.requestAnimationFrame(animate);
      }
    };
    
    window.requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

const MediaAnalytics = () => {
  const stats = [
    { number: "500M+", label: "Impressions Delivered" },
    { number: "150+", label: "Campaigns Executed" },
    { number: "10K+", label: "GRPs Achieved" },
    { number: "360°", label: "Digital Ecosystem" }
  ];

  return (
    <section className="section analytics-section" id="analytics">
      <div className="container">
        <div className="text-center mb-12">
          <motion.h2 
            className="heading-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span style={{ color: '#fff' }}>Media &</span> <span className="text-accent">Analytics</span>
          </motion.h2>
          <motion.p 
            className="analytics-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Data-driven decisions for maximum ROI and media efficiency.
          </motion.p>
        </div>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="stat-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="stat-card-inner">
                <h3 className="stat-number text-accent">
                  <Counter value={stat.number} />
                </h3>
                <div className="stat-line"></div>
                <p className="stat-label">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaAnalytics;
