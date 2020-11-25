// Write a function named `arrowRestSum` that accepts all incoming parameters
// and sums them. Assign the below function to a variable using the const keyword.

// **Hint**: Use rest parameter syntax!

const arrowRestSum = (...input) => {
    //We've created a function that takes any number of parameters using the rest parameter syntax
    let output = input.reduce((acc, el) => (acc += el));
    //We initialize a variable that runs the #reduce method which always has a acc and value parameter. In this case
    //the accumulator will take on all the values (el) passed in through the rest parameter syntax and give you
    //the total sum
    return output;
    //We return the sum
}

console.log(arrowRestSum(3,5,6)); // => 14
console.log(arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // => 45
console.log(arrowRestSum(0)); // => 0
