//Write a function sumEvens(nums) that takes in an array of numbers. The function should add all the EVEN numbers in the array and return the sum. You can assume that nums will not be an empty array.

function sumEvens(array) {
    let total = 0;

    for (let i = 0; i < array.length; i++) {

        if (array[i] % 2 === 0) {
            let num = array[i];
            total += num
        }
    }
    return total;

}

console.log(sumEvens([2, 3, 6, 7, 4, 1])); // 8
console.log(sumEvens([5, -4, 4, 2])); // 2
