const getTitleElement = () => {
  const titleElement = document.querySelector('.title');
  
  console.dir(titleElement);
};

const getInputElement = () => {
  const inputElem = document.querySelector('input[type="text"]');

  console.dir(inputElem);
};

getTitleElement();
getInputElement();
