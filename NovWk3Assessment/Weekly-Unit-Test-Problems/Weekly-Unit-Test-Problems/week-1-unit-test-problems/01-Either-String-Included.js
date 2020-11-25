//Write a function named eitherStringIncluded(sentence, str1, str2) that accepts a sentence and two strings as arguments. The eitherStringIncluded function should return true if either str1 or str2 is found in the sentence, and false if neither is found.

function eitherStringIncluded(sentence, word1, word2) {
    let results1 = sentence.includes(word1);
    let results2 = sentence.includes(word2);

    if (results1 || results2) {
        return true
    }
    return false
}


console.log(eitherStringIncluded("how now brown cow?", "panther", "cow")); // true
console.log(eitherStringIncluded("Question?", "Answer", "?")); // true
console.log(eitherStringIncluded("I love programming", "apple", "potato")); // false
console.log(eitherStringIncluded("Dance party!", "?", "what")); // false
