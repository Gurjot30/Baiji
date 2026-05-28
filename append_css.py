import os

css_content = """
/* Editorial Theme for About Page */
.editorial-theme {
  background-color: var(--bg-primary);
  color: #fff;
}

.editorial-hero {
  position: relative;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 150px;
  overflow: hidden;
}

.editorial-marquee {
  position: absolute;
  top: 20%;
  left: 0;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  opacity: 0.05;
  z-index: 0;
  pointer-events: none;
}

.marquee-content {
  display: inline-block;
  animation: marquee 30s linear infinite;
  font-size: 15vw;
  font-weight: 900;
  line-height: 1;
}

.marquee-content span {
  padding: 0 2rem;
}

.marquee-content .outline {
  -webkit-text-stroke: 2px #fff;
  color: transparent;
}

.marquee-content .dot {
  color: var(--accent-color);
  font-size: 8vw;
  vertical-align: middle;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.editorial-title {
  position: relative;
  z-index: 1;
  font-size: clamp(4rem, 10vw, 9rem);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -2px;
  text-transform: uppercase;
}

.editorial-title .text-outline {
  -webkit-text-stroke: 1px #fff;
  color: transparent;
}

.our-story-typographic {
  padding: 120px 0;
  position: relative;
}

.typographic-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  position: relative;
}

.typographic-left {
  position: relative;
  padding-left: 4rem;
}

.sticky-content {
  position: sticky;
  top: 150px;
}

.massive-title {
  font-size: clamp(3.5rem, 8vw, 6rem);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -2px;
  color: #fff;
  margin-bottom: 2rem;
}

.accent-separator {
  width: 80px;
  height: 4px;
  background: var(--accent-color);
  margin-bottom: 3rem;
  border-radius: 2px;
}

.floating-metrics {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.f-metric {
  display: flex;
  flex-direction: column;
}

.f-metric .number {
  font-size: 3rem;
  font-weight: 800;
  color: #fff;
  line-height: 1;
}

.f-metric .label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent-color);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 5px;
}

.typographic-right {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-top: 5rem;
}

.story-paragraph-card {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 3rem;
  border-radius: 24px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  overflow: hidden;
  transition: transform 0.4s ease, border-color 0.4s ease;
}

.story-paragraph-card:hover {
  transform: translateY(-5px);
  border-color: rgba(212, 175, 55, 0.3);
}

.card-number {
  position: absolute;
  top: -20px;
  right: -10px;
  font-size: 10rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.03);
  line-height: 1;
  pointer-events: none;
  z-index: 0;
}

.card-content {
  position: relative;
  z-index: 1;
}

.card-content h3 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 1.5rem;
}

.card-content p {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #bbb;
  font-weight: 300;
}

@media (max-width: 1024px) {
  .typographic-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .typographic-left {
    padding-left: 0;
  }
  
  .sticky-content {
    position: relative;
    top: 0;
  }

  .floating-metrics {
    flex-direction: row;
    gap: 3rem;
  }
  
  .typographic-right {
    padding-top: 0;
  }
}

@media (max-width: 768px) {
  .editorial-hero {
    min-height: 70vh;
    padding-top: 100px;
  }
  
  .floating-metrics {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .story-paragraph-card {
    padding: 2rem;
  }
  
  .card-number {
    font-size: 6rem;
    top: 0;
    right: 0;
  }
}

.director-section {
  background: #060606;
  padding: 120px 5%;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgba(224, 176, 107, 0.1);
}

.director-ambient-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(140px);
  z-index: 1;
  opacity: 0.15;
  pointer-events: none;
  mix-blend-mode: screen;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, var(--accent-color) 0%, transparent 70%);
  top: -10%;
  left: -5%;
  animation: floatOrb 20s infinite ease-in-out alternate;
}

.orb-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, #e0b06b 0%, transparent 75%);
  bottom: -15%;
  right: -5%;
  animation: floatOrb 25s infinite ease-in-out alternate-reverse;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #8a632e 0%, transparent 70%);
  top: 40%;
  left: 45%;
  animation: floatOrb 18s infinite ease-in-out alternate;
}

@keyframes floatOrb {
  0% {
    transform: translate(0, 0) scale(1);
  }
  100% {
    transform: translate(40px, 30px) scale(1.15);
  }
}

.director-container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.director-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 5rem;
  align-items: center;
}

.director-image-wrapper-premium {
  position: relative;
  width: 100%;
  aspect-ratio: 4/5;
  border-radius: 28px;
  padding: 12px;
  background: linear-gradient(135deg, rgba(224, 176, 107, 0.2) 0%, rgba(10, 10, 10, 0.8) 100%);
  border: 1px solid rgba(224, 176, 107, 0.15);
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.8);
  cursor: pointer;
  overflow: hidden;
}

.director-image-bg-premium {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-image: url('assets/divyanshu.jpg');
  background-size: cover;
  background-position: top center;
  transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease;
  filter: grayscale(15%) contrast(1.05);
}

.director-image-wrapper-premium:hover .director-image-bg-premium {
  transform: scale(1.06);
  filter: grayscale(0%) contrast(1.1);
}

.director-glare-effect {
  position: absolute;
  top: 0;
  left: -150%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(224, 176, 107, 0.15) 30%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 70%
  );
  transform: skewX(-20deg);
  transition: none;
  pointer-events: none;
  z-index: 3;
}

.director-image-wrapper-premium:hover .director-glare-effect {
  left: 150%;
  transition: left 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.director-gold-corner-top,
.director-gold-corner-bottom {
  position: absolute;
  width: 40px;
  height: 40px;
  border: 2px solid var(--accent-color);
  pointer-events: none;
  z-index: 4;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 0.7;
}

.director-gold-corner-top {
  top: 24px;
  left: 24px;
  border-right: none;
  border-bottom: none;
}

.director-gold-corner-bottom {
  bottom: 24px;
  right: 24px;
  border-left: none;
  border-top: none;
}

.director-image-wrapper-premium:hover .director-gold-corner-top {
  top: 16px;
  left: 16px;
  width: 50px;
  height: 50px;
  opacity: 1;
}

.director-image-wrapper-premium:hover .director-gold-corner-bottom {
  bottom: 16px;
  right: 16px;
  width: 50px;
  height: 50px;
  opacity: 1;
}

.director-floating-badge {
  position: absolute;
  bottom: 40px;
  left: 40px;
  background: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(224, 176, 107, 0.3);
  padding: 8px 18px;
  border-radius: 50px;
  z-index: 4;
}

.badge-year {
  color: var(--accent-color);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.director-content-wrapper-premium {
  color: white;
}

.badge-luxury {
  background: rgba(224, 176, 107, 0.08);
  color: var(--accent-color);
  border: 1px solid rgba(224, 176, 107, 0.25);
  padding: 6px 14px;
  font-size: 0.8rem;
  border-radius: 50px;
  letter-spacing: 2px;
  display: inline-block;
  margin-bottom: 1.2rem;
  text-transform: uppercase;
  font-weight: 700;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.director-name-premium {
  font-size: clamp(2.8rem, 5vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
}

.text-accent-gold {
  color: var(--accent-color);
  background: linear-gradient(135deg, #f3e7e9 0%, #e3eeff 99%, #e0b06b 100%);
  -webkit-background-clip: text;
  background-clip: text;
  text-shadow: 0 0 30px rgba(224, 176, 107, 0.2);
}

.accent-separator-gold {
  height: 4px;
  background: linear-gradient(90deg, var(--accent-color) 0%, transparent 100%);
  margin-bottom: 2.5rem;
  border-radius: 2px;
}

.director-bio-premium p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #c5c5c5;
  margin-bottom: 1.5rem;
}

@media (max-width: 1200px) {
  .director-grid {
    gap: 3.5rem;
  }
}

@media (max-width: 1024px) {
  .director-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
  
  .director-image-wrapper-premium {
    max-width: 550px;
    margin: 0 auto;
  }
  
  .director-section {
    padding: 100px 5%;
  }
}

@media (max-width: 768px) {
  .director-section {
    padding: 80px 5%;
  }
  
  .director-name-premium {
    font-size: 2.8rem;
  }
  
  .director-bio-premium p {
    font-size: 1rem;
  }
}

.team-section {
  background: var(--bg-color);
  padding: 60px 5%;
  position: relative;
}

.team-interactive-layout {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 4rem;
}

.team-main-display {
  padding: 0;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  background: linear-gradient(145deg, rgba(30, 30, 30, 0.4) 0%, rgba(10, 10, 10, 0.8) 100%);
  border: 1px solid rgba(224, 176, 107, 0.1);
}

.team-member-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  align-items: center;
}

.team-image-wrapper {
  position: relative;
  height: 100%;
  min-height: 350px;
  overflow: hidden;
}

.team-image-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, var(--accent-color) 0%, transparent 70%);
  opacity: 0.1;
  z-index: 1;
}

.team-main-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #0a0a0a;
  object-position: center;
  z-index: 2;
  filter: grayscale(0%);
  transition: filter 0.5s ease;
}

.team-member-content:hover .team-main-image {
  filter: contrast(105%);
}

.team-bio-wrapper {
  padding: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.team-name {
  font-size: 2.2rem;
  color: #fff;
  margin-bottom: 0.5rem;
  line-height: 1.1;
}

.team-headline {
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 2.5rem;
}

.team-bio-text p {
  color: #ccc;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.team-bio-text p:last-child {
  margin-bottom: 0;
  font-style: italic;
  color: #fff;
  border-left: 2px solid var(--accent-color);
  padding-left: 15px;
  margin-top: 1.5rem;
}

.team-selectors {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.2rem;
}

.team-selector-item.highlighted-selector {
  background: rgba(224, 176, 107, 0.04);
  border: 1px solid rgba(224, 176, 107, 0.2);
  position: relative;
  box-shadow: 0 0 15px rgba(224, 176, 107, 0.05);
}

.team-selector-item.highlighted-selector:hover {
  background: rgba(224, 176, 107, 0.08);
  box-shadow: 0 0 20px rgba(224, 176, 107, 0.1);
}

.team-selector-item.highlighted-selector.active {
  background: rgba(224, 176, 107, 0.15);
  border-color: var(--accent-color);
  box-shadow: 0 0 25px rgba(224, 176, 107, 0.2);
}

.mini-partner-label {
  display: block;
  font-size: 0.65rem !important;
  text-transform: uppercase;
  background: var(--accent-color);
  color: #000;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 700;
  width: fit-content;
  margin-top: 3px;
  letter-spacing: 0.5px;
}

.partner-highlight-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--accent-color);
  background: rgba(224, 176, 107, 0.1);
  padding: 6px 14px;
  border-radius: 50px;
  width: fit-content;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(224, 176, 107, 0.3);
  letter-spacing: 1.5px;
  box-shadow: 0 0 15px rgba(224, 176, 107, 0.1);
}

.partner-highlight-badge .sparkle-icon {
  font-size: 0.95rem;
  color: #fff;
  animation: sparkle-glow 1.5s infinite alternate;
}

@keyframes sparkle-glow {
  from { transform: scale(0.9); opacity: 0.8; }
  to { transform: scale(1.1); opacity: 1; }
}

.team-selector-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 15px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  cursor: pointer;
  transition: all 0.3s ease;
}

.team-selector-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-5px);
}

.team-selector-item.active {
  background: rgba(224, 176, 107, 0.1);
  border-color: rgba(224, 176, 107, 0.4);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.team-thumbnail {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  filter: grayscale(50%);
}

.team-selector-item.active .team-thumbnail {
  border-color: var(--accent-color);
  filter: grayscale(0%);
}

.team-selector-info h4 {
  color: #fff;
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
}

.team-selector-info span {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 1400px) {
  .team-selectors {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1024px) {
  .team-selectors {
    grid-template-columns: repeat(2, 1fr);
  }

  .team-member-content {
    grid-template-columns: 1fr;
  }
  
  .team-image-wrapper {
    min-height: 400px;
  }
  
  .team-bio-wrapper {
    padding: 40px 30px;
  }
}

@media (max-width: 768px) {
  .team-selectors {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .team-name {
    font-size: 2.2rem;
  }
  
  .team-image-wrapper {
    min-height: 350px;
  }
}
"""

with open("style.css", "a") as f:
    f.write(css_content)

print("CSS appended.")
