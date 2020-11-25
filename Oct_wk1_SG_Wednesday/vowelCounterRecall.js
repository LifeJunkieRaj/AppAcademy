let countVowels = function(word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) {
            count += 1
        }

    }
    return count;
}


console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2
