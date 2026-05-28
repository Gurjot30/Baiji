from create_html_pages import build_html, write_file

content = """
    <div class="digital-page">
      <!-- Hero Section -->
      <section class="dm-hero">
        <div class="dm-hero-bg">
          <div class="dm-glow-orb dm-orb-1"></div>
          <div class="dm-glow-orb dm-orb-2"></div>
        </div>
        
        <div class="dm-marquee">
          <div class="dm-marquee-content">
            <span>DIGITAL</span><span class="dot">•</span>
            <span class="outline">PERFORMANCE</span><span class="dot">•</span>
            <span>MARKETING</span><span class="dot">•</span>
            <span class="outline">DIGITAL</span><span class="dot">•</span>
            <span>PERFORMANCE</span><span class="dot">•</span>
            <span class="outline">MARKETING</span><span class="dot">•</span>
            <span>DIGITAL</span><span class="dot">•</span>
            <span class="outline">PERFORMANCE</span><span class="dot">•</span>
            <span>MARKETING</span><span class="dot">•</span>
            <span class="outline">DIGITAL</span><span class="dot">•</span>
            <span>PERFORMANCE</span><span class="dot">•</span>
            <span class="outline">MARKETING</span><span class="dot">•</span>
          </div>
        </div>

        <div class="container">
          <div class="dm-hero-content fade-in">
            <h1 class="dm-title">
              Smart <span class="text-accent">Digital</span> Strategies <br />
              <span class="text-outline">For Modern Brands</span>
            </h1>
          </div>
        </div>
      </section>

      <!-- Innovative Digital Intro Section -->
      <section class="dm-intro-section">
        <div class="dm-grid-bg"></div>
        <div class="dm-glow-bg"></div>
        
        <div class="container relative-z">
          <div class="dm-intro-header fade-in">
            <span class="dm-subtitle">The Digital Ecosystem</span>
            <h2>Driving <span class="text-accent">Long-Term</span> Growth</h2>
          </div>

          <div class="dm-intro-layout">
            <div class="dm-intro-card dm-card-lead fade-in">
              <div class="dm-card-border-beam"></div>
              <div class="dm-intro-card-inner">
                <div class="dm-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                </div>
                <p class="dm-lead-text">
                  In today’s digital world, brands need more than just online presence — they need <strong>visibility, engagement, performance, and audience connection</strong>. Our Digital & Performance Marketing solutions are designed to help brands grow through strategic campaigns, creative content, targeted advertising, and data-driven optimization.
                </p>
              </div>
            </div>

            <div class="dm-intro-split">
              <div class="dm-intro-card dm-card-secondary fade-in">
                <div class="dm-card-border-beam"></div>
                <div class="dm-intro-card-inner">
                  <div class="dm-icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <p>
                    From social media marketing and performance campaigns to digital branding and audience engagement, we help businesses create meaningful digital experiences that strengthen brand identity and drive long-term growth.
                  </p>
                </div>
              </div>

              <div class="dm-intro-card dm-card-secondary fade-in">
                <div class="dm-card-border-beam"></div>
                <div class="dm-intro-card-inner">
                  <div class="dm-icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                  </div>
                  <p>
                    We focus on delivering marketing strategies that are <strong>creative, measurable, and result-oriented.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Interactive Tabbed Image Showcase -->
      <section class="dm-showcase-section">
        <div class="container">
          <div class="dm-showcase-header fade-in">
            <h2 class="dm-showcase-title">What We <span class="text-accent">Offer</span></h2>
            <div class="dm-line center-line"></div>
          </div>

          <div class="dm-showcase-container">
            <div class="dm-showcase-tabs">
              <button class="dm-tab-btn active" data-tab="0"><span class="dm-tab-num">01</span>Strategy</button>
              <button class="dm-tab-btn" data-tab="1"><span class="dm-tab-num">02</span>Social Media</button>
              <button class="dm-tab-btn" data-tab="2"><span class="dm-tab-num">03</span>Performance</button>
              <button class="dm-tab-btn" data-tab="3"><span class="dm-tab-num">04</span>Content</button>
              <button class="dm-tab-btn" data-tab="4"><span class="dm-tab-num">05</span>Analytics</button>
            </div>

            <div class="dm-showcase-window">
              <!-- Content panes generated dynamically via JS below -->
              <div id="dm-tab-content-0" class="dm-showcase-content-wrapper fade-in">
                <div class="dm-showcase-image-col">
                  <div class="dm-image-overlay"></div>
                  <img src="/dm_strategy.png" alt="Digital Marketing Strategy" class="dm-showcase-img" />
                  <div class="dm-image-glow"></div>
                </div>
                <div class="dm-showcase-text-col">
                  <div class="dm-text-col-inner">
                    <div class="dm-showcase-number-bg">01</div>
                    <h3>Digital Marketing Strategy</h3>
                    <p>We create customized digital marketing strategies designed to increase brand visibility, audience engagement, and online growth across multiple platforms.</p>
                    <div class="dm-includes-section">
                      <h4>Includes:</h4>
                      <div class="dm-tags-grid">
                        <span class="dm-tag">Digital Campaign Planning</span>
                        <span class="dm-tag">Online Brand Positioning</span>
                        <span class="dm-tag">Audience Targeting</span>
                        <span class="dm-tag">Marketing Strategy Development</span>
                        <span class="dm-tag">Platform Optimization</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Content 1 -->
              <div id="dm-tab-content-1" class="dm-showcase-content-wrapper fade-in" style="display:none;">
                <div class="dm-showcase-image-col">
                  <div class="dm-image-overlay"></div>
                  <img src="/dm_social.png" alt="Social Media Marketing" class="dm-showcase-img" />
                  <div class="dm-image-glow"></div>
                </div>
                <div class="dm-showcase-text-col">
                  <div class="dm-text-col-inner">
                    <div class="dm-showcase-number-bg">02</div>
                    <h3>Social Media Marketing</h3>
                    <p>Our team creates engaging social media campaigns that help brands connect with audiences through creative content and impactful communication.</p>
                    <div class="dm-includes-section">
                      <h4>Includes:</h4>
                      <div class="dm-tags-grid">
                        <span class="dm-tag">Instagram Marketing</span>
                        <span class="dm-tag">Facebook Marketing</span>
                        <span class="dm-tag">LinkedIn Marketing</span>
                        <span class="dm-tag">Content Strategy</span>
                        <span class="dm-tag">Social Media Management</span>
                        <span class="dm-tag">Creative Campaigns</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Content 2 -->
              <div id="dm-tab-content-2" class="dm-showcase-content-wrapper fade-in" style="display:none;">
                <div class="dm-showcase-image-col">
                  <div class="dm-image-overlay"></div>
                  <img src="/dm_performance.png" alt="Performance Marketing" class="dm-showcase-img" />
                  <div class="dm-image-glow"></div>
                </div>
                <div class="dm-showcase-text-col">
                  <div class="dm-text-col-inner">
                    <div class="dm-showcase-number-bg">03</div>
                    <h3>Performance Marketing</h3>
                    <p>We run performance-focused campaigns that maximize reach, generate quality leads, and improve conversions through data-driven optimization.</p>
                    <div class="dm-includes-section">
                      <h4>Includes:</h4>
                      <div class="dm-tags-grid">
                        <span class="dm-tag">Paid Advertising</span>
                        <span class="dm-tag">Lead Generation Campaigns</span>
                        <span class="dm-tag">Google Ads</span>
                        <span class="dm-tag">Meta Ads</span>
                        <span class="dm-tag">Audience Retargeting</span>
                        <span class="dm-tag">Campaign Optimization</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Content 3 -->
              <div id="dm-tab-content-3" class="dm-showcase-content-wrapper fade-in" style="display:none;">
                <div class="dm-showcase-image-col">
                  <div class="dm-image-overlay"></div>
                  <img src="/dm_content.png" alt="Content & Creative Marketing" class="dm-showcase-img" />
                  <div class="dm-image-glow"></div>
                </div>
                <div class="dm-showcase-text-col">
                  <div class="dm-text-col-inner">
                    <div class="dm-showcase-number-bg">04</div>
                    <h3>Content & Creative Marketing</h3>
                    <p>We develop creative digital content that strengthens brand identity and increases audience engagement across social and digital platforms.</p>
                    <div class="dm-includes-section">
                      <h4>Includes:</h4>
                      <div class="dm-tags-grid">
                        <span class="dm-tag">Creative Content Design</span>
                        <span class="dm-tag">Motion Graphics</span>
                        <span class="dm-tag">Promotional Creatives</span>
                        <span class="dm-tag">Video Marketing</span>
                        <span class="dm-tag">Digital Storytelling</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Content 4 -->
              <div id="dm-tab-content-4" class="dm-showcase-content-wrapper fade-in" style="display:none;">
                <div class="dm-showcase-image-col">
                  <div class="dm-image-overlay"></div>
                  <img src="/dm_analytics.png" alt="Analytics & Optimization" class="dm-showcase-img" />
                  <div class="dm-image-glow"></div>
                </div>
                <div class="dm-showcase-text-col">
                  <div class="dm-text-col-inner">
                    <div class="dm-showcase-number-bg">05</div>
                    <h3>Analytics & Optimization</h3>
                    <p>Our performance-focused approach includes continuous monitoring, audience analysis, and campaign optimization to improve marketing effectiveness and ROI.</p>
                    <div class="dm-includes-section">
                      <h4>Includes:</h4>
                      <div class="dm-tags-grid">
                        <span class="dm-tag">Performance Tracking</span>
                        <span class="dm-tag">Audience Insights</span>
                        <span class="dm-tag">Campaign Reports</span>
                        <span class="dm-tag">Conversion Analysis</span>
                        <span class="dm-tag">Strategy Optimization</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Us -->
      <section class="dm-why-section">
        <div class="container relative-z">
          <div class="dm-why-header fade-in">
            <h2 class="dm-why-title">Why Choose <br/><span class="text-accent">Baiji Entertainments</span></h2>
            <div class="dm-line center-line"></div>
          </div>

          <div class="dm-accordion-container">
            <div class="dm-accordion-panel" style="background-image: url(/dm_why_1.png); background-size: cover; background-position: center;">
              <div class="dm-accordion-overlay"></div>
              <div class="dm-accordion-content">
                <div class="dm-accordion-num">01</div>
                <h3 class="dm-accordion-heading">Creative + Performance Approach</h3>
                <p class="dm-accordion-desc">We combine creative storytelling with performance marketing strategies for better engagement and measurable growth.</p>
              </div>
            </div>
            <div class="dm-accordion-panel" style="background-image: url(/dm_why_2.png); background-size: cover; background-position: center;">
              <div class="dm-accordion-overlay"></div>
              <div class="dm-accordion-content">
                <div class="dm-accordion-num">02</div>
                <h3 class="dm-accordion-heading">Audience-Focused Campaigns</h3>
                <p class="dm-accordion-desc">Every campaign is designed based on audience behavior, digital trends, and brand objectives.</p>
              </div>
            </div>
            <div class="dm-accordion-panel" style="background-image: url(/dm_why_3.png); background-size: cover; background-position: center;">
              <div class="dm-accordion-overlay"></div>
              <div class="dm-accordion-content">
                <div class="dm-accordion-num">03</div>
                <h3 class="dm-accordion-heading">Result-Oriented Marketing</h3>
                <p class="dm-accordion-desc">Our strategies focus on visibility, lead generation, conversions, and long-term brand growth.</p>
              </div>
            </div>
            <div class="dm-accordion-panel" style="background-image: url(/dm_why_4.png); background-size: cover; background-position: center;">
              <div class="dm-accordion-overlay"></div>
              <div class="dm-accordion-content">
                <div class="dm-accordion-num">04</div>
                <h3 class="dm-accordion-heading">Multi-Platform Expertise</h3>
                <p class="dm-accordion-desc">We create campaigns across social media, search engines, digital advertising, and entertainment platforms.</p>
              </div>
            </div>
            <div class="dm-accordion-panel" style="background-image: url(/dm_why_5.png); background-size: cover; background-position: center;">
              <div class="dm-accordion-overlay"></div>
              <div class="dm-accordion-content">
                <div class="dm-accordion-num">05</div>
                <h3 class="dm-accordion-heading">Data-Driven Optimization</h3>
                <p class="dm-accordion-desc">We continuously analyze campaign performance to improve results and maximize ROI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Our Digital Marketing Process -->
      <section class="dm-process-section">
        <div class="dm-process-grid-bg"></div>
        <div class="container relative-z">
          <div class="dm-process-header fade-in">
            <span class="dm-process-label">How We Work</span>
            <h2>Our Digital Marketing <span class="text-accent">Process</span></h2>
          </div>

          <div class="dm-process-flow">
            <div class="dm-process-step fade-in">
              <div class="dm-step-card dm-step-up">
                <div class="dm-step-glow"></div>
                <div class="dm-step-icon-wrap">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="24" cy="18" r="8"/><path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16"/><path d="M34 12l6-6M34 12l-4 2M34 12l2-4" stroke-linecap="round"/><circle cx="38" cy="10" r="2" fill="currentColor" stroke="none"/></svg>
                </div>
                <div class="dm-step-num">01</div>
                <h3 class="dm-step-title">Brand & Audience Analysis</h3>
                <p class="dm-step-desc">Understanding business goals, audience behavior, and digital opportunities.</p>
              </div>
            </div>
            <div class="dm-process-step fade-in">
              <div class="dm-step-card dm-step-down">
                <div class="dm-step-glow"></div>
                <div class="dm-step-icon-wrap">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="6" y="6" width="36" height="36" rx="4"/><path d="M14 24l6 6 14-14" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 14h8M14 18h6" stroke-linecap="round" opacity="0.5"/></svg>
                </div>
                <div class="dm-step-num">02</div>
                <h3 class="dm-step-title">Strategy Development</h3>
                <p class="dm-step-desc">Creating customized digital marketing and campaign strategies.</p>
              </div>
            </div>
            <div class="dm-process-step fade-in">
              <div class="dm-step-card dm-step-up">
                <div class="dm-step-glow"></div>
                <div class="dm-step-icon-wrap">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="6" y="10" width="36" height="28" rx="3"/><circle cx="17" cy="19" r="4"/><path d="M6 32l10-8 8 6 6-5 12 9" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <div class="dm-step-num">03</div>
                <h3 class="dm-step-title">Creative Content Production</h3>
                <p class="dm-step-desc">Designing engaging creatives, videos, and promotional content.</p>
              </div>
            </div>
            <div class="dm-process-step fade-in">
              <div class="dm-step-card dm-step-down">
                <div class="dm-step-glow"></div>
                <div class="dm-step-icon-wrap">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 24L24 8l16 16" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 8v32" stroke-linecap="round"/><ellipse cx="24" cy="38" rx="12" ry="3" opacity="0.4"/><path d="M16 30l-6 4M32 30l6 4" stroke-linecap="round" opacity="0.6"/></svg>
                </div>
                <div class="dm-step-num">04</div>
                <h3 class="dm-step-title">Campaign Execution</h3>
                <p class="dm-step-desc">Launching and managing digital advertising and marketing campaigns.</p>
              </div>
            </div>
            <div class="dm-process-step fade-in">
              <div class="dm-step-card dm-step-up">
                <div class="dm-step-glow"></div>
                <div class="dm-step-icon-wrap">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="6,36 16,24 24,30 34,14 42,20" stroke-linecap="round" stroke-linejoin="round"/><circle cx="16" cy="24" r="2.5" fill="currentColor" stroke="none"/><circle cx="24" cy="30" r="2.5" fill="currentColor" stroke="none"/><circle cx="34" cy="14" r="2.5" fill="currentColor" stroke="none"/><path d="M38 8v8h-8" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <div class="dm-step-num">05</div>
                <h3 class="dm-step-title">Performance Optimization</h3>
                <p class="dm-step-desc">Tracking analytics and continuously improving campaign performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="dm-cta-section">
        <div class="dm-cta-bg">
          <div class="dm-cta-glow"></div>
        </div>
        <div class="container relative-z">
          <div class="dm-cta-box fade-in">
            <h2 class="dm-cta-title">
              Ready to Accelerate Your <br/>
              <span class="text-accent">Digital Brand Growth?</span>
            </h2>
            <p class="dm-cta-desc">
              Let's create high-performance social media marketing, paid advertising, and conversion-focused media campaigns that put your brand ahead.
            </p>
            <div class="dm-cta-actions">
              <a href="contact.html" class="dm-cta-btn btn-primary">Start Your Campaign</a>
              <a href="portfolio.html" class="dm-cta-btn btn-secondary">Explore Case Studies</a>
            </div>
          </div>
        </div>
      </section>
    </div>

    <script>
      document.addEventListener('DOMContentLoaded', () => {
        const tabs = document.querySelectorAll('.dm-tab-btn');
        const contents = document.querySelectorAll('.dm-showcase-content-wrapper');
        
        tabs.forEach(tab => {
          tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.style.display = 'none');
            
            tab.classList.add('active');
            const targetId = 'dm-tab-content-' + tab.dataset.tab;
            document.getElementById(targetId).style.display = 'grid';
          });
        });
      });
    </script>
"""

html = build_html("Digital Marketing - Baiji Entertainments", content)
write_file("html-version/digital-marketing.html", html)
print("digital-marketing.html created.")
