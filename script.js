// Define the form and its inputs
const form = document.getElementById('registration-form');
const nameInput = document.getElementById('name');
const fatherHusbandNameInput = document.getElementById('father-husband-name');
const ageInput = document.getElementById('age');
const addressInput = document.getElementById('address');
const phoneNumberInput = document.getElementById('phone-number');
const constituencyInput = document.getElementById('constituency');

// Define the function to validate the form fields
function validateForm() {
  // Check if the name is empty
  if (nameInput.value.trim() === '') {
    alert('Please enter your name');
    return false;
  }

  // Check if the father/husband name is empty
  if (fatherHusbandNameInput.value.trim() === '') {
    alert('Please enter your father/husband name');
    return false;
  }

  // Check if the age is empty or not a number
  if (ageInput.value.trim() === '' || isNaN(ageInput.value)) {
    alert('Please enter a valid age');
    return false;
  }

  // Check if the address is empty
  if (addressInput.value.trim() === '') {
    alert('Please enter your address');
    return false;
  }

  // Check if the phone number is empty or not a number
  if (phoneNumberInput.value.trim() === '' || isNaN(phoneNumberInput.value)) {
    alert('Please enter a valid phone number');
    return false;
  }

  // Check if the constituency is empty or not valid
  if (constituencyInput.value.trim() === '' || (constituencyInput.value !== 'Hoskote' && constituencyInput.value !== 'Chamrajpet')) {
    alert('Please enter a valid constituency');
    return false;
  }

  // If all fields are valid, submit the form to the function app
  const url = 'https://uploaddetails.azurewebsites.net/api/upload?code=v2NQvHGKkdkmK0oAf2D6nl8pPPGMRS-78chqVuhZFJY4AzFuR20fIw==';
  const xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      alert('Form submitted successfully');
      form.reset();
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
      alert('Error submitting form. Please try again later.');
    }
  };
  const data = JSON.stringify({
    name: nameInput.value,
    fatherHusbandName: fatherHusbandNameInput.value,
    age: ageInput.value,
    address: addressInput.value,
    phoneNumber: phoneNumberInput.value,
    constituency: constituencyInput.value
  });
  xhr.send(data);
  return false;
}
