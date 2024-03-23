const form = document.querySelector("form");
// this usecase will give you empty value if you use the below line --
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault(); // This will help you to prevent the page to reload.

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  let results = document.querySelector("#results");
  let results1 = document.querySelector("#results1");
  let bmi;

  // To check if there is any field that is empty or less than 0

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height : ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight : ${weight}`;
  } else {
    bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
  // Check BMI category
  if (bmi <= 18.5) {
    results1.innerHTML = `You are under weight with a BMI of ${bmi}.`;
  }
  if (bmi >= 18.6 || bmi <= 24.9) {
    results1.innerHTML = `You are Normal weight with a BMI of ${bmi}.`;
  }
  if (bmi >= 24.9) {
    results1.innerHTML = `You are Normal weight with a BMI of ${bmi}.`;
  }
});
