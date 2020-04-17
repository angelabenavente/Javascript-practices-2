'use strict';

//Function to show/hide password

const passwordInputNode = document.querySelector('#password');
const showPasswordButtonNode = document.querySelector('#showPasswordBtn');

function showPassword() {
  console.log("hola");
  event.preventDefault();
  if (passwordInputNode.type == "password") {
    passwordInputNode.type = "text";
  } else {
    passwordInputNode.type = "password";
  }
};

showPasswordButtonNode.addEventListener('click', showPassword);