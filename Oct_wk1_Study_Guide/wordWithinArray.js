function wordWithinArray(array, word) {
    if (array.indexOf(word) !== -1) {
        return true;
    } else {return false;}
}

console.log(
    wordWithinArray(["apple", "banana", "caramel", "chocolate"], "apple")
  ); //=> true

  console.log(wordWithinArray(
    ["dog", "cat", "camel", "bird"], "camel")
  ); //=> true

  console.log(
    wordWithinArray(["apple", "banana", "caramel", "chocolate"], "pineapple")
  ); //=> false

  console.log(wordWithinArray(
    ["dog", "cat", "camel", "bird"], "panther")
  ); //=> false
