// form.js


    // API key for authentication
    //const apiKey = 'AIzaSyBWIwDnTlmlA6cvM9OWLKg6ntFxX63s5NA';

    // Handle form submission
    document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            alert('Message sent successfully!');
            form.reset(); // Clear the form fields on success
        } else {
            alert('Failed to send message. Please try again later.');
        }
    } catch (error) {
        console.error('Error sending message:', error);
        alert('An unexpected error occurred. Please try again later.');
    }
});