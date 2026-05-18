import React from 'react';
import { motion } from 'framer-motion';
import './ProductionEntertainmentPage.css';

const ProductionEntertainmentPage = () => {
  return (
    <div className="production-page">
      {/* Hero Section */}
      <section className="pe-hero">
        <div className="pe-hero-bg">
          <div className="pe-glow-orb pe-orb-1"></div>
          <div className="pe-glow-orb pe-orb-2"></div>
        </div>
        
        <div className="pe-marquee">
          <div className="pe-marquee-content">
            <span>PRODUCTION</span><span className="dot">•</span>
            <span className="outline">ENTERTAINMENT</span><span className="dot">•</span>
            <span>CONTENT</span><span className="dot">•</span>
            <span className="outline">PRODUCTION</span><span className="dot">•</span>
            <span>ENTERTAINMENT</span><span className="dot">•</span>
            <span className="outline">CONTENT</span><span className="dot">•</span>
            <span>PRODUCTION</span><span className="dot">•</span>
            <span className="outline">ENTERTAINMENT</span><span className="dot">•</span>
            <span>CONTENT</span><span className="dot">•</span>
            <span className="outline">PRODUCTION</span><span className="dot">•</span>
            <span>ENTERTAINMENT</span><span className="dot">•</span>
            <span className="outline">CONTENT</span><span className="dot">•</span>
          </div>
        </div>

        <div className="container">
          <motion.div 
            className="pe-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="pe-title">
              Entertainment-<span className="text-accent">Focused</span> <br />
              <span className="text-outline">Production Solutions</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Cinematic Content Section with Background Image */}
      <section className="pe-cinematic-section">
        <div className="pe-cinematic-bg" style={{ backgroundImage: 'url(/production_bg.png)' }}>
          <div className="pe-cinematic-overlay"></div>
        </div>

        <div className="container pe-cinematic-container">
          <motion.div 
            className="pe-glass-panel"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="pe-glass-content">
              <h2>The Key To <br /><span className="text-accent">Audience Engagement</span></h2>
              <div className="pe-line"></div>
              
              <div className="pe-text-grid">
                <div className="pe-text-block">
                  <p className="lead-text">
                    In today’s fast-moving digital and entertainment industry, impactful content is the key to audience engagement. Our Production & Entertainment services are designed to help brands create visually compelling, emotionally engaging, and professionally executed content experiences.
                  </p>
                </div>
                
                <div className="pe-text-block">
                  <p>
                    From film production and branded content to celebrity collaborations and entertainment campaigns, we help brands communicate through creativity, storytelling, and strategic execution.
                  </p>
                  <p>
                    Our goal is to turn ideas into unforgettable experiences that inspire audiences and strengthen brand presence.
                  </p>
                </div>
              </div>
            </div>
            <div className="pe-glass-glow"></div>
          </motion.div>
        </div>
      </section>

      {/* Expertise / What We Offer Section */}
      <section className="pe-offer-section">
        <div className="container">
          <motion.div 
            className="pe-offer-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="pe-offer-title">What We <span className="text-accent">Offer</span></h2>
            <div className="pe-line center-line"></div>
          </motion.div>

          <div className="pe-stacked-cards">
            {[
              {
                id: "01",
                title: "Film Production",
                content: "We produce high-quality visual content that captures attention and delivers powerful storytelling. From concept development to final execution, our production solutions are designed to create cinematic and engaging brand experiences.",
                includes: ["Commercial Shoots", "Branded Films", "Promotional Videos", "Ad Film Production", "Corporate Videos", "Creative Direction"]
              },
              {
                id: "02",
                title: "Celebrity Management",
                content: "We connect brands with the right celebrities, influencers, and public personalities to create impactful collaborations and audience engagement opportunities.",
                includes: ["Celebrity Collaborations", "Brand Endorsements", "Influencer Campaigns", "Event Appearances", "Talent Coordination", "Public Relations Support"]
              },
              {
                id: "03",
                title: "Entertainment Campaigns",
                content: "We create entertainment-driven campaigns that combine creativity, audience engagement, and promotional strategy to maximize brand visibility.",
                includes: ["Film Promotions", "Launch Campaigns", "Event Promotions", "Digital Entertainment Campaigns", "Audience Engagement Activities"]
              },
              {
                id: "04",
                title: "Creative Content Production",
                content: "Our team develops visually appealing and audience-focused content that helps brands stand out across digital, social, and promotional platforms.",
                includes: ["Creative Visual Content", "Social Media Content", "Promotional Creatives", "Motion Graphics", "Entertainment Branding"]
              }
            ].map((offer, index) => (
              <div 
                key={offer.id} 
                className="pe-stack-card"
                style={{ top: `calc(100px + ${index * 40}px)` }}
              >
                <div className="pe-stack-card-inner">
                  <div className="pe-stack-number">{offer.id}</div>
                  <div className="pe-stack-content-left">
                    <h3>{offer.title}</h3>
                    <p>{offer.content}</p>
                  </div>
                  <div className="pe-stack-content-right">
                    <h4>Includes:</h4>
                    <div className="pe-tags-grid">
                      {offer.includes.map((tag, i) => (
                        <span key={i} className="pe-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Production Process Section */}
      <section className="pe-process-section">
        <div className="container">
          <motion.div 
            className="pe-process-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="pe-process-title">Our Production <span className="text-accent">Process</span></h2>
            <div className="pe-line center-line"></div>
          </motion.div>

          <div className="pe-flowchart-container">
            <div className="pe-flow-line"></div>
            
            <div className="pe-flow-nodes">
              {[
                {
                  num: "01",
                  title: "Concept Development",
                  desc: "Understanding the project vision, audience, and objectives.",
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="M4.93 4.93l1.41 1.41"></path><path d="M17.66 17.66l1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="M6.34 17.66l-1.41 1.41"></path><path d="M19.07 4.93l-1.41 1.41"></path></svg>
                },
                {
                  num: "02",
                  title: "Creative Planning",
                  desc: "Developing scripts, visual concepts, and production strategies.",
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                },
                {
                  num: "03",
                  title: "Production Execution",
                  desc: "Managing shoots, creative direction, and content creation.",
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                },
                {
                  num: "04",
                  title: "Post Production",
                  desc: "Editing, visual enhancement, and final content refinement.",
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                },
                {
                  num: "05",
                  title: "Promotions & Distribution",
                  desc: "Launching and promoting content across the right platforms.",
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                }
              ].map((step, index) => (
                <div key={index} className={`pe-flow-step ${index % 2 === 0 ? 'flow-top' : 'flow-bottom'}`}>
                  <motion.div 
                    className="pe-flow-card"
                    initial={{ opacity: 0, y: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="pe-flow-icon">{step.icon}</div>
                    <div className="pe-flow-content">
                      <div className="pe-flow-num">{step.num}</div>
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                  </motion.div>
                  {index < 4 && (
                    <div className="pe-flow-arrow">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Premium Grid */}

      <section className="pe-why-section">
        <div className="pe-why-bg" style={{ backgroundImage: 'url(/production_why_choose.png)' }}></div>
        <div className="container relative-z">
          <motion.div 
            className="pe-why-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="pe-why-title">Why Choose <br/><span className="text-accent">Baiji Entertainments</span></h2>
            <div className="pe-line center-line"></div>
          </motion.div>

          <div className="pe-why-grid">
            {[
              {
                num: "01",
                title: "Industry Understanding",
                desc: "We understand the entertainment ecosystem and create campaigns that resonate with modern audiences."
              },
              {
                num: "02",
                title: "High-Quality Production",
                desc: "From visuals to storytelling, we focus on delivering premium-quality creative output."
              },
              {
                num: "03",
                title: "Creative Direction",
                desc: "Our creative approach combines innovation, aesthetics, and audience psychology."
              },
              {
                num: "04",
                title: "Celebrity Network",
                desc: "We help brands collaborate with influential personalities and entertainment platforms."
              },
              {
                num: "05",
                title: "End-To-End Execution",
                desc: "From planning to production and promotions, we manage complete project execution seamlessly."
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className={`pe-why-card ${index === 0 ? 'pe-card-wide' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="pe-card-glow"></div>
                <div className="pe-card-num">{item.num}</div>
                <div className="pe-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProductionEntertainmentPage;
