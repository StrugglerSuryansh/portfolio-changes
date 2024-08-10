// Optional: Add any JavaScript for additional interactivity
// Example: Open the link in a new tab
document.querySelector('.project-link').addEventListener('click', function(event) {
    event.preventDefault();
    window.open(this.href, '_blank');
});
