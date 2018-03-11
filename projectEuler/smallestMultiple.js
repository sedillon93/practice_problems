'use strict';

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder. What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const smallestMultiple = () => {
  let result = 0;
  let numberToCheck = 2520;

  while(result === 0){
    if(numberToCheck % 11 === 0 && numberToCheck % 12 === 0 && numberToCheck % 13 === 0 && numberToCheck % 14 === 0 && numberToCheck % 15 === 0 && numberToCheck % 16 === 0 && numberToCheck % 17 === 0 && numberToCheck % 18 === 0 && numberToCheck % 19 === 0 && numberToCheck % 20 === 0){
      result = numberToCheck;
    }else {
      numberToCheck++;
    }
  }
  return result;
};
