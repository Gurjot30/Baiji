import React from 'react';
import { motion } from 'framer-motion';
import { FiPenTool, FiPieChart, FiVideo, FiMonitor, FiRadio, FiStar, FiActivity } from 'react-icons/fi';
import './Services.css';

const Services = () => {
  const servicesList = [
    { icon: <FiPenTool />, title: "Creative Strategy" },
    { icon: <FiPieChart />, title: "Media Strategy" },
    { icon: <FiVideo />, title: "Film Production" },
    { icon: <FiMonitor />, title: "Digital Marketing" },
    { icon: <FiRadio />, title: "PR & Events" },
    { icon: <FiStar />, title: "Celebrity Management" },
    { icon: <FiActivity />, title: "Sports Marketing" }
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="services-layout">
          <motion.div 
            className="services-intro"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-md">Our Services</h2>
            <div className="divider"></div>
            <p>Comprehensive solutions to elevate your brand across every touchpoint.</p>
          </motion.div>
          
          <div className="services-grid">
            {servicesList.map((service, index) => (
              <motion.div 
                key={index} 
                className="service-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h4>{service.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
