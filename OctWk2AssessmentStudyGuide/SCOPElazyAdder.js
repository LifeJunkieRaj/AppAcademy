// Write a function named: lazyAdder(firstNum). The lazyAdder function will
// accept a number and return a function. When the function returned by lazyAdder
// is invoked it will again accept a number, (secondNum), and then return a function.
// When the last mentioned function is invoked with a number, (thirdNum), it will
// FINALLY return a number. See below for examples!

let lazyAdder = (numOne) => (numTwo) => (numThree) => numOne + numTwo + numThree
//We create a function lazyAdder with a number (numOne) as a parameter and that function takes on a new function which
//takes on a new parameter (numTwo).  This function then takes on a new function that takes on a new parameter
//(numThree). This function then scope chains to all the parameters to then add them togeter and return a sum.

let firstAdd = lazyAdder(1);
let secondAdd = firstAdd(2);
let sum = secondAdd(3);
console.log(sum); // prints 6


let func1 = lazyAdder(10);
let func2 = func1(20);
let total = func2(3);
console.log(total); // prints 33
