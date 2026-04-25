import React from 'react';
import { motion } from 'framer-motion';
import './CTA.css';

const CTA = () => {
  return (
    <section className="section cta-section text-center">
      <div className="container">
        <motion.div 
          className="cta-content glass-panel"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg">Let's Build Your Brand <span className="text-accent">Together</span></h2>
          <p className="cta-subtitle">Ready to take the next step in brand evolution?</p>
          <a href="#contact" className="btn btn-primary cta-btn">Get In Touch</a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
