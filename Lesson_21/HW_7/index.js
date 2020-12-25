export const createButton = buttonText => {
  const buttonItem = document.querySelector('body');
  const createButtonElem = document.createElement('button').append(`${buttonText}`);

  return createButtonElem;
};
