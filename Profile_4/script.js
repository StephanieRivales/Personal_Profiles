document.addEventListener('DOMContentLoaded', () => {
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    const expCards = document.querySelectorAll('.exp-card');
    
    // Universal Structural Filtering Logic Engine
    function applyCategoryFilter(filterValue) {
        expCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (filterValue === 'all' || filterValue === cardCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Dynamic Filter Trigger Configuration Setup
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');
            applyCategoryFilter(filterValue);
        });
    });

    // Hero Quick Navigation Target Hook Setup
    const heroCertBtn = document.getElementById('heroCertBtn');
    const filterBtnCert = document.getElementById('filterBtnCert');
    const experienceSection = document.getElementById('experience');

    if (heroCertBtn && filterBtnCert && experienceSection) {
        heroCertBtn.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            filterBtnCert.classList.add('active');
            applyCategoryFilter('cert');

            // Responsive offset calculations to balance scroll targets
            const yOffset = -80; 
            const yPosition = experienceSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: yPosition, behavior: 'smooth' });
        });
    }
});
