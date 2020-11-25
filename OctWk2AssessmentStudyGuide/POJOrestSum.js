// Write a function named `restSum` that accepts all incoming parameters and sums them.

// **Hint**: Use rest parameter syntax!

let restSum = (...nums) => {
    let sum = 0
//Initialize sum variable to add each new number to it
    nums.forEach(num => {
        sum += num
//Iterate through each number with #forEach and add that number to sum
    })
//Return the total sum once all numbers have been added
    return sum;
}
console.log(restSum(3,5,6)); // => 14
console.log(restSum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // => 14
console.log(restSum(0)); // => 0
