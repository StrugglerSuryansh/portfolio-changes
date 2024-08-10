document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const statusMessage = document.getElementById('statusMessage');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !subject || !message) {
            statusMessage.textContent = 'Please fill out all fields.';
            return;
        }

        if (!validateEmail(email)) {
            statusMessage.textContent = 'Please enter a valid email address.';
            return;
        }

        statusMessage.textContent = 'Thank you for your message!';
        statusMessage.style.color = '#28a745';

        // Here, you would typically send the form data to your server
        // For example, using fetch or XMLHttpRequest
        // Since we're not actually submitting the form, we'll just reset it
        contactForm.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
// start
