let eitherStringIncluded = function (sentence, word1, word2) {
    return sentence.includes(word1) || sentence.includes(word2)
}

console.log(eitherStringIncluded("how now brown cow?", "panther", "cow")); //=> true
console.log(eitherStringIncluded("Question?", "Answer", "?")); //=> true
console.log(eitherStringIncluded("I love programming", "apple", "potato")); //=> false
console.log(eitherStringIncluded("Dance party!", "?", "what")); //=> false

//We make a function expression syntax with our parameters included
// On line 3 we used String#includes which always yields a Boolean
// We then return that string method with the string being the parameter sentence
// The other two parameters word1 and word2 are attached to two separate String#includes methods
// We split these two string methods with the Boolean operator || because we know that this method returns Boolean
// If either argument passed into the parameters proves to be true (included in the sentence argument) return operator returs true
// If neither arugment passed into the parameters proves to be true false is returned
