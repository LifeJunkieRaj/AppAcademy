// Has Three Vowels (*)
// Write a function hasThreeVowels that accepts a string as an argument. The function should return a boolean indicating whether or not the string contains at least three different vowels.

let hasThreeVowels = function(string) {
    let vowels = "aeiou";
    let vowCount = 0;
    let foundVows = "";
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (vowels.includes(char) && !foundVows.includes(char)) {
            vowCount++
            foundVows += char
        }
    }
    return vowCount >= 3;
}

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false
