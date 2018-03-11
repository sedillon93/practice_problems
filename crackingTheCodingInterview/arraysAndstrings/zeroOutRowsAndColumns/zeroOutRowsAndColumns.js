'use strict';

const zeroOut = (matrix) => {
  let columnIndices = {};
  let rowIndices = {};
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
      if(matrix[i][j] === 0){
        columnIndices[j] = true;
        rowIndices[i] = true;
      }
    }
  }
  for (let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
      if(columnIndices[j] || rowIndices[i]){
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
};

module.exports = zeroOut;
