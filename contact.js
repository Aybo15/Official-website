document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Validate form inputs
  var name = document.getElementById('name').value;
  var surname = document.getElementById('surname').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if (!name || !surname || !email || !message) {
    document.getElementById('statusMessage').innerText = 'Please fill in all fields.';
    return;
  }

  // Submit form data to Formspree API
  var formData = new FormData();
  formData.append('name', name);
  formData.append('surname', surname);
  formData.append('email', email);
  formData.append('message', message);

  fetch('https://formspree.io/your_email_here', {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      document.getElementById('statusMessage').innerText = 'Message sent successfully!';
      document.getElementById('contactForm').reset(); // Clear form fields
    } else {
      throw new Error('Failed to send message.');
    }
  })
  .catch(error => {
    document.getElementById('statusMessage').innerText = 'Error: ' + error.message;
  });
})