import os
import glob

# 1. Update HTML files
html_files = glob.glob('*.html')
for file in html_files:
    with open(file, 'r') as f:
        content = f.read()
    
    # Check if already added
    if 'mobile-menu-btn' not in content:
        # Replace the closing tags of nav-links and container
        search_str = "      </ul>\n    </div>\n  </nav>"
        replace_str = """      </ul>
      <div class="mobile-menu-btn">
        <span></span><span></span><span></span>
      </div>
    </div>
  </nav>"""
        # Sometimes there might be variations in spacing, let's use a safer replace
        content = content.replace(search_str, replace_str)
        
        # If it didn't work because of indentation, try another
        search_str2 = "      </ul>\n      \n    </div>\n  </nav>"
        content = content.replace(search_str2, replace_str)
        
        with open(file, 'w') as f:
            f.write(content)

# 2. Update CSS
css_addition = """

/* ==========================================
   MOBILE NAVIGATION
   ========================================== */
.mobile-menu-btn {
  display: none;
}

@media (max-width: 768px) {
  .mobile-menu-btn {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 32px;
    height: 22px;
    cursor: pointer;
    z-index: 1000;
  }
  
  .mobile-menu-btn span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: #fff;
    transition: all 0.3s ease;
    border-radius: 2px;
  }
  
  /* Hamburger Animation */
  .mobile-menu-btn.nav-active span:nth-child(1) {
    transform: translateY(10px) rotate(45deg);
  }
  .mobile-menu-btn.nav-active span:nth-child(2) {
    opacity: 0;
  }
  .mobile-menu-btn.nav-active span:nth-child(3) {
    transform: translateY(-10px) rotate(-45deg);
  }

  /* Override previous display:none with high specificity */
  nav.navbar .nav-links {
    display: flex !important;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: -100%;
    width: 300px;
    max-width: 80vw;
    height: 100vh;
    background: rgba(10, 10, 10, 0.98);
    backdrop-filter: blur(20px);
    padding: 120px 30px 50px;
    transition: right 0.4s cubic-bezier(0.77, 0, 0.175, 1);
    z-index: 999;
    align-items: flex-start;
    border-left: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: -20px 0 50px rgba(0, 0, 0, 0.8);
    overflow-y: auto;
  }
  
  nav.navbar .nav-links.nav-active {
    right: 0;
  }
  
  nav.navbar .nav-links li {
    margin: 15px 0;
    width: 100%;
    opacity: 0;
    transform: translateX(20px);
    transition: all 0.4s ease;
  }
  
  nav.navbar .nav-links.nav-active li {
    opacity: 1;
    transform: translateX(0);
  }
  
  /* Staggered animation for links */
  nav.navbar .nav-links.nav-active li:nth-child(1) { transition-delay: 0.1s; }
  nav.navbar .nav-links.nav-active li:nth-child(2) { transition-delay: 0.15s; }
  nav.navbar .nav-links.nav-active li:nth-child(3) { transition-delay: 0.2s; }
  nav.navbar .nav-links.nav-active li:nth-child(4) { transition-delay: 0.25s; }
  nav.navbar .nav-links.nav-active li:nth-child(5) { transition-delay: 0.3s; }
  nav.navbar .nav-links.nav-active li:nth-child(6) { transition-delay: 0.35s; }
  
  nav.navbar .nav-links a {
    font-size: 1.2rem;
    display: block;
    width: 100%;
  }
  
  /* Fix dropdown on mobile */
  .dropdown-menu {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    background: transparent;
    border: none;
    padding-left: 20px;
    display: none;
    margin-top: 15px;
  }
  
  .dropdown-container.mobile-active .dropdown-menu {
    display: block;
  }
  
  .dropdown-container.mobile-active .dropdown-trigger {
    color: var(--accent-color);
  }
  
  .dropdown-trigger::after {
    float: right;
    margin-top: 8px;
  }
}
"""

with open('style.css', 'r') as f:
    css_content = f.read()

if 'MOBILE NAVIGATION' not in css_content:
    with open('style.css', 'a') as f:
        f.write(css_addition)

# 3. Update main.js
js_addition = """
  // --- Mobile Navigation Logic ---
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const dropdownTrigger = document.querySelector('.dropdown-trigger');
  
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('nav-active');
      navLinks.classList.toggle('nav-active');
      // Prevent scrolling when menu is open
      if (navLinks.classList.contains('nav-active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
  }
  
  if (dropdownTrigger) {
    dropdownTrigger.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const container = dropdownTrigger.closest('.dropdown-container');
        container.classList.toggle('mobile-active');
      }
    });
  }
"""

with open('main.js', 'r') as f:
    js_content = f.read()

if 'Mobile Navigation Logic' not in js_content:
    with open('main.js', 'a') as f:
        f.write(js_addition)

print("Mobile navbar fixes injected successfully!")
