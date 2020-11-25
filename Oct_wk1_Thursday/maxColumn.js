// // [*] Understand
// // [*] Plan
// // [*] Execute
// // [] Improve
// // Plan
// // [*] initialize an empty array that will store the max for each column
// // [*] initialize a variable for the height of the matrix
// // [*] initialize a variable for the width of the matrix
// // [*] iterate through the columns of the matrix
//    // [*] initialize column max to be zero
//    // [*] iterate through each cell in the matrix
//      // [*] if the current element in greater than our current max,
//         //  [*] update max
//    // [*] push the column max to the array storing the maximums for each column
// // [*] return the max array
// function maxColumn(matrix) {
//     // initialize an empty array that will store the max for each column
//     let columnMaxes = []
//     // initialize a variable for the height of the matrix
//     const height = matrix.length
//     // console.log('height', height)
//     // initialize a variable for the width of the matrix
//     const width = matrix[0].length
//     // console.log('width', width)
//     // iterate through the columns of the matrix
//     for (let col = 0; col < width; col++) {
//       // initialize column max to be zero
//       // console.log('col index', col)
//       let columnMax = 0
//       // console.log('columMax', columnMax)
//       //iterate through each cell in the matrix
//       for (let cell = 0; cell < height; cell++) {
//         let element = matrix[cell][col]
//         // console.log('element', element)
//         //if the current element in greater than our current max a.k.a columnMax
//         if (element > columnMax) {
//           // update max
//           columnMax = element
//           // console.log('columnMax', columnMax)
//         }
//       }
//       // push the column max to the array storing the maximums for each column
//       columnMaxes.push(columnMax)
//       // console.log('columnMaxes', columnMaxes)
//     }
//     return columnMaxes;
//   }
//   matrix = [
//             [ 5,  9, 21],
//             [ 9, 19,  6],
//             [12, 14, 15],
//            ]
//   console.log(maxColumn(matrix)); // [12, 19, 21]


// function maxColumn(matrix) {
//     let returnArr = [];
//     let height = matrix.length;
//     let width = matrix[0].length;
//     for (let columnIndex = 0; columnIndex < width; columnIndex++) {
//         let columnMax = 0
//         for (let rowIndex = 0; rowIndex < height; rowIndex++) {
//             let currentEl = matrix[rowIndex][columnIndex]
//             if (currentEl > columnMax) {
//                 columnMax = currentEl;
//             }
//         }
//         returnArr.push(columnMax)
//     }
//     return returnArr;
// //   }
function maxColumn(matrix) {
    let returnArr = [];
    let height = matrix.length;
    let width = matrix[0].length;
    for (let columnIndex = 0; columnIndex < height; columnIndex++) {
        let columnMax = 0;
        for (let rowIndex = 0; rowIndex < width; rowIndex++) {
            let currentNum = matrix[rowIndex][columnIndex];
            if (currentNum > columnMax) {
                columnMax = currentNum;
            }
        }
        returnArr.push(columnMax)
    }
    return returnArr;
}

  matrix = [[ 5,  9, 21],
            [ 9, 19,  6],
            [12, 14, 15]]
// matrix = [[5, 9, 21], [9, 19, 6], [12, 14, 15]]
  console.log(maxColumn(matrix)); // [12, 19, 21]
