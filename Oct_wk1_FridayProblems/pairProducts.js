// Pair Product
// Write a function pairProduct that accepts an array of numbers and a product as arguments. The function should return a boolean indicating whether or not a pair of distinct elements in the array result in the product when multiplied together. You may assume that the input array contains unique elements.

let pairProduct = function(array, product) {
    // We need to scan through an array or iterate if you will
    for (let i = 0; i <= array.length; i++) {
    // We need to scan through the array at the same time as the first loop to compare elements
            // let subArray = array[i];
        for (let j = 0; j <= array.length; j++) {
    // We need to make a variable that takes each invidivual pair so we can compare it to the product
            let num1 = array[i]
            let num2 = array[j]
    // We need to compare the product of these to see if they equal our given argument (product)
            if ((num1 * num2) === product) {
                return true;
            }
        }
    }
    return false;
}

console.log(pairProduct([4, 2, 5, 8], 16))    // true
console.log(pairProduct([8, 1, 9, 3], 8))     // true
console.log(pairProduct([3, 4], 12))          // true
console.log(pairProduct([3, 4, 6, 2, 5], 12)) // true
console.log(pairProduct([4, 2, 5, 7], 16))    // false
console.log(pairProduct([8, 4, 9, 3], 8))     // false
console.log(pairProduct([3], 12))             // false
