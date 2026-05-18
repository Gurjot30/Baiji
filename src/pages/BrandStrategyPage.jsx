import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './BrandStrategyPage.css';

const BrandStrategyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="brand-strategy-page">
      {/* Hero Section */}
      <section className="bs-hero">
        <div className="bs-hero-bg">
          <div className="bs-glow-orb bs-orb-1"></div>
          <div className="bs-glow-orb bs-orb-2"></div>
        </div>
        
        <div className="bs-marquee">
          <div className="bs-marquee-content">
            <span>BRAND</span><span className="dot">•</span>
            <span className="outline">CREATIVE</span><span className="dot">•</span>
            <span>STRATEGY</span><span className="dot">•</span>
            <span className="outline">BRAND</span><span className="dot">•</span>
            <span>CREATIVE</span><span className="dot">•</span>
            <span className="outline">STRATEGY</span><span className="dot">•</span>
            <span>BRAND</span><span className="dot">•</span>
            <span className="outline">CREATIVE</span><span className="dot">•</span>
            <span>STRATEGY</span><span className="dot">•</span>
            <span className="outline">BRAND</span><span className="dot">•</span>
            <span>CREATIVE</span><span className="dot">•</span>
            <span className="outline">STRATEGY</span><span className="dot">•</span>
          </div>
        </div>

        <div className="container">
          <motion.div 
            className="bs-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="bs-title">
              Strategy That Gives<br />
              <span className="text-accent">Your Brand</span><br />
              <span className="text-outline">A Strong Voice</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Visual Content Section */}
      <section className="bs-visual-section">
        <div className="container">
          <div className="bs-visual-grid">
            
            <motion.div 
              className="bs-visual-image-wrapper"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="/brand_strategy_visual.png" alt="Brand Strategy Visualization" className="bs-visual-image" />
              <div className="bs-visual-glow"></div>
            </motion.div>

            <motion.div 
              className="bs-visual-text-wrapper"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bs-text-block">
                <div className="bs-text-number">01</div>
                <p>A successful brand is more than just visuals — it’s about communication, positioning, storytelling, and audience connection. Our Brand & Creative Strategy services are designed to help businesses create a unique identity that stands out in today’s competitive market.</p>
              </div>

              <div className="bs-text-block">
                <div className="bs-text-number">02</div>
                <p>From campaign concepts to media planning and brand communication, we create strategies that align creativity with business goals to deliver measurable impact.</p>
              </div>

              <div className="bs-text-block">
                <div className="bs-text-number">03</div>
                <p>We focus on building brands that are memorable, engaging, and result-driven.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bs-expertise">
        <div className="container">
          <motion.div 
            className="bs-expertise-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="bs-expertise-title">What We <span className="text-accent">Specialize In</span></h2>
            <div className="bs-expertise-line"></div>
          </motion.div>

          <div className="bs-expertise-grid">
            {[
              {
                id: "01",
                title: "Brand Positioning",
                desc: "We help brands define their unique identity, market presence, and communication style to create a stronger connection with their audience."
              },
              {
                id: "02",
                title: "Creative Campaign Strategy",
                desc: "Our team develops innovative campaign ideas and creative concepts that help brands capture attention and build engagement across multiple platforms."
              },
              {
                id: "03",
                title: "Media Planning & Communication",
                desc: "We create strategic media plans that maximize reach, visibility, and audience interaction through the right channels and promotional opportunities."
              },
              {
                id: "04",
                title: "Brand Storytelling",
                desc: "We craft compelling brand narratives that emotionally connect with audiences and strengthen long-term brand recognition."
              },
              {
                id: "05",
                title: "Audience Research & Insights",
                desc: "Understanding the audience is the foundation of every successful campaign. We analyze audience behavior, trends, and market insights to create impactful strategies."
              },
              {
                id: "06",
                title: "Visual & Creative Direction",
                desc: "From brand aesthetics to campaign visuals, we ensure every creative element aligns with your brand identity and communication goals."
              }
            ].map((item, index) => (
              <motion.div 
                key={item.id}
                className="bs-expertise-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="expertise-number">{item.id}</div>
                <div className="expertise-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
                <div className="expertise-hover-glow"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bs-process">
        <div className="container">
          <motion.div 
            className="bs-process-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="bs-process-title">Our Creative Strategy <span className="text-accent">Process</span></h2>
            <div className="bs-process-line"></div>
          </motion.div>

          <div className="bs-timeline-wrapper">
            <div className="bs-timeline-center-line"></div>
            {[
              {
                id: "01",
                title: "Brand Discovery",
                desc: "Understanding your business, audience, and goals."
              },
              {
                id: "02",
                title: "Research & Insights",
                desc: "Analyzing market trends, competitors, and audience behavior."
              },
              {
                id: "03",
                title: "Creative Ideation",
                desc: "Developing unique campaign concepts and communication strategies."
              },
              {
                id: "04",
                title: "Strategy Development",
                desc: "Building structured media and branding plans."
              },
              {
                id: "05",
                title: "Execution & Optimization",
                desc: "Implementing campaigns and continuously improving performance."
              }
            ].map((step, index) => (
              <motion.div 
                key={step.id}
                className={`bs-timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
              >
                <div className="bs-timeline-content">
                  <div className="bs-timeline-number">{step.id}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
                <div className="bs-timeline-node">
                  <div className="bs-node-inner"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bs-why-choose">
        <div className="container">
          <div className="bs-why-grid">
            <div className="bs-why-left">
              <motion.div 
                className="bs-why-sticky"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="bs-why-title">Why Choose <br/><span className="text-accent">Baiji Entertainments</span></h2>
                <div className="bs-why-line"></div>
                
                <div className="bs-why-image-container">
                  <div className="bs-why-image-glow"></div>
                  <img src="/why_choose_us_visual.png" alt="Why Choose Baiji" className="bs-why-image" />
                  <div className="bs-why-image-overlay"></div>
                </div>
              </motion.div>
            </div>

            <div className="bs-why-right">
              {[
                {
                  title: "Entertainment-Driven Creativity",
                  desc: "We combine marketing expertise with entertainment-focused storytelling to create engaging brand experiences.",
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                },
                {
                  title: "Strategic Thinking",
                  desc: "Every campaign is backed by research, audience understanding, and market insights.",
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                },
                {
                  title: "Innovative Concepts",
                  desc: "We focus on fresh, impactful, and creative campaign ideas that help brands stand out.",
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="M4.93 4.93l1.41 1.41"></path><path d="M17.66 17.66l1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="M6.34 17.66l-1.41 1.41"></path><path d="M19.07 4.93l-1.41 1.41"></path></svg>
                },
                {
                  title: "Result-Oriented Approach",
                  desc: "Our strategies are designed not just for visibility, but for real audience engagement and business growth.",
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                },
                {
                  title: "Integrated Brand Communication",
                  desc: "We ensure consistency across digital, media, promotional, and creative platforms.",
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                }
              ].map((point, index) => (
                <motion.div 
                  key={index}
                  className="bs-why-card"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bs-why-icon">{point.icon}</div>
                  <div className="bs-why-content">
                    <h3>{point.title}</h3>
                    <p>{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BrandStrategyPage;
