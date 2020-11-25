// Sum Array
// Write a function sumArray(array) that takes in an array of numbers and returns the total sum of all the numbers.

let sumArray = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        count += num;
    }
    return count;
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30
