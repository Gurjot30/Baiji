import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import BrandStrategyPage from './pages/BrandStrategyPage';
import ProductionEntertainmentPage from './pages/ProductionEntertainmentPage';
import DigitalMarketingPage from './pages/DigitalMarketingPage';
import IntegratedBrandPage from './pages/IntegratedBrandPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/brand-creative-strategy" element={<BrandStrategyPage />} />
            <Route path="/services/production-entertainment" element={<ProductionEntertainmentPage />} />
            <Route path="/services/digital-performance-marketing" element={<DigitalMarketingPage />} />
            <Route path="/services/integrated-brand-solutions" element={<IntegratedBrandPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
