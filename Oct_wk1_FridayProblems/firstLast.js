// First and Last
// Write a function firstAndLast that takes in an array of numbers and returns the sum of the first and last element if there is an even number of elements in the array. If there is an odd number of elements in the array, then the function should return the difference between the first and last elements of the array.

let firstAndLast = function(array) {
    for (let i = 0; i <= array.length; i++) {
        if (array.length % 2 !== 0) {
            return array[0] - array[array.length - 1]
        } else {return array[0] + array[array.length - 1]}
    }
}

console.log(firstAndLast([1, 2, 3, 4]));    // 5
console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
console.log(firstAndLast([12, 5]));         // 17
console.log(firstAndLast([12]));            // 0
