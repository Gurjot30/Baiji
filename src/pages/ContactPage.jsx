import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, ChevronDown, Send } from 'lucide-react';
import './ContactPage.css';

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer: "We specialize in the entertainment and sports sectors, offering creative strategy, film production, digital marketing, and celebrity management. However, our 3C model is highly adaptable and has successfully elevated brands across FMCG, tech, and lifestyle categories."
  },
  {
    question: "How long does a typical campaign take from concept to execution?",
    answer: "Timelines vary greatly depending on the scope of the project. A digital-only campaign might take 4-6 weeks to launch, while a full-scale cinematic film production and national rollout could take 3-6 months. We prioritize quality while adhering to agreed-upon deadlines."
  },
  {
    question: "Do you handle celebrity endorsements?",
    answer: "Yes, Celebrity Management is one of our core pillars. We have strong industry relationships and handle everything from talent sourcing and negotiation to contract management and on-set coordination."
  },
  {
    question: "Where are your offices located?",
    answer: "We have registered offices and operations based in the heart of the Indian entertainment industry: Delhi and Mumbai. This dual presence allows us to tap into the best creative and production talent in the country."
  }
];

const ContactPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="contact-page-wrapper">
      
      {/* Cinematic Hero */}
      <section className="cp-hero">
        <motion.h1 
          className="cp-title"
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Let's Create<br />The Extraordinary
        </motion.h1>
        
      </section>

      {/* Hovering Glass Cards */}
      <section className="cp-cards-section">
        <div className="cp-cards-grid">
          <motion.div 
            className="cp-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="cp-icon-wrap"><MapPin size={32} /></div>
            <h3>Registered Office</h3>
            <p>Divyanshu Sharma, Wing A, Flat no - 1701,<br/>Abrol Vastu Park, Near Ryan International School,<br/>Evershine Nagar, Malad West - 400064</p>
          </motion.div>

          <motion.div 
            className="cp-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="cp-icon-wrap"><Mail size={32} /></div>
            <h3>Email Us</h3>
            <p>divyanshu@baijientertainments.com</p>
          </motion.div>

          <motion.div 
            className="cp-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="cp-icon-wrap"><Phone size={32} /></div>
            <h3>Call Us</h3>
            <p>+91 99282 72728<br/>Mon-Fri, 10am - 7pm</p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Form & Map Split */}
      <section className="cp-interactive-section">
        <div className="cp-interactive-container">
          
          <motion.div 
            className="cp-form-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="cp-form-header">
              <h2>Send a Message</h2>
              <p>Our dedicated team is ready to listen, strategize, and bring your brand vision to life.</p>
            </div>
            
            <form className="cp-form" onSubmit={(e) => e.preventDefault()}>
              <div className="cp-input-group">
                <input type="text" className="cp-input" required />
                <label className="cp-label">Your Name</label>
              </div>
              <div className="cp-input-group">
                <input type="email" className="cp-input" required />
                <label className="cp-label">Your Email</label>
              </div>
              <div className="cp-input-group">
                <input type="text" className="cp-input" required />
                <label className="cp-label">Subject</label>
              </div>
              <div className="cp-input-group">
                <textarea className="cp-textarea" required></textarea>
                <label className="cp-label">How can we help you?</label>
              </div>
              <button type="submit" className="cp-submit-btn">
                Send Request <Send size={20} />
              </button>
            </form>
          </motion.div>

          <motion.div 
            className="cp-map-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <iframe 
              src="https://maps.google.com/maps?q=Abrol%20Vastu%20Park%20Malad%20West&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Baiji Entertainments Office Location"
            ></iframe>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default ContactPage;
