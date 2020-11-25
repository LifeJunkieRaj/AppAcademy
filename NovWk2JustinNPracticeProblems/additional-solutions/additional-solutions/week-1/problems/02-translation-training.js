/*
    Translation Training
    Write a function translationTraining(sentence) that accepts a sentence string and returns a new version of the sentence
    with the new words that alternate between having their first or last vowel removed.

    THe first word of the sentence should have its first vowel removed.
    The second word of the sentence should have its last vowel removed.
    The third word of the sentence should have its first vowel removed.
    The fourth word of the sentence should have its last vowel removed.

    A word without vowels should remain unchanged

    And so on. See examples below:

    console.log(translationTraining("What are you doing")); // prints "Wht ar yu dong"
    console.log(translationTraining("This is tedious")); // prints "Ths s tdious"
    console.log(translationTraining("Programming is fun")); // prints "Prgramming s fn"
    console.log(translationTraining("My food is getting cold")) // prints "My fod s gettng cld"

    Hint: Use helper methods.
*/

function translationTraining(sentence) {
    let newWords = [];
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (i % 2 === 0) {
            newWords.push(removeFirstVowel(words[i]));
        } else {
            newWords.push(removeLastVowel(words[i]));
        }
    }
    return newWords.join(' ');
}

function removeFirstVowel(word) {
    let vowels = 'aeiou';
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            return word.slice(0, i) + word.slice(i + 1);
        }
    }
    return word;
}

function removeLastVowel(word) {
    let vowels = 'aeiou';
    for (let i = word.length - 1; i >= 0; i--) {
        if (vowels.includes(word[i])) {
            return word.slice(0, i) + word.slice(i + 1);
        }
    }
    return word;
}

console.log(translationTraining("What are you doing")); // prints "Wht ar yu dong"
console.log(translationTraining("This is tedious")); // prints "Ths s tdious"
console.log(translationTraining("Programming is fun")); // prints "Prgramming s fn"
console.log(translationTraining("My food is getting cold")) // prints "My fod s gettng cld"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = translationTraining;
} catch (e) {
    module.exports = null;
}
