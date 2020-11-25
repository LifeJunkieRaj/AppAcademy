// Double Sequence
// Write a function doubleSequence that accepts a base and a length as arguments. The function should return an array representing a sequence that contains "length" elements. The first element of the sequence is always the "base", the subsequent elements can be generated by doubling the previous element of the sequence.

// let doubleSequence = function(base, length) {
// if (length === 0) {
//     return [];
// }
//     let seq = [base];
//     while (seq.length < length) {
//         let last = seq[seq.length - 1];
//         let next = last * 2;
//         seq.push(next);
//     }

//     return seq;
// };


// Plan
// We have a function that takes in a base and length as parameters
// We need to set a conditional to return an empty array if the length is zero
// We need to set a loop that iterates till we have created as many elements as the length
// We need to initialize a variable to muliply the base times 2 every iteration
// We need to return the array with all the elements


let doubleSequence = function(base, length) {
    if(length === 0) {
        return [];
    }

    let first = [base];
    for (let i = 1; i < length; i++) {
        base *= 2;
        first.push(base)
    }
    return first;
}

console.log(doubleSequence(7, 3));  // [7, 14, 28]
console.log(doubleSequence(3, 5));  // [3, 6, 12, 24, 48]
console.log(doubleSequence(5, 3));  // [5, 10, 20]
console.log(doubleSequence(5, 4));  // [5, 10, 20, 40]
console.log(doubleSequence(5, 0));  // [ ]