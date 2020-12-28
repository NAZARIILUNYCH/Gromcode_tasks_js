const btnItem = document.querySelectorAll('.btn');
const handleClick = event => {
  console.log(event.target.textContent);
};

[...btnItem].map(el => el.addEventListener('click', handleClick));
