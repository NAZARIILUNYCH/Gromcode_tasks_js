/* eslint-disable no-plusplus */
const pinger = (num, period) => {
  let i = num;
  console.log('Ping');
  const interval = setInterval(() => {
    if (--i > 0) {
      console.log('Ping');
    } else {
      clearInterval(interval);
    }
  }, period);
};

pinger(4, 1000);