const serviceCards = document.querySelectorAll('#OurServices .card');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);
serviceCards.forEach(card => {
    card.classList.add('animated-card');
    observer.observe(card);
});