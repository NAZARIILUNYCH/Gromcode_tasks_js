const paginationList = document.querySelectorAll('.pagination__page');
const handleClick = event => {
  console.log(event.target.dataset.pageNumber);
};

[...paginationList].map(el => el.addEventListener('click', handleClick));
