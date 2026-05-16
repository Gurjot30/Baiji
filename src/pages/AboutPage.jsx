import React, { useEffect } from 'react';
import Process from '../components/Process';
import Director from '../components/Director';
import Team from '../components/Team';
import CTA from '../components/CTA';
import { motion } from 'framer-motion';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <section className="page-header" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'var(--bg-darker)' }}>
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
            style={{ maxWidth: '800px', margin: '20px auto 0' }}
          >
            Discover our journey, our unique process, and the visionaries behind Baiji Entertainments. 
          </motion.p>
          <motion.p 
            className="subheading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ maxWidth: '800px', margin: '20px auto 0', fontSize: '1.1rem', color: '#aaa' }}
          >
            Since our inception, we have been driven by a singular goal: to revolutionize the way brands communicate. Through cinematic storytelling, strategic media placements, and deep industry connections, we transform ideas into culturally relevant milestones. 
          </motion.p>
          <motion.p 
            className="subheading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ maxWidth: '800px', margin: '20px auto 0', fontSize: '1.1rem', color: '#aaa' }}
          >
            Every project is a partnership. We collaborate closely with our clients to understand their core values, ensuring that our campaigns not only reach millions but also resonate deeply. Welcome to the intersection of art, strategy, and unparalleled scale.
          </motion.p>
        </div>
      </section>
      
      <Director />
      <Team />
      <Process />
      <CTA />
    </div>
  );
};

export default AboutPage;
