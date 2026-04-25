import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero flex-center">
      <div className="hero-bg" style={{ backgroundImage: 'url(/hero_bg.png)' }}>
        <div className="overlay"></div>
      </div>
      
      <div className="container hero-content">
        <motion.h1 
          className="heading-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A Step to <br /> <span className="text-accent">Brand Building</span>
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Creative Strategy | Media | Film | Celebrity Management
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#contact" className="btn btn-primary">Work With Us</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
