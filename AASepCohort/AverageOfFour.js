// The first step is to make function expression for averageOfFour
let averageOfFour = function (num1, num2, num3, num4) {
    let sum = num1 + num2 + num3 + num4;  //We have to define the variable sum to find the average later
    let average = sum / 4;  //We have to define the variable average in order to complete the main operation of averageOfFour
    return average;  //We have to return the combination of these variables once the arguments have been passed in to the parameters
}

console.log(averageOfFour(10, 10, 15, 5)); // => 10
console.log(averageOfFour(3, 10, 11, 4)); // => 7
console.log(averageOfFour(1, 2, 3, 4)); // => 2.5
