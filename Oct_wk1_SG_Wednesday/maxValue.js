let maxValue = function(nums) {
    let max = null;
    for (let i = 0; i < nums.length; i++) {
         let num = nums[i];
         if (max === null || num > max) {
            max = num;
        }
    }
    return max;
}


console.log(maxValue([4, 6, 3, 5, 2, 4])); // 2
console.log(maxValue([-2, -3, -7, 3 ])); // -7
console.log(maxValue([])); // null
