// First Vowel
// Write a function firstVowel(str) that takes in a string and returns the first vowel that appears sequentially in the string.

// let firstVowel = function(str) {
//     let vowels = "aeiou"
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (vowels.includes(char)) {
//             return char;
//         }
//     }
//     return null;
// }

let firstVowel = function(str) {
    let vowels = "aeiou"
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (vowels.includes(char)) {
            return char;
        }
    }
    return null;
}

console.log(firstVowel('battery')); // 'a'
console.log(firstVowel('tunnel')); // 'u'
console.log(firstVowel('dog')); // 'o'
console.log(firstVowel('conventional')); // 'o'
console.log(firstVowel('rhythm')); // null
