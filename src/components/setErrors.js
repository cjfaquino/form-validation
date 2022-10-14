const password = document.getElementById("password");

export const setEmailError = (input, error) => {
  if (input.validity.valueMissing) {
    error.textContent = "You need to enter an e-mail address.";
  } else if (input.validity.typeMismatch) {
    error.textContent = "Entered value needs to be an e-mail address.";
  } else if (input.validity.tooShort) {
    error.textContent = `Email should be at least ${input.minLength} characters; you entered ${input.value.length}.`;
  }
};

export const setCountryError = (input, error) => {
  if (input.value === "") {
    error.textContent = "Please choose a country";
  }
};

export const setZipError = (input, error) => {
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
};

export const setPwdConfirmError = (input, error) => {
  if (input.validity.valueMissing) {
    error.textContent = "Please re-enter password here.";
  } else if (input.value !== password.value) {
    error.textContent = "Passwords do not match.";
  }
};

export const setPasswordError = (input, error) => {
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
};
