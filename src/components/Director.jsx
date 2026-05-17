import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Director.css';

const founders = [
  {
    id: 1,
    name: "Divyanshu Sharma",
    role: "Founder",
    image: "/divyanshu.jpg",
    bio1: "Divyanshu Sharma, Founder of Baiji Entertainments, brings 11+ years of experience in ATL & BTL advertising, delivering high-impact campaigns across leading brands and industries.",
    bio2: "He has worked with top celebrities including Salman Khan, Shah Rukh Khan, Kareena Kapoor Khan, and MS Dhoni, and contributed to promotions for major Bollywood films like Pathaan, War, Sanju, and Bhool Bhulaiyaa 3.",
    bio3: "With strong expertise in integrated marketing, celebrity collaborations, and on-ground activations, he drives campaigns that create powerful visibility, engagement, and lasting brand recall.",
  },
  {
    id: 2,
    name: "Megha Sharma",
    role: "Business Development Head",
    image: "/megha.jpg",
    bio1: "Megha Sharma is a Business Development Head with years of experience in the advertising industry.",
    bio2: "Her work blends strategy and relationships, turning ideas into strong brand partnerships. She focuses on delivering clear, effective solutions that drive growth and lasting value.",
    bio3: "",
  }
];

const Director = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="split-director-section" id="founders">
      <div className="split-director-header">
        <span className="badge">Leadership</span>
        <h2 className="heading-md"><span style={{ color: '#fff' }}>Meet The</span> <span className="text-accent">Founders</span></h2>
      </div>

      <div className="split-container">
        {founders.map((founder) => {
          const isHovered = hoveredId === founder.id;
          const isOtherHovered = hoveredId !== null && hoveredId !== founder.id;
          
          let flexValue = 1;
          if (isHovered) flexValue = 2.5;
          if (isOtherHovered) flexValue = 0.5;

          return (
            <div 
              key={founder.id}
              className={`split-panel ${isHovered ? 'active' : ''} ${isOtherHovered ? 'dimmed' : ''}`}
              style={{ flex: flexValue }}
              onMouseEnter={() => setHoveredId(founder.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setHoveredId(isHovered ? null : founder.id)}
            >
              <div className="split-panel-bg" style={{ backgroundImage: `url(${founder.image})` }}></div>
              <div className="split-panel-overlay"></div>
              
              <div className="split-panel-content">
                <div className="split-panel-title">
                  <span className="split-role">{founder.role}</span>
                  <h3 className="split-name">{founder.name}</h3>
                </div>
                
                <div className="split-panel-bio">
                  <p>{founder.bio1}</p>
                  <p>{founder.bio2}</p>
                  {founder.bio3 && <p>{founder.bio3}</p>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Director;
