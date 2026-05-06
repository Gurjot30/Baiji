import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Team.css';

const teamData = [
  {
    id: 1,
    name: "Ujjaval Kunwar",
    headline: "DOP • Editor • Visual Content Producer",
    image: "/ujjaval.png",
    bio: [
      "Ujjaval didn’t build his journey around just one role—and that layered experience defines his work.",
      "With hands-on experience across direction of photography, editing, and over 9 years in VFX & post-production—spanning Bollywood, Hollywood projects, mega events, and Broadway-style shows—he has been closely involved in every stage of content creation. From shaping an idea to refining its final output, he understands not just how content is made, but how it should look, feel, and perform.",
      "His visual style leans towards clean, cinematic storytelling, with a focus on detail, rhythm, and audience connection.",
      "As a creator, he values balance. Between creativity and clarity. Between aesthetics and impact.",
      "Because the most effective content is not just seen—it stays."
    ]
  },
  {
    id: 2,
    name: "Aadarsh Kunwar",
    headline: "Creative Producer",
    image: "/member2.jpg",
    bio: [
      "Creative Producer with hands on experience across multiple projects in the media and content industry, specializing in turning ideas into compelling visual stories.",
      "Skilled in managing end to end production, from concept development and planning to execution and final delivery. Experienced in coordinating with creative teams, clients, and production partners to ensure seamless project flow.",
      "Strong understanding of visual storytelling, branding, and audience engagement across digital platforms. Passionate about creating impactful content that balances creativity with strategy.",
      "Known for delivering high quality productions while maintaining timelines and production efficiency."
    ]
  },
  {
    id: 3,
    name: "Alaukik Narain",
    headline: "Writer • Director",
    image: "/member3.png",
    bio: [
      "Alaukik Narain is a writer and director with over 17 years of experience in advertising and brand storytelling.",
      "His work sits at the intersection of ideas and execution, where narratives are not just written but shaped for the screen. Having worked across categories and formats, he brings a deep understanding of how stories translate into films.",
      "His approach is rooted in human insight, cultural nuance, and emotional clarity—creating work that feels simple, honest, and memorable."
    ]
  }
];

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMember = teamData[activeIndex];

  return (
    <section className="section team-section" id="team">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-md"><span style={{ color: '#fff' }}>Meet The</span> <span className="text-accent">Visionaries</span></h2>
          <div className="divider mx-auto"></div>
          <p className="subtitle">The creative force behind Baiji Entertainments.</p>
        </motion.div>

        <div className="team-interactive-layout">
          {/* Main Display */}
          <div className="team-main-display glass-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="team-member-content"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="team-image-wrapper">
                  <div className="team-image-bg"></div>
                  <img src={activeMember.image} alt={activeMember.name} className="team-main-image" />
                </div>
                
                <div className="team-bio-wrapper">
                  <h3 className="team-name">{activeMember.name}</h3>
                  <p className="team-headline text-accent">{activeMember.headline}</p>
                  
                  <div className="team-bio-text">
                    {activeMember.bio.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnails/Selectors */}
          <div className="team-selectors">
            {teamData.map((member, index) => (
              <motion.div 
                key={member.id}
                className={`team-selector-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <img src={member.image} alt={member.name} className="team-thumbnail" />
                <div className="team-selector-info">
                  <h4>{member.name}</h4>
                  <span className="text-accent">{member.headline.split('•')[0].trim()}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
