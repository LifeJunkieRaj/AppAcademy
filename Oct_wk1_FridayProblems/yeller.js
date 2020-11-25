// Yeller
// Write a function yeller(words) that takes in an array of words. The function should return a new array where each element of the original array is yelled.

let yeller = function(words) {
        bigBoyArr = []
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            let bigWord = word.toUpperCase() + "!"
            bigBoyArr.push(bigWord)
        }
        return bigBoyArr;
}



console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]
