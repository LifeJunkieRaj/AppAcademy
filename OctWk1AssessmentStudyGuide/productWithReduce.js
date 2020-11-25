// Product With Reduce
// Write a function productWithReduce(nums) that takes in an array of numbers. The function should return the total product of multiplying all numbers of the array together. You can assume that nums will not be an empty array. Solve this using Array#reduce.

let productWithReduce = function(nums) {
    return nums.reduce(function(product, num){
        return product * num;
    });
}

console.log(productWithReduce([10, 3, 5, 2])); // 300
console.log(productWithReduce([4, 3])); // 12
