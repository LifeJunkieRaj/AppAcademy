/***********************************************************************
Write a function `mostFrequentLetter(string)` that will takes a
string as an argument and returns the character that appears the
most often. In case of a tie, you may return any of the characters.
The string will have at least one character.

***********************************************************************/

function mostFrequentLetter(string) {
    let strObj = {};
    let seenChars = [];
    let strArray = string.split("");
    let finalArray = [];
    let max = 0;
    strArray.forEach(el => {
      if (seenChars.includes(el)) {
        strObj[el]++;
      } else {
        strObj[el] = 1;
        seenChars.push(el);
      }
    });
    for (let key in strObj) {
      finalArray.push(strObj[key] + key);
    }
    for (let i = 0; i < finalArray.length; i++) {
      if (parseInt(finalArray[i]) > parseInt(max)) {
        max = finalArray[i];
      }
    }
    return max[1];
  }

console.log(mostFrequentLetter("apple")) // "p"
console.log(mostFrequentLetter("banana")) // "a"
console.log(mostFrequentLetter("What about a longer string?")) // " "

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = mostFrequentLetter;
