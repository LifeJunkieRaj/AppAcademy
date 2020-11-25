//Write a function pigLatinWord that takes in a word string and translates the word into Pig Latin. For words that start with a vowel, add 'yay' to the end of the word. For words that start with a non-vowel, move all letters that come before the first vowel to the end of the word then add 'ay'. Vowels are the letters 'a', 'e', 'i', 'o', or 'u'.

function pigLatinWord(str) {
    let vowels = "aeiou";

    if (vowels.includes(str[0])) {
        return str + "yay";
    }

    for (let i = 0; i < str.length; i++) {
        let firstLet = str[i]

        if (vowels.includes(firstLet)) {
            let newStr = str.slice(i);
            let newStr2 = str.slice(0, i);
            return newStr + newStr2 + "ay"
        }
    } return str
}

console.log(pigLatinWord("apple")); // "appleyay"
console.log(pigLatinWord("eat")); // "eatyay"
console.log(pigLatinWord("banana")); // "ananabay"
console.log(pigLatinWord("trash")); // "ashtray"
