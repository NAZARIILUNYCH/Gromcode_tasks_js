/* eslint-disable no-return-assign */
const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';
const newArr = [];

const getTasksList = url =>
  fetch(`${url}`)
    .then(task => task.json())
    .then(taskElem =>
      taskElem.forEach(element => {
        newArr.push(element);
      }),
    );

console.log(newArr);
// const getTaskById = taskId => console.log(newArr);

getTasksList(baseUrl);
// getTaskById('10');
