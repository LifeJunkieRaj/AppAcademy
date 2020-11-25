/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

let duplicateCharMinCount = (string, minCount) => {
  let obj = {};
  let arr = [];

  string.split("").forEach(el => {
      if(obj[el] === undefined) {
        obj[el] = 1;
      } else {
        obj[el] += 1;
      }
  })
  for (let key in obj) {
      if (obj[key] >= minCount) {
          arr.push(key)
      }
  }
  return arr;
}

console.log(duplicateCharMinCount("apple", 2)) // ["p"]
console.log(duplicateCharMinCount("banana", 2)) // ["a", "n"]
console.log(duplicateCharMinCount("What about a longer string?", 3)) // ["a", "t", " "]
















// function duplicateCharMinCount(string, minCount) {
// 	let newArr = [];
// 		for (let i = 0; i <= string.length; i++) {
// 		const char = string[i];
// 		if (newArr[char]) {
// 			newArr[char]++
// 		} else {
// 			newArr[char] = 1
// 		}
// 	}
// 	const arrLetters = Object.key(count)
// 	const arrLetters.filter((letter) => count[letter] >= minCount)
// }



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
