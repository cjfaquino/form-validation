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
