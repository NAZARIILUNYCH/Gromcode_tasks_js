const textInput = document.querySelector('.text-input');
const textInputFunc = event => {
  console.log(event.target.value);
};

textInput.addEventListener('change', textInputFunc);
