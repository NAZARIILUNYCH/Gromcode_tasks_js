// task 1
// input: array
// output: array
export function reverseArray(array) {
  let newArr = array.slice();
  
  if (Array.isArray(newArr)) {
    return newArr.reverse();
  }
  
  return null;
}


// task 2
export function withdraw(clients, balances, client, amount) {
  const clientIndex = clients.indexOf(client);
  
  if (balances[clientIndex] < amount) {
    return -1;
  }

  balances[clientIndex] -= amount;
  return balances[clientIndex];
}


// task 3
// input: object
// output: object
export function getAdults(obj) {
  const newObj = {...obj};
  
  // eslint-disable-next-line no-restricted-syntax
  for (const key in newObj) {
    if (newObj[key] < 18) {
      delete newObj[key];
    }
  }
  
  return newObj;
}
