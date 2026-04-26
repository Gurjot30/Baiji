import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Award, TrendingUp, Users, Star } from 'lucide-react';
import './SuccessStories.css';

const stories = [
  {
    title: 'Brand Transformation: Global Retailer',
    result: '150% Increase in Engagement',
    description: 'We redefined the digital presence of a major retail brand, focusing on consumer-centric storytelling and data-driven media buying.',
    icon: <TrendingUp size={32} />,
    color: '#c5a059'
  },
  {
    title: 'Film Integration: Bollywood Blockbuster',
    result: '50M+ Brand Impressions',
    description: 'Seamlessly integrated a consumer tech brand into one of the year\'s biggest films, creating a natural and high-impact connection.',
    icon: <Star size={32} />,
    color: '#ff4d4d'
  },
  {
    title: 'Celebrity Campaign: National Launch',
    result: 'Top 10 Trending for 48 Hours',
    description: 'Managed a high-profile celebrity endorsement that captured national attention and drove record-breaking traffic to the client\'s platform.',
    icon: <Users size={32} />,
    color: '#4d79ff'
  },
  {
    title: 'Innovation Award: Creative Strategy',
    result: 'Industry Excellence 2024',
    description: 'Received prestigious recognition for our "3C Model" approach in solving complex market challenges for a legacy conglomerate.',
    icon: <Award size={32} />,
    color: '#4dff88'
  }
];

const SuccessStories = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.story-card');
    
    gsap.fromTo(cards, 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%'
        }
      }
    );
  }, []);

  return (
    <section className="success-stories" id="success-stories" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Our Success Stories</h2>
        <div className="stories-grid">
          {stories.map((story, index) => (
            <div key={index} className="story-card">
              <div className="story-icon" style={{ color: story.color }}>
                {story.icon}
              </div>
              <h3 className="story-title">{story.title}</h3>
              <div className="story-result">{story.result}</div>
              <p className="story-description">{story.description}</p>
              <div className="story-hover-bg" style={{ background: `linear-gradient(135deg, ${story.color}22, transparent)` }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
