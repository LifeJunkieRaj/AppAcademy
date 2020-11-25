// function eitherStringIncluded(sentence, word1, word2) {
//     if (sentence.includes(word1) || sentence.includes(word2)) {
//         return true;
//     } else {return false;
//     }
// }
// Note: string#includes takes in a string and compares arguments against it
//       and if they are contained within the string it returns true and false
//       if not.

function eitherStringIncluded(sentence, word1, word2) {
    return (sentence.includes(word1)) || (sentence.includes(word2));
}

console.log(eitherStringIncluded("how now brown cow?", "panther", "cow")); //=> true
console.log(eitherStringIncluded("Question?", "Answer", "?")); //=> true
console.log(eitherStringIncluded("I love programming", "apple", "potato")); //=> false
console.log(eitherStringIncluded("Dance party!", "?", "what")); //=> false
