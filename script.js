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
  }
  

 function submitForm(event) {
  event.preventDefault();

  // Get the form values
  const name = document.getElementById("name").value;
  const fatherName = document.getElementById("father-husband-name").value;
  const age = document.getElementById("age").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;
  const constituency = document.getElementById("constituency").value;

  // Call the Azure function app endpoint
  const url =
    "https://uploaddetails.azurewebsites.net/api/upload?code=v2NQvHGKkdkmK0oAf2D6nl8pPPGMRS-78chqVuhZFJY4AzFuR20fIw==";
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      fatherHusbandName,
      age,
      address,
      phoneNumber,
      constituency,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      alert("Form submitted successfully!");
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation
                    }");
