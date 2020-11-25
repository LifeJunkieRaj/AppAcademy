// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

// function pigLatinWord(word) {
//   let vowels = "aeiou";

//   if (vowels.includes(word[0])) {
//     return word + "yay"
//   }

//   for (let i = 0; i < word.length; i++) {
//     let char = word[i];
//     if (vowels.includes(char)) {
//         let newFront = word.slice(0, i)
//         let newBack = word.slice(i)
//         return newBack + newFront + "ay";
//       }
//     }
// };
let pigLatinWord = function (word) {
    let vowels = "aeiou"

    if (vowels.includes(word[0])) {
        return word + "yay";
    }
    for (let index = 0; index < word.length; index++) {
        let char = word[index]
        if (vowels.includes(char)) {
            let newBack = word.slice(0, index);
            let newFront = word.slice(index);
            return newFront + newBack + "ay";
        }
    }
}


console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"
