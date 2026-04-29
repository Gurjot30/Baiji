import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiMail, FiPhone, FiInstagram, FiLinkedin, FiFacebook } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-container">
        <div className="footer-top grid">
          
          <div className="footer-about">
            <Link to="/" className="footer-logo-link">
              <img src="/logo.png" alt="Baiji Entertainments Logo" className="footer-logo" />
            </Link>
            <p className="footer-tagline">
              A premium full-service creative advertising and entertainment agency based in Delhi & Mumbai. We build brands that matter.
            </p>
            <div className="social-links">
              <a href="#"><FiInstagram /></a>
              <a href="#"><FiLinkedin /></a>
              <a href="#"><FiFacebook /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><a href="/#services">Services</a></li>
              <li><a href="/#work">Work</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <ul>
              <li><FiMapPin className="contact-icon" /> <span>Delhi & Mumbai, India</span></li>
              <li><FiMail className="contact-icon" /> <span>hello@baijientertainments.com</span></li>
              <li><FiPhone className="contact-icon" /> <span>+91 98765 43210</span></li>
            </ul>
          </div>
          
          <div className="footer-map">
            <h3>Our Locations</h3>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.114827184136!2d77.2090212!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Delhi Office Map"
              ></iframe>
            </div>
          </div>
          
        </div>
        
        <div className="footer-bottom flex-center">
          <p>&copy; {new Date().getFullYear()} Baiji Entertainments. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
