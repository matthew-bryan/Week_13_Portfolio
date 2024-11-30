document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const cards = Array.from(track.children);
    const cardWidth = cards[0].getBoundingClientRect().width;
    let currentIndex = 0;

    // Function to update carousel position
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

    // Initialize carousel on load
    updateCarousel();

    // Update carousel on window resize to ensure proper sizing
    window.addEventListener('resize', () => {
        updateCarousel();
    });
});
