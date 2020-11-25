/*
    Transpose
    Write a function transpose(arr) that accepts a two-dimensional array
    and returns a new version of the array with its columns and rows switched.
    See examples below:

    let arr1 = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
               ]

    console.log(transpose(arr1)); //prints: [
                                             [1, 4, 7],
                                             [2, 5, 8],
                                             [3, 6, 9]
                                            ]

    let arr2 = [
                [1, 2],
                [3, 4],
                [5, 6],
               ]

    console.log(transpose(arr2)); // prints: [
                                              [1, 3, 5],
                                              [2, 4, 6]
                                             ]

*/

// function transpose(arr) {
//     let rows = arr.length;
//     let columns = arr[0].length;
//     let newArr = [];
//     for (let j = 0; j < columns; j++) {
//             newArr[j] = [rows]
//     }
//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < columns; j++) {
//             newArr[j][i] = arr[i][j]
//         }
//     }
//     return newArr
// }
const _ = require('underscore')
function transpose(arr) {
    return _.zip(...arr);
};

// function transpose(matrix) {
//     return matrix.reduce((prev, next) => next.map((item, i) =>
//       (prev[i] || []).concat(next[i])
//     ), []);
//   }

// function transpose(matrix) {
//     return matrix[0].map((col, c) => matrix.map((row, r) => matrix[r][c]));
//   }

let arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
   ]

console.log(transpose(arr1)); //prints: [
                                //  [1, 4, 7],
                                //  [2, 5, 8],
                                //  [3, 6, 9]
                                // ]
                                let arr2 = [
                                    [1, 2],
                                    [3, 4],
                                    [5, 6],
                                   ]

                        console.log(transpose(arr2)); // prints: [
                                                                //   [1, 3, 5],
                                                                //   [2, 4, 6]
                                                                //  ]


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = transpose;
} catch (e) {
    module.exports = null;
}
