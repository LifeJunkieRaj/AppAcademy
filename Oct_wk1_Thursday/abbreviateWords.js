let vowelBlocker = function(word) {
    let vowels = "aeiou";
    let noVowels = "";
    for (let i = 0; i < word.length; i++) {
        char = word[i];
        if (!vowels.includes(char)) {
            noVowels += char
        }
    }
    return noVowels;
}
let abbreviateWords = function(sentence) {
    let newWords = sentence.split(" ");
    let vowelFreeArr = [];
    for (let i = 0; i < newWords.length; i++) {
        let word = newWords[i];
        if (word.length > 4) {
            vowelFreeArr.push(vowelBlocker(word))
        } else {
            vowelFreeArr.push(word)
        }
    }
        return vowelFreeArr.join(" ");
}

console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg
