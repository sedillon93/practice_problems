'use strict';
// find the largest product of two 3-digit numbers which is a palindrome
// i.e. largest for two 2-digit would be 91 * 99 = 9009

const largestPalindrome = () => {
  let largestPalindrome = 0;

  for(let i = 100; i < 999; i++){
    for(let j = 100; j < 999; j++){
      let product = i * j;
      if(product > largestPalindrome && _isPalindrome(product)){
        largestPalindrome = product;
      }
    }
  }
  return largestPalindrome;
};

const _isPalindrome = (number) => {
  let stringifiedNumber = number.toString();
  for(let i = 0; i < Math.floor(stringifiedNumber.length / 2); i++){
    if(stringifiedNumber[i] !== stringifiedNumber[stringifiedNumber.length - (i + 1)]){
      return false;
    }
  }
  return true;
};
