// Write a function `keyInObjectArray(objArray, keyString)` that takes in an array
// of objects as the first parameter and a string as the second. The
// `keyInObjectArray` function will return `true` if any of the objects contains
// the `keyString` as a key within them, and `false` if not.

let keyInObjectArray = (objArray, keyString) => {
    let keyFound = false;
    //We set a variable keyfinder to false
    objArray.forEach(function(obj){
    //We use array#forEach to iterate through the array of objects
      if (obj[keyString] !== undefined) {
    //We set a conditional to reassign our keyfound variable to true if the keyString argument is found in the array
          keyfound = true
      }
    })
    //One we've iterated through every key in the array we return the variable keyfound which returns whichever boolean is stored in it.
    return keyfound;
}



let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

console.log(keyInObjectArray(objArray, 'planet')); // => true
keyInObjectArray(objArray, 'age'); // => true
keyInObjectArray(objArray, 'food'); // => false
keyInObjectArray(objArray, 'animal'); // => false
