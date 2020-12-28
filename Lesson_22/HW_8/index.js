const checkboxItem = document.querySelector('.task-status');
const checkboxStatus = event => {
  console.log(event.target.checked);
};

checkboxItem.addEventListener('change', checkboxStatus);
