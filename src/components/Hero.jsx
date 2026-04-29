import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const line1 = "A Step to";
  const line2 = "Brand Building";

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.4, // Slower stagger between words
        delayChildren: 0.1 * i 
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 40, // Lower stiffness for slower movement
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <section id="home" className="hero flex-center">
      <div className="hero-bg" style={{ backgroundImage: 'url(/hero_bg.png)' }}>
        <div className="overlay"></div>
      </div>
      
      <div className="container hero-content">
        <motion.h1 
          className="heading-xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {line1.split(" ").map((word, index) => (
            <motion.span
              variants={child}
              style={{ display: "inline-block", marginRight: "0.2em" }}
              key={index}
            >
              {word}
            </motion.span>
          ))}
          <br />
          {line2.split(" ").map((word, index) => (
            <motion.span
              variants={child}
              style={{ display: "inline-block", marginRight: "0.2em" }}
              key={index}
              className="text-accent"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.5 }} // Increased delay to wait for header
        >
          Creative Strategy | Media | Film | Celebrity Management
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 3.0 }} // Increased delay
        >
          <a href="#contact" className="btn btn-primary">Work With Us</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
