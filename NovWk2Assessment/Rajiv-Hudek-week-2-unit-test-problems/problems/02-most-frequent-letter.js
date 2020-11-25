/***********************************************************************
Write a function `mostFrequentLetter(string)` that will takes a
string as an argument and returns the character that appears the
most often. In case of a tie, you may return any of the characters.
The string will have at least one character.

Examples:

mostFrequentLetter("apple") // "p"
mostFrequentLetter("banana") // "a"
mostFrequentLetter("What about a longer string?") // " "
***********************************************************************/

function mostFrequentLetter(string) {
    let strObj = {};

    string.split("").forEach(char => {
        if(strObj[char] === undefined) {
            strObj[char] = 1;
        } else {
            strObj[char] += 1;
        }
    })
    let max = null
    let str = ""
    for (let key in strObj) {
        if(max <= strObj[key]) {
            max = strObj[key];
            str = key
        }
    }
    return str;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = mostFrequentLetter;
