import "./style.css";
import "./components/countries";

const main = document.querySelector("main");
const form = main.querySelector("form");
const inputs = form.querySelectorAll("input");
const email = form.querySelector("#email");
const emailError = form.querySelector("#email + span.error");
const country = form.querySelector("#country");
const countryError = form.querySelector("#country + span.error");
const zipCode = form.querySelector("#zip-code");
const zipCodeError = form.querySelector("#zip-code + span.error");
const password = form.querySelector("#password");
const passwordError = form.querySelector("#password + span.error");
const passwordConfirm = form.querySelector("#password-confirm");
const passwordConfirmError = form.querySelector(
  "#password-confirm + span.error"
);
console.log(country.name);
zipCode.minLength = 5;
zipCode.maxLength = 5;
zipCode.pattern = "[0-9]*";

password.pattern =
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";

const getSibling = (currentNode) => {
  const nextSibling = currentNode.nextElementSibling;
  return nextSibling;
};

const showError = (input) => {
  console.log(input.validity);
  const error = getSibling(input);
  // email messages
  if (input.name === "email") {
    if (input.validity.valueMissing) {
      error.textContent = "You need to enter an e-mail address.";
    } else if (input.validity.typeMismatch) {
      error.textContent = "Entered value needs to be an e-mail address.";
    } else if (input.validity.tooShort) {
      error.textContent = `Email should be at least ${input.minLength} characters; you entered ${input.value.length}.`;
    }
    error.className = "error active";
  }

  // country messages
  else if (input.name === "country") {
    if (input.value === "") {
      error.textContent = "Please choose a country";
    }
    error.className = "error active";
  }

  // zipCode messages
  else if (input.name === "zip-code") {
    if (input.validity.valueMissing) {
      error.textContent = "You need to enter a zip code.";
    } else if (
      input.validity.typeMismatch ||
      input.validity.badInput ||
      input.validity.patternMismatch
    ) {
      error.textContent = "Entered value needs to be a 5 digit number.";
    } else if (input.validity.tooShort || input.validity.rangeUnderflow) {
      error.textContent = `Zip code should be at least ${input.minLength} characters.`;
    } else if (input.validity.tooLong || input.validity.rangeOverflow) {
      error.textContent = `Zip code should be no more than ${input.maxLength} characters.`;
    }
    error.className = "error active";
  }

  // password messages
  else if (input.name === "password") {
    if (input.validity.valueMissing) {
      error.textContent = "You need to enter a password.";
    } else if (
      input.validity.typeMismatch ||
      input.validity.badInput ||
      input.validity.patternMismatch
    ) {
      error.textContent =
        "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.";
    }
    error.className = "error active";
  }

  // password confirm messaages
  else if (input.name === "password-confirm") {
    if (input.validity.valueMissing) {
      error.textContent = "Please re-enter password here.";
    } else if (input.value !== password.value) {
      error.textContent = "Passwords do not match.";
    }
    error.className = "error active";
  }
};

const checkValid = (input) => {
  const error = getSibling(input);
  return () => {
    if (
      !input.validity.valid ||
      (password.value !== passwordConfirm.value && passwordConfirm.value)
    ) {
      showError(input);
    } else {
      error.textContent = "";
      error.className = "error";
    }
  };
};

inputs.forEach((input) => {
  input.addEventListener("input", checkValid(input));
});

country.addEventListener("change", checkValid(country));

form.addEventListener("submit", (event) => {
  inputs.forEach((input) => {
    if (!input.validity.valid) {
      showError(input);
      event.preventDefault();
    }
  });

  if (country.value === "") {
    showError(country);
    event.preventDefault();
  }
});
