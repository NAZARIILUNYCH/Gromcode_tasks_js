const delay = ms =>
  new Promise(resolve => {
    setTimeout(() => resolve(console.log('DONE')), ms);
  });
