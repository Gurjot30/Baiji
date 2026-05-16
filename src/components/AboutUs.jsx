import React from 'react';
import { motion } from 'framer-motion';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-innovative-section" id="about">
      <div className="about-bg-text">THE AGENCY</div>
      
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem', position: 'relative', zIndex: 2 }}>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontFamily: "'Outfit', sans-serif", fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem' }}
          >
            About <span className="text-accent">Us</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-accent"
            style={{ fontSize: '1.2rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}
          >
            A Step Towards Brand Building
          </motion.p>
        </div>

        <div className="about-innovative-grid">
          
          <div className="about-left">
            <motion.div 
              className="about-img-wrapper"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src="/about_agency_visual.png" alt="Baiji Entertainments Strategy" />
            </motion.div>
          </div>

          <div className="about-right">
            <motion.div 
              className="about-body-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p>
                Baiji Entertainments is a dynamic advertising and entertainment agency specializing in integrated brand communication solutions. With expertise in film promotions, celebrity management, media planning, digital marketing, and sports branding, we help brands create meaningful connections with their audience.
              </p>
              <p>
                Our approach combines creativity, strategic thinking, market insights, and entertainment-driven marketing to deliver impactful campaigns that build strong brand presence and measurable business growth.
              </p>
              <p>
                From Bollywood collaborations to nationwide media campaigns, we transform ideas into unforgettable brand experiences.
              </p>
            </motion.div>

            <motion.h3 
              className="about-footer-highlight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              360° Advertising & <br/>Entertainment Solutions
            </motion.h3>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
