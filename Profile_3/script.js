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
const hireModal = document.getElementById('hireModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

openModalBtn.addEventListener('click', () => {
    hireModal.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
    hireModal.style.display = 'none';
});

// 3. Certificate View Modal Functionality
const certModal = document.getElementById('certModal');
const closeCertModalBtn = document.getElementById('closeCertModalBtn');
const certPreviewImg = document.getElementById('certPreviewImg');
const certModalTitle = document.getElementById('certModalTitle');
const viewCertButtons = document.querySelectorAll('.view-cert-btn');

viewCertButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const certSrc = btn.getAttribute('data-cert-src');
        // Find the text description nearby to use as header title
        const certName = btn.previousElementSibling.textContent;
        
        certPreviewImg.src = certSrc;
        certModalTitle.textContent = certName;
        certModal.style.display = 'flex';
    });
});

closeCertModalBtn.addEventListener('click', () => {
    certModal.style.display = 'none';
    certPreviewImg.src = ""; // Reset src on close
});

// Global window handling to close any active modal clicked from background overlay
window.addEventListener('click', (e) => {
    if (e.target === hireModal) {
        hireModal.style.display = 'none';
    }
    if (e.target === certModal) {
        certModal.style.display = 'none';
        certPreviewImg.src = "";
    }
});