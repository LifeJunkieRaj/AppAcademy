// Write a function `greaterCallbackValue` that accepts a value and two callbacks
// as arguments. The function should pass the value to both callbacks and return the
// result of the callback that is greater.

let greaterCallbackValue = (val, cb1, cb2) => {
    if (cb1(val) < cb2(val)) {
        return cb2(val)
    } else if (
        cb2(val) < cb1(val)) {
            return cb1(val)
        }

}

let doubler = function (n) {
    return 2 * n;
}

let squarer = function (n) {
    return n * n;
}

console.log(greaterCallbackValue(5, doubler, squarer));     // 25
console.log(greaterCallbackValue(1, doubler, squarer));     // 2
console.log(greaterCallbackValue(9, Math.sqrt, doubler));   // 18
