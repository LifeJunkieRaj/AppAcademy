// let removeLastVowel = function(word) {
//     let vowels = "aeiou";

//     for(let i = word.length - 1; i >= 0; i--) {
//        let char = word[i];
//        if (vowels.includes(char)) {
//            return word.slice(0, i) + word.slice(i + 1);
//        }
//     }

//    return word;
//  };
let removeLastVowel = function (word) {
    let vowels = "aeiou";
    for (let index = word.length - 1; index >= 0; index--) {
        let letter = word[index];
        if (vowels.includes(letter)) {
            let beforeFirstVowel = word.slice(0, index);
            let afterFirstVowel = word.slice(index + 1);
            return beforeFirstVowel + afterFirstVowel;
        }

    }
    return word;
};

console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'
