/***********************************************************************
Write a function `stringConverter(string)` that will takes a
string as an argument and returns an object containing the count of
each character in the string.

Examples:

stringConverter("apple") // => {a: 1, p: 2, l: 1, e: 1}
stringConverter("banana") // => {b: 1, a: 3, n: 2}
stringConverter("raccoon") // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/

function stringConverter(string) {
  newObject = {};

  for (let i = 0; i < string.length; i++) {
    let nowLetter = string[i];
    if (newObject[nowLetter] === undefined) {
      newObject[nowLetter] = 1;
      } else {
        newObject[nowLetter] += 1
      }
  }
  return newObject;
}




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
	module.exports = stringConverter;
} catch (e) {
  module.exports = null;
}
