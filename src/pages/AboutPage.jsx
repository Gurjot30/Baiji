import React, { useEffect } from 'react';
import Director from '../components/Director';
import Team from '../components/Team';
import { motion } from 'framer-motion';
import './AboutPage.css';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page editorial-theme">
      
      <div className="editorial-hero">
        <div className="editorial-marquee">
          <div className="marquee-content">
            <span>INNOVATIVE</span><span className="dot">•</span>
            <span className="outline">CINEMATIC</span><span className="dot">•</span>
            <span>STRATEGIC</span><span className="dot">•</span>
            <span className="outline">IMPACTFUL</span><span className="dot">•</span>
            <span>INNOVATIVE</span><span className="dot">•</span>
            <span className="outline">CINEMATIC</span><span className="dot">•</span>
            <span>STRATEGIC</span><span className="dot">•</span>
            <span className="outline">IMPACTFUL</span><span className="dot">•</span>
          </div>
        </div>

        <div className="container">
          <motion.h1 
            className="editorial-title"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            WE RE<span className="text-accent">DEFINE</span><br />
            HOW BRANDS<br />
            <span className="text-outline">COMMUNICATE.</span>
          </motion.h1>
        </div>
      </div>

      <div className="editorial-content-section">
        <div className="container">
          <div className="editorial-grid">
            <motion.div 
              className="editorial-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="editorial-huge-text">
                Since our inception, we have been driven by a singular goal: to <span className="text-accent">revolutionize</span> brand communication.
              </p>
            </motion.div>
            
            <motion.div 
              className="editorial-right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="editorial-body">
                Through cinematic storytelling, strategic media placements, and deep industry connections, we transform ideas into culturally relevant milestones.
              </p>
              <p className="editorial-body">
                Every project is a partnership. We collaborate closely with our clients to understand their core values, ensuring that our campaigns not only reach millions but also resonate deeply. Welcome to the intersection of art, strategy, and unparalleled scale.
              </p>
              
              <div className="editorial-stats">
                <div className="e-stat">
                  <h2>11+</h2>
                  <p>Years</p>
                </div>
                <div className="e-stat">
                  <h2>360°</h2>
                  <p>Strategy</p>
                </div>
                <div className="e-stat">
                  <h2>100%</h2>
                  <p>Commitment</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <Director />
      <Team />
    </div>
  );
};

export default AboutPage;
