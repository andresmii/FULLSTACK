"use strict";

const burgerMenu = document.getElementById("myLinks");

function myFunction() {
  if (burgerMenu.style.display === "block") {
    burgerMenu.style.display = "none";
  } else {
    burgerMenu.style.display = "block";
  }
}
