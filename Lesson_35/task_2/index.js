const successRequest = Promise.resolve({ name: 'Tom' });

successRequest
  .then(data => {
    console.log(dat);
  })
  .catch(error => {
    console.error('onError1', 'Error with data');
  });

const failRequest = Promise.reject(new Error('Something went wrong'));

failRequest
  .catch(error => {
    // console.error('onError2', error.message);
    throw new Error(error);
    // (2)
  })
  .then(data => {
    console.log('onSuccess2', data);
  })
  .catch(error => {
    console.error('onError3', 'Server error');
  });
