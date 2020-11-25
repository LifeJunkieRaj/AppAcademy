/*******************************************************************************
Write a function `lesserCallback` that accepts a value and two callbacks
as arguments. The function should pass the value to both callbacks and return the
result of the callback that is smaller.

Examples:

let doubler = function (n) {
    return 2 * n;
};

let squarer = function (n) {
    return n * n;
};

console.log(lesserCallback(5, doubler, squarer));     // 10
console.log(lesserCallback(1, doubler, squarer));     // 1
console.log(lesserCallback(9, Math.sqrt, doubler));   // 3
*******************************************************************************/

// Your code here





/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
    module.exports = lesserCallback;
} catch (e) {
    module.exports = null;
}
