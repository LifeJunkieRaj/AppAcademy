let pigLatinWord = function(word) {
    let vowels = "aeiou";

    if (vowels.includes(word[0])) {
        return word + "yay";
    }
    for (let i = 0; i < word.length; i++) {
        let char = word[i]; //This will recall the value of the given position in the argument word.
        let firstHalf = word.slice(0, i); //The slice method will slice from zero position to the first vowel we encounter due to the "vowels.includes(char)" we created below.
        let secondHalf = word.slice(i); //The slice method will slice off everything from the beginning of the word up to "i" which will be a vowel due to "vowels.includes(char)"
        if (vowels.includes(char)) { //This allows the index's value to be specific to the values of the variable vowels we created at the beginning of the code.
       console.log(char)
            return secondHalf + firstHalf + "ay";
        }
    }
}




console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"
