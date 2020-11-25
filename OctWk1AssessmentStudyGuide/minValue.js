// Min Value
// Write a function minValue(nums) that takes in an array of numbers as an arg. The function should return the smallest number of the array. If the array is empty, the function should return null.

// let minValue = function(nums) {
//     let min = null;
//     nums.forEach(function(num){
//         if (min === null || num < min) {
//             min = num;
//         }
//     });
//     return min;
// }

let minValue = function(nums) {
    let min = null;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (min === null || num < min) {
            min = num;
        }
    }
    return min;
}
console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3 ])); // -7
console.log(minValue([])); // null
