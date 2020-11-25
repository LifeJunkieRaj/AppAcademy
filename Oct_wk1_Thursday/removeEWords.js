let removeEWords = function(sentence) {
    let eArr = sentence.split(" ");  // Create a variable to hold the sentence string that's turned into an array using the split method.

    let filter = eArr.filter(function(word) {  // Create another variable with which you can use your first variable as the array for the Array#filter method to filter our the words into an array that you can use your str.includes method on.
     return !word.includes("e") // You ask for a return by using !word.includes to check the words in the array named eArr for not having the letter "e".
     });
     return filter.join(" "); // This joins the separate indices of the array returned from the last line of code and then it returns this newly created string.
}


console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'
