/* GENERAL */

let hasError = false; // It will validate the form before the submit

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

/* USERNAME */

// Select the userEmail input element
const userEmailInput = document.getElementById("login-username");

// Define validation functions
const validateUserEmail = () => {
  let inputGroup = userEmailInput.parentElement;
  let label = inputGroup.querySelector(".form-label");
  let input = inputGroup.querySelector(".personal-data-input");
  let span = inputGroup.querySelector(".input-error-message");
  const userEmailValue = userEmailInput.value.trim();
  let userEmailError = "";

  if (!userEmailValue) {
    userEmailError = "Username is required";
  } else if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(userEmailValue)) {
    userEmailError = "Username is not an email adress";
  }

  if (userEmailError) {
    addError(label, input, span);
    span.innerText = userEmailError;
    hasError = true;
  } else {
    removeError(label, input, span);
    hasError = false;
  }
};

// Add event listeners to userEmail input field
userEmailInput.addEventListener("blur", validateUserEmail);
userEmailInput.addEventListener("focus", () => clearError(userEmailInput));

/* PASSWORD */

// Select the loginPassword input element
const loginPasswordInput = document.getElementById("login-pass");

// Define validation functions
const validateLoginPassword = () => {
  let inputGroup = loginPasswordInput.parentElement;
  let label = inputGroup.querySelector(".form-label");
  let input = inputGroup.querySelector(".personal-data-input");
  let span = inputGroup.querySelector(".input-error-message");
  const loginPasswordValue = loginPasswordInput.value.trim();
  let loginPasswordError = "";

  if (!loginPasswordValue) {
    loginPasswordError = "Password is required";
  } else if (loginPasswordValue.length < 8) {
    loginPasswordError = "Password must be at least 8 characters long";
  } else {
    let hasNumber = false;
    let hasUpperCase = false;
    let hasLowerCase = false;
    for (let i = 0; i < loginPasswordValue.length; i++) {
      const char = loginPasswordValue.charAt(i);
      if (!isNaN(char)) {
        hasNumber = true;
      } else if (char === char.toUpperCase()) {
        hasUpperCase = true;
      } else if (char === char.toLowerCase()) {
        hasLowerCase = true;
      }
    }
    if (!(hasNumber && hasUpperCase && hasLowerCase)) {
      loginPasswordError =
        "Password must contain at least one number, one uppercase letter and one lowercase letter";
    }
  }

  if (loginPasswordError) {
    addError(label, input, span);
    span.innerText = loginPasswordError;
    hasError = true;
  } else {
    removeError(label, input, span);
    hasError = false;
  }
};

// Add event listeners to loginPassword input field
loginPasswordInput.addEventListener("blur", validateLoginPassword);
loginPasswordInput.addEventListener("focus", () =>
  clearError(loginPasswordInput)
);

/* SUBMIT BUTTON */

const submitButton = document.getElementById("submit-login-btn");

submitButton.form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (hasError) {
    alert("Please fix the errors in the form");
  } else {
    fetch("https://api-rest-server.vercel.app/login?email=" + userEmailInput.value + "&password=" + loginPasswordInput.value)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        alert(data.msg);
      })
      .catch((error) => {
        alert("Username or Password are wrong");
      });
  }
});