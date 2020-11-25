// let twoDimensionalSum = function(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//          let subArr = arr[i];

//          for (let j = 0; j < subArr.length; j++) {
//               sum += subArr[j];
//          }
//     }

//     return sum;
// };

let twoDimensionalSum = function (arr) {
    let sum = 0;
    for (index = 0; index < arr.length; index++) {
        let subArr = arr[index];

        for (let i = 0; i < subArr.length; i++) {
            sum += subArr[i];
        }
    }
    return sum;
};

let arr1 = [
    [1, 3],
    [-4, 7, 10],
    [2]
];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [
    [],
    [3, 1, 2],
];
console.log(twoDimensionalSum(arr2)); // 6
