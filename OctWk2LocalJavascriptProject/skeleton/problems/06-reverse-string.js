/******************************************************************************
Write a function reverseString(string) that takes in a hyphenated string and
returns a the hyphenated string reversed.

Examples:

reverseString("Go-to-the-store") => "store-the-to-Go"
reverseString("Jump,-jump-for-joy") => "joy-for-jump-Jump,"
*******************************************************************************/

function reverseString(string) {
  let reverseArr = [];
  let words = string.split("-")
  for (let i = words.length - 1; i >= 0; i--) {
      reverseArr.push(words[i])
  }
  let reversed = reverseArr.join("-");
  return reversed;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseString;
