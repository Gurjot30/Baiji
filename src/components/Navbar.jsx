import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
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
          <li><a href="/#work">Work</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
        <button className="btn btn-outline nav-cta">Work With Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
