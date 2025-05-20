// Initialize Lucide icons
lucide.createIcons();

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };

  // Here you would typically send the form data to your server
  console.log('Form submitted:', formData);
  
  // Clear form
  this.reset();
  
  // Show success message (you can customize this)
  alert('Mensagem enviada com sucesso!');
});