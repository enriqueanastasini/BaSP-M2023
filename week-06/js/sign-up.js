/* START */

let hasError = false; // It will validate the form before the submit

// Select the name input element
const nameInput = document.getElementById("sign-up-name");

// Define the changes when there is or not an error
const addError = (label, input, span) => {
  label.classList.add("label-error");
  input.classList.add("input-error");
  span.classList.remove("hidden");
};

const removeError = (label, input, span) => {
  label.classList.remove("label-error");
  input.classList.remove("input-error");
  span.classList.add("hidden");
  span.innerText = "";
};

const clearError = (input) => {
  let inputGroup = input.parentElement;
  let label = inputGroup.querySelector(".form-label");
  let span = inputGroup.querySelector(".input-error-message");
  removeError(label, input, span);
};

/* NAME */

// Define validation functions
const validateName = () => {
  let inputGroup = nameInput.parentElement;
  let label = inputGroup.querySelector(".form-label");
  let input = inputGroup.querySelector(".personal-data-input");
  let span = inputGroup.querySelector(".input-error-message");
  const nameValue = nameInput.value.trim();
  let nameError = "";

  if (!nameValue) {
    nameError = "Name is required";
  } else if (nameValue.length <= 2) {
    nameError = "Name is too short";
  } else {
    for (var i = 0; i < nameValue.length; i++) {
      var char = nameValue.charAt(i);
      if (
        !(char >= "A" && char <= "Z") &&
        !(char >= "a" && char <= "z") &&
        !(char == " ")
      ) {
        nameError = "Name contains invalid characters";
        break;
      }
    }
  }

  if (nameError) {
    addError(label, input, span);
    span.innerText = nameError;
    hasError = true;
  } else {
    removeError(label, input, span);
    hasError = false;
  }
};

// Add event listeners to name input field
nameInput.addEventListener("blur", validateName);
nameInput.addEventListener("focus", () => clearError(nameInput));

/* DNI */

// Select the DNI input element
const dniInput = document.getElementById("sign-up-dni");

// Define validation functions
const validateDNI = () => {
  let inputGroup = dniInput.parentElement;
  let label = inputGroup.querySelector(".form-label");
  let input = inputGroup.querySelector(".personal-data-input");
  let span = inputGroup.querySelector(".input-error-message");
  const dniValue = dniInput.value.trim();
  let dniError = "";

  if (!dniValue) {
    dniError = "DNI is required";
  } else if (dniValue.length <= 7 && !/^[0-9]*$/.test(dniValue)) {
    dniError = "DNI is too short. DNI contains characters that are not numbers";
  } else if (dniValue.length <= 7) {
    dniError = "DNI is too short";
  } else {
    for (var i = 0; i < dniValue.length; i++) {
      var char = dniValue.charAt(i);
      if (!(char >= "0" && char <= "9")) {
        dniError = "DNI contains characters that are not numbers";
        break;
      }
    }
  }

  if (dniError) {
    addError(label, input, span);
    span.innerText = dniError;
    hasError = true;
  } else {
    removeError(label, input, span);
    hasError = false;
  }
};

// Add event listeners to name input field
dniInput.addEventListener("blur", validateDNI);
dniInput.addEventListener("focus", () => clearError(dniInput));

/* PHONE */

// Select the PHONE input element
const phoneInput = document.getElementById("sign-up-phone");

// Define validation functions
const validatePhone = () => {
  let inputGroup = phoneInput.parentElement;
  let label = inputGroup.querySelector(".form-label");
  let input = inputGroup.querySelector(".personal-data-input");
  let span = inputGroup.querySelector(".input-error-message");
  const phoneValue = phoneInput.value.trim();
  let phoneError = "";

  if (!phoneValue) {
    phoneError = "Phone number is required";
  } else if (phoneValue.length !== 10) {
    phoneError = "Phone number is invalid, it must contain 10 numbers";
  } else {
    for (var i = 0; i < phoneValue.length; i++) {
      var char = phoneValue.charAt(i);
      if (!(char >= "0" && char <= "9")) {
        phoneError = "DNI contains characters that are not numbers";
        break;
      }
    }
  }

  if (phoneError) {
    addError(label, input, span);
    span.innerText = phoneError;
    hasError = true;
  } else {
    removeError(label, input, span);
    hasError = false;
  }
};

// Add event listeners to name input field
phoneInput.addEventListener("blur", validatePhone);
phoneInput.addEventListener("focus", () => clearError(phoneInput));

/* CITY */

// Select the CITY input element
const cityInput = document.getElementById("sign-up-city");

// Define validation functions
const validateCity = () => {
  let inputGroup = cityInput.parentElement;
  let label = inputGroup.querySelector(".form-label");
  let input = inputGroup.querySelector(".personal-data-input");
  let span = inputGroup.querySelector(".input-error-message");
  const cityValue = cityInput.value.trim();
  let cityError = "";

  if (!cityValue) {
    cityError = "City is required";
  } else if (cityValue.length <= 2) {
    cityError = "City is too short";
  } else {
    for (var i = 0; i < cityValue.length; i++) {
      var char = cityValue.charAt(i);
      if (
        !(char >= "A" && char <= "Z") &&
        !(char >= "a" && char <= "z") &&
        !(char == " ")
      ) {
        cityError = "City contains invalid characters";
        break;
      }
    }
  }

  if (cityError) {
    addError(label, input, span);
    span.innerText = cityError;
    hasError = true;
  } else {
    removeError(label, input, span);
    hasError = false;
  }
};

// Add event listeners to name input field
cityInput.addEventListener("blur", validateCity);
cityInput.addEventListener("focus", () => clearError(cityInput));

/* EMAIL */

// Select the EMAIL input element
const emailInput = document.getElementById("sign-up-email");

// Define validation functions
const validateEmail = () => {
  let inputGroup = emailInput.parentElement;
  let label = inputGroup.querySelector(".form-label");
  let input = inputGroup.querySelector(".personal-data-input");
  let span = inputGroup.querySelector(".input-error-message");
  const emailValue = emailInput.value.trim();
  let emailError = "";

  if (!emailValue) {
    emailError = "Email address is required";
  } else if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(emailValue)) {
    emailError = "Email address is invalid";
  }

  if (emailError) {
    addError(label, input, span);
    span.innerText = emailError;
    hasError = true;
  } else {
    removeError(label, input, span);
    hasError = false;
  }
};

// Add event listeners to email input field
emailInput.addEventListener("blur", validateEmail);
emailInput.addEventListener("focus", () => clearError(emailInput));

/* PASSWORD */

// Select the password input element
const passwordInput = document.getElementById("sign-up-pass");

// Define validation functions
const validatePassword = () => {
  let inputGroup = passwordInput.parentElement;
  let label = inputGroup.querySelector(".form-label");
  let input = inputGroup.querySelector(".personal-data-input");
  let span = inputGroup.querySelector(".input-error-message");
  const passwordValue = passwordInput.value.trim();
  let passwordError = "";

  if (!passwordValue) {
    passwordError = "Password is required";
  } else if (passwordValue.length < 8) {
    passwordError = "Password must be at least 8 characters long";
  } else {
    let hasNumber = false;
    let hasUpperCase = false;
    let hasLowerCase = false;
    for (let i = 0; i < passwordValue.length; i++) {
      const char = passwordValue.charAt(i);
      if (!isNaN(char)) {
        hasNumber = true;
      } else if (char === char.toUpperCase()) {
        hasUpperCase = true;
      } else if (char === char.toLowerCase()) {
        hasLowerCase = true;
      }
    }
    if (!(hasNumber && hasUpperCase && hasLowerCase)) {
      passwordError =
        "Password must contain at least one number, one uppercase letter and one lowercase letter";
    }
  }

  if (passwordError) {
    addError(label, input, span);
    span.innerText = passwordError;
    hasError = true;
  } else {
    removeError(label, input, span);
    hasError = false;
  }
};

// Add event listeners to password input field
passwordInput.addEventListener("blur", validatePassword);
passwordInput.addEventListener("focus", () => clearError(passwordInput));

/* SURNAME */

// Select the surname input element
const surnameInput = document.getElementById("sign-up-surname");

// Define validation functions
const validateSurname = () => {
  let inputGroup = surnameInput.parentElement;
  let label = inputGroup.querySelector(".form-label");
  let input = inputGroup.querySelector(".personal-data-input");
  let span = inputGroup.querySelector(".input-error-message");
  const surnameValue = surnameInput.value.trim();
  let surnameError = "";

  if (!surnameValue) {
    surnameError = "surname is required";
  } else if (surnameValue.length <= 2) {
    surnameError = "surname is too short";
  } else {
    for (var i = 0; i < surnameValue.length; i++) {
      var char = surnameValue.charAt(i);
      if (
        !(char >= "A" && char <= "Z") &&
        !(char >= "a" && char <= "z") &&
        !(char == " ")
      ) {
        surnameError = "Surname contains invalid characters";
        break;
      }
    }
  }

  if (surnameError) {
    addError(label, input, span);
    span.innerText = surnameError;
    hasError = true;
  } else {
    removeError(label, input, span);
    hasError = false;
  }
};

// Add event listeners to surname input field
surnameInput.addEventListener("blur", validateSurname);
surnameInput.addEventListener("focus", () => clearError(surnameInput));

/* BIRTH */

// Select the birth input element
const birthInput = document.getElementById("sign-up-birth");

// Define validation functions
const validateBirth = () => {
  let inputGroup = birthInput.parentElement;
  let label = inputGroup.querySelector(".form-label");
  let input = inputGroup.querySelector(".personal-data-input");
  let span = inputGroup.querySelector(".input-error-message");
  const birthValue = birthInput.value.trim();
  let birthError = "";
  const eighteenYearsAgo = new Date();
  eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

  // Check if the birth date is empty
  if (!birthValue) {
    birthError = "Birth date is required";
  }
  // Check if the birth date is not a valid date
  else if (
    isNaN(Date.parse(birthValue)) ||
    Date.parse(birthValue) > eighteenYearsAgo
  ) {
    birthError = "Birth date is not valid or you are under 18 year old";
  }

  if (birthError) {
    addError(label, input, span);
    span.innerText = birthError;
    hasError = true;
  } else {
    removeError(label, input, span);
    hasError = false;
  }
};

// Add event listeners to name input field
birthInput.addEventListener("blur", validateBirth);
birthInput.addEventListener("focus", () => clearError(birthInput));

/* ADRESS */

// Select the adress input element
const adressInput = document.getElementById("sign-up-adress");

// Define validation functions
const validateAdress = () => {
  let inputGroup = adressInput.parentElement;
  let label = inputGroup.querySelector(".form-label");
  let input = inputGroup.querySelector(".personal-data-input");
  let span = inputGroup.querySelector(".input-error-message");
  const adressValue = adressInput.value.trim();
  let adressError = "";

  if (!adressValue) {
    adressError = "Adress is required";
  } else if (adressValue.length <= 2) {
    adressError = "Adress is too short";
  }

  if (adressError) {
    addError(label, input, span);
    span.innerText = adressError;
    hasError = true;
  } else {
    removeError(label, input, span);
    hasError = false;
  }
};

// Add event listeners to name input field
adressInput.addEventListener("blur", validateAdress);
adressInput.addEventListener("focus", () => clearError(adressInput));

/* CODE */

// Select the code input element
const codeInput = document.getElementById("sign-up-code");

// Define validation functions
const validateCode = () => {
  let inputGroup = codeInput.parentElement;
  let label = inputGroup.querySelector(".form-label");
  let input = inputGroup.querySelector(".personal-data-input");
  let span = inputGroup.querySelector(".input-error-message");
  const codeValue = codeInput.value.trim();
  let codeError = "";

  if (!codeValue) {
    codeError = "Postal code is required";
  } else if (codeValue.length < 4 || codeValue.length > 4) {
    codeError = "Postal code must have 4 digits";
  } else if (isNaN(codeValue)) {
    codeError = "Postal code contains characters that are not numbers";
  }

  if (codeError) {
    addError(label, input, span);
    span.innerText = codeError;
    hasError = true;
  } else {
    removeError(label, input, span);
    hasError = false;
  }
};

// Add event listeners to name input field
codeInput.addEventListener("blur", validateCode);
codeInput.addEventListener("focus", () => clearError(codeInput));

/* MEMBERSHIP */

const membershipInput = document.getElementById("sign-up-membership");

const validateMembership = () => {
  let inputGroup = membershipInput.parentElement;
  let label = inputGroup.querySelector(".form-label");
  let input = inputGroup.querySelector(".personal-data-input");
  let span = inputGroup.querySelector(".input-error-message");
  const membershipValue = membershipInput.value;

  let membershipError = "";

  if (membershipValue === "choose membership") {
    membershipError = "Please choose a membership";
  }

  if (membershipError) {
    addError(label, input, span);
    span.innerText = membershipError;
    hasError = true;
  } else {
    removeError(label, input, span);
    hasError = false;
  }
};

membershipInput.addEventListener("blur", validateMembership);
membershipInput.addEventListener("focus", () => clearError(membershipInput));

/* REPEAT PASSWORD */

// Select the repeatpassword input element
const repeatPasswordInput = document.getElementById("sign-up-repeatpass");
const passwordValidationInput = document.getElementById("sign-up-pass");

// Define validation functions
const validateRepeatPassword = () => {
  let inputGroup = repeatPasswordInput.parentElement;
  let label = inputGroup.querySelector(".form-label");
  let input = inputGroup.querySelector(".personal-data-input");
  let span = inputGroup.querySelector(".input-error-message");
  const repeatPasswordValue = repeatPasswordInput.value.trim();
  let repeatPasswordError = "";

  if (!repeatPasswordValue) {
    repeatPasswordError = "Repeat password is required";
  } else if (repeatPasswordValue !== passwordValidationInput.value.trim()) {
    repeatPasswordError = "Repeat password does not match password";
  }

  if (repeatPasswordError) {
    addError(label, input, span);
    span.innerText = repeatPasswordError;
    hasError = true;
  } else {
    removeError(label, input, span);
    hasError = false;
  }
};

// Add event listeners to repeatpassword input field
repeatPasswordInput.addEventListener("blur", validateRepeatPassword);
repeatPasswordInput.addEventListener("focus", () =>
  clearError(repeatPasswordInput)
);

/* SUBMIT BUTTON */

const submitButton = document.getElementById("submit-sign-up-btn");

submitButton.addEventListener("click", (event) => {
  if (hasError) {
    event.preventDefault();
    alert("Please fix the errors in the form");
  }
});
