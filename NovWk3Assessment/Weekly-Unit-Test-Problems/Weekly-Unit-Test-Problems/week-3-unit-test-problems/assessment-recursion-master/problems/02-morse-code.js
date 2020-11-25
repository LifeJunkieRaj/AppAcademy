/***********************************************************************
Write a function `morseCode` that takes an array containing a series
of either 'dot' or 'dash' strings. Your function should `console.log`
each string in order, followed by a pause of 100ms after each `dot`
and 300ms after each `dash`.


Example:

let code = ['dot', 'dash', 'dot'];

morseCode(code);
// print 'dot'
// pause for 100ms
// print 'dash'
// pause for 300ms
// print 'dot'
// pause for 100ms

***********************************************************************/

function morseCode(code) {
  code.forEach(el => {
    if (el === "dot") {
      setTimeout(() => {}, 100)
      console.log("dot")
    } else {
      setTimeout(() => {}, 300)
      console.log("dash")
    }
  })
}

let code = ['dot', 'dash', 'dot'];

console.log(morseCode(code));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = morseCode;
} catch {
  module.exports = null;
}
