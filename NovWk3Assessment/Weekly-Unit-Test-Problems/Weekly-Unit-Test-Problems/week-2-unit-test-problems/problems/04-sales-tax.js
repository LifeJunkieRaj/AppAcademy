/***********************************************************************
Write a function using fat arrow syntax, `salesTax` that takes in an arbitrary
number of arguments as prices, adds them up and returns a string containing the
sales tax with a dollar sign in front.

Hint: Look up `toFixed()` on MDN


***********************************************************************/

let salesTax = (...amount) => {
    let sum = (accum, ele) => accum + ele

    let total = amount.reduce(sum)
    let tax = total * .09

    return "$" + Number.parseFloat(tax).toFixed(2)
}

console.log(salesTax(30, 70)); // '$9.00'
console.log(salesTax(1.12, 2.23, 3.34, 4.45)); // '$1.00'
console.log(salesTax(4.99, 9.99, 19.99)); // '$3.15'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = salesTax;
} catch (e) {
    module.exports = null;
}
