// Sum Numbers
// Write a function sumNums(nums) that takes in an array of numbers. The function should add all the numbers in the array and return the sum. You can assume that nums will not be empty.

// let sumNums = function(nums) {
//     let total = nums.reduce(function(sum, num){
//        return sum + num;
//     }, 0);
//     return total;
// }

let sumNums = function(nums) {
    sum = 0;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        sum += num;
    }
    return sum;
}

console.log(sumNums([2, 3, 6, 7])); // 18
console.log(sumNums([5, -4, 4, 2])); // 7
