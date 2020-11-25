// Write a function `removeEWords(sentence)` that accepts a sentence string as an
// arg. The function should return a new string, containing only the words that
// don't have the letter "e" in them.

// Solve this using Array's `filter()` method.

let removeEWords = (sentence) => {
    //We initialize a function removeEWords with a parameter sentence
    const words = sentence.split(" ");
    //We initialize a variable with the string#split() method that takes an argument (in this case sentence) that will split the string at spaces and put in the argument which in this case is just an empty space and this creates an array of separate strings.
        return words.filter(word => {
    //We run the #filter method on the words created by the #split method.  The filter iterates through an array and takes on one parameter/argument and runs them through a function and those that pass get put into a modified copy of the original array leaving the original array untouched. We return this #filter method that contains a conditional statement
        if(!word.includes("e")) {
    //The words that were created in sentence#split are checked against the string#includes method that takes on a parameter. In this case, we are saying if the string "e" is not found in the word we are checking, then we can return that word into our new modified array created by the #filter method.
            return words;
    //We return the words in the modified array made by the #filter and #includes methods
        }
    })
}

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'
