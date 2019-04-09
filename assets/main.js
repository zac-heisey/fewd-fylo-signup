// Get email input field
var emailInput = document.querySelector('#email');
// Get submit button
var submitBtn = document.querySelector('[type="submit"]');

// Get user input and return an alert message
function emailConfirmation(event) {
  // Bail if click is NOT on submit button
  if (event.target !== submitBtn) return;
  // Get user email address
  var userEmail = emailInput.value;
  // Show alert confirmation message
  alert(`Your email address has been successfully submitted: ${userEmail}`);
  // Prevent default
  event.preventDefault();
}

// Listen for clicks on document
document.addEventListener('click', emailConfirmation, false);
