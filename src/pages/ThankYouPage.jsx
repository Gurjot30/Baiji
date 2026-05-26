import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import './ThankYouPage.css';

const ThankYouPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="thank-you-page-wrapper">
      <section className="ty-hero">
        <motion.div 
          className="ty-content"
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="ty-icon-wrapper">
            <CheckCircle size={50} className="ty-icon" />
          </div>
          <h1 className="ty-title">Thank You!</h1>
          <p className="ty-subtitle">
            Your enquiry has been successfully sent. <br />
            Our team at <strong>Baiji Entertainments</strong> will review it and get back to you shortly.
          </p>
          <Link to="/" className="ty-home-btn">
            Return to Home <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default ThankYouPage;
