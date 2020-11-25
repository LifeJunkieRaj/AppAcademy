function countVowels(word) {
    let vowels = 0
    for (let i = 0; i < word.length; i++) {
         char = word[i];
         if (
             char === "a" ||
             char === "e" ||
             char === "i" ||
             char === "o" ||
             char === "u") {
            vowels = vowels + 1;
         }
    }
    return vowels;
  };

  console.log(countVowels("bootcamp")); // => 3
  console.log(countVowels("apple")); // => 2
  console.log(countVowels("pizza")); // => 2
