/* eslint-disable no-template-curly-in-string */
export const getSection = num =>
  document.querySelector(`span[data-number="${num}"]`).closest('.box').dataset.section;
