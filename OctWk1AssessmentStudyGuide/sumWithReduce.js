// Sum With Reduce
// Write a function sumWithReduce(nums) that takes in an array of numbers. The function should return the total sum of all numbers in the array. Solve this using Array#reduce.

let sumWithReduce = function(nums) {
    let total = nums.reduce(function(sum, num){
        return sum + num;
    }, 0);
    return total;
}

console.log(sumWithReduce([10, 3, 5, 2])); // 20
console.log(sumWithReduce([])); // 0
