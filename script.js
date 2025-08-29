document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const formMsg = document.getElementById('formMsg');
  formMsg.textContent = "Thank you! Your message has been sent.";
  this.reset();

  setTimeout(() => {
    formMsg.textContent = "";
  }, 4000);
});