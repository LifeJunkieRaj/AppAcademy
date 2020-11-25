
// Write a function `duplicateCharMinCount(string, minCount)` that will takes
// a string as an argument and returns an array of characters that show up
// at least `minCount` number of times. The string will have at least one
// character.

function duplicateCharMinCount(string, minCount) {
	let count = {}
	for(let i = 0; i < string.length; i++){
		let letter = string[i]
		if(!count[letter]){
			count[letter] = 1
		} else {
			count[letter]++
		}
	}
	const arrLetters = Object.keys(count)
	return arrLetters.filter(function(letter) {
		return count[letter] >= minCount
	})
}
console.log(duplicateCharMinCount("apple", 2)) // ["p"]
console.log(duplicateCharMinCount("banana", 2)) // ["a", "n"]
console.log(duplicateCharMinCount("What about a longer string?", 3)) // ["a", "t", " "]
