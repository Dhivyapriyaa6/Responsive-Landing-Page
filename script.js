// Get all necessary elements
const nav = document.getElementById('navbar');
const toggle = document.querySelector('.mobile-toggle');
const menu = document.querySelector('.nav-menu');
const links = document.querySelectorAll('.nav-menu a');

// Add scroll event listener to change navbar style
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Toggle mobile menu on hamburger click
toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});