/* eslint-disable no-param-reassign */
export const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'My photo');
  imgElem.src = imgSrc;
  const containerElem = document.querySelector('.page');
  containerElem.append(imgElem);

  const onImageLoaded = () => {
    callback(null, imgElem);
  };

  imgElem.addEventListener('load', onImageLoaded);
  imgElem.addEventListener('error', () => callback('Image load is failed...'));
};

// callack example
const onImageLoaded = (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  const { width, height } = data;
  const sizeElem = document.querySelector('.image-size');
  sizeElem.textContent = `${width} x ${height}`;
};
