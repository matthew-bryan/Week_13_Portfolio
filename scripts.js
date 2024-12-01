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

