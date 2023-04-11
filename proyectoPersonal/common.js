"use strict";

import { getFormDataArr } from "./register.js";

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// login modal inputs
const signInEmail = document.getElementById(`sign-in-email`);
const signInPassword = document.getElementById(`sign-in-password`);
const signInBtn = document.getElementById(`sign-in`);

signInBtn.addEventListener(`click`, () => {
  const email = signInEmail.value;
  const pwd = signInPassword.value;

  // retrieve the latest data
  const formDataArr = getFormDataArr();

  // loop through formDataArr to check if email and password match
  let isLoggedIn = false;
  for (let i = 0; i < formDataArr.length; i++) {
    if (formDataArr[i].email === email && formDataArr[i].newPassword === pwd) {
      isLoggedIn = true;
      console.log(`signed in succesfully!`);
      break;
    }
  }
  if (!isLoggedIn) console.log(`invalid email or password`);
});

//////////////////////////////////////////////////
//////////////////////////////////////////////////

const cartMenu = document.getElementById(`myLinks`);

const openCart = () => {
  cartMenu.style.display === `block`
    ? (cartMenu.style.display = `none`)
    : (cartMenu.style.display = `block`);
};

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// opening and closing login modal
const userModal = document.querySelector(`.user-modal`);
const userOverlay = document.querySelector(`.user-overlay`);
const userBtn = document.querySelectorAll(`.profile-div`);
const btnClose = document.querySelectorAll(`.btn--close-modal`);

const openUserModal = (e) => {
  e.preventDefault();
  userModal.classList.remove(`hidden`);
  userOverlay.classList.remove(`hidden`);
};

const closeUserModal = () => {
  userModal.classList.add(`hidden`);
  userOverlay.classList.add(`hidden`);
};

// calling open
userBtn.forEach((btn) => btn.addEventListener(`click`, openUserModal));

// calling close
btnClose.forEach((btn) => btn.addEventListener(`click`, closeUserModal));
userOverlay.addEventListener(`click`, closeUserModal);
document.addEventListener(`keydown`, (e) => {
  if (e.key === `Escape` && !userModal.classList.contains(`hidden`)) {
    closeUserModal();
  }
});
