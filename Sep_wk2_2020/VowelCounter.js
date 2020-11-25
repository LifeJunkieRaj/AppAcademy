function countVowels(string1) {
    let counts = {};
    let vowels = "aeiou";
    let letters = string1.split("");
    let total = 0
    letters.forEach(function (letter, i) {
        console.log(letter);
        if (vowels.includes(letter)) {
            total++
            if (counts[letter]) {
                counts[letter] += 1;
            } else {
                counts[letter] = 1;
            }
        }
    });
    return counts
}
console.log(countVowels("aaeeeeiiioooooooooouuuu")
