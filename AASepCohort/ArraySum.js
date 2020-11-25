// let sumArray = function(arr) {
//     let sum = 0;

//     arr.forEach(function(el) {
//         sum += el;
//     });

//     return sum;
// };

let sumArray = function (arr) {
    let sum = 0;

    arr.forEach(function (el) {
        sum += el;
    });
    return sum;
}

console.log(sumArray([4, 3, -1, 10])); // 16
console.log(sumArray([6, 7, 2])); // 15
console.log(sumArray([])); // 0
