function doubler(numbers) {
    newArray = [];
    for (let i = 0; i < numbers.length; i++) {
        let num1 = numbers[i];
        let num2 = num1 * 2;
        newArray = newArray.concat(num2);
    }
    return newArray;
}

// function doubler(numbers) {
//     let newArray = numbers.map(x => x * 2);
//     console.log(newArray);
// }

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]
