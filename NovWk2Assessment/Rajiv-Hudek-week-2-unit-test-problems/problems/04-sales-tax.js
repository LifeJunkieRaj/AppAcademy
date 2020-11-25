/***********************************************************************
Write a function using fat arrow syntax, `salesTax` that takes in an arbitrary
number of arguments as prices, adds them up and returns a string containing the
sales tax with a dollar sign in front. Use a tax percentage of 9%.

Hint: Look up `toFixed()` on MDN

Examples:

salesTax(30, 70); // '$9.00'
salesTax(1.12, 2.23, 3.34, 4.45); // '$1.00'
salesTax(4.99, 9.99, 19.99); // '$3.15'
***********************************************************************/


let salesTax = (...prices) => {
    let total = prices.reduce((sum, num) => {
         return sum + num;
     })
     let totalTax = total * 0.09
     return "$" + totalTax.toFixed(2)
 }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = salesTax;
} catch(e) {
    module.exports = null;
}
