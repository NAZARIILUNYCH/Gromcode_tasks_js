/* eslint-disable no-return-assign */
const baseUrl = 'https://60019cc208587400174db246.mockapi.io/api/v1/user';

const login = document.querySelector('.login-form');
const formInput = document.querySelector('.form-input');
const submitBtn = document.querySelector('.submit-button');
const error = document.querySelector('.error-text');

login.addEventListener('input', () => {
  if (login.reportValidity()) {
    submitBtn.disabled = false;
  }
});

const createUserObj = elem => {
  const formData = [...new FormData(login)].reduce(
    (acc, [key, value]) => ({ ...acc, [key]: value }),
    {},
  );

  elem.preventDefault();

  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  })
    .then(element => element.json())
    .then(formField => formField.reset())
    .then(element => {
      alert(JSON.stringify(element));
    })
    .catch((error.textContent = 'Failed to create user'));
};

login.addEventListener('submit', createUserObj);
