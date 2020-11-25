// function aCounter(word) {
//     let index = 0;
//     let count = 0;
//     while (index < word.length) {
//       let char = word[index];
//       if (char === "a" || char === "A") {
//         count += 1;
//       }
//       index++;
//     }
//     return count;
//   };

let aCounter = function (word) {  //We must introduce the (word) parameter into the function expression syntax
    let count = 0;  //Just like in a while loop, we have to declare a place to put the count
    for (let index = 0; index < word.length; index++) {  //In a forLoop we use index to make the program move incrementally through the arguments given
        let char = word[index];  //We have to index each element in the (word) parament and assign it a variable (in this case 'char')
        if (char === "a" || char === "A") {  //Now we introduce a conditional with the Boolean operator || where if an lower or upper case 'a' is present it returns true
            count += 1;  //We need to introduce count variable to add the true statement to
        }
    }
    return count; //Outside this entire operation we use the return operator to add a new true statement to our 'count = 0' counter
}

console.log(aCounter("apple")); // => 1
console.log(aCounter("appleapple")); // => 2
console.log(aCounter("aAapple")); // => 3
