'use strict';

const compressString = (string) => {
  let result = '';
  let count = 1;

  for (let i = 0; i < string.length; i++){
    if(string[i] === string[i + 1]){
      count++;
    }else {
      result = result.concat(string[i]).concat(count);
      count = 1;
    }
  }

  if (result.length < string.length){
    return result;
  }else {
    return string;
  }
};

module.exports = compressString;
