// Typing Animation with Dynamic Greeting
document.addEventListener("DOMContentLoaded", () => {
    const hours = new Date().getHours();
    let greetingText;

    if (hours < 12) {
        greetingText = "Good Morning! Welcome to My Portfolio";
    } else if (hours < 18) {
        greetingText = "Good Afternoon! Welcome to My Portfolio";
    } else {
        greetingText = "Good Evening! Welcome to My Portfolio";
    }

    const greeting = document.getElementById("greeting");
    let index = 0;

    function typeGreeting() {
        if (index < greetingText.length) {
            greeting.textContent += greetingText.charAt(index);
            index++;
            setTimeout(typeGreeting, 100); // Adjust typing speed
        }
    }

    typeGreeting();
});

// Random Quote Generator
const quotes = [
    "The best way to predict the future is to invent it.",
    "Code is like humor. When you have to explain it, it’s bad.",
    "Simplicity is the soul of efficiency.",
    "First, solve the problem. Then, write the code.",
    "Experience is the name everyone gives to their mistakes."
];

document.addEventListener("DOMContentLoaded", () => {
    const quoteElement = document.getElementById("random-quote");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
});

// Smooth Scroll to Sections
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});



// Display Skill Description on Click
const skills = document.querySelectorAll('.skills-list li');
const skillDescription = document.getElementById('skill-description');

skills.forEach(skill => {
    skill.addEventListener('click', () => {
        const description = skill.getAttribute('data-description');
        skillDescription.textContent = description;
    });
});

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('scroll-progress').style.width = `${scrollPercent}%`;
});

const projects = document.querySelectorAll('.project');
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.querySelector('.close-modal');

projects.forEach(project => {
    project.addEventListener('click', () => {
        const title = project.querySelector('h3').textContent;
        const description = project.querySelector('p').textContent;

        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock(); // Initialize clock on page load

const canvas = document.getElementById("background-animation");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

function createParticle() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 5 + 1,
        dx: Math.random() * 2 - 1,
        dy: Math.random() * 2 - 1,
    };
}

for (let i = 0; i < 100; i++) {
    particles.push(createParticle());
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#0077cc";
        ctx.fill();
        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;
    });
    requestAnimationFrame(drawParticles);
}

drawParticles();

