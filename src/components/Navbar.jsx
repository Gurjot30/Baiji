import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      // Hide navbar when scroll crosses hero section (approx 100vh)
      setHidden(scrollY > window.innerHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <Link to="/" className="logo-link">
            <img src="/logo.png" alt="Baiji Entertainments Logo" className="nav-logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="/#services">Services</a></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
