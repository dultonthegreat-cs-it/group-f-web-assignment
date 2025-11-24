/**
 * JavaScript for the 'Back to Top' button functionality.
 * This script controls the button's visibility and handles the smooth scrolling action.
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- Feature: Back to Top Button Logic (Visibility Control) ---

    const setupBackToTopButton = () => {
        // 1. Get a reference to the button element using its ID.
        const backToTopBtn = document.getElementById("backToTopBtn");
        
        // Guard clause: Exit if the button element is not found in the HTML.
        if (!backToTopBtn) return;

        /**
         * Function executed whenever the user scrolls the window.
         */
        window.onscroll = function() {
            // Check the vertical scroll position of the document body (for older browsers)
            // or the document element (standard, for modern browsers).
            // We show the button if the scroll position exceeds 300 pixels.
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                // If scrolled far enough, make the button visible.
                backToTopBtn.style.display = "block";
            } else {
                // Otherwise, keep the button hidden.
                backToTopBtn.style.display = "none";
            }
        };

        // Note: The click handler for the smooth scrolling is defined 
        // in the global 'topFunction' outside this DOMContentLoaded listener.
    };
    
    // Execute the setup function once the HTML document is fully loaded.
    setupBackToTopButton();
});


/**
 * Scrolls the document smoothly to the top of the page (Y-coordinate 0).
 * This function is designed to be called directly by the HTML 'onclick' attribute 
 * on the back-to-top button.
 */
function topFunction() {
    // window.scrollTo is the modern way to scroll the browser window.
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // This property ensures a smooth, animated scroll, not an instant jump.
    });
}
// --- 1. Header Scroll Fade-Out/In Effect ---
const navbar = document.querySelector('.navbar');
const scrollThreshold = 50; // Distance in pixels to scroll before fading

window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
        // Add a class when scrolled down
        navbar.classList.add('scrolled');
    } else {
        // Remove the class when back near the top
        navbar.classList.remove('scrolled');
    }
});
// --- 2. "Welcome" Message Fade-In on Load ---
const welcomeCard = document.querySelector('.container .card:first-child');

// Add a class to trigger the fade-in effect after the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Add the 'loaded' class after a very slight delay for better effect
    setTimeout(() => {
        welcomeCard.classList.add('loaded');
    }, 100);
});