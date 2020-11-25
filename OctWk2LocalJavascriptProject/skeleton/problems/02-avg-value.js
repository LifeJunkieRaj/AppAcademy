/***********************************************************************
Write a function `avgValue(array)` that takes in an array of numbers and
returns the average number.

Examples:

avgValue([10, 20]); // => 15
avgValue([2, 3, 7]); // => 4
avgValue([100, 60, 64]); // => 74.66666666666667
***********************************************************************/

function avgValue(array) {
  if(array.length === 0) {
    return null;
  }
  let sum = 0;
  array.forEach(function(num){
    sum += num
   })
   return sum/array.length
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = avgValue;
