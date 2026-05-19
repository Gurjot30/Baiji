import React from 'react';
import { motion } from 'framer-motion';
import './Director.css';

const Director = () => {
  return (
    <section className="director-section" id="founder">
      {/* Cinematic Ambient Glow Elements */}
      <div className="director-ambient-glow orb-1"></div>
      <div className="director-ambient-glow orb-2"></div>
      <div className="director-ambient-glow orb-3"></div>

      <div className="container director-container">
        <div className="director-grid">
          
          {/* Left Column: Interactive Image Frame */}
          <motion.div 
            className="director-image-wrapper-premium"
            initial={{ opacity: 0, scale: 0.95, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
          >
            <div className="director-image-bg-premium"></div>
            <div className="director-glare-effect"></div>
            <div className="director-gold-corner-top"></div>
            <div className="director-gold-corner-bottom"></div>
            
            <div className="director-floating-badge">
              <span className="badge-year">Est. 2015</span>
            </div>
          </motion.div>

          {/* Right Column: Editorial Typographic Layout */}
          <div className="director-content-wrapper-premium">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge-luxury">Founder & Director</span>
              <h2 className="director-name-premium">
                Divyanshu <span className="text-accent-gold">Sharma</span>
              </h2>
              
              <motion.div 
                className="accent-separator-gold"
                initial={{ width: 0 }}
                whileInView={{ width: 120 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.div>
            </motion.div>
            
            <motion.div 
              className="director-bio-premium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                Divyanshu Sharma, Founder of Baiji Entertainments, brings 11+ years of experience in ATL & BTL advertising, delivering high-impact campaigns across leading brands and industries.
              </p>
              
              <p>
                He has worked with top celebrities including Salman Khan, Shah Rukh Khan, Kareena Kapoor Khan, and MS Dhoni, and contributed to promotions for major Bollywood films like Pathaan, War, Sanju, and Bhool Bhulaiyaa 3.
              </p>

              <p>
                With strong expertise in integrated marketing, celebrity collaborations, and on-ground activations, he drives campaigns that create powerful visibility, engagement, and lasting brand recall.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Director;
