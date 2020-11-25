// Write a function `tripler(nums)` that takes in an array as an arg. The function
// should return a new array containing three times every number of the original
// array.

// Solve this using Array's `map()` method.

let tripler = (nums) => {
    return nums.map(num => num *= 3)
    //We return a #map method that takes on a parameter (nums) from the tripler function and uses a value (num) which it passes through an expression (in this case num *= 3 or num = num * 3) and returns a copy of the array with all the new modified values after being acted upon by the specified expression.  In this case we simply return each number of the array multiplied by 3.
}

console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]
