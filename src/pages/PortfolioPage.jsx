import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTA from '../components/CTA';
import './PortfolioPage.css';

const portfolioData = [
  { id: 1, title: "Midnight Drive", category: "Films", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "Neon Nights", category: "Digital", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
  { id: 4, title: "Urban Magazine", category: "Print", image: "https://images.unsplash.com/photo-1572483861298-6bb79f22e84c?auto=format&fit=crop&q=80&w=800" },
  { id: 5, title: "Brand Anthem", category: "Films", image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800" },
  { id: 7, title: "Social Campaign", category: "Digital", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800" },
  { id: 8, title: "Annual Report", category: "Print", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800" },
  { id: 9, title: "Cinematic Trailer", category: "Films", image: "https://images.unsplash.com/photo-1579961139417-380eb9a5530d?auto=format&fit=crop&q=80&w=800" },
  { id: 10, title: "Web App UI", category: "Digital", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
  { id: 12, title: "Editorial Spread", category: "Print", image: "https://images.unsplash.com/photo-1621087816694-a3f81e8c0576?auto=format&fit=crop&q=80&w=800" },
  { id: 13, title: "Documentary Short", category: "Films", image: "https://images.unsplash.com/photo-1518131672697-613becd4fab5?auto=format&fit=crop&q=80&w=800" },
  { id: 14, title: "Interactive 3D", category: "Digital", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" },
  { id: 16, title: "Brand Identity Book", category: "Print", image: "https://images.unsplash.com/photo-1544605988-c71123cbac2d?auto=format&fit=crop&q=80&w=800" },
];

const categories = ["All", "Films", "Digital", "Print"];

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = activeFilter === "All" 
    ? portfolioData 
    : portfolioData.filter(project => project.category === activeFilter);

  return (
    <div className="portfolio-page">
      <section className="portfolio-header">
        <div className="container">
          <motion.h1 
            className="heading-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-accent">Portfolio</span>
          </motion.h1>
          <motion.p 
            className="portfolio-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A curated selection of our finest work across multiple disciplines. 
            Witness how we bring brands to life.
          </motion.p>
        </div>
      </section>

      <section className="portfolio-gallery-section">
        <div className="container">
          {/* Filter Navigation */}
          <div className="portfolio-filter-container">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Animated Grid */}
          <motion.div layout className="portfolio-gallery-grid">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="portfolio-gallery-item"
                >
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-item-overlay">
                    <span className="portfolio-item-category">{project.category}</span>
                    <h3 className="portfolio-item-title">{project.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default PortfolioPage;
