// Declare the spinMessages array at the beginning of the script
const spinMessages = [
    "You owe me a kiss time milenge tabh 😘",
    "Free hug muje next time milenge tabh😏 ",
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
    navLinks.classList.toggle('open'); // Toggles the "open" class
}

// Function to handle the bottle spin
function spinBottle() {
    const bottle = document.querySelector('.bottle');
    const spinMessageElement = document.getElementById("spin-message");

    // Add spin animation class
    bottle.classList.add('spin');

    // Display a random spin message after the bottle finishes spinning
    setTimeout(() => {
        // Randomly select a message from the array
        const randomMessage = spinMessages[Math.floor(Math.random() * spinMessages.length)];
        spinMessageElement.textContent = randomMessage;
    }, 2000);  // Message will show after the 2-second animation time

    // Remove spin animation class after the spin is done
    setTimeout(() => {
        bottle.classList.remove('spin');
    }, 2000);  // Ensure the bottle stops spinning after the animation duration
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

    lightbox.style.display = "block";
    lightboxImage.src = images[index].src;
}

// Function to close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}

// Function to change the lightbox image
function changeImage(direction) {
    const lightboxImage = document.getElementById("lightbox-image");
    const images = document.querySelectorAll(".photo-item img");
    let currentIndex = Array.from(images).findIndex(img => img.src === lightboxImage.src);
    currentIndex = (currentIndex + direction + images.length) % images.length;
    lightboxImage.src = images[currentIndex].src;
}

// Intersection Observer for animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.empty-page').forEach(section => {
    observer.observe(section);
});
