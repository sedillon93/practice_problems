'use strict';

const allUniqueChars = (string) => {
  // if I can't use additional data structures
  // for (let i = 0; i < string.length; i++){
  //   for (let j = i + 1; j < string.length; j++){
  //     if (string[i] === string[j]){
  //       return false;
  //     }
  //   }
  // }

  // if additional data structures are allowed
  let stringAsObject = {};
  for(let i = 0; i < string.length; i++){
    if(!stringAsObject[string[i]]){
      stringAsObject[string[i]] = true;
    }else {
      return false;
    }
  }
  return true;
};

module.exports = allUniqueChars;
