document.addEventListener('DOMContentLoaded', () => {
    
    const certModal = document.getElementById('certModal');
    const modalImage = document.getElementById('modalImage');
    const modalClose = document.querySelector('.modal-close');
    const certImages = document.querySelectorAll('.cert-preview-img');

    // Click on any certificate picture to show it full-screen
    certImages.forEach(img => {
        img.addEventListener('click', () => {
            modalImage.src = img.src;
            certModal.style.display = 'flex';
        });
    });

    // Close the image popup when clicking the 'X' button
    if (modalClose && certModal) {
        modalClose.addEventListener('click', () => {
            certModal.style.display = 'none';
        });

        // Close the image popup if you click anywhere on the dark background
        certModal.addEventListener('click', (e) => {
            if (e.target === certModal) {
                certModal.style.display = 'none';
            }
        });
    }
});
