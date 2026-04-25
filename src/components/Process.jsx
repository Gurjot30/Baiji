import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiTarget, FiCpu, FiPlay, FiBarChart2 } from 'react-icons/fi';
import './Process.css';

const Process = () => {
  const steps = [
    { icon: <FiSearch />, title: "Research", desc: "Data gathering and insights collection." },
    { icon: <FiTarget />, title: "Strategy", desc: "Defining the core roadmap and KPIs." },
    { icon: <FiCpu />, title: "Ideation", desc: "Creative brainstorming and concept development." },
    { icon: <FiPlay />, title: "Execution", desc: "Flawless production and campaign rollout." },
    { icon: <FiBarChart2 />, title: "Analytics", desc: "Performance tracking and optimization." }
  ];

  return (
    <section className="section process-section">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-md">Our Process</h2>
          <div className="divider mx-auto"></div>
        </motion.div>

        <div className="timeline">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="timeline-icon">{step.icon}</div>
              <div className="timeline-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
