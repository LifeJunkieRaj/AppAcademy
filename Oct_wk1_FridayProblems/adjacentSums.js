// Adjacent Sums
// Write a function nextSums that accepts an array of numbers as an argument. The function should return a new array containing the sum of the elements that are next to each other in the input array.

let nextSums = function(array) {
    let stupidArr = [];
    for (let i = 0; i < array.length - 1; i++) {
        let num1 = array[i];
        let num2 = array[i + 1]
        stupidArr.push(num1 + num2)
    }
    return stupidArr;
}

console.log(nextSums([3, 8, 7, 1]));        // [ 11, 15, 8 ]
console.log(nextSums([10, 5, 4, 3, 9]));    // [ 15, 9, 7, 12 ]
console.log(nextSums([2, -3, 3]));          // [-1, 0]
