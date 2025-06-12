// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});

// Close mobile menu when clicking a nav link
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll Animation
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.about-content, .skills-container, .projects-grid, .contact-content');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

document.querySelectorAll('.about-content, .skills-container, .projects-grid, .contact-content').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Contact Form Handler
const contactForm = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = contactForm.querySelector('#name').value.trim();
        const email = contactForm.querySelector('#email').value.trim();
        const message = contactForm.querySelector('#message').value.trim();

        if (!name || !email || !message) {
            formResponse.textContent = 'Please fill in all fields.';
            formResponse.style.color = 'red';
            return;
        }

        formResponse.textContent = 'Sending...';
        formResponse.style.color = 'white';

        setTimeout(() => {
            formResponse.textContent = 'Message sent successfully!';
            formResponse.style.color = 'lightgreen';
            contactForm.reset();
        }, 1500);
    });
}
