import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Plus, Minus } from 'lucide-react';
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
    <div className="contact-page">
      {/* Header & Intro Section */}
      <section className="contact-header-section">
        <div className="container text-center">
          <motion.h1 
            className="heading-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact <span className="text-accent">Us</span>
          </motion.h1>
          
          <motion.div 
            className="contact-intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>
              We’re eagerly awaiting the opportunity to collaborate with you. Whether you’re looking to integrate your brand into the silver screen, amplify your presence through strategic partnerships, or explore new avenues of digital engagement, <strong>Baiji Entertainments</strong> is here to make it happen. 
            </p>
            <p>
              Reach out to us using the contact details below or simply fill out the form, and let’s embark on an extraordinary journey to unlock your brand’s true potential. Our dedicated team is ready to listen, strategize, and bring your brand vision to life. Together, let’s create a lasting impact in the world of entertainment and sports.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Area */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-grid">
            
            {/* Left Column: Info & Form */}
            <motion.div 
              className="contact-left-col"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="get-in-touch">
                <h2 className="heading-md">Get In <span className="text-accent">Touch</span></h2>
                <div className="divider"></div>
                
                <div className="contact-details">
                  <div className="detail-item">
                    <div className="detail-icon"><MapPin size={24} /></div>
                    <div>
                      <h4>Registered Office</h4>
                      <p>123 Creative Hub, Andheri West<br/>Mumbai, Maharashtra 400053<br/>India</p>
                    </div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-icon"><Phone size={24} /></div>
                    <div>
                      <h4>Phone</h4>
                      <p>+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-icon"><Mail size={24} /></div>
                    <div>
                      <h4>Email</h4>
                      <p>hello@baijientertainments.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-form-wrapper glass-panel">
                <h3>Send us a message</h3>
                <form className="contact-form">
                  <div className="form-group">
                    <input type="text" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Your Email" required />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Subject" required />
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Send Message</button>
                </form>
              </div>
            </motion.div>

            {/* Right Column: Map */}
            <motion.div 
              className="contact-right-col"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="map-wrapper glass-panel">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120638.06452270923!2d72.77583626245347!3d19.113645000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d90e067ba9%3A0x16265e5e5b324f45!2sAndheri%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Baiji Entertainments Office Location"
                ></iframe>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-md"><span style={{ color: '#fff' }}>Frequent Asked</span> <span className="text-accent">Questions</span></h2>
            <div className="divider mx-auto"></div>
          </motion.div>

          <div className="faq-container">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                className={`faq-item glass-panel ${activeFaq === index ? 'active' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  <h3>{faq.question}</h3>
                  <div className="faq-icon">
                    {activeFaq === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </div>
                
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div 
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
