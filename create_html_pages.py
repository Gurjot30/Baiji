import re
import os

# Helper to read file
def read_file(path):
    with open(path, 'r') as f:
        return f.read()

# Helper to write file
def write_file(path, content):
    with open(path, 'w') as f:
        f.write(content)

# Global navbar and footer
NAVBAR = """  <nav class="navbar">
    <div class="container nav-container">
      <div class="logo">
        <a href="index.html" class="logo-link">
          <img src="/logo.png" alt="Baiji Entertainments Logo" class="nav-logo" />
        </a>
      </div>
      <div class="mobile-toggle">
        <span></span>
        <span></span>
        <span></span>
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

FOOTER = """  <footer id="contact" class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="footer-logo-link">
            <img src="/logo.png" alt="Baiji Entertainments Logo" class="footer-logo" />
          </a>
          <p class="footer-tagline">
            A premium full-service creative advertising and entertainment agency. We transform ideas into unforgettable brand experiences.
          </p>
          <div class="social-links">
            <a href="https://www.instagram.com/baijientertainments/?hl=en" target="_blank" rel="noopener noreferrer">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.linkedin.com/company/bai-ji-entertainments" target="_blank" rel="noopener noreferrer">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://www.facebook.com/baijientertainments" target="_blank" rel="noopener noreferrer">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://www.youtube.com/@baijientertainments" target="_blank" rel="noopener noreferrer">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
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
              <span>divyanshu@baijientertainments.com</span>
            </li>
            <li class="footer-contact-item">
              <span>+91 99282 72728</span>
            </li>
            <li class="footer-contact-item">
              <span>Divyanshu Sharma, Wing A, Flat no - 1701, Abrol Vastu Park, Near Ryan International School, Malad West - 400064</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>"""

def build_html(title, content):
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title}</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
{NAVBAR}

  <main>
{content}
  </main>

{FOOTER}
  <script src="main.js"></script>
</body>
</html>"""
