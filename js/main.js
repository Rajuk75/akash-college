// Slider functionality
function initSlider() {
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    currentSlide = index;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto slide every 5 seconds
    setInterval(nextSlide, 5000);
  }
}

// Tab functionality
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      
      // Remove active class from all buttons and contents
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked button and corresponding content
      btn.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });
}

// Gallery filter functionality
function initGallery() {
  const categoryBtns = document.querySelectorAll('.category-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      
      // Update active button
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Filter items
      galleryItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = 'Thank you for your message! We will contact you soon.';
    formMessage.style.color = 'green';
    contactForm.reset();
    
    setTimeout(() => {
      formMessage.textContent = '';
    }, 5000);
  });
}