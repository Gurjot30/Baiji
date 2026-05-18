import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './DigitalMarketingPage.css';

const DigitalMarketingPage = () => {
  const [activeOfferTab, setActiveOfferTab] = useState(0);

  const offerData = [
    {
      id: "01",
      shortTitle: "Strategy",
      title: "Digital Marketing Strategy",
      content: "We create customized digital marketing strategies designed to increase brand visibility, audience engagement, and online growth across multiple platforms.",
      includes: ["Digital Campaign Planning", "Online Brand Positioning", "Audience Targeting", "Marketing Strategy Development", "Platform Optimization"],
      image: "/dm_strategy.png"
    },
    {
      id: "02",
      shortTitle: "Social Media",
      title: "Social Media Marketing",
      content: "Our team creates engaging social media campaigns that help brands connect with audiences through creative content and impactful communication.",
      includes: ["Instagram Marketing", "Facebook Marketing", "LinkedIn Marketing", "Content Strategy", "Social Media Management", "Creative Campaigns"],
      image: "/dm_social.png"
    },
    {
      id: "03",
      shortTitle: "Performance",
      title: "Performance Marketing",
      content: "We run performance-focused campaigns that maximize reach, generate quality leads, and improve conversions through data-driven optimization.",
      includes: ["Paid Advertising", "Lead Generation Campaigns", "Google Ads", "Meta Ads", "Audience Retargeting", "Campaign Optimization"],
      image: "/dm_performance.png"
    },
    {
      id: "04",
      shortTitle: "Content",
      title: "Content & Creative Marketing",
      content: "We develop creative digital content that strengthens brand identity and increases audience engagement across social and digital platforms.",
      includes: ["Creative Content Design", "Motion Graphics", "Promotional Creatives", "Video Marketing", "Digital Storytelling"],
      image: "/dm_content.png"
    },
    {
      id: "05",
      shortTitle: "Analytics",
      title: "Analytics & Optimization",
      content: "Our performance-focused approach includes continuous monitoring, audience analysis, and campaign optimization to improve marketing effectiveness and ROI.",
      includes: ["Performance Tracking", "Audience Insights", "Campaign Reports", "Conversion Analysis", "Strategy Optimization"],
      image: "/dm_analytics.png"
    }
  ];

  return (
    <div className="digital-page">
      {/* Hero Section */}
      <section className="dm-hero">
        <div className="dm-hero-bg">
          <div className="dm-glow-orb dm-orb-1"></div>
          <div className="dm-glow-orb dm-orb-2"></div>
        </div>
        
        <div className="dm-marquee">
          <div className="dm-marquee-content">
            <span>DIGITAL</span><span className="dot">•</span>
            <span className="outline">PERFORMANCE</span><span className="dot">•</span>
            <span>MARKETING</span><span className="dot">•</span>
            <span className="outline">DIGITAL</span><span className="dot">•</span>
            <span>PERFORMANCE</span><span className="dot">•</span>
            <span className="outline">MARKETING</span><span className="dot">•</span>
            <span>DIGITAL</span><span className="dot">•</span>
            <span className="outline">PERFORMANCE</span><span className="dot">•</span>
            <span>MARKETING</span><span className="dot">•</span>
            <span className="outline">DIGITAL</span><span className="dot">•</span>
            <span>PERFORMANCE</span><span className="dot">•</span>
            <span className="outline">MARKETING</span><span className="dot">•</span>
          </div>
        </div>

        <div className="container">
          <motion.div 
            className="dm-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="dm-title">
              Smart <span className="text-accent">Digital</span> Strategies <br />
              <span className="text-outline">For Modern Brands</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Innovative Digital Intro Section */}
      <section className="dm-intro-section">
        <div className="dm-grid-bg"></div>
        <div className="dm-glow-bg"></div>
        
        <div className="container relative-z">
          <motion.div 
            className="dm-intro-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="dm-subtitle">The Digital Ecosystem</span>
            <h2>Driving <span className="text-accent">Long-Term</span> Growth</h2>
          </motion.div>

          <div className="dm-intro-layout">
            {/* Main Lead Card */}
            <motion.div 
              className="dm-intro-card dm-card-lead"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="dm-card-border-beam"></div>
              <div className="dm-intro-card-inner">
                <div className="dm-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                </div>
                <p className="dm-lead-text">
                  In today’s digital world, brands need more than just online presence — they need <strong>visibility, engagement, performance, and audience connection</strong>. Our Digital & Performance Marketing solutions are designed to help brands grow through strategic campaigns, creative content, targeted advertising, and data-driven optimization.
                </p>
              </div>
            </motion.div>

            <div className="dm-intro-split">
              {/* Secondary Card 1 */}
              <motion.div 
                className="dm-intro-card dm-card-secondary"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="dm-card-border-beam"></div>
                <div className="dm-intro-card-inner">
                  <div className="dm-icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <p>
                    From social media marketing and performance campaigns to digital branding and audience engagement, we help businesses create meaningful digital experiences that strengthen brand identity and drive long-term growth.
                  </p>
                </div>
              </motion.div>

              {/* Secondary Card 2 */}
              <motion.div 
                className="dm-intro-card dm-card-secondary"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="dm-card-border-beam"></div>
                <div className="dm-intro-card-inner">
                  <div className="dm-icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                  </div>
                  <p>
                    We focus on delivering marketing strategies that are <strong>creative, measurable, and result-oriented.</strong>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tabbed Image Showcase - What We Offer */}
      <section className="dm-showcase-section">
        <div className="container">
          <motion.div 
            className="dm-showcase-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="dm-showcase-title">What We <span className="text-accent">Offer</span></h2>
            <div className="dm-line center-line"></div>
          </motion.div>

          <div className="dm-showcase-container">
            {/* Tabs Navigation */}
            <div className="dm-showcase-tabs">
              {offerData.map((offer, index) => (
                <button
                  key={offer.id}
                  className={`dm-tab-btn ${activeOfferTab === index ? 'active' : ''}`}
                  onClick={() => setActiveOfferTab(index)}
                >
                  <span className="dm-tab-num">{offer.id}</span>
                  {offer.shortTitle}
                </button>
              ))}
            </div>

            {/* Active Content Window */}
            <div className="dm-showcase-window">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeOfferTab}
                  className="dm-showcase-content-wrapper"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="dm-showcase-image-col">
                    <div className="dm-image-overlay"></div>
                    <img src={offerData[activeOfferTab].image} alt={offerData[activeOfferTab].title} className="dm-showcase-img" />
                    <div className="dm-image-glow"></div>
                  </div>
                  
                  <div className="dm-showcase-text-col">
                    <div className="dm-text-col-inner">
                      <div className="dm-showcase-number-bg">{offerData[activeOfferTab].id}</div>
                      <h3>{offerData[activeOfferTab].title}</h3>
                      <p>{offerData[activeOfferTab].content}</p>
                      
                      <div className="dm-includes-section">
                        <h4>Includes:</h4>
                        <div className="dm-tags-grid">
                          {offerData[activeOfferTab].includes.map((tag, i) => (
                            <span key={i} className="dm-tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Expanding Accordion */}
      <section className="dm-why-section">
        <div className="container relative-z">
          <motion.div 
            className="dm-why-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="dm-why-title">Why Choose <br/><span className="text-accent">Baiji Entertainments</span></h2>
            <div className="dm-line center-line"></div>
          </motion.div>

          <div className="dm-accordion-container">
            {[
              {
                num: "01",
                title: "Creative + Performance Approach",
                desc: "We combine creative storytelling with performance marketing strategies for better engagement and measurable growth.",
                bgImg: "dm_why_1.png"
              },
              {
                num: "02",
                title: "Audience-Focused Campaigns",
                desc: "Every campaign is designed based on audience behavior, digital trends, and brand objectives.",
                bgImg: "dm_why_2.png"
              },
              {
                num: "03",
                title: "Result-Oriented Marketing",
                desc: "Our strategies focus on visibility, lead generation, conversions, and long-term brand growth.",
                bgImg: "dm_why_3.png"
              },
              {
                num: "04",
                title: "Multi-Platform Expertise",
                desc: "We create campaigns across social media, search engines, digital advertising, and entertainment platforms.",
                bgImg: "dm_why_4.png"
              },
              {
                num: "05",
                title: "Data-Driven Optimization",
                desc: "We continuously analyze campaign performance to improve results and maximize ROI.",
                bgImg: "dm_why_5.png"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="dm-accordion-panel"
                style={{ backgroundImage: `url(/${item.bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="dm-accordion-overlay"></div>
                <div className="dm-accordion-content">
                  <div className="dm-accordion-num">{item.num}</div>
                  <h3 className="dm-accordion-heading">{item.title}</h3>
                  <p className="dm-accordion-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default DigitalMarketingPage;
