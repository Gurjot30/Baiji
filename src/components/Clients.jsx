import React from 'react';
import { motion } from 'framer-motion';
import './Clients.css';

const Clients = () => {
  // Using simple text placeholders for logos to simulate a logo grid
  const clientLogos = [
    "BRAND ONE", "STUDIO X", "GLOBE MEDIA", "PRIME TV", 
    "NEXUS", "VISTA", "ELEVATE", "MOMENTUM"
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
          <h2 className="heading-md"><span style={{ color: '#fff' }}>Trusted</span> <span className="text-accent">By</span></h2>
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
              <span>{logo}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
