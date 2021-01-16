/* eslint-disable no-return-assign */
const baseUrl = 'https://60019cc208587400174db246.mockapi.io/api/v1/user';

const loginForm = document.querySelector('.login-form');
const formInput = document.querySelector('.form-input');
const submitBtn = document.querySelector('.submit-button');
const error = document.querySelector('.error-text');

loginForm.addEventListener('input', () => {
  if (loginForm.reportValidity()) {
    submitBtn.disabled = false;
  }
});

const createUserObj = () => {
  const email = document.getElementById('email').value;
  const user = document.getElementById('name').value;
  const password = document.getElementById('password').value;

  const userObj = {
    email,
    user,
    password,
  };

  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userObj),
  })
    .then(elem => elem.json())
    .then(elem => {
      alert(JSON.stringify(elem));
    })
    .catch((error.textContent = 'Failed to create user'));
};

loginForm.addEventListener('submit', createUserObj);
