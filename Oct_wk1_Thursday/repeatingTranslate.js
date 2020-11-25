// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//
// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.

let vowelRepeater = function(word) {
    let vowels = "aeiou";
    for (let i = word.length - 1; i >= 0; i--) {
        let char = word[i]
        if ((word.length - 1 === i) && vowels.includes(char)) {
            return word + word
        } else if (vowels.includes(char)) {
            return word + word.slice(i);
        }
    }
}

let repeatingTranslate = function(sentence) {
    let words = sentence.split(" ");
    let arr = []
    for (let i = 0; i < words.length; i++) {
        let el = words[i];
        if (el.length < 3) {
            arr.push(el);
        } else {
            arr.push(vowelRepeater(el))
        }
    }
    return arr.join(" ")
}

// let repeatingTranslate = function(sentence) {
//     let words = sentence.split(' ');
//     let newWords = words.map(function(word) {
//         if (word.length < 3) {
//             return word;
//         } else {
//             return translateWord(word);
//         }
//     });
//     return newWords.join(' ');
// };


// let translateWord = function(word) {
//     let vowels = 'aeiou';
//     let lastChar = word[word.length - 1];
//     if (vowels.includes(lastChar)) {
//         return word + word;
//     }

//     for (let i = word.length - 1; i >= 0; i--) {
//         if (vowels.includes(word[i])) {
//             return word + word.slice(i);
//         }
//     }
// };


console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"
