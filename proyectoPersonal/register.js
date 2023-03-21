"use strict";

const registerForm = document.querySelector(`.register-form`);
const newPassword = document.getElementById(`new-password`);
const confirmPassword = document.getElementById(`confirm-password`);

registerForm.addEventListener(`submit`, (e) => {
  e.preventDefault();

  if (newPassword.value !== confirmPassword.value) {
    alert(`passwords don't match`);
    return;
  }
  registerForm.submit();
});
