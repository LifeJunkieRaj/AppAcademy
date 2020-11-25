// Vowel Counter
// Write a function, countVowels(word), that takes in a string word and returns the number of vowels in the word.
// Vowels are the letters "a", "e", "i", "o", "u".

function countVowels(word) {
    let count = 0;
    let vowels = "aeiou"
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (vowels.includes(char)) {
            count ++
        }
    }
    return count;
};

  console.log(countVowels("bootcamp")); // => 3
  console.log(countVowels("apple")); // => 2
  console.log(countVowels("pizza")); // => 2
