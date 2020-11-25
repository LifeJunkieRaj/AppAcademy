// Write a function `productWithReduce(nums)` that takes in an array of numbers.
// The function should return the total product of multiplying all numbers of the
// array together.

// You can assume that `nums` will not be an empty array.

// Solve this using Array's `reduce()` method.

let productWithReduce = (nums) => {
    return nums.reduce((acc, el) => (acc * el))
    //We run the #reduce method on the parameters nums from our productWithReduce function.  #Reduce will run a reducer on every index of an array.  #Reduce takes an accumulator (which needs to be set to a start value on the array in most cases) and one other value argument.  It will use the accumulator on the value argument.  In this case our accumulator multiplies itself against every value of the array. Note: in this function the accumulator start value is the value of the first index of the array since it was not assigned a start value. We then return the product of this.
}

console.log(productWithReduce([10, 3, 5, 2])); // 300
console.log(productWithReduce([4, 3])); // 12
