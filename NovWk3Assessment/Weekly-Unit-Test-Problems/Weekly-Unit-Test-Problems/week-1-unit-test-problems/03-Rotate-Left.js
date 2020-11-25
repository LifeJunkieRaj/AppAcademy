//Write a function rotateLeft(array, num) that takes in an array and a number as args. The function should rotate the elements of the array to the left num times, mutating the original array. The function should return no value (undefined).

// Define this function using function expression syntax.

function rotateLeft(array, num) {
    debugger
// return () => {
    for (let i = 0; i < num; i++) {
        let subArray = array.shift();
        array.push(subArray);
    }

}

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(rotateLeft(arr, 2)); // undefined
console.log(arr); // [ 'c', 'd', 'e', 'a', 'b' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
console.log(rotateLeft(animals, 3)); // undefined
console.log(animals); // [ 'kangaroo', 'wombat', 'koala', 'opossum' ]
