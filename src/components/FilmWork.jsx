import React from 'react';
import { motion } from 'framer-motion';
import { FiPlayCircle } from 'react-icons/fi';
import './FilmWork.css';

const FilmWork = () => {
  const projects = [
    { title: "Bollywood Integrations", category: "Film", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800" },
    { title: "Brand Stories", category: "Commercial", image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800" },
    { title: "Motion Graphics", category: "Digital", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <section id="work" className="section film-section">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg"><span style={{ color: '#fff' }}>Film &</span> <span className="text-accent">Entertainment</span></h2>
        </motion.div>

        <div className="film-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="film-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="film-image" style={{ backgroundImage: `url(${project.image})` }}>
                <div className="film-overlay">
                  <FiPlayCircle className="play-icon" />
                  <div className="film-info">
                    <span className="category">{project.category}</span>
                    <h3>{project.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilmWork;
