import "./style.css";
import "./components/countries";
import "./components/checkValid";

const form = document.querySelector("form");
// const inputs = form.querySelectorAll("input");
// const email = form.querySelector("#email");
// const emailError = form.querySelector("#email + span.error");
// const country = form.querySelector("#country");
// const countryError = form.querySelector("#country + span.error");
const zipCode = form.querySelector("#zip-code");
// const zipCodeError = form.querySelector("#zip-code + span.error");
const password = form.querySelector("#password");
// const passwordError = form.querySelector("#password + span.error");
// const passwordConfirm = form.querySelector("#password-confirm");
// const passwordConfirmError = form.querySelector(
//   "#password-confirm + span.error"
// );

zipCode.minLength = 5;
zipCode.maxLength = 5;
zipCode.pattern = "[0-9]*";
zipCode.disabled = true;

password.pattern =
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
