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
  let creditCard = document.querySelector("#inputCard").value;
  let CVC = document.querySelector("#inputCVC").value;
  let amount = document.querySelector("#inputAmount").value;
  let fName = document.querySelector("#inputfName").value;
  let lName = document.querySelector("#inputlName").value;
  let city = document.querySelector("#inputCity").value;
  let state = document.querySelector("#inputState").value;
  let zipCode = document.querySelector("#inputPostalCode").value;
  /* let ccType = document.querySelectorAll(""); */
  let inputs = [
    creditCard,
    CVC.value,
    amount.value,
    fName.value,
    lName.value,
    city.value,
    state.value,
    zipCode.value
  ];
  console.log(inputs);
  if (creditCard.length != 16) {
    console.log("Credit Card length must be 16 digits.");
    document.querySelector("#inputCard").classList.add = "is-invalid";
  } else {
    console.log("Credit Card has 16 digits.");
    document.querySelector("#inputCard").classList.remove = "is-invalid";
    document.querySelector("#inputCard").classList.add = "is-valid";
  }
}
