// String Included
// Write a function named eitherStringIncluded(sentence, word1, word2) that accepts a sentence and two words as arguments. The eitherStringIncluded function should return true if either word1 or word2 is found in the sentence, and false if neither is found.
// Hint: the String#includes method will return true or false if a given string is included in another string.

// let eitherStringIncluded = function(sentence, word1, word2) {
//     for (let i = 0; i < sentence.length; i++) {
//         if ((sentence.includes(word1)) || (sentence.includes(word2))) {
//             return true;
//         }
//     }
//     return false;
// }

let eitherStringIncluded = function(sentence, word1, word2) {
    for (let i = 0; i < sentence.length; i++) {
        if (sentence.includes(word1) || (sentence.includes(word2))) {
            return true;
        }
    }
    return false;
}

console.log(eitherStringIncluded("how now brown cow?", "panther", "cow")); //=> true
console.log(eitherStringIncluded("Question?", "Answer", "?")); //=> true
console.log(eitherStringIncluded("I love programming", "apple", "potato")); //=> false
console.log(eitherStringIncluded("Dance party!", "?", "what")); //=> false
