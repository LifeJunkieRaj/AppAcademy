/***********************************************************************
Write a function `doesKeyExist(obj, key)` that takes in an object and a
key and returns true if the key is inside the object and false if the
key is not inside the object.

Examples:

let obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
doesKeyExist(obj1, 'course'); // => true
doesKeyExist(obj1, 'name'); // => false

let obj2 = {name: 'Fido', color: 'brown'}
doesKeyExist(obj2, 'course'); // => false
doesKeyExist(obj2, 'name'); // => true
***********************************************************************/

function doesKeyExist(obj, key) {
 return obj[key] !== undefined;
}




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = doesKeyExist;
} catch (e) {
  module.exports = null;
}
