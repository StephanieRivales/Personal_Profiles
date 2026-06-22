document.addEventListener('DOMContentLoaded', () => {
    
    // Experience and Certificate Filter Mechanic
    const filterButtons = document.querySelectorAll('.filter-btn');
    const expCards = document.querySelectorAll('.exp-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            expCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (filterValue === 'all' || filterValue === cardCategory) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Mock Contact Form Submission Alert
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        if(name) {
            formFeedback.style.color = '#16a34a';
            formFeedback.textContent = `Thank you, ${name}! Your message mockup sent successfully.`;
            contactForm.reset();
        }
    });
});
