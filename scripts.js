document.addEventListener('DOMContentLoaded', () => {
    // Select all carousels
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach((carousel) => {
        // Elements specific to this carousel
        const track = carousel.querySelector('.carousel-track');
        const prevButton = carousel.querySelector('.carousel-button.prev');
        const nextButton = carousel.querySelector('.carousel-button.next');
        const cards = Array.from(track.children);

        let currentIndex = 0;
        let cardWidth = cards[0].getBoundingClientRect().width;

        // Update carousel position
        const updateCarousel = () => {
            track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        };

        // Next button functionality
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % cards.length;
            updateCarousel();
        });

        // Previous button functionality
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + cards.length) % cards.length;
            updateCarousel();
        });

        // Recalculate card width on window resize
        window.addEventListener('resize', () => {
            cardWidth = cards[0].getBoundingClientRect().width;
            updateCarousel();
        });

        // Initialize carousel
        updateCarousel();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = lightbox.querySelector('img'); // Target the single lightbox image
    const galleryImages = document.querySelectorAll('.gallery img'); // Select all gallery images

    galleryImages.forEach((image) => {
        image.addEventListener('click', () => {
            lightbox.style.display = 'flex'; // Show the lightbox
            lightboxImage.src = image.src; // Use the clicked image's source
            lightboxImage.alt = image.alt; // Use the clicked image's alt text
        });
    });

    // Close the lightbox when clicking anywhere on it
    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none'; // Hide the lightbox
    });
});
