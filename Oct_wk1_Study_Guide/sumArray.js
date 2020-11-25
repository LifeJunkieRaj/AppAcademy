// function sumArray(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         let num = array[i];
//         sum = sum + num;
//         }
//     return sum;
// }

function sumArray(array) {
    let sum = 0;
    let i = 0;
    while (i < array.length) {
        let num = array[i];
        sum += num
        i++
    }
    return sum;
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30
