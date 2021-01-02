/* eslint-disable no-unused-expressions */
const getDiff = (startDate, endDate) => {
  let diff;

  startDate < endDate
    ? (diff = new Date(endDate) - new Date(startDate))
    : (diff = new Date(startDate) - new Date(endDate));

  const seconds = new Date(diff).getSeconds();
  const minutes = new Date(diff).getMinutes();
  const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};
