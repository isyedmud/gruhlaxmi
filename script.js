function validateForm() {
  // Get form values
  var name = document.getElementById("name").value;
  var fatherHusbandName = document.getElementById("father-husband-name").value;
  var age = document.getElementById("age").value;
  var address = document.getElementById("address").value;
  var phoneNumber = document.getElementById("phone-number").value;
  var constituency = document.getElementById("constituency").value;

  // Validate form values
  if (name.trim() == "") {
    alert("Please enter your name.");
    return false;
  }
  if (fatherHusbandName.trim() == "") {
    alert("Please enter your father or husband name.");
    return false;
  }
  if (age.trim() == "" || isNaN(age)) {
    alert("Please enter a valid age.");
    return false;
  }
  if (address.trim() == "") {
    alert("Please enter your address.");
    return false;
  }
  if (phoneNumber.trim() == "" || isNaN(phoneNumber)) {
    alert("Please enter a valid phone number.");
    return false;
  }
  if (constituency.trim() == "") {
    alert("Please enter your constituency.");
    return false;
  }

  // Submit form values to Azure Function App
  var data = {
    name: name,
    fatherHusbandName: fatherHusbandName,
    age: age,
    address: address,
    phoneNumber: phoneNumber,
    constituency: constituency
  };
  var apiUrl = "https://uploaddetails.azurewebsites.net/api/upload?code=v2NQvHGKkdkmK0oAf2D6nl8pPPGMRS-78chqVuhZFJY4AzFuR20fIw==";
  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      alert("Form submitted successfully.");
      document.getElementById("registration-form").reset();
    } else {
      alert("Failed to submit form. Please try again later.");
    }
  })
  .catch(error => {
    alert("Failed to submit form. Please try again later.");
  });

  // Prevent form from submitting normally
  return false;
}
