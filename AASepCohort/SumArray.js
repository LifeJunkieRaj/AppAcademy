// function sumArray(array) {
//     let sum = 0;

//   for (let i = 0; i < array.length; i += 1) {
//     let num = array[i];
//     sum += num;
//   }
//     return sum;
// }

let sumArray = function (array) {
    return total = array.reduce(function (sum, num) {
        return sum + num;
    }, 0)
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30
