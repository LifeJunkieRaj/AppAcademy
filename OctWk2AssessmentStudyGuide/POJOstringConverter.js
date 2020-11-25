// Write a function `stringConverter(string)` that will intake a
// string as an argument and returns an object representing the count of each
// character in the string. **Hint:** don't forget you can check if a key is present
// in an object by using `obj[key] === undefined`.

let stringConverter = (string) => {
    let newObj = {};
    //Set an empty object to add our key value pairs to
    let letters = string.split("");
    //Turn given string into an array of letters that can be iterated through
    letters.forEach(el => {
    //We use #forEach to iterate through each index of the array
        if (newObj[el] === undefined) {
            newObj[el] = 1;
    //We iterate through the array and if that letter is being seen for the first time (or is undefined) then we ask it be put in our empty object named newObj in the format of a key-value pair where the key is the new letter and the value is at this point set to signify that this is the first time the code has seen this letter.
        } else {
            newObj[el]++;
    //At this point if the el passes through the first conditional, that means the letter has already been identified and added to our object (newObj) as a key-value pair and if it has already been identified and then is identified again, it is at this point the code is asked to increment its count by one
            console.log(newObj[el])
        }
    })
    return newObj;
    //Now the code returns our now filled object (newObj) filled with all the key-value pairs that represent each letter and how many times it appeard in its string (word)
}

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
