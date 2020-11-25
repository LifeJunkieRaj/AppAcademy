// Write a function `longWords(words)` that takes in an array of words.
// The function should return an array containing only the words that are longer
// than 5 characters.

// Solve this using Array's `filter()` method.

let longWords = (words) => {
    //We createa  function longWords with a parameter words
    return words.filter(word => word.length > 5)
    //We use the #filter method to iterate over every index of the words array and filter out whatever indices don't pass the function we run on them are left out and we return a new array (or a modified copy leaving the original array untouched) with the remaining indices that passed the function.  In this case only strins with more than five letters were returned in the new array.
}

console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]
