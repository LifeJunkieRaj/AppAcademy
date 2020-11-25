/*

Write a function `twoDimensionalProduct(array)` that takes in a 2D array of
numbers as an argument. The function should return the total product of all
numbers multiplied together.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:


let arr1 = [
  [6, 4],
  [5],
  [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
  [11, 4],
  [2]
];
console.log(twoDimensionalProduct(arr2)); // 88

*/

// Plan:
let twoDimensionalProduct = (arr) => {
// Initialize a variable that is an initial product for forEach to multiply with
let finalProduct = 1;
// Start a method that allows us to iterate over each array in the array (#forEach)
  arr.forEach((array) => {
  // Create a function within that #forEach that will take the value of each index and multiply by the next index value
  finalProduct *= array.reduce(reducer)
})
  // return the the product of all indices of the 2D Array
return finalProduct;
}

let reducer = (num1, num2) => {
  return num1 * num2
}

let arr1 = [
  [6, 4],
  [5],
  [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = twoDimensionalProduct;
} catch (e) {
    module.exports = null;
}
