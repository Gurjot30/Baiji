import React from 'react';
import { motion } from 'framer-motion';
import './MediaAnalytics.css';

const MediaAnalytics = () => {
  const stats = [
    { number: "500M+", label: "Impressions Delivered" },
    { number: "150+", label: "Campaigns Executed" },
    { number: "10K+", label: "GRPs Achieved" },
    { number: "360°", label: "Digital Ecosystem" }
  ];

  return (
    <section className="section analytics-section">
      <div className="container">
        <motion.div 
          className="analytics-content text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg"><span style={{ color: '#fff' }}>Media &</span> <span className="text-accent">Analytics</span></h2>
          <p className="analytics-subtitle">Data-driven decisions for maximum ROI and media efficiency.</p>
          
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="stat-item glass-panel"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="stat-number text-accent">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MediaAnalytics;
