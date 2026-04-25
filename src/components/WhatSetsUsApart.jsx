import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiZap, FiSettings, FiAward } from 'react-icons/fi';
import './WhatSetsUsApart.css';

const WhatSetsUsApart = () => {
  const features = [
    {
      icon: <FiTarget />,
      title: "Smart Thinking",
      desc: "Strategic approaches that target core audience behavior and maximize brand impact."
    },
    {
      icon: <FiZap />,
      title: "Innovation & Transparency",
      desc: "Cutting-edge creative solutions delivered with complete operational clarity."
    },
    {
      icon: <FiSettings />,
      title: "Custom Solutions",
      desc: "Tailor-made campaigns designed specifically for every brand's unique identity."
    },
    {
      icon: <FiAward />,
      title: "High-Quality Execution",
      desc: "Flawless production and implementation across all media channels."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="section wsua-section">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-md">What Sets Us Apart</h2>
          <div className="divider mx-auto"></div>
        </motion.div>

        <motion.div 
          className="grid features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} className="feature-card glass-panel" variants={itemVariants}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
