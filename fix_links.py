import os
import re

NAVBAR_HTML = """  <!-- Navbar -->
  <nav class="navbar">
    <div class="container nav-container">
      <div class="logo">
        <a href="index.html" class="logo-link">
          <img src="assets/logo.png" alt="Baiji Entertainments Logo" class="nav-logo" />
        </a>
      </div>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li class="dropdown-container">
          <span class="dropdown-trigger">Services</span>
          <ul class="dropdown-menu">
            <li><a href="brand-strategy.html">Brand & Creative Strategy</a></li>
            <li><a href="production-entertainment.html">Production & Entertainment</a></li>
            <li><a href="digital-marketing.html">Digital & Performance Marketing</a></li>
            <li><a href="integrated-brand.html">Integrated Brand Solutions</a></li>
          </ul>
        </li>
        <li><a href="portfolio.html">Portfolio</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
  </nav>"""

FOOTER_HTML = """  <!-- Footer -->
  <footer id="contact" class="footer fade-in">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="footer-logo-link">
            <img src="assets/logo.png" alt="Baiji Entertainments Logo" class="footer-logo" />
          </a>
          <p class="footer-tagline">
            A premium full-service creative advertising and entertainment agency. We transform ideas into unforgettable brand experiences.
          </p>
          <div class="social-links">
            <a href="https://www.instagram.com/baijientertainments/?hl=en" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/bai-ji-entertainments" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://www.facebook.com/baijientertainments" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.youtube.com/@baijientertainments" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube"><path d="M2.5 7.17C2.15 8.16 2 9.68 2 12c0 2.32.15 3.84.5 4.83.6 1.7 1.83 2.94 3.53 3.53.99.35 2.51.5 4.83.5 2.32 0 3.84-.15 4.83-.5 1.7-.6 2.94-1.83 3.53-3.53.35-.99.5-2.51.5-4.83 0-2.32-.15-3.84-.5-4.83-.6-1.7-1.83-2.94-3.53-3.53-.99-.35-2.51-.5-4.83-.5-2.32 0-3.84.15-4.83.5-1.7.6-2.94 1.83-3.53 3.53z"/><path d="m10 15 5-3-5-3v6z"/></svg>
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h3>Our Services</h3>
          <ul>
            <li><a href="brand-strategy.html">Brand & Creative Strategy</a></li>
            <li><a href="production-entertainment.html">Production & Entertainment</a></li>
            <li><a href="digital-marketing.html">Digital & Performance Marketing</a></li>
            <li><a href="integrated-brand.html">Integrated Brand Solutions</a></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h3>Contact Info</h3>
          <ul>
            <li class="footer-contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <span>divyanshu@baijientertainments.com</span>
            </li>
            <li class="footer-contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>+91 99282 72728</span>
            </li>
            <li class="footer-contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Divyanshu Sharma, Wing A, Flat no - 1701, Abrol Vastu Park, Near Ryan International School, Malad West - 400064</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>"""

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Replace navbar
    content = re.sub(r'<!--\s*Navbar.*?-->\s*<nav class="navbar">.*?</nav>', NAVBAR_HTML, content, flags=re.DOTALL)
    content = re.sub(r'<nav class="navbar">.*?</nav>', NAVBAR_HTML, content, flags=re.DOTALL) # fallback

    # Replace footer
    content = re.sub(r'<!--\s*Footer.*?-->\s*<footer.*?>.*?</footer>', FOOTER_HTML, content, flags=re.DOTALL)
    content = re.sub(r'<footer.*?>.*?</footer>', FOOTER_HTML, content, flags=re.DOTALL) # fallback

    # Replace general links
    replacements = {
        'href="/"': 'href="index.html"',
        'href="/about"': 'href="about.html"',
        'href="/contact"': 'href="contact.html"',
        'href="/portfolio"': 'href="portfolio.html"',
        'href="/services/brand-creative-strategy"': 'href="brand-strategy.html"',
        'href="/services/production-entertainment"': 'href="production-entertainment.html"',
        'href="/services/digital-performance-marketing"': 'href="digital-marketing.html"',
        'href="/services/integrated-brand-solutions"': 'href="integrated-brand.html"'
    }
    
    for old, new in replacements.items():
        content = content.replace(old, new)
        
    with open(filepath, 'w') as f:
        f.write(content)

html_files = [f for f in os.listdir('.') if f.endswith('.html')]
for file in html_files:
    process_file(file)
    print(f"Processed {file}")
