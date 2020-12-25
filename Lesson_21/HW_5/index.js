/* eslint-disable no-return-assign */
export const setButton = buttonText =>
  (document.querySelector('body').innerHTML = `<button>${buttonText}</button>`);
