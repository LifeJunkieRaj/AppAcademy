// let sumWithReduce = function(nums) {
//     let total = nums.reduce(function(sum, num) {
//         return sum + num;
//     }, 0);

//     return total;
// }

let sumWithReduce = function (nums) {
    let total = nums.reduce(function (sum, num) {
        return sum + num;
    }, 0);
    return total;
}

console.log(sumWithReduce([10, 3, 5, 2])); // 20
console.log(sumWithReduce([])); // 0
