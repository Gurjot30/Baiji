import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Portfolio.css';

gsap.registerPlugin(ScrollTrigger);

const portfolioData = {
  films: [
    '/film-jollyllb2.png',
    '/film-krrish3.png',
    '/film-munnamichael.png',
    '/film-zero.png',
    '/film-sultan.png',
    '/film-bhooth-bangla.jpg',
    '/film-baaghi4.png',
    '/film-thamma.png',
    '/film-husbandbiwi.png',
    '/film-groundzero.png',
    '/film-maidaan.png',
    '/film-dreamgirl2-hq.jpg',
    '/film-mrmrsmahi.jpg',
    '/film-crew.jpg',
    '/film-bitterless.jpg',
    '/film-singhamagain2.jpg',
    '/film-fateh.jpg',
    '/film-ruslaan.jpg',
    '/film-crakk.jpg',
    '/film-mainatalhoon.jpg',
    '/film-ganapath.jpg',
    '/film-dunki.jpg',
    '/film-akelli.jpg',
    '/film-fukrey3.jpg',
    '/film-pathaan.jpg'
  ],
  cobranding: [
    '/quickheal.png',
    '/star555.png',
    '/srmb-tmt.png',
    '/laminex.png',
    '/dominos-transparent.png',
    '/magic-moments.png',
    '/brand-harrison.png',
    '/oshea.png',
    '/sujata.png',
    '/toptech.png',
    '/popular.png',
    '/redcliffe.png',
    '/sarvottam.png',
    '/toptech-new.png',
    '/brand-gallantt.png',
    '/brand-traya.png',
    '/brand-jkmasale.png',
    '/brand-birlahil.png',
    '/brand-haldiramsnagpur.png',
    '/brand-devbhoomi.png',
    '/brand-paras.png',
    '/vikram-tea.png'
  ],
};

const Portfolio = () => {
  const sectionRef = useRef(null);
  const sliderRefs = useRef({});

  useEffect(() => {
    const timelines = {};

    Object.keys(portfolioData).forEach((category) => {
      const slider = sliderRefs.current[category];
      if (slider) {
        const totalWidth = slider.scrollWidth;
        const distance = totalWidth / 2;
        const speed = 50; // pixels per second
        const duration = distance / speed;

        const anim = gsap.to(slider, {
          x: `-${distance}`,
          duration: duration,
          ease: 'none',
          repeat: -1,
        });

        timelines[category] = anim;

        slider.addEventListener('mouseenter', () => anim.pause());
        slider.addEventListener('mouseleave', () => anim.play());
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

    return () => {
      Object.values(timelines).forEach(anim => anim.kill());
    };
  }, []);

  return (
    <section className="portfolio-section" id="portfolio" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title"><span style={{ color: '#fff' }}>Our</span> <span className="text-accent">Portfolio</span></h2>

        {Object.entries(portfolioData).map(([category, images]) => (
          <div key={category} className="portfolio-category">
            <h3 className="category-title">
              {category === 'films' ? 'Films' : 'Branding'}
            </h3>
            <div className="slider-container">
              <div
                className="slider-track"
                ref={(el) => (sliderRefs.current[category] = el)}
              >
                {[...images, ...images].map((img, index) => (
                  <div key={index} className={`portfolio-item portfolio-item-${category}`}>
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
