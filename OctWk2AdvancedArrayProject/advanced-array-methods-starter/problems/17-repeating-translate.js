/*
Write a function `repeatingTranslate` that accepts a sentence as an argument.
The function should translate the sentence according to the following rules:

- words that are shorter than 3 characters are unchanged
- words that are 3 characters or longer are translated according to the
  following rules:
  - if the word ends with a vowel, simply repeat the word twice (example:
    'like'->'likelike')
  - if the word ends with a non-vowel, repeat all letters that come after the
    word's last vowel, including the last vowel itself (example:
    'trash'->'trashash')

Note that if words are capitalized in the original sentence, they should remain
capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Can you reduce the problem into helper functions?

Examples:

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"

*/

// Plan

let repeatingTranslate = (sentence) => {
    // We need to initialize a variable that turns each string into an array
    let words = sentence.split(" ");
    // We meed to iterate through each word of the array with a Advanced Array Method (#map)
    // let newArray = words.map((word) => newArray.push(translate(word))
    let newArray = words.map(translate)
    return newArray.join(" ")
}
// For words bigger than three characters we need to use a helper function to:
let translate = (word) => {
    // See if a word ends with a vowel
    let vowels = "aeiou";
    if (word.length < 3) {
        // We neen to push the words that are three words or less to the empty array (newArray)
        return word;
    } else if (vowels.includes(word[word.length - 1])) {
        // Then push it to the newArray
        return word + word
    }
    for (let i = word.length - 1; i >= 0; i--) {
        let char = word[i]
        // If it does we repeate it twice
        if (vowels.includes(char)) {
            // It doesn't end in a vowel
            // repeat all letters from the last vowel onwards and add that to the end of the word (including the vowel itself)
            return word + word.slice(i);
            // Then push it to the the newArray
        }
    }
    // Join all the words in the newArray and return it
    return word
}


console.log(repeatingTranslate("we like to go running fast")); // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash")); // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish")); // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France")); // "herer familyily flewew to FranceFrance"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = repeatingTranslate;
} catch (e) {
    module.exports = null;
}
