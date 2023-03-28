"use strict";

////////////////
// Modal functionality
const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnShowModal = document.querySelectorAll(`.show-modal`);
const btnCloseModal = document.querySelector(`.close-modal`);

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener(`click`, openModal);
}

const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

btnCloseModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);

document.addEventListener(`keydown`, (e) => {
  if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closeModal();
  }
});

////////////////
// Scroll to top btn (appear and disappear)
const myBtn = document.getElementById(`scroll-to-top`);

const btnDisplay = (window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    myBtn.style.display = `block`;
  } else {
    myBtn.style.display = `none`;
  }
});
btnDisplay();

////////////////
// Tabbed component `cursos menu` `cursos box`

// tabs and filter show
const tabs = document.querySelectorAll(`.tab-location`);
const tabContainer = document.querySelector(`.cursos-location-menu`);
const tabComponent = document.querySelectorAll(`.cursos-location-box`);
const boxes = document.querySelectorAll(`.box`);
const boxContainer = document.querySelector(`.cursos-box`);

tabContainer.addEventListener(`click`, function (e) {
  e.preventDefault();
  const clicked = e.target.closest(`.cursos-location-box`);

  if (!clicked) return;

  tabs.forEach((tab) => tab.classList.remove(`active`));

  clicked.classList.add(`active`);

  // adding and removing classes of the `boxes`
  const filterValue = clicked.getAttribute(`data-filter`);
  // console.log(filterValue);

  boxes.forEach((boxes) => {
    if (filterValue === `all`) {
      boxes.classList.remove(`box-inactive`);
    } else if (boxes.classList.contains(filterValue)) {
      boxes.classList.remove(`box-inactive`);
    } else {
      boxes.classList.add(`box-inactive`);
    }
  });
});
