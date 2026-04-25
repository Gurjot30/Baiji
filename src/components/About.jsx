import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="about-bg" style={{ backgroundImage: 'url(/about_bg.png)' }}></div>
      <div className="container grid about-grid">
        <motion.div 
          className="about-content glass-panel"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg">Who We Are</h2>
          <div className="divider"></div>
          <p>
            Baiji Entertainments is a full-service creative advertising and entertainment agency based in <span className="text-accent">Delhi & Mumbai</span>.
          </p>
          <p>
            We focus on brand building, creative strategy, and innovation to deliver compelling stories that resonate with audiences across platforms. Our approach blends artistic vision with data-driven insights.
          </p>
          <div className="about-stats">
            <div>
              <h3>10+</h3>
              <span>Years Experience</span>
            </div>
            <div>
              <h3>50+</h3>
              <span>Brands Elevated</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Decorative elements representing Delhi & Mumbai / Film & Ad */}
          <div className="image-placeholder">
            <div className="circle-accent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
