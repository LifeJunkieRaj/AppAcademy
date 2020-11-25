// Write a function named `spreadItOut(array1, array2)` that accepts two arrays and
// uses *spread operator* syntax to return a single array.

let spreadItOut = (array1, array2) => {
    //Return both arrays in one array but written out with spread parameter syntax
    return [...array1, ...array2];
}

console.log(spreadItOut([3,5,6], [1,2,3])); // => [3,5,6,1,2,3];
console.log(spreadItOut([], [1,2,3])); // => 14;
console.log(spreadItOut(["apple", "banana"], [1,2,3])); // => ["apple", "banana", 1, 2, 3];
