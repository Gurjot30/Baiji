import json
from create_html_pages import build_html, write_file

portfolioData = [
  {"id": 1, "title": "Jolly LLB 2", "category": "Film & Entertainment", "image": "/film-jollyllb2.png"},
  {"id": 2, "title": "Krrish 3", "category": "Film & Entertainment", "image": "/film-krrish3.png"},
  {"id": 102, "title": "Dominos Brand Campaign", "category": "Co-Branding", "image": "/dominos-transparent.png"},
  {"id": 3, "title": "Munna Michael", "category": "Film & Entertainment", "image": "/film-munnamichael.png"},
  {"id": 104, "title": "Quick Heal Security Drive", "category": "Co-Branding", "image": "/quickheal.png"},
  {"id": 4, "title": "Zero", "category": "Film & Entertainment", "image": "/film-zero.png"},
  {"id": 105, "title": "Sujata Appliances Campaign", "category": "Co-Branding", "image": "/sujata.png"},
  {"id": 5, "title": "Sultan", "category": "Film & Entertainment", "image": "/film-sultan.png"},
  {"id": 106, "title": "Magic Moments Collaborations", "category": "Co-Branding", "image": "/magic-moments.png"},
  {"id": 6, "title": "Bhooth Bangla", "category": "Film & Entertainment", "image": "/film-bhooth-bangla.jpg"},
  {"id": 107, "title": "SRMB TMT Structural Drive", "category": "Co-Branding", "image": "/srmb-tmt.png"},
  {"id": 7, "title": "Baaghi 4", "category": "Film & Entertainment", "image": "/film-baaghi4.png"},
  {"id": 108, "title": "Redcliffe Labs Health Campaign", "category": "Co-Branding", "image": "/redcliffe.png"},
  {"id": 8, "title": "Thamma", "category": "Film & Entertainment", "image": "/film-thamma.png"},
  {"id": 109, "title": "Star 555 Detergent Launch", "category": "Co-Branding", "image": "/star555.png"},
  {"id": 9, "title": "Pati Patni Aur Woh 2", "category": "Film & Entertainment", "image": "/film-husbandbiwi.png"},
  {"id": 10, "title": "Ground Zero", "category": "Film & Entertainment", "image": "/film-groundzero.png"},
  {"id": 111, "title": "Dev Bhoomi Uttarakhand University", "category": "Co-Branding", "image": "/brand-devbhoomi.png"},
  {"id": 112, "title": "Harrison Locks Campaign", "category": "Co-Branding", "image": "/brand-harrison.png"},
  {"id": 11, "title": "Maidaan", "category": "Film & Entertainment", "image": "/film-maidaan.png"},
  {"id": 12, "title": "Dream Girl 2", "category": "Film & Entertainment", "image": "/film-dreamgirl2-hq.jpg"},
  {"id": 13, "title": "Mr. & Mrs. Mahi", "category": "Film & Entertainment", "image": "/film-mrmrsmahi.jpg"},
  {"id": 14, "title": "Crew", "category": "Film & Entertainment", "image": "/film-crew.jpg"},
  {"id": 15, "title": "Bitterless Relations", "category": "Film & Entertainment", "image": "/film-bitterless.jpg"},
  {"id": 16, "title": "Singham Again", "category": "Film & Entertainment", "image": "/film-singhamagain2.jpg"},
  {"id": 17, "title": "Fateh", "category": "Film & Entertainment", "image": "/film-fateh.jpg"},
  {"id": 18, "title": "Ruslaan", "category": "Film & Entertainment", "image": "/film-ruslaan.jpg"},
  {"id": 19, "title": "Crakk", "category": "Film & Entertainment", "image": "/film-crakk.jpg"},
  {"id": 20, "title": "Main Atal Hoon", "category": "Film & Entertainment", "image": "/film-mainatalhoon.jpg"},
  {"id": 21, "title": "Ganapath", "category": "Film & Entertainment", "image": "/film-ganapath.jpg"},
  {"id": 22, "title": "Dunki", "category": "Film & Entertainment", "image": "/film-dunki.jpg"},
  {"id": 23, "title": "Akelli", "category": "Film & Entertainment", "image": "/film-akelli.jpg"},
  {"id": 24, "title": "Fukrey 3", "category": "Film & Entertainment", "image": "/film-fukrey3.jpg"},
  {"id": 25, "title": "Pathaan", "category": "Film & Entertainment", "image": "/film-pathaan.jpg"},
  {"id": 121, "title": "Gallantt Advance", "category": "Co-Branding", "image": "/brand-gallantt.png"},
  {"id": 122, "title": "Traya Campaign", "category": "Co-Branding", "image": "/brand-traya.png"},
  {"id": 123, "title": "JK Masale Campaign", "category": "Co-Branding", "image": "/brand-jkmasale.png"},
  {"id": 124, "title": "Birla HIL Pipes", "category": "Co-Branding", "image": "/brand-birlahil.png"},
  {"id": 125, "title": "Haldiram's Nagpur", "category": "Co-Branding", "image": "/brand-haldiramsnagpur.png"},
  {"id": 126, "title": "Laminex Surfaces", "category": "Co-Branding", "image": "/laminex.png"},
  {"id": 127, "title": "O'Shea Herbals", "category": "Co-Branding", "image": "/oshea.png"},
  {"id": 129, "title": "Popular Automobiles", "category": "Co-Branding", "image": "/popular.png"},
  {"id": 130, "title": "Sarvottam Brand Drive", "category": "Co-Branding", "image": "/sarvottam.png"},
  {"id": 132, "title": "Paras Pipes & Tank", "category": "Co-Branding", "image": "/brand-paras.png"},
  {"id": 134, "title": "Vikram Tea Campaign", "category": "Co-Branding", "image": "/vikram-tea.png"}
]

import random
random.seed(42)
random.shuffle(portfolioData)

items_html = ""
for p in portfolioData:
    cat_class = p['category'].replace(' & ', '-').replace(' ', '-').lower()
    items_html += f"""
          <div class="portfolio-gallery-item fade-in filter-item {cat_class}" data-category="{p['category']}">
            <img src="{p['image']}" alt="{p['title']}" />
            <div class="portfolio-item-overlay">
              <span class="portfolio-item-category">{p['category']}</span>
              <h3 class="portfolio-item-title">{p['title']}</h3>
            </div>
          </div>"""

content = f"""
    <div class="portfolio-page">
      <section class="portfolio-hero">
        <div class="portfolio-hero-bg">
          <div class="portfolio-glow-orb portfolio-orb-1"></div>
          <div class="portfolio-glow-orb portfolio-orb-2"></div>
        </div>
        
        <div class="portfolio-marquee">
          <div class="portfolio-marquee-content">
            <span>PORTFOLIO</span><span class="dot">•</span>
            <span class="outline">EXHIBITION</span><span class="dot">•</span>
            <span>LEGACY</span><span class="dot">•</span>
            <span class="outline">CREATIVE</span><span class="dot">•</span>
            <span>SHOWCASE</span><span class="dot">•</span>
            <span class="outline">PORTFOLIO</span><span class="dot">•</span>
            <span>EXHIBITION</span><span class="dot">•</span>
            <span class="outline">LEGACY</span><span class="dot">•</span>
            <span>CREATIVE</span><span class="dot">•</span>
            <span class="outline">SHOWCASE</span><span class="dot">•</span>
          </div>
        </div>

        <div class="container">
          <div class="portfolio-hero-content fade-in">
            <h1 class="portfolio-title">
              A Legacy Of<br />
              <span class="text-accent">Creative</span><br />
              <span class="text-outline">Excellence.</span>
            </h1>
          </div>
        </div>
      </section>

      <section class="portfolio-gallery-section">
        <div class="container">
          <div class="portfolio-filter-container">
            <button class="filter-btn active" data-filter="All">All</button>
            <button class="filter-btn" data-filter="Film & Entertainment">Film & Entertainment</button>
            <button class="filter-btn" data-filter="Co-Branding">Co-Branding</button>
          </div>

          <div class="portfolio-gallery-grid">
{items_html}
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta-section">
        <div class="cta-bg-elements">
          <div class="cta-circle-1"></div>
          <div class="cta-circle-2"></div>
        </div>
        <div class="container relative-z">
          <div class="cta-content fade-in">
            <h2 class="cta-heading">Ready to <span class="text-accent">Elevate</span> Your Brand?</h2>
            <p class="cta-description">
              Let’s collaborate to create campaigns, films, and brand experiences that leave a lasting impact. We bring ideas to life with strategy, creativity, and seamless execution.
            </p>
            <div class="cta-buttons">
              <a href="contact.html" class="btn btn-primary">Start a Project</a>
              <a href="services.html" class="btn btn-secondary">Explore Services</a>
            </div>
          </div>
        </div>
      </section>
    </div>

    <script>
      document.addEventListener('DOMContentLoaded', () => {{
        const filterBtns = document.querySelectorAll('.filter-btn');
        const items = document.querySelectorAll('.filter-item');

        filterBtns.forEach(btn => {{
          btn.addEventListener('click', () => {{
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            items.forEach(item => {{
              if (filter === 'All') {{
                item.style.display = 'block';
              }} else {{
                if (item.dataset.category === filter) {{
                  item.style.display = 'block';
                }} else {{
                  item.style.display = 'none';
                }}
              }}
            }});
          }});
        }});
      }});
    </script>
"""

html = build_html("Portfolio - Baiji Entertainments", content)
write_file("html-version/portfolio.html", html)
print("portfolio.html created.")
