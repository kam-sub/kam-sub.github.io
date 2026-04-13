// --- Typewriter Effect Logic ---
const words = ["Systems Architect", "Data & Spreadsheet Administrator", "Full-Stack Developer", "Java Developer"];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.getElementById('typewriter').innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 2000); // Wait 2 seconds before deleting
            return false;
        }
        timer = setTimeout(loopTyping, 100); // Speed of typing
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.getElementById('typewriter').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0; // Loop back to the first word
            }
            setTimeout(typingEffect, 500); // Wait half a second before typing next word
            return false;
        }
        timer = setTimeout(loopDeleting, 50); // Speed of deleting
    };
    loopDeleting();
}

// Start the effect when the page loads
window.onload = function() {
    typingEffect();
};

// --- Scroll Reveal Logic ---
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Triggers when 15% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Optional: Stop observing once revealed
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// Grab all elements with the "hidden" class
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// --- Mobile Hamburger Menu Logic ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle menu when clicking the hamburger
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close the menu automatically when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});