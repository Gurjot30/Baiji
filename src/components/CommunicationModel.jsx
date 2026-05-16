import React from 'react';
import { motion } from 'framer-motion';
import './CommunicationModel.css';

const CommunicationModel = () => {
  const models = [
    { title: "Consumer Truth", desc: "Understanding the deep-rooted desires and behaviors of the target audience." },
    { title: "Category Truth", desc: "Analyzing market trends, competitors, and the category landscape." },
    { title: "Client Truth", desc: "Aligning with the brand's core values, vision, and business objectives." }
  ];

  return (
    <section className="section c-model-section">
      <div className="container text-center">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg"><span style={{ color: '#fff' }}>Our Communication</span> <span className="text-accent">Model</span></h2>
        </motion.div>

        <div className="model-container">
          {models.map((model, index) => (
            <motion.div 
              key={index} 
              className="model-circle"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="circle-content">
                <h3>{model.title}</h3>
                <p>{model.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunicationModel;
