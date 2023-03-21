"use strict";

// burger menu (for tablet and mobile)
const burgerMenu = document.getElementById("myLinks");

const openBurgerMenu = () => {
  burgerMenu.style.display === `block`
    ? (burgerMenu.style.display = `none`)
    : (burgerMenu.style.display = `block`);
};

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// opening and closing login modal
const userModal = document.querySelector(`.user-modal`);
const userOverlay = document.querySelector(`.user-overlay`);
const userBtn = document.querySelectorAll(`.profile-div`);
const btnClose = document.querySelectorAll(`.btn--close-modal`);

const openUserModal = function (e) {
  e.preventDefault();
  userModal.classList.remove(`hidden`);
  userOverlay.classList.remove(`hidden`);
};

const closeUserModal = function () {
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
