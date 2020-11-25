// Write a function `myMap` that accepts an array and a callback as arguments.
// The function return an array of new elements obtained by calling the callback on
// each element of the array, passing in the element.

// Do not use the built in Array#map

let myMap = (array, cb) => {
    let arr = [];
    for( let i = 0; i < array.length; i++) {
        let el = array[i];
        arr.push(cb(el))
    }
    return arr;
}


let result1 = myMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

let result2 = myMap(['run', 'Forrest'], function (el) {
    return el.toUpperCase() + '!';
});
console.log(result2);   // [ 'RUN!', 'FORREST!' ]
