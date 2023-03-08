"use strict";

const burgerMenu = document.getElementById("myLinks");

function myFunction() {
  if (burgerMenu.style.display === "block") {
    burgerMenu.style.display = "none";
  } else {
    burgerMenu.style.display = "block";
  }
}

let d = 20;
let r = d / 2;
let area = Math.round(Math.PI * Math.pow(r, 2));
console.log(area);

let random = Math.random() + 2;
console.log(random);

let dice = Math.trunc(Math.random() * 6 + 1);
console.log(dice);

let x = 120;
let y = 85;
let z = 24;
let sum = x + y + z;
let discount = 0.4;

let price = function (cost) {
  return cost * (1 - discount);
};
console.log(
  `the full price of the objects is ${sum}€, with a ${
    discount * 100
  }% discount the final price will be ${price(sum)}€`
);
