import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Hero.css';

const slides = [
  {
    id: 1,
    image: "/hero_slide_1.jpg",
    titleLine1: "Where Brands",
    titleLine2: "Meet Entertainment",
    subtitle: "A unified approach to marketing and cinematic storytelling.",
  },
  {
    id: 2,
    image: "/hero_slide_2.jpg",
    titleLine1: "Creative Strategy.",
    titleLine2: "Media Power. Film Integration.",
    subtitle: "End-to-end solutions that elevate your brand's presence.",
  },
  {
    id: 3,
    image: "/hero_slide_3.png",
    titleLine1: "Building Brands Through",
    titleLine2: "Cinema, Sports & Digital Impact",
    subtitle: "Creating culturally relevant milestones and lasting connections.",
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000); // Auto-advance every 7 seconds
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <section id="home" className="hero flex-center">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          className="hero-bg"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div className="overlay"></div>
        </motion.div>
      </AnimatePresence>
      
      <div className="container hero-content text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="heading-xl">
              {slides[currentSlide].titleLine1} <br />
              <span className="text-accent">{slides[currentSlide].titleLine2}</span>
            </h1>
            
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">Work With Us</a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="hero-controls">
        <button className="hero-arrow prev-arrow" onClick={prevSlide}>
          <ChevronLeft size={30} />
        </button>
        <div className="hero-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        <button className="hero-arrow next-arrow" onClick={nextSlide}>
          <ChevronRight size={30} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
