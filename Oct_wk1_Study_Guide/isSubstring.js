function isSubstring(searchString, subString) {
    let lowsearchString = searchString.toLowerCase();
    let lowsubString = subString.toLowerCase();

    return lowsearchString.indexOf(lowsubString) !== -1;
    }


  console.log(isSubstring("The cat went to the store", "he cat went")); // => true
  console.log(isSubstring("Time to program", "time")); // => true
  console.log(isSubstring("Jump for joy", "joys")); // => false
