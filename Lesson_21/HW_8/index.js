/* eslint-disable no-multi-assign */
export const finishList = () => {
  const listOfNum = document.querySelector('.list');
  const firstElem = document.createElement('li');
  const fourthElem = document.createElement('li');
  const sixthElem = document.createElement('li');
  const lastElem = document.createElement('li');
  const specialElem = document.querySelector('.special');

  firstElem.textContent = 1;
  listOfNum.prepend(firstElem);

  fourthElem.textContent = 4;
  specialElem.before(fourthElem);

  sixthElem.textContent = 6;
  specialElem.after(sixthElem);

  lastElem.textContent = 8;
  listOfNum.append(lastElem);
};

finishList();
