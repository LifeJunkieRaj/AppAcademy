// Write a function `sumWithReduce(nums)` that takes in an array of numbers.
// The function should return the total sum of all numbers in the array.

// Solve this using Array's `reduce()` method.

let sumWithReduce = (nums) => {
    if (nums.length === 0) {
        return 0;
    //We check the length of the array and if it is empty we return null
    }
    return nums.reduce((acc, el) => (acc + el))
    //The #reduce method, which takes on an accumulator and a value and because we didn't specify our accumulator's starting point, the accumulator starts at the 0 index of the nums array and then takes on and sums the total of all the elements in the array and returns a sum of all numbers in the array using them up and leaving no array.  You can manipulate the #reduce method in a way that it doesn't directly get returned but gets copied and returns the sum of the copy leaving the original array untouched. This sum gets returned
}

console.log(sumWithReduce([10, 3, 5, 2])); // 20
console.log(sumWithReduce([])); // 0
