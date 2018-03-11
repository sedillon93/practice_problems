'use strict';

const replaceSpaces = (string) => {
  let tempArray = string.split(' ');
  let result = tempArray.join('%20');
  return result;
};

module.exports = replaceSpaces;
