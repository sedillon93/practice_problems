'use strict';
/*
  find the greatest sum of X numbers in an NxN matrix
  i.e. given 6x6 array and x = 3, find the greatest sum of 3 numbers in the matrix. sum horizontal, vertical, and diagonal directions
*/
/*
  find verticalSum, horizontalSum, and diagonalSum; save the biggest one
  verticalSum : add up the numbers at index i for X arrays
  horizontalSum : add up each number in same array for X indices
  diagonalSum : add up each number + number at index+1 & array+1 for X times
*/

const greatestMatrixSum = (matrix, x) => {
  let greatestSumFound = 0;

  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[0].length; j++){
      let verticalSum = 0;
      let horizontalSum = 0;
      let diagonalSum = 0;
      let largestThisRound = 0;
      for(let h = 0; h < x; h++){
        if(matrix[h][j] !== undefined){
          verticalSum += matrix[h][j];
        }else {
          verticalSum = null;
        }if(matrix[i][h] !== undefined){
          horizontalSum += matrix[i][h];
        }else {
          horizontalSum = null;
        }if (matrix[h][h] !== undefined){
          diagonalSum += matrix[h][h];
        }else {
          diagonalSum = null;
        }
      }
      if(horizontalSum || verticalSum || diagonalSum){
        largestThisRound = Math.max(verticalSum, horizontalSum, diagonalSum);
      }
      if(largestThisRound > greatestSumFound){
        greatestSumFound = largestThisRound;
      }
    }
  }

  return greatestSumFound;
};

module.exports = greatestMatrixSum;
