/* eslint-disable prefer-destructuring */
/* eslint-disable no-useless-return */
const counterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');

const onCounterChange = e => {
  if (!e.target.classList.contains('counter__button')) {
    return;
  }

  const action = e.target.dataset.action;

  const oldValue = Number(counterValueElem.textContent);

  const newValue = action === 'decrease' ? oldValue - 1 : oldValue + 1;
  counterValueElem.textContent = newValue;

  localStorage.setItem('counterValue', newValue);
};

counterElem.addEventListener('click', onCounterChange);

const onStorageChange = e => {
  counterValueElem.textContent = e.newValue;
};

window.addEventListener('storage', onStorageChange);

const onDocumentLoaded = e => {
  counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
};

document.addEventListener('DOMContentLoaded', onDocumentLoaded);
