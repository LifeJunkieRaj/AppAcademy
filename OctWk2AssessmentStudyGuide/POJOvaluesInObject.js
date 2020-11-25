// Write a function called `valuesInObject(obj)` that takes in an object and returns
// an array of all the values within that Object.


// Do this once using using a `for...in` loop and once using `Object.values`.

let valuesInObject = (obj) => {
    let arr = [];

    for (let key in obj) {
        arr.push(obj[key]);
    //Remember that obj[key] just gives you the value of the key
    }
    return arr;
}

// let valuesInObject = (obj) => {
//     return Object.values(obj)
// }





let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
console.log(valuesInObject(animals)); // => ["Wolfie", "Jet", "Bilbo"]
console.log(valuesInObject(foods)); // => ["tart", "sour", "sweet"]
