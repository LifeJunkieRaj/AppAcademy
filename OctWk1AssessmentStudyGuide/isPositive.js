// Is Positive Integer
// Write a function isPositiveInteger that takes in a string and returns a sentence stating if that string is a positive integer or not. A string is a positive integer if every character in that string is a valid digit. You may assume the string contains at least one character.

let isPositiveInteger = function(str) {
    let integer = "1234567890";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (!integer.includes(char)) {
            return str + " is not a positive integer"
        }
    }
    return str + " is a positive integer"
}

console.log(isPositiveInteger("123")); // "123 is a positive integer"
console.log(isPositiveInteger("hello")); // "hello is not a positive integer"
console.log(isPositiveInteger("-12")); // "-12 is not a positive integer"
console.log(isPositiveInteger("1.5")); // "1.5 is not a positive integer"
console.log(isPositiveInteger("101 Dalmations")); // "101 Dalmations is not a positive integer"
