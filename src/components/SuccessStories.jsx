import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SuccessStories.css';

gsap.registerPlugin(ScrollTrigger);

const stories = [
  {
    title: "Brand Transformation",
    client: "Global Tech Corp",
    result: "200% Increase in Engagement",
    desc: "A complete overhaul of the digital presence, focusing on storytelling and interactive brand elements.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "National Campaign",
    client: "Retail Giant",
    result: "50M+ Reach in 30 Days",
    desc: "Executing a cross-platform campaign that integrated film, print, and social media for a unified brand message.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Product Launch",
    client: "Automotive Brand",
    result: "Sold out in 1 Week",
    desc: "Creating an immersive cinematic experience for the launch of a new flagship vehicle, driving massive pre-orders.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800"
  }
];

const SuccessStories = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll('.story-card'),
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      }
    );
  }, []);

  return (
    <section className="section success-section" id="stories" ref={sectionRef}>
      <div className="container">
        <div className="section-header text-center">
          <h2 className="heading-md"><span style={{ color: '#fff' }}>Success</span> <span className="text-accent">Stories</span></h2>
          <div className="divider mx-auto"></div>
          <p className="subtitle">Tangible results for world-class brands</p>
        </div>

        <div className="stories-grid">
          {stories.map((story, index) => (
            <div key={index} className="story-card glass-panel">
              <div className="story-image">
                <img src={story.image} alt={story.title} />
                <div className="story-overlay">
                  <span className="result-badge">{story.result}</span>
                </div>
              </div>
              <div className="story-content">
                <span className="client-name">{story.client}</span>
                <h3>{story.title}</h3>
                <p>{story.desc}</p>
                <button className="btn-text">Read Case Study →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
