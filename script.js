// JavaScript to trigger animations when elements come into view

document.addEventListener("DOMContentLoaded", () => {
    // Select all sections that need to be animated
    const sections = document.querySelectorAll('.empty-page');

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the section is in view
    });

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Lightbox functionality
function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const photos = document.querySelectorAll('.photo-item img');
    
    lightbox.style.display = 'flex';
    lightboxImage.src = photos[index].src;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
