document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.login-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        window.location.href = 'main.html'; // Redirect to the index.html file
    });
});
