// --- 3. Service Card Initial Animation on Scroll (Uses Intersection Observer) ---
const serviceCards = document.querySelectorAll('#OurServices .card');

const observerOptions = {
    root: null, // relative to the viewport
    rootMargin: '0px',
    threshold: 0.2 // Trigger when 20% of the item is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the 'in-view' class to trigger the animation
            entry.target.classList.add('in-view');
            // Stop observing once the animation is triggered
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe each service card
serviceCards.forEach(card => {
    // Add a starting class for the effect
    card.classList.add('animated-card'); 
    observer.observe(card);
});