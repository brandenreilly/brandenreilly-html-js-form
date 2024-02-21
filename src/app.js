/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
};
let submitBtn = document.querySelector("#submitForm");
submitBtn.addEventListener("click", submitValid);

function submitValid() {
  let creditCard = document.querySelector(".inputCard");
  let CVC = document.querySelector("#inputCVC");
  let amount = document.querySelector("#inputAmount");
  let fName = document.querySelector("#inputfName");
  let lName = document.querySelector("#inputlName");
  let city = document.querySelector("#inputCity");
  let state = document.querySelector("#inputState");
  let zipCode = document.querySelector("#inputPostalCode");
  let msg = document.querySelector("#msg");
  let inputs = [
    creditCard.value,
    CVC.value,
    amount.value,
    fName.value,
    lName.value,
    city.value,
    state.value,
    zipCode.value
  ];
  console.log(inputs);
  if (creditCard.value.length != 16) {
    console.log("Credit Card length must be 16 digits.");
    creditCard.classList.add("is-invalid");
    alertBox("Credit Card # must be 16 digits.");
  }
  if (CVC.value.length != 3) {
    console.log("CVC needs to be 3 digits.");
    CVC.classList.add("is-invalid");
    alertBox("CVC needs to be 3 digits.");
  }
  if (amount.value <= 0) {
    console.log("Amount must be greater than 0");
    amount.classList.add("is-invalid");
    alertBox("Amount must be greater than $0");
  }
  if (fName.value <= 0) {
    fName.classList.add("is-invalid");
    alertBox("Please enter your first name.");
  }
  if (lName.value <= 0) {
    lName.classList.add("is-invalid");
    alertBox("Please enter your last name.");
  }
  if (city.value <= 0) {
    city.classList.add("is-invalid");
    alertBox("City can not be empty.");
  }
  if (state.value == "statePlaceHolder") {
    state.classList.add("is-invalid");
    alertBox("You must pick a state.");
  }
  if (zipCode.value <= 0) {
    zipCode.classList.add("is-invalid");
    alertBox("Zip Code can not be empty.");
  }
  if (msg.value <= 0) {
    msg.classList.add("is-invalid");
    alertBox("Message Box can not be empty.");
  }
}

function alertBox(errorMsg) {
  let missingBox = document.querySelector("#missingFields");
  missingBox.classList.remove("d-none");
  missingBox.innerHTML += `<p>${errorMsg}</p>`;
}
