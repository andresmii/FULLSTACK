"use strict";

import { getFormDataArr } from "./register.js";

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

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// login modal inputs
const signInEmail = document.getElementById(`sign-in-email`);
const signInPassword = document.getElementById(`sign-in-password`);
const signInBtn = document.getElementById(`sign-in`);

const user = document.querySelector(`.profile-div`);

const signInInputs = document.querySelector(`.login-inputs`);

const displayName = document.querySelector(`.dashboard-text h4`);

signInBtn.addEventListener(`click`, () => {
  const email = signInEmail.value;
  const pwd = signInPassword.value;
  const errorMessage = `<p class="errorMsg">Invalid email or password</p>`;

  // retrieve the latest data
  const formDataArr = getFormDataArr();

  // loop through formDataArr to check if email and password match
  let isLoggedIn = false;
  for (let i = 0; i < formDataArr.length; i++) {
    if (formDataArr[i].email === email && formDataArr[i].newPassword === pwd) {
      isLoggedIn = true;
      signInEmail.value = ``;
      signInPassword.value = ``;
      user.innerHTML = `${formDataArr[i].firstName
        .charAt(0)
        .toUpperCase()
        .concat(formDataArr[i].lastName.charAt(0).toUpperCase())}`;
      closeUserModal();
      displayName.textContent = `Welcome, ${formDataArr[i].firstName} ${formDataArr[i].lastName}`;
      // location.href = `index.html`;
      break;
    }
  }
  if (!isLoggedIn) {
    signInInputs.insertAdjacentHTML(`afterbegin`, errorMessage);
    signInEmail.value = ``;
    signInPassword.value = ``;
  }
});

//////////////////////////////////////////////////
//////////////////////////////////////////////////

const cartMenu = document.getElementById(`myLinks`);

const openCart = () => {
  cartMenu.style.display === `block`
    ? (cartMenu.style.display = `none`)
    : (cartMenu.style.display = `block`);
};
openCart();

//////////////////////////////////////////////////
//////////////////////////////////////////////////
