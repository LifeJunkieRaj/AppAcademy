// Write a function `appleCounter(appleObj)` that takes in an object containing a
// number of keys that have the word 'apple' contained within them. The `appleCounter`
// function will be in charge of returning the number of keys that contain the word
// "apple".

// **Hint**: you may want to take all the keys and lower case them for easier
// searching.

let appleCounter = (appleObj) => {
    let count = 0;
    //Initialize a count variable to store the number of time's the string "apple" is detected.
    for (let key in appleObj) {
    //Use a for loop to iterate the keys in the object
        key = key.toLowerCase();
    //Initialize variable to make all string values lower case
        if (key.indexOf("apple") > -1) {
            count++
    //Write conditional that uses array#indexOf method to check for every instance of the string "apple" in the object
        }
    }
    return count;
}


let obj = { banana: "yay!" };
console.log(appleCounter(obj)); // => 0

let obj1 = { crabapple: "yum!" };
console.log(appleCounter(obj1)); // => 1

let obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
console.log(appleCounter(obj2)); // => 2


let obj3 = {
  crabApple: "yum!",
  honeyApple: "super yum",
  banana: "yay",
  bigapple: "NYC"
};
appleCounter(obj3); // => 3
