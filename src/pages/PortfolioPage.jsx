import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTA from '../components/CTA';
import './PortfolioPage.css';

const portfolioData = [
  // Interleaved / Mixed Showcase (Film and Co-Branding mixed for a dynamic grid)
  { id: 1, title: "Jolly LLB 2", category: "Film & Entertainment", image: "/film-jollyllb2.png" },
  { id: 2, title: "Krrish 3", category: "Film & Entertainment", image: "/film-krrish3.png" },
  { id: 102, title: "Dominos Brand Campaign", category: "Co-Branding", image: "/dominos-transparent.png" },
  { id: 3, title: "Munna Michael", category: "Film & Entertainment", image: "/film-munnamichael.png" },
  { id: 104, title: "Quick Heal Security Drive", category: "Co-Branding", image: "/quickheal.png" },
  { id: 4, title: "Zero", category: "Film & Entertainment", image: "/film-zero.png" },
  { id: 105, title: "Sujata Appliances Campaign", category: "Co-Branding", image: "/sujata.png" },
  { id: 5, title: "Sultan", category: "Film & Entertainment", image: "/film-sultan.png" },
  { id: 106, title: "Magic Moments Collaborations", category: "Co-Branding", image: "/magic-moments.png" },
  { id: 6, title: "Bhooth Bangla", category: "Film & Entertainment", image: "/film-bhooth-bangla.jpg" },
  { id: 107, title: "SRMB TMT Structural Drive", category: "Co-Branding", image: "/srmb-tmt.png" },
  { id: 7, title: "Baaghi 4", category: "Film & Entertainment", image: "/film-baaghi4.png" },
  { id: 108, title: "Redcliffe Labs Health Campaign", category: "Co-Branding", image: "/redcliffe.png" },
  { id: 8, title: "Thamma", category: "Film & Entertainment", image: "/film-thamma.png" },
  { id: 109, title: "Star 555 Detergent Launch", category: "Co-Branding", image: "/star555.png" },
  { id: 9, title: "Pati Patni Aur Woh 2", category: "Film & Entertainment", image: "/film-husbandbiwi.png" },
  { id: 10, title: "Ground Zero", category: "Film & Entertainment", image: "/film-groundzero.png" },
  { id: 111, title: "Dev Bhoomi Uttarakhand University", category: "Co-Branding", image: "/brand-devbhoomi.png" },
  { id: 112, title: "Harrison Locks Campaign", category: "Co-Branding", image: "/brand-harrison.png" },
  { id: 11, title: "Maidaan", category: "Film & Entertainment", image: "/film-maidaan.png" },
  { id: 12, title: "Dream Girl 2", category: "Film & Entertainment", image: "/film-dreamgirl2-hq.jpg" },
  { id: 13, title: "Mr. & Mrs. Mahi", category: "Film & Entertainment", image: "/film-mrmrsmahi.jpg" },
  { id: 14, title: "Crew", category: "Film & Entertainment", image: "/film-crew.jpg" },
  { id: 15, title: "Bitterless Relations", category: "Film & Entertainment", image: "/film-bitterless.jpg" },
  { id: 16, title: "Singham Again", category: "Film & Entertainment", image: "/film-singhamagain2.jpg" },
  { id: 17, title: "Fateh", category: "Film & Entertainment", image: "/film-fateh.jpg" },
  { id: 18, title: "Ruslaan", category: "Film & Entertainment", image: "/film-ruslaan.jpg" },
  { id: 19, title: "Crakk", category: "Film & Entertainment", image: "/film-crakk.jpg" },
  { id: 20, title: "Main Atal Hoon", category: "Film & Entertainment", image: "/film-mainatalhoon.jpg" },
  { id: 21, title: "Ganapath", category: "Film & Entertainment", image: "/film-ganapath.jpg" },
  { id: 22, title: "Dunki", category: "Film & Entertainment", image: "/film-dunki.jpg" },
  { id: 23, title: "Akelli", category: "Film & Entertainment", image: "/film-akelli.jpg" },
  { id: 24, title: "Fukrey 3", category: "Film & Entertainment", image: "/film-fukrey3.jpg" },
  { id: 25, title: "Pathaan", category: "Film & Entertainment", image: "/film-pathaan.jpg" },
  { id: 121, title: "Gallantt Advance", category: "Co-Branding", image: "/brand-gallantt.png" },
  { id: 122, title: "Traya Campaign", category: "Co-Branding", image: "/brand-traya.png" },
  { id: 123, title: "JK Masale Campaign", category: "Co-Branding", image: "/brand-jkmasale.png" },
  { id: 124, title: "Birla HIL Pipes", category: "Co-Branding", image: "/brand-birlahil.png" },
  { id: 125, title: "Haldiram's Nagpur", category: "Co-Branding", image: "/brand-haldiramsnagpur.png" },
  { id: 126, title: "Laminex Surfaces", category: "Co-Branding", image: "/laminex.png" },
  { id: 127, title: "O'Shea Herbals", category: "Co-Branding", image: "/oshea.png" },
  { id: 128, title: "Toptech Steel Campaign", category: "Co-Branding", image: "/toptech.png" },
  { id: 129, title: "Popular Automobiles", category: "Co-Branding", image: "/popular.png" },
  { id: 130, title: "Sarvottam Brand Drive", category: "Co-Branding", image: "/sarvottam.png" },
  { id: 131, title: "Toptech TMT Launch", category: "Co-Branding", image: "/toptech-new.png" },
  { id: 132, title: "Paras Pipes & Tank", category: "Co-Branding", image: "/brand-paras.png" },
  { id: 134, title: "Vikram Tea Campaign", category: "Co-Branding", image: "/vikram-tea.png" }
];

const categories = ["All", "Film & Entertainment", "Co-Branding"];

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fisher-Yates stable session randomizer (Shuffled once per page load to avoid jumpy cards on filter switch)
  const randomizedPortfolio = React.useMemo(() => {
    const list = [...portfolioData];
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  }, []);

  const filteredProjects = activeFilter === "All" 
    ? randomizedPortfolio 
    : randomizedPortfolio.filter(project => project.category === activeFilter);

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="portfolio-hero-bg">
          <div className="portfolio-glow-orb portfolio-orb-1"></div>
          <div className="portfolio-glow-orb portfolio-orb-2"></div>
        </div>
        
        <div className="portfolio-marquee">
          <div className="portfolio-marquee-content">
            <span>PORTFOLIO</span><span className="dot">•</span>
            <span className="outline">EXHIBITION</span><span className="dot">•</span>
            <span>LEGACY</span><span className="dot">•</span>
            <span className="outline">CREATIVE</span><span className="dot">•</span>
            <span>SHOWCASE</span><span className="dot">•</span>
            <span className="outline">PORTFOLIO</span><span className="dot">•</span>
            <span>EXHIBITION</span><span className="dot">•</span>
            <span className="outline">LEGACY</span><span className="dot">•</span>
            <span>CREATIVE</span><span className="dot">•</span>
            <span className="outline">SHOWCASE</span><span className="dot">•</span>
          </div>
        </div>

        <div className="container">
          <motion.div 
            className="portfolio-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="portfolio-title">
              A Legacy Of<br />
              <span className="text-accent">Creative</span><br />
              <span className="text-outline">Excellence.</span>
            </h1>
          </motion.div>
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
