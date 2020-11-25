let rotateLeft = function(array, num) {
    for (let i = 0; i < num; i++) {
        let el = array.shift();
        array.push(el);
    }
}
//Unlike with rotate right, we are not trying to keep from mutating the original array.
//This means that we do not have to create a variable like "let copy = array.slice();"
//The reason is, is becasue we understand that "let copy = array.slice()" will create a copy of the array which we can then mutate.
//In this problem, they want us to use the rudimentary methods, arr#shift and arr#push which actually mutate the array.
//Since we didn't create a copy variable nor dow we return a copy after "array.push(el)" we get stored and mutated copy of the array,
//BUT we receive undefined because we did not return that mutated array.
//Hence the reason we see undefined for the first console.log of each invocation below.
//But are able to see the store and mutated array when we console.log the arr directly in the below invocations.

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(rotateLeft(arr, 2)); // undefined
console.log(arr); // [ 'c', 'd', 'e', 'a', 'b' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
console.log(rotateLeft(animals, 3)); // undefined
console.log(animals); // [ 'kangaroo', 'wombat', 'koala', 'opossum' ]
