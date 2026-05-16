import React from 'react';
import { motion } from 'framer-motion';
import { FiEdit3, FiFilm, FiGlobe, FiTrendingUp, FiMessageCircle, FiCheckCircle } from 'react-icons/fi';
import './WhatSetsUsApart.css';

const WhatSetsUsApart = () => {
  const features = [
    {
      icon: <FiEdit3 />,
      title: "Creative & Innovative Approach",
      desc: "Delivering unique and out-of-the-box campaigns that captivate audiences and break industry norms.",
      span: true
    },
    {
      icon: <FiFilm />,
      title: "Entertainment Expertise",
      desc: "Deep-rooted connections across cinema and media.",
      span: false
    },
    {
      icon: <FiGlobe />,
      title: "360° Brand Solutions",
      desc: "Comprehensive strategies covering every touchpoint.",
      span: false
    },
    {
      icon: <FiTrendingUp />,
      title: "ROI-Focused",
      desc: "Data-driven media planning for maximum return.",
      span: false
    },
    {
      icon: <FiMessageCircle />,
      title: "Customized Communication Strategy",
      desc: "Tailor-made messaging to perfectly resonate with your specific target demographic and build loyalty.",
      span: true
    },
    {
      icon: <FiCheckCircle />,
      title: "Quality & Transparency",
      desc: "Uncompromising execution with operational clarity.",
      span: false
    }
  ];

  return (
    <section className="wsua-section">
      <div className="container">
        <motion.div 
          className="wsua-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Why Brands Choose <span className="text-accent">Baiji</span></h2>
          <p className="section-subtitle">Our core pillars of excellence</p>
        </motion.div>

        <div className="bento-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className={`bento-card ${feature.span ? 'span-2' : ''}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bento-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
