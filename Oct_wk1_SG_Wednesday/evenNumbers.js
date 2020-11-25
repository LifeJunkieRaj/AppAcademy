let evenNumbers = function(max) {
    evenArr = [];
    for (let i = 1; i < max; i++) {
        if (i % 2 === 0) {
            evenArr.push(i)
        }
    }
    return evenArr;
}

console.log(evenNumbers(7)); // [ 2, 4, 6 ]
console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]
