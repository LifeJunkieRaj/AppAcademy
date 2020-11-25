// Write a function `yeller(words)` that takes in an array of words.
// The function should return a new array where each element of the original array
// is yelled.

// Solve this using Array's `map()` method.

let yeller = (words) => {
    return words.map(word => word.toUpperCase() + "!")
    //We take the parameter words from the function yeller and funs #map on those words (array). In this case
    //we run the string#toUpperCase() on every word and then concatenate the outcome of that with a exclamation
    //point and return the modified modified array with it's modified strings.  The #map keeps a copy of the
    //original array
}

console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]
