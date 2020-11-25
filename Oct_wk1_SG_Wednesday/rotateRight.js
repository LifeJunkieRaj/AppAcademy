let rotateRight = function(array, num) {
    let copy = array.slice();

    for (let i = 0; i < num; i++) {
        let el = copy.pop();
        copy.unshift(el);
    }

    return copy;
};

// let rotateRight = function(array, num) {
//     let copy = array.slice();
//     for (i = 0; i < num; i++) {
//         copy.unshift(copy.pop());
//     }
//     return copy;
// }

//NOTE: The variable "copy = array.slice()" literally createsa a copy of the array because the array#slice creates a copy.
//NOTE: The slice method, when it is left empty or without any args in its paranthesis, will literally copy the whole array.
//NOTE: You can gaive the array#slice method up to two arguments with the first argument telling it where to start in the array and the second argument tells you where to stop in the array and then this portion gets cut out of the array.
//NOte: This cut out portion becames a separate array that is mutated, but leaves the original array untouched.


let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]
