/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/

// I want to iterate over the string and get each character.
// I want to check if the character exists as a key in the object.
// If it doesn't, I want to create that key in the object.
// If it does exist, increment the count

let stringConverter = (string) => {
  let obj = {};
  string.split("").forEach(char => {
    if (char in obj) {
      obj[char]++
    } else {
      obj[char] = 1;
    }
  })
return obj;
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stringConverter;
