let removeLastVowel = function(word) {
    let vowels = "aeiou"
    for (let i = word.length - 1; i >= 0; i--) {
        let lastVowel = word[i];
        if (vowels.includes(lastVowel)) {
            return word.slice(0, i) + word.slice(i + 1);
        }
    }
    return word;
}
console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'
