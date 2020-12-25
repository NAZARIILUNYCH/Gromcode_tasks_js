export const setButton = buttonText => {
  const setButtonItem = document.querySelector('body');

  setButtonItem.innerHTML = `<button>${buttonText}</button>`;

  return setButtonItem;
};
