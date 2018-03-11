'use strict';

const isPermutation = (string1, string2) => {
  if(string1.length !== string2.length){
    return false;
  }
  let string1Object = {};
  let string2Object = {};

  for(let i = 0; i < string1.length; i++){
    if (string1Object[string1[i]]){
      string1Object[string1[i]] = 1;
    }else {
      string1Object[string1[i]] = string1Object[string1[i]]++;
    }
  }
  for(let i = 0; i < string2.length; i++){
    if (string2Object[string2[i]]){
      string2Object[string2[i]] = 1;
    }else {
      string2Object[string2[i]] = string2Object[string2[i]]++;
    }
  }

  let string1Keys = Object.keys(string1Object);
  for (let i = 0; i < string1Keys.length; i++){
    if (string1Object[string1Keys[i]] !== string2Object[string1Keys[i]]){
      return false;
    }
  }
  return true;
};

module.exports = isPermutation;
