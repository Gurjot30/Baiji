import React from 'react';
import { motion } from 'framer-motion';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section id="about-us" className="section about-us-section">
      {/* Background Blobs */}
      <div className="blob blob-top-left"></div>
      <div className="blob blob-bottom-right"></div>
      <div className="blob-outline"></div>

      <div className="container">
        <div className="about-us-grid">
          
          <motion.div 
            className="about-us-content-area"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="about-huge-title">
              WE ELEVATE<br/>
              <span className="title-highlight">YOUR BRAND</span><br/>
              TO NEW HEIGHTS
            </h2>
            <h3 className="about-sub-title">TAKE CONTROL OF YOUR NARRATIVE</h3>
            
            <hr className="about-divider" />
            
            <div className="about-text-content">
              <p>
                Baiji Entertainments is a premier, full-service creative advertising and entertainment agency rooted in the vibrant hubs of <strong>Delhi and Mumbai</strong>. 
              </p>
              <p>
                With over a decade of industry expertise, we specialize in transforming visions into tangible success. We go beyond traditional advertising by blending cinematic storytelling with rigorous, data-driven strategies. From comprehensive brand building and innovative media planning to exclusive celebrity management, we offer a 360-degree approach.
              </p>
              <p>
                Our proprietary 3C Model ensures that every campaign we craft resonates deeply with your target audience, driving measurable growth and establishing an enduring legacy for your brand.
              </p>
              
              <div className="about-btn-wrapper">
                <button className="btn about-btn">DISCOVER MORE</button>
              </div>
            </div>

          </motion.div>

          <motion.div 
            className="about-us-image-area"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <div className="blob-image-wrapper">
              <img 
                src="/about_agency_visual.png" 
                alt="Baiji Entertainments Visual" 
                className="about-us-img"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
