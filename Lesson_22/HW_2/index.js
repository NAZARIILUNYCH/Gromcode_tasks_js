const textInput = document.querySelector('.text-input');
const textInputFunc = () => {
  console.log(textInput.value);
};

textInput.addEventListener('change', textInputFunc);
