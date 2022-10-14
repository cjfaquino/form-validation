document.addEventListener("DOMContentLoaded", () => {
  const selectCountry = document.getElementById("country");

  fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .then((data) => {
      let output = "<option></option>";
      data.forEach((country) => {
        output += `<option>${country.name}</option>`;
      });
      selectCountry.innerHTML = output;
    })
    .catch((err) => console.log(err));
});
