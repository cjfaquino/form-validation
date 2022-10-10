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

zipCode.minLength = 5;
zipCode.maxLength = 5;
zipCode.pattern = "[0-9]*";

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
      error.textContent = `Zip code should be at least ${input.minLength} characters; you entered ${input.value.length}.`;
    } else if (input.validity.tooLong || input.validity.rangeOverflow) {
      error.textContent = `Zip code should be no more than ${input.maxLength} characters; you entered ${input.value.length}.`;
    }
    error.className = "error active";
  }
};

const checkValid = (input) => {
  const error = getSibling(input);
  return () => {
    if (input.validity.valid) {
      error.textContent = "";
      error.className = "error";
    } else showError(input);
  };
};

inputs.forEach((input) => {
  input.addEventListener("input", checkValid(input));
});
