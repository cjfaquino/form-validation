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

const showError = (input, error) => {
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
};

const getSibling = (currentNode) => {
  const nextSibling = currentNode.nextElementSibling;
  return nextSibling;
};

const checkValid = (input) => {
  const error = getSibling(input);
  return () => {
    if (input.validity.valid) {
      error.textContent = "";
      error.className = "error";
    } else showError(input, error);
  };
};

inputs.forEach((input) => {
  input.addEventListener("input", checkValid(input));
});
