/***********************************************************************
Examples:

let arr = [1, 2, 3];
let duped = deepDup(arr); // [1, 2, 3];
arr === duped // false

arr = [1, [2, [3]]];
duped = deepDup(arr); // [1, [2, [3]]]
arr === duped // false
arr[1] === duped[1] // false
arr[1][1] === duped[1][1] // false
***********************************************************************/

let deepDup = (arr) => {
  let newArray = [];
  for (let el of arr) {
    if (Array.isArray(el)) {
      newArray.push(deepDup(el));
    } else newArray.push(el);
  }
  return newArray;
}

arr = [1, [2, [3]]];
duped = deepDup(arr); // [1, [2, [3]]]
console.log(arr === duped) // false
console.log(arr[1] === duped[1]) // false
console.log(arr[1][1] === duped[1][1]) // false

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = deepDup;
} catch (e) {
  module.exports = null;
}
