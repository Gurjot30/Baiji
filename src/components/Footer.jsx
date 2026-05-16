import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiInstagram, FiLinkedin, FiFacebook, FiYoutube, FiMapPin } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link">
              <img src="/logo.png" alt="Baiji Entertainments Logo" className="footer-logo" />
            </Link>
            <p className="footer-tagline">
              A premium full-service creative advertising and entertainment agency. We transform ideas into unforgettable brand experiences.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/baijientertainments/?hl=en" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
              <a href="https://www.linkedin.com/company/bai-ji-entertainments" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
              <a href="https://www.facebook.com/baijientertainments" target="_blank" rel="noopener noreferrer"><FiFacebook /></a>
              <a href="https://www.youtube.com/@baijientertainments" target="_blank" rel="noopener noreferrer"><FiYoutube /></a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Our Services</h3>
            <ul>
              <li><a href="/#services">Film Production</a></li>
              <li><a href="/#services">Digital Marketing</a></li>
              <li><a href="/#services">Celebrity Management</a></li>
              <li><a href="/#services">Media Planning</a></li>
              <li><a href="/#services">Sports Branding</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><a href="/#work">Our Work</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Contact Info</h3>
            <ul>
              <li className="footer-contact-item">
                <FiMail /> <span>divyanshu@baijientertainments.com</span>
              </li>
              <li className="footer-contact-item">
                <FiPhone /> <span>+91 99282 72728</span>
              </li>
              <li className="footer-contact-item">
                <FiMapPin /> <span>Divyanshu Sharma, Wing A, Flat no - 1701, Abrol Vastu Park, Near Ryan International School, Malad West - 400064</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Baiji Entertainments. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
