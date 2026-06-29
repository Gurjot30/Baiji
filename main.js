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
    
    // Fade out text and background
    heroTitle1.style.opacity = 0;
    heroTitle2.style.opacity = 0;
    heroBg.style.transition = 'opacity 0.3s ease-in-out';
    heroBg.style.opacity = 0;
    
    setTimeout(() => {
      heroBg.style.backgroundImage = `url('${slide.image}')`;
      heroTitle1.textContent = slide.title1;
      heroTitle2.textContent = slide.title2;
      
      // Fade back in
      heroTitle1.style.transition = 'opacity 0.5s';
      heroTitle2.style.transition = 'opacity 0.5s';
      heroTitle1.style.opacity = 1;
      heroTitle2.style.opacity = 1;
      heroBg.style.opacity = 1;
    }, 300); // Wait for fade out to complete before changing text and image
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

  // Testimonials Logic
  const testimonials = [
    {
      name: "Ananya Iyer",
      role: "Marketing Director, Aura Lux",
      text: "Baiji Entertainments transformed our brand's digital presence. Their cinematic approach to our launch campaign was beyond our expectations."
    },
    {
      name: "Vikram Malhotra",
      role: "CEO, Nexa Dynamics",
      text: "The 3C model they implemented for our strategy provided us with insights we hadn't considered. Truly a partner in our growth."
    },
    {
      name: "Sarah Fernandes",
      role: "Creative Head, Bloom Media",
      text: "Working with Divyanshu and his team was a breeze. They understand the nuances of storytelling and brand building perfectly."
    },
    {
      name: "Rajesh Khanna",
      role: "Founder, Heritage Foods",
      text: "From celebrity management to national campaigns, they handle everything with extreme professionalism and creative flair."
    },
    {
      name: "Priya Sharma",
      role: "CMO, Zenith Tech",
      text: "Their ability to weave narratives that resonate across diverse demographics is unparalleled. A top-tier agency."
    },
    {
      name: "Karan Singhania",
      role: "Director, Urban Lifestyle",
      text: "The team's dedication to our vision and their innovative execution resulted in our most successful quarter yet."
    }
  ];

  const authorItems = document.querySelectorAll('.author-list-item');
  const quoteText = document.querySelector('.quote-text');
  const mobileAuthorName = document.querySelector('.mobile-author-info h4');
  const mobileAuthorRole = document.querySelector('.mobile-author-info .text-accent');
  const activeQuoteContent = document.querySelector('.active-quote-content');
  const quoteProgressContainer = document.querySelector('.quote-progress');
  
  if (authorItems.length > 0 && quoteText && activeQuoteContent) {
    let currentTestimonialIndex = 0;
    let testimonialTimer;
    
    activeQuoteContent.style.transition = 'opacity 0.3s ease';

    function updateTestimonial(index) {
      // Remove active class
      authorItems.forEach(item => item.classList.remove('active'));
      
      // Add active class to new item
      if (authorItems[index]) {
        authorItems[index].classList.add('active');
      }
      
      // Fade out quote
      activeQuoteContent.style.opacity = 0;
      
      setTimeout(() => {
        const t = testimonials[index];
        quoteText.textContent = `"${t.text}"`;
        if (mobileAuthorName) mobileAuthorName.textContent = t.name;
        if (mobileAuthorRole) mobileAuthorRole.textContent = t.role;
        
        // Reset progress bar animation
        if (quoteProgressContainer) {
          const oldBar = quoteProgressContainer.querySelector('.progress-bar-fill');
          if (oldBar) {
            oldBar.remove();
          }
          const newBar = document.createElement('div');
          newBar.className = 'progress-bar-fill';
          newBar.style.animation = 'fillProgress 6s linear forwards';
          quoteProgressContainer.appendChild(newBar);
        }

        // Fade in quote
        activeQuoteContent.style.opacity = 1;
      }, 300);
    }

    function startTestimonialTimer() {
      clearInterval(testimonialTimer);
      testimonialTimer = setInterval(() => {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
        updateTestimonial(currentTestimonialIndex);
      }, 6000);
    }

    // Add click events to author items
    authorItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        currentTestimonialIndex = index;
        updateTestimonial(index);
        startTestimonialTimer();
      });
    });

    // Start auto-play
    startTestimonialTimer();
  }

  // Analytics Counter Logic
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length > 0) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const originalText = el.getAttribute('data-original') || el.innerText;
          
          if (!el.getAttribute('data-original')) {
            el.setAttribute('data-original', originalText);
          }
          
          const numericPart = parseInt(originalText.replace(/[^0-9]/g, '')) || 0;
          const suffix = originalText.replace(/[0-9]/g, '');
          
          if (numericPart === 0) return;
          
          let start = 0;
          const duration = 2000; // 2 seconds
          let startTime = null;
          
          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const currentCount = Math.floor(progress * numericPart);
            
            el.innerText = `${currentCount}${suffix}`;
            
            if (progress < 1) {
              window.requestAnimationFrame(animate);
            } else {
              el.innerText = originalText;
            }
          };
          
          window.requestAnimationFrame(animate);
          
          // Unobserve so it only animates once
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
      // Set to 0 initially to prevent flash of full number
      const originalText = stat.innerText;
      if (!stat.getAttribute('data-original')) {
        stat.setAttribute('data-original', originalText);
        const suffix = originalText.replace(/[0-9]/g, '');
        stat.innerText = `0${suffix}`;
      }
      counterObserver.observe(stat);
    });
  }

  // Navbar Scroll Logic
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      
      if (scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Hide navbar when scroll crosses hero section (approx 100vh)
      if (scrollY > window.innerHeight) {
        navbar.classList.add('hidden');
      } else {
        navbar.classList.remove('hidden');
      }
    });
  }
});

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

  // --- Video Loader GSAP Animation ---
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    const videoContainer = document.getElementById('video-intro-container');
    const video = document.getElementById('intro-video');
    const logoTarget = document.getElementById('nav-logo-target');

    if (videoContainer && video && logoTarget) {
      // Check if the intro has already played in this session or URL indicates so
      if (sessionStorage.getItem('introPlayed') === 'true' || window.location.search.includes('visited=true')) {
        // Skip animation: hide video, show logo
        videoContainer.style.display = 'none';
        logoTarget.style.opacity = 1;
        video.pause();
        video.removeAttribute('src'); // Completely stop the video from playing in background
        video.load();
      } else {
        // First visit: set flag and setup animation
        sessionStorage.setItem('introPlayed', 'true');
        
        // Setup initial styles for animation
        gsap.set(videoContainer, {
          top: 0,
          left: 0,
          x: 0,
          y: 0,
          transform: "none",
          backgroundColor: "rgba(5, 5, 5, 1)"
        });

        // The target width and height of the logo when navbar is scrolled
        const targetWidth = 140; 
        const targetHeight = 80;
        
        // We calculate the left position based on 5% padding of the navbar
        const calculateLeft = () => window.innerWidth * 0.05;

      // GSAP Timeline to animate the video shrinking into the navbar
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "+=1200", // Increased scroll distance for more gradual animation
          scrub: 1, // Smooth scrub
          onLeave: (self) => {
            // Kill the trigger so it doesn't reverse when scrolling back up
            self.kill(false); 
            videoContainer.style.display = 'none'; // Completely hide video permanently
          }
        }
      });

      // Fade out background almost instantly so the hero section is visible first
      tl.to(videoContainer, {
        backgroundColor: "rgba(5, 5, 5, 0)", 
        duration: 0.2, // Fades out very quickly at the start of the scroll
        ease: "power1.out"
      }, 0);

      // "As soon as we scroll it starts shrinking" - Combine translate and shrink
      tl.to(videoContainer, {
        width: targetWidth,
        height: targetHeight,
        x: () => calculateLeft(),
        y: 0, // Top of the screen (navbar is fixed at top: 0)
        duration: 2,
        ease: "power2.inOut"
      }, 0);

      // "Merge with PNG" - Crossfade video into the real image logo at the end
      tl.to(videoContainer, {
        opacity: 0, // Fade out the video
        duration: 0.5,
        ease: "power1.inOut"
      });

      tl.to(logoTarget, {
        opacity: 1, // Fade in the image logo
        duration: 0.5,
        ease: "power1.inOut"
      }, "<"); // Run at the same time as the video fade out

        // On window resize, refresh ScrollTrigger calculations
        window.addEventListener("resize", () => {
          ScrollTrigger.refresh();
        });
      }
    }
  }

