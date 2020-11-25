/***********************************************************************
Write a function called `dynamicAdder(num)`. The dynamicAdder function will
return a new function that will allow us to create new separate custom
adding functions.

Look below to see how this function is invoked:

const addTwo = dynamicAdder(2); // returns a function
addTwo(5); // returns 7

const addTen = dynamicAdder(10);
addTen(5); // returns 15

const addNinety = dynamicAdder(90);
addNinety(5); // returns 95


***********************************************************************/

let dynamicAdder = num => n => num + n



const addTwo = dynamicAdder(2); // returns a function
console.log(addTwo(5)); // returns 7

const addTen = dynamicAdder(10);
console.log(addTen(5)); // returns 15

const addNinety = dynamicAdder(90);
console.log(addNinety(5)); // returns 95







/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = dynamicAdder;