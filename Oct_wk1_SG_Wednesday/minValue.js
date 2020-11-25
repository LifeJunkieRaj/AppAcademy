// let minValue = function (nums) {
//     let min = null
//     for (let i = 0; i < nums.length; i++) {
//         let num = nums[i];
//         if (min === null || num < min) {
//             min = num;

//         }
//     }
//     return min;
// }

let minValue = function (nums) { // 4, 2, 3, 1, 0
    let min = null // 4

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (num < min || min === null) {
            min = num
        }
    }
    return min
}

console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3])); // -7
console.log(minValue([])); // null
