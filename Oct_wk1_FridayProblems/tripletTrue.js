// Triplet True
// Write a function tripletTrue that accepts a string as an argument. The function should return a boolean indicating whether or not the the string contains three of the same character consecutively.

let tripletTrue = function(string) {
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (char === string[i + 1] && char === string[i + 2]) {
           return true;
        }
    }
    return false;
}

console.log(tripletTrue('caaabb'));        // true
console.log(tripletTrue('terrrrrible'));   // true
console.log(tripletTrue('runninggg'));     // true
console.log(tripletTrue('bootcamp'));      // false
console.log(tripletTrue('e'));             // false
