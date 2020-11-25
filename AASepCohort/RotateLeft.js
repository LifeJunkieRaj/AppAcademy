// let rotateLeft = function(array, num) {
//     for (let i = 0; i < num; i++) {
//          let el = array.shift();
//          array.push(el);
//     }
// };

let rotateLeft = function (array, num) {
    for (let i = 0; i < num; i++) {
        let el = array.shift();
        array.push(el);
    }
};

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(rotateLeft(arr, 2)); // undefined
console.log(arr); // [ 'c', 'd', 'e', 'a', 'b' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
console.log(rotateLeft(animals, 3)); // undefined
console.log(animals); // [ 'kangaroo', 'wombat', 'koala', 'opossum' ]
