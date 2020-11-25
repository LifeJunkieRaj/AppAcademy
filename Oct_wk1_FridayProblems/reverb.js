// Reverb
// Write a function reverb that accepts a word as an argument. The function should return a new word where all letters that come after the last vowel (including the vowel itself) are repeated at the end of the word. If the value passed in is not a string, say someone passes in a number as an argument, then return null.

let reverb = function(word) {
    // I need to initialize a vowel string variable
    let vowels = "aeiouAEIOU";
    // We need to iterate through the string starting from the back in order to detect the first vowel
    for (let i = word.length - 1; i >= 0; i--) {
    // We need an indexer
        let char = word[i];
    // We need to identify vowels
    if (vowels.includes(char)) {
    // We need to conditionally return the whole word
    // We need to keep the rest of the word from the vowel (inclusive) to the end of the word
    // We need to add these together in the correct order and return it.
    return word + word.slice(i)
    }
    }
    return null;
}

console.log(reverb('running')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb(197393));    // null
