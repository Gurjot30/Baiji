import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter } from 'react-icons/fi';
import './Director.css';

const Director = () => {
  return (
    <section className="section director-section">
      <div className="container">
        <div className="director-layout glass-panel">
          <motion.div 
            className="director-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="img-placeholder">
              <span>DS</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="director-info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="badge">Founder & Director</span>
            <h2 className="heading-md">Divyanshu Sharma</h2>
            <div className="divider"></div>
            <p>
              With over a decade of experience in the media and entertainment industry, Divyanshu Sharma has been the driving force behind Baiji Entertainments. His vision bridges the gap between creative storytelling and analytical brand strategy.
            </p>
            <p>
              Under his leadership, the agency has grown into a powerhouse for Bollywood integrations, large-scale media buying, and innovative digital campaigns.
            </p>
            
            <div className="director-socials">
              <a href="#" className="social-icon"><FiLinkedin /></a>
              <a href="#" className="social-icon"><FiTwitter /></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Director;
