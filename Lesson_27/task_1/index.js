/* eslint-disable array-callback-return */
localStorage.setItem('hobbies', JSON.stringify({ name: 'Tom' }));
localStorage.setItem('age', 17);

const getLocalStorageData = () =>
  Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }
    return {
      ...acc,
      [key]: newValue,
    };
  }, {});

console.log(getLocalStorageData());
