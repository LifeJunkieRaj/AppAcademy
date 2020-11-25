// function eCounter(word) {
//     let count = 0;

//     for (let index = 0; index < word.length; index++) {
//       let char = word[index];
//       if (char === "e" || char === "E") {
//         count += 1;
//       }
//     }

//     return count;
//   };

let eCounter = function (word) {  // We introudce a function expression syntax for an eCounter with a parameter given as well
    let count = 0;  // We have to set a place to record the count of "e"/"E"s present
    let index = 0;  // For a WhileLoop the index to start counting through an parameter is defined before the loop
    while (index < word.length) {  // We start the while loop by indicating that the loop should stay active as long as index is less than the length of the parameter/argument
        let char = word[index]  // We have to assign the index of each element of the parameter/argument to a variable
        if (char === "e" || char === "E") {  // We introduce an 'if' statement to distinguish when the element of an argument is true or false
            count += 1;  // We ask the program to take any 'true' statement found and add it to the count
        }
        index++;  // Once we are outside the if statement we increment the index by one
    }
    return count;  // Once we are outside the while loop we add any new true value to count = 0
};

console.log(eCounter("apple")); // => 1
console.log(eCounter("appleapple")); // => 2
console.log(eCounter("Appleee")); // => 3
