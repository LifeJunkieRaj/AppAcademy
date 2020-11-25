let countVowels = function (word) {  // We introduce a countVowels function through function expression syntax along with a parameter
    let count = 0;  // We need a place to hold the count for each vowel present in a string
    let vowels = "aeiou"  // We need to define what the variable "vowels" actually is or could be
    for (let index = 0; index < word.length; index++) {  // We used a ForLoop so we have to set an index starting point, conditions for it to continue searching and lastly, a reminder to increment if the former conditions are met
        if (vowels.includes(word[index])) {  // We set a an if statement with the String#includes method that searches and returns a true for any element of the parameter fulfilliing our conditional statement
            count += 1;  // For every true statement returned we ask that raise the counter by 1
        }
    }
    return count;  // After exiting the ForLoop we use the return operator to add any new true statements return to the original count variable
};

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2
