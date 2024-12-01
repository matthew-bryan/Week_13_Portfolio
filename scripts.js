document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const cards = Array.from(track.children);
    let cardWidth = cards[0].getBoundingClientRect().width;
    let currentIndex = 0;
    let isMoving = false;

    // Function to update carousel position
    const updateCarousel = () => {
        if (isMoving) return;
        isMoving = true;

        cardWidth = cards[0].getBoundingClientRect().width; // Ensure width is recalculated
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

        setTimeout(() => {
            isMoving = false;
        }, 500); // Matches the CSS transition duration
    };

    // Next button functionality
    nextButton.addEventListener('click', () => {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            updateCarousel();
        } else {
            currentIndex = 0; // Wrap around to the start
            updateCarousel();
        }
    });

    // Previous button functionality
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        } else {
            currentIndex = cards.length - 1; // Wrap around to the end
            updateCarousel();
        }
    });

    // Initialize carousel on load
    updateCarousel();

    // Update carousel on window resize to ensure proper sizing
    window.addEventListener('resize', () => {
        cardWidth = cards[0].getBoundingClientRect().width; // Recalculate card width on resize
        updateCarousel();
    });
});
