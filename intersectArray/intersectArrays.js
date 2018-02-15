`Write a function that will intersect two arrays`; //(find values common to both?)

const arrayIntersection = (array1, array2) => {
  let sharedValues = [];
  let tempObjectForMapping = {};
  for (let i = 0; i < array1.length; i++){
    tempObjectForMapping[array1[i]] = true;
  }
  for (let i = 0; i < array2.length; i++){
    if(tempObjectForMapping[array2[i]]){
      sharedValues.push(array2[i]);
    }
  }
  return sharedValues;
};

module.exports = arrayIntersection;
// // better version according to Vinicio- why?
// let betterIntersect = (a, b) => {
//   let found = new Set(a)
//   return b.reduce((result, value) => {
//     return found.has(value) ? [...result, value] : result
//   }, [])
// }
