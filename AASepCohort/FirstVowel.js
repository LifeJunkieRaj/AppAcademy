// let firstVowel = function(str) {
//     let vowels = "aeiou";

//     for (let i = 0; i < str.length; i++) {
//          let char = str[i];
//          if (vowels.includes(char)) {
//              return char;
//          }
//     }

//     return null;
// }
let firstVowel = function (str) {
    let vowels = "aeiou";
    for (index = 0; index < str.length; index++) {
        let char = str[index]
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
