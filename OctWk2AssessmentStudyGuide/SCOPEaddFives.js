// We've just covered how to write functions using arrow function syntax.
// Let's give some old functions a new flair by rewriting them using fat arrow syntax.

// Write a function `addFive` that accepts a number and will return that number
// plus 5. Write this function on a single line, and utilize a fat arrow function's
// ability to implicitly return by leaving out your own return statement.

let addFive = (num) => num += 5
//We created a function addFive with one parameter num which we then run as a function using big arrow syntax
//and we make that function take num and add five to it which quite literally is written as num = num + 5

let result1 = addFive(0); // returns 5
let result2 = addFive(10); // returns 15
let result3 = addFive(37); // returns 42
