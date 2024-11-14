// Declare the spinMessages array at the beginning of the script
const spinMessages = [
    "You owe me a kiss time milenge tabh 😘",
    "Free hug muje next time milenge tabh😏",
    "Shirt less picture shyad bejuga 😏",
    "Wont squeeze your thighs for a Day hmm nai not day for 1hr",
    "Kuch nahi mila hehe",
    "Jo chaye woh leke duga",
    "Flowers next date pakka 😭🙏🏻",
    "Photo bhooth jaenge tu bas date bol",
    "Hug ya kiss tu bol karna toh hai dono mai se eak",
    "tu jo bolegi woh karuga pura din Kuch bhi 😏"
];

// Function to toggle the navigation menu on mobile
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('open');
    }
}

// Function to handle the bottle spin
function spinBottle() {
    const bottle = document.querySelector('.bottle');
    const spinMessageElement = document.getElementById("spin-message");
    if (bottle && spinMessageElement) {
        // Add spin animation class and show message after animation
        bottle.classList.add('spin');
        setTimeout(() => {
            const randomMessage = spinMessages[Math.floor(Math.random() * spinMessages.length)];
            spinMessageElement.textContent = randomMessage;
            bottle.classList.remove('spin');
        }, 2000); // Time matches animation duration
    }
}

// Function to handle scrolling to the top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Function to open the lightbox
function openLightbox(index) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const images = document.querySelectorAll(".photo-item img");

    if (lightbox && lightboxImage && images[index]) {
        lightbox.style.display = "flex";
        lightbox.style.opacity = 0;
        setTimeout(() => lightbox.style.opacity = 1, 10); // Fade in effect
        lightboxImage.src = images[index].src;
        lightbox.dataset.index = index;
    }
}

// Function to close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    if (lightbox) {
        lightbox.style.opacity = 0;
        setTimeout(() => lightbox.style.display = "none", 300); // Fade out effect
    }
}

// Function to change the lightbox image (Previous/Next)
function changeImage(direction) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const images = document.querySelectorAll(".photo-item img");
    let currentIndex = parseInt(lightbox.dataset.index, 10);

    if (lightbox && lightboxImage && !isNaN(currentIndex)) {
        currentIndex = (currentIndex + direction + images.length) % images.length;
        lightboxImage.src = images[currentIndex].src;
        lightbox.dataset.index = currentIndex;
    }
}

// Event listener for closing the lightbox when clicking outside the image
document.getElementById("lightbox")?.addEventListener("click", (event) => {
    if (event.target === document.getElementById("lightbox")) {
        closeLightbox();
    }
});

// Intersection Observer for animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.empty-page').forEach(section => observer.observe(section));
