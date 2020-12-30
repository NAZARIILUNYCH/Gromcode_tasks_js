const listElem = document.querySelector('.list');

const tasks = [
  { text: 'Buy milk', done: false, id: 'id1' },
  { text: 'Pick up Tom from airport', done: false, id: 'id2' },
  { text: 'Visit party', done: false, id: 'id3' },
  { text: 'Visit doctor', done: true, id: 'id4' },
  { text: 'Buy meat', done: true, id: 'id5' },
];

// render tasks
const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      listItemElem.dataset.id = id;
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.innerHTML = '';
  listElem.append(...tasksElems);
};

renderTasks(tasks);

// add tasks
const addTask = event => {
  const inputEl = document.querySelector('.task-input');

  if (inputEl.value === '') {
    return;
  }

  const task = {
    text: inputEl.value,
    done: false,
    id: `${tasks.length + 1}`,
  };

  tasks.push(task);

  renderTasks(tasks);

  inputEl.value = '';
};

const createBtn = document.querySelector('.create-task-btn');
createBtn.addEventListener('click', addTask);

// checkbox
const checkCheckbox = event => {
  const checkboxItem = event.target.classList.contains('list__item-checkbox');

  if (!checkboxItem) {
    return;
  }

  const checkboxElem = tasks.find(
    elem => elem.id === event.target.closest('.list__item').dataset.id,
  );

  checkboxElem.done = event.target.checked;

  renderTasks(tasks);
};

listElem.addEventListener('click', checkCheckbox);
