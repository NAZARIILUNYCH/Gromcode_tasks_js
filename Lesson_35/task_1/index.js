window.addEventListener('error', err => {
  console.error('error', err.message);
});

let userParsingResult;

const userData = {
  name: 'Nazar',
  age: 21,
  city: 'Lviv',
};

try {
  const user = JSON.parse(JSON.stringify(userData));
  console.log('User data: ', user);
  userParsingResult = 'success';
} catch (e) {
  userParsingResult = 'error';
} finally {
  console.log(`User parsing finished with ${userParsingResult}`);
}

let productParsingResult;

try {
  const product = JSON.parse(/* сломанный JSON c данными о продукте */);
  console.log('Product data: ', product);
  productParsingResult = 'success';
} catch (e) {
  productParsingResult = 'error';
} finally {
  console.log(`Product parsing finished with ${productParsingResult}`);
}
