import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './IntegratedBrandPage.css';

const IntegratedBrandPage = () => {
  const pillars = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
      ),
      label: "Brand Strategy"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
      ),
      label: "Creative Production"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
      ),
      label: "Digital Marketing"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
      ),
      label: "Performance"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      ),
      label: "Entertainment"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      ),
      label: "Media Planning"
    }
  ];

  return (
    <div className="ib-page">

      {/* ───── HERO ───── */}
      <section className="ib-hero">
        <div className="ib-hero-bg">
          <div className="ib-glow-orb ib-orb-1"></div>
          <div className="ib-glow-orb ib-orb-2"></div>
        </div>

        {/* Large background marquee — same as production page */}
        <div className="ib-marquee">
          <div className="ib-marquee-content">
            <span>INTEGRATED</span><span className="dot">•</span>
            <span className="outline">BRAND</span><span className="dot">•</span>
            <span>SOLUTIONS</span><span className="dot">•</span>
            <span className="outline">INTEGRATED</span><span className="dot">•</span>
            <span>BRAND</span><span className="dot">•</span>
            <span className="outline">SOLUTIONS</span><span className="dot">•</span>
            <span>INTEGRATED</span><span className="dot">•</span>
            <span className="outline">BRAND</span><span className="dot">•</span>
            <span>SOLUTIONS</span><span className="dot">•</span>
            <span className="outline">INTEGRATED</span><span className="dot">•</span>
            <span>BRAND</span><span className="dot">•</span>
            <span className="outline">SOLUTIONS</span><span className="dot">•</span>
          </div>
        </div>

        <div className="container">
          <motion.div
            className="ib-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="ib-title">
              One <span className="text-accent">Powerful</span> Solution <br />
              <span className="text-outline">For Every Brand Need</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ───── INTRO CONTENT SECTION ───── */}
      <section className="ib-intro-section">
        <div className="ib-intro-grid-bg"></div>

        <div className="container ib-relative-z">
          <div className="ib-intro-layout">

            {/* LEFT — Image Column */}
            <motion.div
              className="ib-intro-image-col"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <div className="ib-image-frame">
                <img src="/ib_intro_visual.png" alt="Integrated Brand Command Center" className="ib-main-img" />
                <div className="ib-img-glow-ring"></div>
                <div className="ib-img-corner ib-corner-tl"></div>
                <div className="ib-img-corner ib-corner-tr"></div>
                <div className="ib-img-corner ib-corner-bl"></div>
                <div className="ib-img-corner ib-corner-br"></div>
              </div>

              {/* Floating stat badges */}
              <motion.div className="ib-stat-badge ib-badge-1"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <span className="ib-badge-num">6+</span>
                <span className="ib-badge-label">Service Pillars</span>
              </motion.div>

              <motion.div className="ib-stat-badge ib-badge-2"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <span className="ib-badge-num">360°</span>
                <span className="ib-badge-label">Brand Coverage</span>
              </motion.div>
            </motion.div>

            {/* RIGHT — Text Column */}
            <motion.div
              className="ib-intro-text-col"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              <span className="ib-section-label">Our Approach</span>
              <h2>A Complete <span className="text-accent">Connected</span> Communication Ecosystem</h2>

              <p className="ib-lead-para">
                Modern brands need more than individual marketing services — they need a <strong>complete and connected communication ecosystem</strong>. Our Integrated Brand Solutions are designed to bring strategy, creativity, production, digital marketing, media planning, and entertainment together under one unified approach.
              </p>
              <p className="ib-body-para">
                We help businesses create strong brand identities, audience engagement, and impactful campaigns through innovative thinking and strategic execution. From concept development to campaign execution, we provide end-to-end brand solutions that help businesses <strong>grow, connect, and stand out</strong> in today's competitive market.
              </p>

              {/* Service Pillars Grid */}
              <div className="ib-pillars-grid">
                {pillars.map((p, i) => (
                  <motion.div
                    key={i}
                    className="ib-pillar-chip"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  >
                    <div className="ib-pillar-icon">{p.icon}</div>
                    <span>{p.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ───── WHAT WE DELIVER ───── */}
      <section className="ib-deliver-section">
        <div className="ib-deliver-bg"></div>
        <div className="container ib-relative-z">
          <motion.div
            className="ib-deliver-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="ib-section-label">Our Services</span>
            <h2>What We <span className="text-accent">Deliver</span></h2>
          </motion.div>
        </div>

        <div className="ib-deliver-panels">
          {[
            {
              num: "01",
              title: "Brand Strategy & Communication",
              content: "We develop strong communication strategies that help brands define their identity, positioning, and audience connection through impactful storytelling and creative direction.",
              tags: ["Brand Positioning", "Creative Strategy", "Communication Planning", "Campaign Ideation", "Brand Storytelling"],
              image: "/ib_deliver_1.png",
              reverse: false
            },
            {
              num: "02",
              title: "Creative Production & Content",
              content: "Our creative production solutions focus on developing visually engaging content that strengthens brand identity and audience interaction.",
              tags: ["Ad Film Production", "Brand Videos", "Motion Graphics", "Creative Design", "Promotional Content"],
              image: "/ib_deliver_2.png",
              reverse: true
            },
            {
              num: "03",
              title: "Digital & Media Solutions",
              content: "We create digital and media campaigns that increase visibility, engagement, and performance across online and offline platforms.",
              tags: ["Social Media Marketing", "Media Planning", "Paid Advertising", "Digital Campaigns", "Performance Marketing"],
              image: "/ib_deliver_3.png",
              reverse: false
            },
            {
              num: "04",
              title: "Entertainment & Celebrity Collaborations",
              content: "We help brands connect with audiences through entertainment-driven campaigns, celebrity collaborations, and promotional partnerships.",
              tags: ["Celebrity Management", "Film Promotions", "Influencer Collaborations", "Entertainment Campaigns", "Brand Partnerships"],
              image: "/ib_deliver_4.png",
              reverse: true
            },
            {
              num: "05",
              title: "Campaign Execution & Promotions",
              content: "From planning to execution, we manage complete promotional campaigns that maximize audience reach and brand impact.",
              tags: ["Brand Activations", "Promotional Campaigns", "Event Marketing", "Outdoor Promotions", "Integrated Media Execution"],
              image: "/ib_deliver_5.png",
              reverse: false
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`ib-deliver-panel ${item.reverse ? 'ib-panel-reverse' : ''}`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.85, delay: 0.1 }}
            >
              {/* Image side */}
              <div className="ib-panel-image-col">
                <div className="ib-panel-img-wrap">
                  <img src={item.image} alt={item.title} className="ib-panel-img" />
                  <div className="ib-panel-img-overlay"></div>
                  <div className="ib-panel-num-watermark">{item.num}</div>
                </div>
              </div>

              {/* Text side */}
              <div className="ib-panel-text-col">
                <div className="ib-panel-text-inner">
                  <div className="ib-panel-step-label">{item.num} / 05</div>
                  <h3>{item.title}</h3>
                  <div className="ib-panel-divider"></div>
                  <p>{item.content}</p>
                  <div className="ib-panel-tags">
                    {item.tags.map((tag, ti) => (
                      <motion.span
                        key={ti}
                        className="ib-panel-tag"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 + ti * 0.07 }}
                      >
                        <span className="ib-tag-dot">◆</span>{tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───── WHY CHOOSE US ───── */}
      <section className="ib-why-section">
        <div className="container">
          <motion.div
            className="ib-why-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="ib-section-label">Our Advantage</span>
            <h2>Why Brands Partner With <span className="text-accent">Baiji Entertainments</span></h2>
          </motion.div>

          <div className="ib-why-bento">
            {/* ── Row 1 ── */}
            <motion.div
              className="ib-why-card ib-card-wide ib-card-featured"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="ib-why-num">01</div>
              <div className="ib-why-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="6" y="6" width="36" height="36" rx="6"/>
                  <path d="M16 24h16M24 16v16" strokeLinecap="round"/>
                  <circle cx="24" cy="24" r="5"/>
                </svg>
              </div>
              <h3>End-To-End Brand Solutions</h3>
              <p>We manage everything from strategy and production to marketing and promotions under one integrated approach — saving you time, effort, and resources.</p>
            </motion.div>

            <motion.div
              className="ib-why-card ib-card-narrow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="ib-why-num">02</div>
              <div className="ib-why-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M24 6l4 12h12l-10 7 4 12-10-7-10 7 4-12L8 18h12z" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Entertainment-Driven Creativity</h3>
              <p>Our campaigns combine creative storytelling with entertainment-focused audience engagement for deeper brand impact.</p>
            </motion.div>

            {/* ── Row 2 ── */}
            <motion.div
              className="ib-why-card ib-card-narrow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="ib-why-num">03</div>
              <div className="ib-why-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="24" cy="24" r="16"/>
                  <path d="M24 14v10l7 4" strokeLinecap="round"/>
                  <path d="M14 36l4-8M34 36l-4-8" strokeLinecap="round" opacity="0.5"/>
                </svg>
              </div>
              <h3>Strategic & Result-Oriented Approach</h3>
              <p>Every campaign is backed by planning, audience insights, and measurable performance goals to deliver real outcomes.</p>
            </motion.div>

            <motion.div
              className="ib-why-card ib-card-wide ib-card-dark"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="ib-why-num">04</div>
              <div className="ib-why-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="4" y="10" width="18" height="12" rx="3"/>
                  <rect x="26" y="10" width="18" height="12" rx="3"/>
                  <rect x="4" y="28" width="18" height="12" rx="3"/>
                  <rect x="26" y="28" width="18" height="12" rx="3"/>
                  <path d="M13 22v6M35 22v6M22 16h4M22 34h4" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Multi-Platform Execution</h3>
              <p>We ensure seamless brand communication across digital, media, entertainment, and promotional platforms — keeping your brand consistent everywhere audiences find you.</p>
            </motion.div>

            {/* ── Row 3 — Full width ── */}
            <motion.div
              className="ib-why-card ib-card-full ib-card-accent"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <div className="ib-why-num">05</div>
              <div className="ib-card-full-inner">
                <div className="ib-why-icon ib-icon-large">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M24 4C13 4 4 13 4 24s9 20 20 20 20-9 20-20S35 4 24 4z"/>
                    <path d="M24 14c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10z" opacity="0.4"/>
                    <circle cx="24" cy="24" r="4" fill="currentColor" stroke="none"/>
                  </svg>
                </div>
                <div className="ib-card-full-text">
                  <h3>Innovative Brand Experiences</h3>
                  <p>We focus on creating memorable and impactful experiences that strengthen audience connection and brand identity — turning campaigns into lasting impressions.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── OUR PROCESS ───── */}
      <section className="ib-process-section">
        <div className="ib-process-dots-bg"></div>
        <div className="container ib-relative-z">
          <motion.div
            className="ib-process-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="ib-section-label">How We Work</span>
            <h2>Our Integrated <span className="text-accent">Brand Approach</span></h2>
          </motion.div>

          <div className="ib-process-zigzag">
            {[
              {
                num: "01",
                title: "Understanding The Brand",
                desc: "Analyzing business goals, audience behavior, and market positioning.",
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="24" cy="18" r="8"/>
                    <path d="M8 42c0-8.8 7.2-16 16-16s16 7.2 16 16" strokeLinecap="round"/>
                    <path d="M32 10l8-6M32 14l6-2" strokeLinecap="round" opacity="0.6"/>
                  </svg>
                ),
                side: "left"
              },
              {
                num: "02",
                title: "Strategic Planning",
                desc: "Creating customized marketing and communication strategies.",
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="6" y="8" width="36" height="32" rx="4"/>
                    <path d="M14 20h20M14 28h14" strokeLinecap="round"/>
                    <path d="M30 28l8-6" strokeLinecap="round"/>
                    <circle cx="36" cy="20" r="3" fill="currentColor" stroke="none"/>
                  </svg>
                ),
                side: "right"
              },
              {
                num: "03",
                title: "Creative Development",
                desc: "Designing engaging visuals, campaigns, and storytelling concepts.",
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M10 38l6-6 4 4 8-10 6 8 4-6 4 10H10z"/>
                    <circle cx="16" cy="16" r="5"/>
                    <path d="M28 8l12 12" strokeLinecap="round" opacity="0.5"/>
                  </svg>
                ),
                side: "left"
              },
              {
                num: "04",
                title: "Campaign Execution",
                desc: "Managing promotions, media, entertainment, and digital campaigns.",
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M8 24L24 8l16 16" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M24 8v30" strokeLinecap="round"/>
                    <path d="M14 44h20" strokeLinecap="round" opacity="0.5"/>
                    <path d="M16 32l-8 5M32 32l8 5" strokeLinecap="round" opacity="0.5"/>
                  </svg>
                ),
                side: "right"
              },
              {
                num: "05",
                title: "Optimization & Growth",
                desc: "Tracking performance and continuously improving campaign effectiveness.",
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <polyline points="6,38 14,26 22,32 32,14 42,20" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="14" cy="26" r="3" fill="currentColor" stroke="none"/>
                    <circle cx="22" cy="32" r="3" fill="currentColor" stroke="none"/>
                    <circle cx="32" cy="14" r="3" fill="currentColor" stroke="none"/>
                    <path d="M38 8v8h-8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                side: "left"
              }
            ].map((step, index) => (
              <div key={index} className={`ib-zz-row ib-zz-${step.side}`}>

                {/* Card */}
                <motion.div
                  className="ib-zz-card"
                  initial={{ opacity: 0, x: step.side === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  <div className="ib-zz-card-glow"></div>
                  <div className="ib-zz-icon">{step.icon}</div>
                  <div className="ib-zz-step-badge">{step.num}</div>
                  <h3 className="ib-zz-title">{step.title}</h3>
                  <p className="ib-zz-desc">{step.desc}</p>
                </motion.div>

                {/* Spine Node */}
                <div className="ib-zz-spine">
                  <motion.div
                    className="ib-zz-hex"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <span>{step.num}</span>
                  </motion.div>
                  {index < 4 && <div className="ib-zz-spine-line"></div>}
                </div>

                {/* Empty spacer for the opposite column */}
                <div className="ib-zz-spacer"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated CTA Section */}
      <section className="ib-cta-section">
        <div className="ib-cta-bg">
          <div className="ib-cta-glow"></div>
        </div>
        <div className="container relative-z">
          <motion.div 
            className="ib-cta-box"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="ib-cta-title">
              Ready for a Unified <br/>
              <span className="text-accent">Brand Communication Strategy?</span>
            </h2>
            <p className="ib-cta-desc">
              Let us bring strategy, creativity, production, digital marketing, media planning and celebrity management together under one unified high-impact approach.
            </p>
            <div className="ib-cta-actions">
              <Link to="/contact" className="ib-cta-btn btn-primary">Start Your Partnership</Link>
              <Link to="/portfolio" className="ib-cta-btn btn-secondary">View Our Portfolio</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default IntegratedBrandPage;
