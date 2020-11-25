// Write a function named `dynamicDivide(divisor)`. The dynamicDivide function will
// return a new function that when invoked will divide the argument number by the
// divisor.
// Look below to see how this function is invoked:


const dynamicDivide = (divisor) => {
    return (num) => num / divisor;
    //The function dynamicDivide has a parameter divisor that is utilized in the newly created function below it that
    //has a parameter num.  Our created function calls for the num parameter to be divided by the divisor from dynamicDivide and give
    //us the result which we return.
}


const halfer = dynamicDivide(2); // returns a function
console.log(halfer(20)); // returns 10

const divideByThree = dynamicDivide(3);
console.log(divideByThree(30)); // returns 10

const  divideByFive = dynamicDivide(5);
console.log(divideByFive(50)); // returns 10
