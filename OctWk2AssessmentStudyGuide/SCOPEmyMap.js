// Write a function using fat arrow syntax named `arrowMyMap` that accepts an array
// and a callback as arguments. The function will return an array of new elements
// obtained by calling the callback on each element of the array, passing in the
// element. Assign the below function to a variable using the const keyword.

// Do not use the built in Array#map - use Array#forEach for iteration.

const arrowMyMap = (array, cb) => {
    let arr = [];
    //We initialize a variable with an empty array to which we can return all elements that we ran the callback on
        for (let i = 0; i < array.length; i++) {
    //We create a for loop to iterate through the array
        const el = array[i];
    //We initialize a variable to index each value of the array
        arr.push(cb(el))
    //Every value in the array is run through the callback function and then pushed into the empty array we created
    }
    return arr;
    //We return our newly filled array that now has reconfigured values after being acted upon by the callback
}

let result1 = arrowMyMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

const yell = el => el.toUpperCase() + '!'

let result2 = arrowMyMap(['run', 'Forrest'], yell);
console.log(result2);   // [ 'RUN!', 'FORREST!' ]
