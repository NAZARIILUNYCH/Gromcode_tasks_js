/* eslint-disable no-unused-expressions */
export const manageClasses = () => {
  const classOne = document.querySelector('.list > .one').classList.add('selected');
  const classTwo = document.querySelector('.list > .two').classList.remove('selected');
  const classThree = document.querySelector('.list > .three').classList.toggle('three_done');
  const classFour = document.querySelector('.list > .some-class');

  classFour ? classFour.classList.add('another-class') : false;
};
