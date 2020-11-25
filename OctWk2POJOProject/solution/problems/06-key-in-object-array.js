/***********************************************************************
Write a function `console.log(keyInObjectArray(objArray, keyString)` that takes in an array of
objects as the first parameter and a string as the second. The `console.log(keyInObjectArray`
will return `true` if any of the objects contains the `keyString` as a key within them, and
`false` if not.


Examples:

***********************************************************************/

function keyInObjectArray(objArray, keyString) {
let keyFound = false;
  objArray.forEach(obj => {
    for (let str in obj) {
      if (str.indexOf(keyString) > -1) {
          keyFound = true;
      }
    }
  })
  return keyFound;
}

let objArray = [{
    name: "Rupert"
  },
  {
    age: 42
  },
  {
    planet: "Earth",
    system: "Milky Way"
  }
];

console.log(keyInObjectArray(objArray, 'planet')); // => true
console.log(keyInObjectArray(objArray, 'age')); // => true
console.log(keyInObjectArray(objArray, 'food')); // => false
console.log(keyInObjectArray(objArray, 'animal')); // => false

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyInObjectArray;
