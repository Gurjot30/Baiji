from create_html_pages import build_html, write_file

content = """
    <div class="brand-strategy-page">
      <!-- Hero Section -->
      <section class="bs-hero">
        <div class="bs-hero-bg">
          <div class="bs-glow-orb bs-orb-1"></div>
          <div class="bs-glow-orb bs-orb-2"></div>
        </div>
        
        <div class="bs-marquee">
          <div class="bs-marquee-content">
            <span>BRAND</span><span class="dot">•</span>
            <span class="outline">CREATIVE</span><span class="dot">•</span>
            <span>STRATEGY</span><span class="dot">•</span>
            <span class="outline">BRAND</span><span class="dot">•</span>
            <span>CREATIVE</span><span class="dot">•</span>
            <span class="outline">STRATEGY</span><span class="dot">•</span>
            <span>BRAND</span><span class="dot">•</span>
            <span class="outline">CREATIVE</span><span class="dot">•</span>
            <span>STRATEGY</span><span class="dot">•</span>
            <span class="outline">BRAND</span><span class="dot">•</span>
            <span>CREATIVE</span><span class="dot">•</span>
            <span class="outline">STRATEGY</span><span class="dot">•</span>
          </div>
        </div>

        <div class="container">
          <div class="bs-hero-content fade-in">
            <h1 class="bs-title">
              Strategy That Gives<br />
              <span class="text-accent">Your Brand</span><br />
              <span class="text-outline">A Strong Voice</span>
            </h1>
          </div>
        </div>
      </section>

      <!-- Visual Content Section -->
      <section class="bs-visual-section">
        <div class="container">
          <div class="bs-visual-grid">
            
            <div class="bs-visual-image-wrapper fade-in">
              <img src="/brand_strategy_visual.png" alt="Brand Strategy Visualization" class="bs-visual-image" />
              <div class="bs-visual-glow"></div>
            </div>

            <div class="bs-visual-text-wrapper fade-in">
              <div class="bs-text-block">
                <div class="bs-text-number">01</div>
                <p>A successful brand is more than just visuals — it’s about communication, positioning, storytelling, and audience connection. Our Brand & Creative Strategy services are designed to help businesses create a unique identity that stands out in today’s competitive market.</p>
              </div>

              <div class="bs-text-block">
                <div class="bs-text-number">02</div>
                <p>From campaign concepts to media planning and brand communication, we create strategies that align creativity with business goals to deliver measurable impact.</p>
              </div>

              <div class="bs-text-block">
                <div class="bs-text-number">03</div>
                <p>We focus on building brands that are memorable, engaging, and result-driven.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- Expertise Section -->
      <section class="bs-expertise">
        <div class="container">
          <div class="bs-expertise-header fade-in">
            <h2 class="bs-expertise-title">What We <span class="text-accent">Specialize In</span></h2>
            <div class="bs-expertise-line"></div>
          </div>

          <div class="bs-expertise-grid">
            
            <div class="bs-expertise-card fade-in">
              <div class="expertise-number">01</div>
              <div class="expertise-content">
                <h4>Brand Positioning</h4>
                <p>We help brands define their unique identity, market presence, and communication style to create a stronger connection with their audience.</p>
              </div>
              <div class="expertise-hover-glow"></div>
            </div>

            <div class="bs-expertise-card fade-in">
              <div class="expertise-number">02</div>
              <div class="expertise-content">
                <h4>Creative Campaign Strategy</h4>
                <p>Our team develops innovative campaign ideas and creative concepts that help brands capture attention and build engagement across multiple platforms.</p>
              </div>
              <div class="expertise-hover-glow"></div>
            </div>

            <div class="bs-expertise-card fade-in">
              <div class="expertise-number">03</div>
              <div class="expertise-content">
                <h4>Media Planning & Communication</h4>
                <p>We create strategic media plans that maximize reach, visibility, and audience interaction through the right channels and promotional opportunities.</p>
              </div>
              <div class="expertise-hover-glow"></div>
            </div>

            <div class="bs-expertise-card fade-in">
              <div class="expertise-number">04</div>
              <div class="expertise-content">
                <h4>Brand Storytelling</h4>
                <p>We craft compelling brand narratives that emotionally connect with audiences and strengthen long-term brand recognition.</p>
              </div>
              <div class="expertise-hover-glow"></div>
            </div>

            <div class="bs-expertise-card fade-in">
              <div class="expertise-number">05</div>
              <div class="expertise-content">
                <h4>Audience Research & Insights</h4>
                <p>Understanding the audience is the foundation of every successful campaign. We analyze audience behavior, trends, and market insights to create impactful strategies.</p>
              </div>
              <div class="expertise-hover-glow"></div>
            </div>

            <div class="bs-expertise-card fade-in">
              <div class="expertise-number">06</div>
              <div class="expertise-content">
                <h4>Visual & Creative Direction</h4>
                <p>From brand aesthetics to campaign visuals, we ensure every creative element aligns with your brand identity and communication goals.</p>
              </div>
              <div class="expertise-hover-glow"></div>
            </div>

          </div>
        </div>
      </section>

      <!-- Process Section -->
      <section class="bs-process">
        <div class="container">
          <div class="bs-process-header fade-in">
            <h2 class="bs-process-title">Our Creative Strategy <span class="text-accent">Process</span></h2>
            <div class="bs-process-line"></div>
          </div>

          <div class="bs-timeline-wrapper">
            <div class="bs-timeline-center-line"></div>
            
            <div class="bs-timeline-item left fade-in">
              <div class="bs-timeline-content">
                <div class="bs-timeline-number">01</div>
                <h4>Brand Discovery</h4>
                <p>Understanding your business, audience, and goals.</p>
              </div>
              <div class="bs-timeline-node">
                <div class="bs-node-inner"></div>
              </div>
            </div>

            <div class="bs-timeline-item right fade-in">
              <div class="bs-timeline-content">
                <div class="bs-timeline-number">02</div>
                <h4>Research & Insights</h4>
                <p>Analyzing market trends, competitors, and audience behavior.</p>
              </div>
              <div class="bs-timeline-node">
                <div class="bs-node-inner"></div>
              </div>
            </div>

            <div class="bs-timeline-item left fade-in">
              <div class="bs-timeline-content">
                <div class="bs-timeline-number">03</div>
                <h4>Creative Ideation</h4>
                <p>Developing unique campaign concepts and communication strategies.</p>
              </div>
              <div class="bs-timeline-node">
                <div class="bs-node-inner"></div>
              </div>
            </div>

            <div class="bs-timeline-item right fade-in">
              <div class="bs-timeline-content">
                <div class="bs-timeline-number">04</div>
                <h4>Strategy Development</h4>
                <p>Building structured media and branding plans.</p>
              </div>
              <div class="bs-timeline-node">
                <div class="bs-node-inner"></div>
              </div>
            </div>

            <div class="bs-timeline-item left fade-in">
              <div class="bs-timeline-content">
                <div class="bs-timeline-number">05</div>
                <h4>Execution & Optimization</h4>
                <p>Implementing campaigns and continuously improving performance.</p>
              </div>
              <div class="bs-timeline-node">
                <div class="bs-node-inner"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- Why Choose Us Section -->
      <section class="bs-why-choose">
        <div class="container">
          <div class="bs-why-grid">
            <div class="bs-why-left">
              <div class="bs-why-sticky fade-in">
                <h2 class="bs-why-title">Why Choose <br/><span class="text-accent">Baiji Entertainments</span></h2>
                <div class="bs-why-line"></div>
                
                <div class="bs-why-image-container">
                  <div class="bs-why-image-glow"></div>
                  <img src="/why_choose_us_visual.png" alt="Why Choose Baiji" class="bs-why-image" />
                  <div class="bs-why-image-overlay"></div>
                </div>
              </div>
            </div>

            <div class="bs-why-right">
              
              <div class="bs-why-card fade-in">
                <div class="bs-why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></div>
                <div class="bs-why-content">
                  <h3>Entertainment-Driven Creativity</h3>
                  <p>We combine marketing expertise with entertainment-focused storytelling to create engaging brand experiences.</p>
                </div>
              </div>
              
              <div class="bs-why-card fade-in">
                <div class="bs-why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg></div>
                <div class="bs-why-content">
                  <h3>Strategic Thinking</h3>
                  <p>Every campaign is backed by research, audience understanding, and market insights.</p>
                </div>
              </div>

              <div class="bs-why-card fade-in">
                <div class="bs-why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="M4.93 4.93l1.41 1.41"></path><path d="M17.66 17.66l1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="M6.34 17.66l-1.41 1.41"></path><path d="M19.07 4.93l-1.41 1.41"></path></svg></div>
                <div class="bs-why-content">
                  <h3>Innovative Concepts</h3>
                  <p>We focus on fresh, impactful, and creative campaign ideas that help brands stand out.</p>
                </div>
              </div>

              <div class="bs-why-card fade-in">
                <div class="bs-why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg></div>
                <div class="bs-why-content">
                  <h3>Result-Oriented Approach</h3>
                  <p>Our strategies are designed not just for visibility, but for real audience engagement and business growth.</p>
                </div>
              </div>

              <div class="bs-why-card fade-in">
                <div class="bs-why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></div>
                <div class="bs-why-content">
                  <h3>Integrated Brand Communication</h3>
                  <p>We ensure consistency across digital, media, promotional, and creative platforms.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <!-- Elegant CTA Section -->
      <section class="bs-cta-section">
        <div class="bs-cta-bg">
          <div class="bs-cta-glow"></div>
        </div>
        <div class="container">
          <div class="bs-cta-box fade-in">
            <h2 class="bs-cta-title">
              Ready to Give Your Brand <br/>
              <span class="text-accent">A Stronger Voice?</span>
            </h2>
            <p class="bs-cta-desc">
              Let's craft a strategic framework that elevates your identity and connects deeply with your audience.
            </p>
            <div class="bs-cta-actions">
              <a href="contact.html" class="bs-cta-btn btn-primary">Start Your Strategy</a>
              <a href="portfolio.html" class="bs-cta-btn btn-secondary">Explore Our Work</a>
            </div>
          </div>
        </div>
      </section>

    </div>
"""

html = build_html("Brand Strategy - Baiji Entertainments", content)
write_file("html-version/brand-strategy.html", html)
print("brand-strategy.html created.")
