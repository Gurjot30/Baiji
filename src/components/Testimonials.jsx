import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: "Ananya Iyer",
    role: "Marketing Director, Aura Lux",
    text: "Baiji Entertainments transformed our brand's digital presence. Their cinematic approach to our launch campaign was beyond our expectations.",
    rating: 5
  },
  {
    id: 2,
    name: "Vikram Malhotra",
    role: "CEO, Nexa Dynamics",
    text: "The 3C model they implemented for our strategy provided us with insights we hadn't considered. Truly a partner in our growth.",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah Fernandes",
    role: "Creative Head, Bloom Media",
    text: "Working with Divyanshu and his team was a breeze. They understand the nuances of storytelling and brand building perfectly.",
    rating: 5
  },
  {
    id: 4,
    name: "Rajesh Khanna",
    role: "Founder, Heritage Foods",
    text: "From celebrity management to national campaigns, they handle everything with extreme professionalism and creative flair.",
    rating: 5
  },
  {
    id: 5,
    name: "Priya Sharma",
    role: "CMO, Zenith Tech",
    text: "Their ability to weave narratives that resonate across diverse demographics is unparalleled. A top-tier agency.",
    rating: 5
  },
  {
    id: 6,
    name: "Karan Singhania",
    role: "Director, Urban Lifestyle",
    text: "The team's dedication to our vision and their innovative execution resulted in our most successful quarter yet.",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="section testimonials-innovative-section" id="testimonials">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge">Client Reviews</span>
          <h2 className="heading-md"><span style={{ color: '#fff' }}>What They</span> <span className="text-accent">Say About Us</span></h2>
          <div className="divider mx-auto"></div>
        </motion.div>

        <div className="testimonials-split-layout">
          {/* Left Side: The Quote */}
          <div className="testimonials-quote-area">
            <Quote className="huge-quote-bg" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="active-quote-content"
              >
                <div className="rating-stars">
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <h3 className="quote-text">"{activeTestimonial.text}"</h3>
                
                {/* Mobile Author Info (Hidden on Desktop) */}
                <div className="mobile-author-info">
                  <h4>{activeTestimonial.name}</h4>
                  <span className="text-accent">{activeTestimonial.role}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="quote-progress">
              <div 
                className="progress-bar-fill"
                key={`progress-${activeIndex}`}
                style={{ animation: 'fillProgress 6s linear forwards' }}
              ></div>
            </div>
          </div>

          {/* Right Side: The Authors List */}
          <div className="testimonials-authors-list">
            {testimonials.map((author, index) => (
              <div 
                key={author.id}
                className={`author-list-item ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="author-indicator"></div>
                <div className="author-details">
                  <h4>{author.name}</h4>
                  <span>{author.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
