let oddNumbers = function(min, max) {
    oddArr = [];
    for (let i = min + 1; i < max; i++) {
        if (i % 2 !== 0) {
            oddArr.push(i);
        }

    }
    return oddArr;
}
console.log(oddNumbers(12, 17)); // [ 13, 15 ]
console.log(oddNumbers(9, 20)); // [ 11, 13, 15, 17, 19 ]
console.log(oddNumbers(-7, 3)); // [ -5, -3, -1, 1 ]
