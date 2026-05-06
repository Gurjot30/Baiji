import React from 'react';
import { motion } from 'framer-motion';
import { Clapperboard, LineChart } from 'lucide-react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="section about-exact-section" id="about">
      <div className="container">
        <div className="about-exact-grid">
          
          {/* Left Side: Visual */}
          <motion.div 
            className="about-exact-visual"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="visual-wrapper glass-panel">
              <img src="/about_agency_visual.png" alt="Baiji Entertainments Abstract 3D" className="about-main-img" />
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            className="about-exact-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="established-badge">
              ESTABLISHED 2014
            </div>

            <h2 className="about-exact-heading">
              About <span className="text-accent">Us</span>
            </h2>
            <div className="about-exact-divider"></div>

            <div className="about-exact-text">
              <p className="highlight-text">
                Baiji Entertainments is more than an agency; we are a powerhouse of creative innovation and strategic excellence.
              </p>
              <p className="secondary-text">
                Based in the heart of the Indian entertainment industry, Delhi & Mumbai, we have spent the last decade redefining how brands connect with their audiences. Our mission is to blend cinematic storytelling with data-driven strategy to create lasting impact.
              </p>
            </div>

            <div className="about-features-list">
              <div className="feature-item">
                <div className="feature-icon">
                  <Clapperboard size={20} />
                </div>
                <div className="feature-text">
                  <h4>Cinematic Vision</h4>
                  <p>Translating brand values into compelling visual stories.</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <LineChart size={20} />
                </div>
                <div className="feature-text">
                  <h4>Strategic Growth</h4>
                  <p>Driving measurable results through innovative campaigns.</p>
                </div>
              </div>
            </div>

            <div className="about-stats-grid">
              <div className="stat-box glass-panel">
                <h3 className="text-accent">10+</h3>
                <span>YEARS IN INDUSTRY</span>
              </div>
              <div className="stat-box glass-panel">
                <h3 className="text-accent">500+</h3>
                <span>PROJECTS DELIVERED</span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
