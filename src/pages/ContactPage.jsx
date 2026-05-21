import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {
      const response = await fetch("https://formsubmit.co/ajax/divyanshu@baijientertainments.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Subject: formData.subject,
          Message: formData.message,
          _subject: `New enquiry from Baiji website: ${formData.subject || 'General Info'}`
        })
      });

      const result = await response.json();

      if (response.ok && result.success === "true") {
        setSubmitStatus('success');
        setSubmitMessage("Thank you! Your enquiry details have been successfully submitted.");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(result.message || "Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus('error');
      setSubmitMessage(error.message || "Something went wrong while sending your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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

            <AnimatePresence mode="wait">
              {submitStatus && (
                <motion.div
                  className={`cp-alert-banner ${submitStatus}`}
                  initial={{ opacity: 0, height: 0, y: -20 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div className="cp-alert-content">
                    {submitStatus === 'success' ? (
                      <CheckCircle2 className="cp-alert-icon" size={20} />
                    ) : (
                      <AlertCircle className="cp-alert-icon" size={20} />
                    )}
                    <span>{submitMessage}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <form className="cp-form" onSubmit={handleSubmit}>
              <div className="cp-input-group">
                <input 
                  type="text" 
                  name="name"
                  className="cp-input" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
                <label className="cp-label">Your Name</label>
              </div>
              <div className="cp-input-group">
                <input 
                  type="email" 
                  name="email"
                  className="cp-input" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
                <label className="cp-label">Your Email</label>
              </div>
              <div className="cp-input-group">
                <input 
                  type="text" 
                  name="subject"
                  className="cp-input" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
                <label className="cp-label">Subject</label>
              </div>
              <div className="cp-input-group">
                <textarea 
                  name="message"
                  className="cp-textarea" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <label className="cp-label">How can we help you?</label>
              </div>
              <button 
                type="submit" 
                className="cp-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    Sending Request <Loader2 className="cp-spinner" size={20} />
                  </>
                ) : (
                  <>
                    Send Request <Send size={20} />
                  </>
                )}
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
