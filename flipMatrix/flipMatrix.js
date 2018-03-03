'use strict';

/* flip a matrix 90 degress clockwises
*assuming all inner arrays are the same length
[ [q,w,e,r,t],[f,g,h,j,k],[z,x,c,v,b],[a,b,c,d,e],[y,u,i,o,p] ]

grab all the first elements of each array starting with the last array moving up- make those the new first row
move to the right in each array until you get to the last element
*/

const flipMatrix = (matrix) => {
  let results = [];
  for(let i = 0; i < matrix[0].length; i++){
    let newRow = [];
    for(let j = 1; j <= matrix.length; j++){
      newRow.push(matrix[matrix.length - j][i]);
    }
    results.push(newRow);
  }
  return results;
};
