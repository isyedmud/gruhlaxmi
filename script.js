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

  // Show loading symbol
  var submitButton = document.getElementById("submitButton");
  var loadingSymbol = document.createElement("img");
  loadingSymbol.setAttribute("src", "Loading.gif");
  loadingSymbol.setAttribute("alt", "Loading...");
  submitButton.parentNode.insertBefore(loadingSymbol, submitButton.nextSibling);
  submitButton.style.display = "none";

  // Submit form values to Azure Function App
  var data = {
    Name: name,
    FatherorHusbandName: fatherHusbandName,
    Age: age,
    Address: address,
    PhoneNumber: phoneNumber,
    Constituency: constituency
  };
  var apiUrl = "https://uploaddetails.azurewebsites.net/api/UploadData";
  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      if (response.ok) {
        response.text().then(function (text) {
          // Hide loading symbol and show success message
          loadingSymbol.style.display = "none";
          submitButton.style.display = "block";
          alert("Registration Successful: " + text);
          document.getElementById("registration-form").reset();
        });
      } else {
        // Hide loading symbol and show error message
        loadingSymbol.style.display = "none";
        submitButton.style.display = "block";
        alert("Error submitting form. Please try again later.");
      }
    })
    .catch(error => {
      // Hide loading symbol and show error message
      loadingSymbol.style.display = "none";
      submitButton.style.display = "block";
      alert("Failed to submit form. Please try again later.");
    });

  // Prevent form from submitting normally
  return false;
}



