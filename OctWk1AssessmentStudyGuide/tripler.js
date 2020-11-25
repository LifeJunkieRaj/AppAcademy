// Tripler
// Write a function tripler(nums) that takes in an array as an arg. The function should return a new array containing three times every number of the original array. Solve this using Array#map.

let tripler = function(nums) {
    let newNums = nums.map(function(num) {
        return num * 3;
    })
    return newNums;
}

console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]
