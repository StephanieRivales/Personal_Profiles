// Resume Download
document.getElementById("resumeBtn").addEventListener("click", () => {
    window.open("resume.pdf");
});

// Profile Download
document.getElementById("downloadProfile").addEventListener("click", () => {
    window.open("resume.pdf");
});

// Contact Form
document.getElementById("contactForm").addEventListener("submit", (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const mailtoLink =
        `mailto:yurianeyuuu@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Name: ${name}
Email: ${email}

${message}`
        )}`;

    window.location.href = mailtoLink;

});