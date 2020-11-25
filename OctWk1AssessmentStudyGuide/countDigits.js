// Count Digits
// Write a function, countDigits(str), that takes in a string and returns the number of numerical digits.

let countDigits = function(str) {
    let digits = "1234567890";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let num = str[i];
        if (digits.includes(num)) {
        count++
        }
    }
    return count;
}

console.log(countDigits("Tea for 2, 2 for tea")); // => 2
console.log(countDigits("l337 c0d3r")); // => 5
console.log(countDigits("July 4th, 1776")); // => 5
