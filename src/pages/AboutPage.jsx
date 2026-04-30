import React, { useEffect } from 'react';
import AboutUs from '../components/AboutUs';
import Process from '../components/Process';
import Director from '../components/Director';
import CTA from '../components/CTA';
import { motion } from 'framer-motion';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <section className="page-header" style={{ paddingTop: '150px', paddingBottom: '80px', background: 'var(--bg-darker)' }}>
        <div className="container text-center">
          <motion.h1 
            className="heading-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About <span className="text-accent">Us</span>
          </motion.h1>
          <motion.p 
            className="subheading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ maxWidth: '700px', margin: '20px auto 0' }}
          >
            Discover our journey, our unique process, and the visionaries behind Baiji Entertainments.
          </motion.p>
        </div>
      </section>
      
      <AboutUs />
      <Process />
      <Director />
      <CTA />
    </div>
  );
};

export default AboutPage;
