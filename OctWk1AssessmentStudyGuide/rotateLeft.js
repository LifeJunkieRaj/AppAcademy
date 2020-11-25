// Rotate Left
// Write a function rotateLeft(array, num) that takes in an array and a number as args. The function should rotate the elements of the array to the left num times, mutating the original array. The function should return undefined.

// Define this function using function expression syntax.

let rotateLeft = function(array, num) {
    let copy = array.slice();
    for (let i = 0; i < num; i++) {
        let el = copy.shift();
        copy.push(el);
    }
    return copy;
}

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(rotateLeft(arr, 2)); // undefined
console.log(arr); // [ 'c', 'd', 'e', 'a', 'b' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
console.log(rotateLeft(animals, 3)); // undefined
console.log(animals); // [ 'kangaroo', 'wombat', 'koala', 'opossum' ]
