import React from 'react';
import { motion } from 'framer-motion';
import './Clients.css';

const Clients = () => {
  const clientLogos = [
    '/quickheal.png',
    '/star555.png',
    '/srmb-tmt.png',
    '/laminex.png',
    '/dominos-transparent.png',
    '/magic-moments.png',
    '/brand-harrison.png',
    '/oshea.png',
    '/sujata.png',
    '/toptech.png',
    '/popular.png',
    '/redcliffe.png',
    '/sarvottam.png',
    '/toptech-new.png',
    '/brand-gallantt.png',
    '/brand-traya.png',
    '/brand-jkmasale.png',
    '/brand-birlahil.png',
    '/brand-haldiramsnagpur.png',
    '/brand-devbhoomi.png',
    '/brand-paras.png',
    '/vikram-tea.png'
  ];

  return (
    <section className="section clients-section">
      <div className="container text-center">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg" style={{ fontSize: '3.5rem' }}><span style={{ color: '#fff' }}>Trusted</span> <span className="text-accent">By</span></h2>
          <div className="divider mx-auto"></div>
        </motion.div>

        <div className="clients-grid">
          {clientLogos.map((logo, index) => (
            <motion.div 
              key={index} 
              className="client-logo glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <img src={logo} alt={`Client ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
