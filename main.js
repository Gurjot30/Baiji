document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Scroll Animations using Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: unobserve after animating once
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elementsToAnimate = document.querySelectorAll('.fade-in');
  elementsToAnimate.forEach(el => observer.observe(el));

  // Hero Slider Logic
  const heroSlides = [
    {
      image: 'assets/hero_slide_2_new.jpg',
      title1: 'Where Brands',
      title2: 'Meet Entertainment',
    },
    {
      image: 'assets/hero_slide_1.jpg',
      title1: 'Cinematic',
      title2: 'Storytelling',
    },
    {
      image: 'assets/hero_slide_3.jpg',
      title1: 'Data-Driven',
      title2: 'Growth',
    }
  ];

  let currentSlide = 0;
  const heroBg = document.getElementById('hero-bg');
  const heroTitle1 = document.getElementById('hero-title1');
  const heroTitle2 = document.getElementById('hero-title2');
  const prevBtn = document.querySelector('.prev-arrow');
  const nextBtn = document.querySelector('.next-arrow');
  const dots = document.querySelectorAll('.hero-dot');

  function updateHeroSlide(index) {
    if (!heroBg) return;
    
    // Remove active class from all dots
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current dot
    if (dots[index]) {
      dots[index].classList.add('active');
    }

    const slide = heroSlides[index];
    
    // Fade out text
    heroTitle1.style.opacity = 0;
    heroTitle2.style.opacity = 0;
    
    setTimeout(() => {
      heroBg.style.backgroundImage = `url('${slide.image}')`;
      heroTitle1.textContent = slide.title1;
      heroTitle2.textContent = slide.title2;
      
      // Fade in text
      heroTitle1.style.transition = 'opacity 0.5s';
      heroTitle2.style.transition = 'opacity 0.5s';
      heroTitle1.style.opacity = 1;
      heroTitle2.style.opacity = 1;
    }, 300); // Wait for fade out to complete before changing text
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      currentSlide = (currentSlide === 0) ? heroSlides.length - 1 : currentSlide - 1;
      updateHeroSlide(currentSlide);
    });

    nextBtn.addEventListener('click', () => {
      currentSlide = (currentSlide === heroSlides.length - 1) ? 0 : currentSlide + 1;
      updateHeroSlide(currentSlide);
    });

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        updateHeroSlide(currentSlide);
      });
    });

    // Auto advance slide every 5 seconds
    setInterval(() => {
      currentSlide = (currentSlide === heroSlides.length - 1) ? 0 : currentSlide + 1;
      updateHeroSlide(currentSlide);
    }, 5000);
  }

  // Portfolio Marquee Slider Logic
  const sliderTracks = document.querySelectorAll('.slider-track');
  sliderTracks.forEach(track => {
    // Clone the inner HTML to create a seamless infinite loop
    const clone = track.innerHTML;
    track.innerHTML += clone;
  });
});
