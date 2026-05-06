import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter } from 'react-icons/fi';
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
    layout: "image-left"
  },
  {
    id: 2,
    name: "Megha Sharma",
    role: "Business Development Head",
    image: "/megha.jpg",
    bio1: "Megha Sharma is a Business Development Head with years of experience in the advertising industry.",
    bio2: "Her work blends strategy and relationships, turning ideas into strong brand partnerships. She focuses on delivering clear, effective solutions that drive growth and lasting value.",
    bio3: "",
    layout: "image-right"
  }
];

const Director = () => {
  return (
    <section className="section director-section" id="founders">
      <div className="container">
        
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge">Leadership</span>
          <h2 className="heading-md"><span style={{ color: '#fff' }}>Meet The</span> <span className="text-accent">Founders</span></h2>
          <div className="divider mx-auto"></div>
        </motion.div>

        <div className="founders-container">
          {founders.map((founder, index) => (
            <div 
              key={founder.id} 
              className={`director-layout glass-panel ${founder.layout === 'image-right' ? 'reverse-layout' : ''}`}
            >
              <motion.div 
                className="director-image"
                initial={{ opacity: 0, x: founder.layout === 'image-left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <img src={founder.image} alt={founder.name} className="founder-img" />
              </motion.div>
              
              <motion.div 
                className="director-info"
                initial={{ opacity: 0, x: founder.layout === 'image-left' ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="badge">{founder.role}</span>
                <h2 className="heading-md">{founder.name}</h2>
                <div className="divider"></div>
                <p>{founder.bio1}</p>
                <p>{founder.bio2}</p>
                {founder.bio3 && <p>{founder.bio3}</p>}
                
                <div className="director-socials">
                  <a href="#" className="social-icon"><FiLinkedin /></a>
                  <a href="#" className="social-icon"><FiTwitter /></a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Director;
