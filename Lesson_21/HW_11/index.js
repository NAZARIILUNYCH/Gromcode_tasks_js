export const squaredNumbers = () =>
  [...document.querySelectorAll('.number')].map(el =>
    el.setAttribute('data-squared-number', el.dataset.number ** 2),
  );
