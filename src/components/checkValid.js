import {
  setEmailError,
  setCountryError,
  setZipError,
  setPasswordError,
  setPwdConfirmError,
} from "./setErrors";

const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");
const country = form.querySelector("#country");
const password = form.querySelector("#password");
const passwordConfirm = form.querySelector("#password-confirm");
const zipCode = document.querySelector("#zip-code");
const zipLabel = form.querySelector("label[for='zip-code']");

const getSibling = (currentNode) => {
  const nextSibling = currentNode.nextElementSibling;
  return nextSibling;
};

const toggleZipCode = () => {
  if (country.value === "United States of America") {
    zipCode.disabled = false;
    zipLabel.className = "";
  } else {
    zipCode.disabled = true;
    zipLabel.className = "disabled";
  }
};

const showError = (input) => {
  const error = getSibling(input);
  error.className = "error active";
  input.className = "active";

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
      input.className = "";
    }
  };
};

const checkSubmit = (event) => {
  if (country.value === "") {
    showError(country);
    event.preventDefault();
  }

  inputs.forEach((input) => {
    if (!input.validity.valid) {
      showError(input);
      event.preventDefault();
    }
  });
  if (form.checkValidity()) {
    alert("High five! It cleared.");
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", checkValid(input));
});

country.addEventListener("change", checkValid(country));
country.addEventListener("change", toggleZipCode);

form.addEventListener("submit", checkSubmit);
