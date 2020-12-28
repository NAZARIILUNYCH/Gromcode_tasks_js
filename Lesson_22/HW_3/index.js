const checkboxElem = document.querySelector('.task-status');
const taskStatus = () => {
  console.log(checkboxElem.checked);
};

checkboxElem.addEventListener('change', taskStatus);
