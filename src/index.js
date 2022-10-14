import "./style.css";
import "./components/countries";
import {
  setEmailError,
  setCountryError,
  setZipError,
  setPasswordError,
  setPwdConfirmError,
} from "./components/setErrors";

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
  const error = getSibling(input);
  error.className = "error active";

  if (input.name === "email") {
    setEmailError(input, error);
  } else if (input.name === "country") {
    setCountryError(input, error);
  } else if (input.name === "zip-code") {
    setZipError(input, error);
  } else if (input.name === "password") {
    setPasswordError(input, error);
  } else if (input.name === "password-confirm") {
    setPwdConfirmError(input, error);
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
