// 1. Interactive Filtering for Experience vs Certifications
const filterButtons = document.querySelectorAll('.filter-btn');
const expItems = document.querySelectorAll('.exp-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        expItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-tech') === filterValue) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// 2. Hire Me Modal Functionality
const modal = document.getElementById('hireModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

function openModal() {
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

// Close modal if user clicks anywhere outside of the modal content box
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// 3. Contact Form Submission Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents page reload

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate sending message
    console.log(`Message from ${name} (${email}): ${message}`);

    // Clear form inputs
    contactForm.reset();

    // Trigger the confirmation popup modal
    openModal();
});