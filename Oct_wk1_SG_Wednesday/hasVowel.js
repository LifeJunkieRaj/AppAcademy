let hasVowel = function(str) {
    let vowels = "aeiou"
        for (let i = 0; i < str.length; i++) {
        let vowel = str[i]
        if (vowels.includes(vowel)) {
            return true;
        }
    }
    return false;
}

console.log(hasVowel('dog')); // true
console.log(hasVowel('conventional')); // true
console.log(hasVowel('rhythm')); // false
