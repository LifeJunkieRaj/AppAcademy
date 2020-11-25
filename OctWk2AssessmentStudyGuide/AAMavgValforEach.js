// Write a function `avgVal(arr)` that accepts an array as an arg. The function
// should return the average of all values in the array. If the array is empty,
// it should return `null`.

// Solve this using Array's `forEach()` method.

let avgVal = (array) => {
    if (array.length === 0) {
        return null;
    //We set this up to detect an empty array and if so we return null
    }
    let sum = 0;
    array.forEach((num => sum += num))
    //We use #forEach to replace a for loop. #forEach takes on one parameter and returns undefined. In this case it performs a simple function on each index of the array which in this case was use the necessary parameter num and add it to Sum which was initialized as 0 earlier.  After all array indexes have been added to sum we have the total sum from all the indexes in the array.
    return sum / array.length;
    //We divide this sum by the array.length which gives us the average and we return this average
}

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null
