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

      <section className="our-story-typographic">
        <div className="container">
          <div className="typographic-grid">
            <div className="typographic-left">
              <motion.div 
                className="sticky-content"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="massive-title">OUR<br/><span className="text-outline">STORY</span></h2>
                <div className="accent-separator"></div>
                <div className="floating-metrics">
                  <div className="f-metric">
                    <span className="number">11+</span>
                    <span className="label">Years of Innovation</span>
                  </div>
                  <div className="f-metric">
                    <span className="number">360°</span>
                    <span className="label">Strategic Approach</span>
                  </div>
                  <div className="f-metric">
                    <span className="number">100%</span>
                    <span className="label">Commitment</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="typographic-right">
              <motion.div 
                className="story-paragraph-card"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="card-number">01</div>
                <div className="card-content">
                  <h3>The Genesis</h3>
                  <p>Since our inception, we have been driven by a singular goal: to revolutionize the way brands connect with their audiences. We didn't want to just create campaigns; we set out to architect cultural moments that echo across the industry.</p>
                </div>
              </motion.div>

              <motion.div 
                className="story-paragraph-card"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="card-number">02</div>
                <div className="card-content">
                  <h3>The Evolution</h3>
                  <p>Through cinematic storytelling, strategic media placements, and deep industry connections, we transform ideas into culturally relevant milestones. We successfully bridged the gap between raw entertainment and pure brand strategy.</p>
                </div>
              </motion.div>

              <motion.div 
                className="story-paragraph-card"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="card-number">03</div>
                <div className="card-content">
                  <h3>The Partnership</h3>
                  <p>Every project is a partnership built on transparency, vision, and scale. We collaborate closely with our clients to understand their core values, ensuring that our campaigns not only reach millions but resonate deeply with every single one.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <Director />
      <Team />
    </div>
  );
};

export default AboutPage;
