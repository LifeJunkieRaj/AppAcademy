//Even Numbers Below (Debugging)
// Your friend is working on a function called evenNumbersBelow() which returns an array containing all even integers below than that number, ordered from lowest to highest. Zero is considered positive. Unfortunately, the code is not working correctly. Help them fix it!

function evenNumbersBelow(num) {
    let arr = [];
    for (let i = 0 ; i < num ; i += 2) {
        arr.push(i);
    }
    return arr;
}

console.log(evenNumbersBelow(0)); // []
console.log(evenNumbersBelow(6)); // [0, 2, 4]
console.log(evenNumbersBelow(7)); // [0, 2, 4, 6]
console.log(evenNumbersBelow(8)); // [0, 2, 4, 6]
