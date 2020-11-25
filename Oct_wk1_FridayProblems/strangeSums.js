// Strange Sums
// Write a function strangeSums that accepts an array of numbers as an argument. The method should return a count of the number of distinct pairs of elements that have a sum of zero. You may assume that the input array contains unique elements.

let strangeSums = function(array) {
    let count = 0
    for (let i = 0; i <= array.length; i++) {
        for (let j = i + 1; j <= array.length; j++) {
            let num1 = array[i]
            let num2 = array[j];
            if (num1 + num2 === 0) {
                count++
            }
        }
    }
    return count;
}

console.log(strangeSums([2, -3, 3, 4, -2]));     // 2
console.log(strangeSums([42, 3, -1, -42]));      // 1
console.log(strangeSums([-5, 5]));               // 1
console.log(strangeSums([19, 6, -3, -20]));      // 0
console.log(strangeSums([9]));                   // 0
