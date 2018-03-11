'use strict';

// starting with first two values, add every other number generated

const sumEvenFibonacci = () => {
  let fibonacciSlice = [1,2];
  let sum = 2;
  let isEven = false;
  let newValue = 0;

  while(newValue <= 4000000){
    newValue = (fibonacciSlice[0] + fibonacciSlice[1]);
    if(newValue % 2 === 0){
      sum += newValue;
    }
    if(isEven){
      fibonacciSlice[1] = newValue;
      isEven = false;
    }else{
      fibonacciSlice[0] = newValue;
      isEven = true;
    }
  }

  return sum;
};
