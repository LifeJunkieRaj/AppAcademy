/***********************************************************************
Write a function named `restSum` that accepts all incoming arguments and
returns their sum.

Examples:

restSum(3, 5, 6); // => 14
restSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 45
restSum(0); // => 0
***********************************************************************/

function restSum(...otherNums) {
  let sum = 0;
  otherNums.forEach(function(num){
    sum += num;
  })
  return sum;
}







/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = restSum;
} catch (e) {
  module.exports = null;
}
