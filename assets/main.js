// Get email input field
var emailInput = document.querySelector('#email');

// Get user input and return an alert message
function emailConfirmation(event) {
  console.log(event.target);
}

document.addEventListener('click', emailConfirmation, false);
