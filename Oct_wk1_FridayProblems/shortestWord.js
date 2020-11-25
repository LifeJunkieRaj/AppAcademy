// Shortest Word (*)
// Write a function shortestWord that accepts a sentence as an argument. The function should return the shortest word in the sentence. If there is a tie, return the word that appears later in the sentence.

let shortestWord = function(sentence) {
    let words = sentence.split(" ")
    let min = null
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (min === null || word.length <= min.length ){
            min = word;

        }
    }
    return min;
}

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'
