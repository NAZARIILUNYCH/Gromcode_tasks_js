const clickMeBtn = document.querySelector('.single-use-btn');
const clickedBtn = () => {
  console.log('licked');
  clickMeBtn.removeEventListener('click', clickedBtn);
};

clickMeBtn.addEventListener('click', clickedBtn);
