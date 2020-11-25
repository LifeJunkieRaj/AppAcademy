// Write a function `arrayConverter(array)` that will intake an
// array as an argument and returns an object representing the count of each
// value in the array. **Hint:** don't forget you can check if a key is present
// in an object by using `obj[key] === undefined`.

let arrayConverter = (array) => {
    let arrObject = {};
    //We need to set up an empty object to send our values and their counts back to as a key-value pair
    for (let i = 0; i < array.length; i++) {
        let val = array[i];
    //We set up a for loop (could be forEach as well) to iterate through the array and initialize a variable (val) to pull the value out of each indices
        if (arrObject[val] === undefined) {
            arrObject[val] = 1;
    //We set a conditional that each iterated value is checked as a key of the created arrObject and whether it exist here and if it does not we add it by adding that key-value pair to the arrObject which would be the key and it's value being set to one since this is the first time we've seen it.
        } else {
            arrObject[val]++
    //If it does exist, then we just up the count of the value in the key-value pair
        }
    }
    return arrObject;
}


console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
