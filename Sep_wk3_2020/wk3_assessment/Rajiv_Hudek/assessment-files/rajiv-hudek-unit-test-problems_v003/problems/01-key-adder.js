/***********************************************************************
Write a function `keyAdder(object, key, value)` that accepts an object, a string
to be set as a key in that object, and a value. When invoked the function should
assign the key and value arguments as a key value pair in the object argument
before returning the mutated object.

See below for examples


let cat = { name: 'Willie' };
keyAdder(cat, "color", "orange"); // => {name: "Willie", color: "orange"}
keyAdder(cat, "sitting", true); // => {name: "Willie", color: "orange", sitting: true}
console.log(cat); // {name: "Willie", color: "orange", sitting: true}


let dog = { name: 'Layla' };
keyAdder(dog, "fancy", false); // => {name: "Layla", fancy: false}
console.log(dog); // {name: "Layla", fancy: false}
***********************************************************************/
function keyAdder(obj, string, value) {
  let key = string;
  obj[key] = value;
  return obj;
}




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = keyAdder;
} catch (e) {
  module.exports = null;
}
