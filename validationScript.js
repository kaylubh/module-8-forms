// JavaScript code for form validation

const form = document.getElementById('myForm');

form.addEventListener('submit', (formSubmitEvent) => {
  // Prevent form from submitting
  formSubmitEvent.preventDefault();

  // Retrieve the input field value
  const inputFieldValue = document.getElementById('inputField').value;

  // Regular expression pattern for alphanumeric input
  const alphanumericRegex = /^[a-zA-Z0-9]*$/;

  // Check if the input value matches the pattern
  const isValid = alphanumericRegex.test(inputFieldValue);

  // Valid input: display confirmation and submit the form
  if (isValid) {
    alert('Form Submitted');
    form.submit();
  }

  // Invalid input: display error message
  if (!isValid) {
    alert('Invalid Input: must be alphanumeric characters only');
  }
});
