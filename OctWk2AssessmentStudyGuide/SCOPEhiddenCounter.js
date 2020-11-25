// Write a function named `hiddenCounter()`. This function will do two things - first
// it will define a count variable, then it will return a function.
// When invoked the function returned by hiddenCounter will increment the counter by 1.

// Look below to see how this function is invoked:

const hiddenCounter = () => {
    let count = 0;
    //We must set a count to return the hidden count when incremented by one!
    return () => (count += 1)
    //We create a function tha will increment the in the count variable by one and we then return the count
}


let hidden1 = hiddenCounter(); //returns a function
console.log(hidden1()); // returns 1
console.log(hidden1()); // returns 2

let hidden2 = hiddenCounter(); // returns a function
console.log(hidden2()); // returns 1
