// Write a function using fat arrow syntax, `arrowAvgValue(array)` that takes in an
// array of numbers and returns the average number. Assign the below function to a
// variable using the const keyword.

const arrowAvgValue = (array) => {
    let sum = array.reduce((el, sum = 0) => (sum += el));
    //We initialize a variable sum that holds the #reduce function which utilizes two parameters acc and el. The acc
    //is required to be set to a starting value and then all the values of el will be added (in this case) added to
    //the accumulator.
    let avg = sum / array.length;
    //We initialize a variable avg which is the sum found from the #reduce method divided by the length of the array
    return avg;
    //We return the answer put out by the variable avg.
}

console.log(arrowAvgValue([10, 20])); // => 15
// console.log(arrowAvgValue([2, 3, 7])); // => 4
// console.log(arrowAvgValue([100, 60, 64])); // => 74.66666666666667
