// Control Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            document.body.classList.add('page-loaded');

            setTimeout(() => {
                preloader.remove();
            }, 800);
        }, 1500); 
    }
});

// Control Header la Scroll
const header = document.getElementById('main-header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
}

// Meniu Mobil (Hamburger)
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Animații la scroll (Intersection Observer)
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    
    hiddenElements.forEach((el, index) => {
        if (el.classList.contains('benefit') || el.classList.contains('review-card') || el.classList.contains('product-card')) {
            let cascadeDelay = (index % 3) * 0.15;
            el.style.transitionDelay = `${cascadeDelay}s`;
        }
        observer.observe(el);
    });
});