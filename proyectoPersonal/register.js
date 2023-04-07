"use strict";

const registerForm = document.getElementById(`register-form`);
const newPassword = document.getElementById(`new-password`);
const confirmPassword = document.getElementById(`confirm-password`);

let formDataArr = [];

registerForm.addEventListener(`submit`, (e) => {
  e.preventDefault();

  if (newPassword.value !== confirmPassword.value) {
    alert(`passwords don't match`);
    return;
  }

  // saving the register form info into a json object
  const formData = new FormData(e.target);
  const formObj = Object.fromEntries(formData.entries());
  formDataArr.push(formObj);

  console.log(formDataArr);

  // setTimeout(() => {
  //   registerForm.submit();
  // }, 3000);
  registerForm.submit();
});
console.log(formDataArr);
