let twoSum = function(nums, target) {
    let twoSumObj = {2:0};
    for (let i = 0; i < nums.length; i++) {
        let currDiff = target - nums[i];

        if (twoSumObj[currDiff] !== undefined && twoSumObj[currDiff] !== i) {
            return [i, twoSumObj[currDiff]];
        } else {
            twoSumObj[nums[i]] = i
        }
    }
 };

 console.log(twoSum([2, 7, 11, 15], 9)); // [1, 0]
