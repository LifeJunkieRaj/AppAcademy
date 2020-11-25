let tripler = function(nums) {
    let newArr = nums.map(function(num){
        return num * 3;
    })
    return newArr;
}

// let tripler = function(nums) {
//     let newArr = [];
//     for (let i = 0; i < nums.length; i++) {
//         num = nums[i];
//         newArr.push(num * 3)
//     }
//     return newArr;
// }

console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]
