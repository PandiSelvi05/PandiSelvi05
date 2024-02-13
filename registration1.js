function validate() {
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var gender = document.getElementById("gender").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;


    var nameError = document.getElementById("nameError");
    var addressError = document.getElementById("addressError");
    var genderError = document.getElementById("genderError");
    var phoneNumberError = document.getElementById("phoneNumberError");
    var emailError = document.getElementById("emailError");


    var isValid = true;
    nameError.innerHTML = "";
    lastNameError.innerHTML = "";
    addressError.innerHTML = "";
    genderError.innerHTML = "";
    phoneNumberError.innerHTML = "";
    emailError.innerHTML = "";

    if (name.trim() === "") {
        nameError.innerHTML = "Name is required";
        isValid = false;
    }

    if (address.trim() === "") {
        addressError.innerHTML = "Address is required";
        isValid = false;
    }

    if (gender === "") {
        genderError.innerHTML = "Please select a gender";
        isValid = false;
    }

    if (phoneNumber.trim() === "") {
        phoneNumberError.innerHTML = "Phone Number is required";
        isValid = false;
    } else if (!isValidPhoneNumber(phoneNumber)) {
        phoneNumberError.innerHTML = "Invalid phone number";
        isValid = false;
    }

    if (email.trim() === "") {
        emailError.innerHTML = "Email is required";
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.innerHTML = "Invalid email address";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("myForm").reset(); 
    }
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phoneNumber) {
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
}

