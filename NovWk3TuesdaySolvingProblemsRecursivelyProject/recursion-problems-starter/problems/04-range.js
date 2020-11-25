/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/


let range = (start, end) => {
  if (end <= start) {
    return [];
  }
  return [start].concat(range(start + 1, end))
}
console.log(range(5, 5)) // []
console.log(range(4, 5)) // [4]
console.log(range(3, 5)) // [3, 4]
console.log(range(2, 5)) // [2, 3, 4]
console.log(range(1, 5)) // [1, 2, 3, 4]


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
