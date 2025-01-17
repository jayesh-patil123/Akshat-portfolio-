// Load particles.js effect
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js loaded successfully.');
});

// GSAP Animation for the animated name fade-in
gsap.from('.animated-name', {
    duration: 2, 
    opacity: 0, 
    y: 50, 
    ease: 'power3.out'
});

// GSAP Typing Effect for the Name
const nameText = "AKSHAT PRASAD"; // The name to be typed
const nameElement = document.querySelector(".animated-name");
nameElement.textContent = ""; // Clear the default text

gsap.to(nameElement, {
    duration: 3,            // Duration of the typing effect
    text: nameText,         // The text to be typed
    ease: "power1.out",     // Easing effect
    delay: 1                // Delay before animation starts
});

// Smooth scrolling for navbar links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Add Scroll Reveal Animation for Work Experience Items
document.addEventListener('DOMContentLoaded', function() {
    const experienceItems = document.querySelectorAll('.experience-item');
    
    const revealItems = () => {
        experienceItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                item.classList.add('reveal');
            }
        });
    };

    window.addEventListener('scroll', revealItems);
    revealItems();  // Ensure animation runs as soon as content is loaded
});

// Smooth Scroll for Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript to add scroll animation for core competencies
document.addEventListener('DOMContentLoaded', function() {
    const competencyItems = document.querySelectorAll('.competency-item');
    
    function handleScroll() {
        competencyItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                item.classList.add('visible');
            }
        });
    }

    // Initial check
    handleScroll();

    // Scroll event listener
    window.addEventListener('scroll', handleScroll);
});

// JavaScript to add scroll animation for skill items
document.addEventListener('DOMContentLoaded', function() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    function handleScroll() {
        skillItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                item.classList.add('visible');
            }
        });
    }

    // Initial check
    handleScroll();

    // Scroll event listener
    window.addEventListener('scroll', handleScroll);
});

// JavaScript for smooth scroll animation on link clicks
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript for form submission handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
        alert('Please fill out all fields.');
        return;
    }

    // Here, you can add code to send form data to the server using an API or email service.
    alert('Thank you for your message! I will get back to you soon.');
    document.getElementById('contact-form').reset();  // Clear the form after submission
});
