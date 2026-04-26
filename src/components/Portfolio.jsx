import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Portfolio.css';

const portfolioData = {
  films: [
    'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1542204112-1630f827af05?auto=format&fit=crop&q=80&w=800',
  ],
  digital: [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
  ],
  print: [
    'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=800',
  ],
  packaging: [
    'https://images.unsplash.com/photo-1589939705384-5185138a04b9?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1605648916319-cf082f7524a1?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
  ],
};

const Portfolio = () => {
  const sectionRef = useRef(null);
  const sliderRefs = useRef({});

  useEffect(() => {
    Object.keys(portfolioData).forEach((category) => {
      const slider = sliderRefs.current[category];
      if (slider) {
        const totalWidth = slider.scrollWidth;
        gsap.to(slider, {
          x: `-${totalWidth / 2}`,
          duration: 20,
          ease: 'none',
          repeat: -1,
        });
      }
    });

    gsap.fromTo(
      sectionRef.current.querySelectorAll('.portfolio-category'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section className="portfolio-section" id="portfolio" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Our Portfolio</h2>
        <p className="section-subtitle">Excellence across every medium</p>

        {Object.entries(portfolioData).map(([category, images]) => (
          <div key={category} className="portfolio-category">
            <h3 className="category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <div className="slider-container">
              <div
                className="slider-track"
                ref={(el) => (sliderRefs.current[category] = el)}
              >
                {[...images, ...images].map((img, index) => (
                  <div key={index} className="portfolio-item">
                    <img src={img} alt={`${category} work ${index}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
