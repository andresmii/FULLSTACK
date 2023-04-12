"use strict";

const registerFormDiv = document.querySelector(`.register-form-div`);

let registerForm = null;
if (document.getElementById(`register-form`)) {
  registerForm = document.getElementById(`register-form`);
}

const firstName = document.getElementById(`first-name`);
const lastName = document.getElementById(`last-name`);
const email = document.getElementById(`email`);
const newPassword = document.getElementById(`new-password`);
const confirmPassword = document.getElementById(`confirm-password`);
const checkboxTaC = document.getElementById(`terms-and-conditions`);

let formDataArr = [];

if (registerForm) {
  registerForm.addEventListener(`submit`, (e) => {
    e.preventDefault();

    if (newPassword.value !== confirmPassword.value) {
      alert(`passwords don't match`);
      return;
    }

    // save form data into an object and push it to the array
    formDataArr.push({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      newPassword: newPassword.value,
      confirmPassword: confirmPassword.value,
    });

    const jsonArr = [];
    for (let i = 0; i < formDataArr.length; i++) {
      jsonArr.push(JSON.stringify(formDataArr[i]));
    }

    // clearing inputs
    firstName.value =
      lastName.value =
      email.value =
      newPassword.value =
      confirmPassword.value =
        ``;
    checkboxTaC.checked = false;

    // succesfully registered message
    const registered = document.createElement(`p`);
    registered.textContent = `account successfully registered!`;
    registered.style.color = `var(--red)`;
    registered.style.textTransform = `capitalize`;
    registerFormDiv.appendChild(registered);
  });
}

export function getFormDataArr() {
  return formDataArr;
}
