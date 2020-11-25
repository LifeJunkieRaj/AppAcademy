// let maxValue = function(nums) {
//     currMax = -Infinity
//       nums.forEach(function(el) {
//       if (el > currMax) {
//          currMax = el
//       }
//       })
//     retun currMax;
//     }

let maxValue = function (nums) {
    let max = null;
    nums.forEach(function (num) {
        if (num > max) {
            max = num;
        }
    });
    return max;
}

console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3])); // 3
console.log(maxValue([])); // null
