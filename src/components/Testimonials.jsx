import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Ananya Iyer",
    role: "Marketing Director, Aura Lux",
    text: "Baiji Entertainments transformed our brand's digital presence. Their cinematic approach to our launch campaign was beyond our expectations.",
    rating: 5
  },
  {
    name: "Vikram Malhotra",
    role: "CEO, Nexa Dynamics",
    text: "The 3C model they implemented for our strategy provided us with insights we hadn't considered. Truly a partner in our growth.",
    rating: 5
  },
  {
    name: "Sarah Fernandes",
    role: "Creative Head, Bloom Media",
    text: "Working with Divyanshu and his team was a breeze. They understand the nuances of storytelling and brand building perfectly.",
    rating: 5
  },
  {
    name: "Rajesh Khanna",
    role: "Founder, Heritage Foods",
    text: "From celebrity management to national campaigns, they handle everything with extreme professionalism and creative flair.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "CMO, Zenith Tech",
    text: "Their ability to weave narratives that resonate across diverse demographics is unparalleled. A top-tier agency.",
    rating: 5
  },
  {
    name: "Karan Singhania",
    role: "Director, Urban Lifestyle",
    text: "The team's dedication to our vision and their innovative execution resulted in our most successful quarter yet.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };
    
    handleResize(); // init
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  useEffect(() => {
    // Reset to page 0 if resize changes totalPages and current page is out of bounds
    if (currentPage >= totalPages) {
      setCurrentPage(0);
    }
  }, [totalPages, currentPage]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [totalPages]);

  return (
    <section className="section testimonials-section" id="testimonials">
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

        <div className="testimonials-slider-container">
          <button className="slider-btn prev-btn" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
          
          <div className="testimonials-track-wrapper">
            <motion.div 
              className="testimonials-track"
              animate={{ x: `-${currentPage * 100}%` }}
              transition={{ type: "spring", stiffness: 50, damping: 15 }}
            >
              {testimonials.map((item, index) => (
                <div 
                  key={index} 
                  className="testimonial-slide"
                  style={{ flex: `0 0 ${100 / itemsPerPage}%` }}
                >
                  <div className="testimonial-card glass-panel">
                    <div className="quote-icon">
                      <Quote size={40} />
                    </div>
                    <div className="testimonial-content">
                      <p>"{item.text}"</p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="client-info">
                        <h4>{item.name}</h4>
                        <span>{item.role}</span>
                      </div>
                      <div className="rating">
                        {[...Array(item.rating)].map((_, i) => (
                          <span key={i} className="star">★</span>
                        ))}
                      </div>
                    </div>
                    <div className="card-blur"></div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button className="slider-btn next-btn" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="slider-dots">
          {[...Array(totalPages)].map((_, i) => (
            <button 
              key={i} 
              className={`dot ${currentPage === i ? 'active' : ''}`}
              onClick={() => setCurrentPage(i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
