export const createButton = buttonText => {
  const buttonItem = document.querySelector('body');
  const createButtonElem = buttonItem.createElement('button');

  createButtonElem.textContent = buttonText;
  buttonItem.append(createButtonElem);
};
