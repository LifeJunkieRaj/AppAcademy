// Variables I need:
// startRow, endRow, startCol, EndCol and a counter.
// This is what each variable would equal:
// startRow = 0, endRow = 2, startCol = 0, endCol = 2

let spiralOrder = function(matrix) {
    let spiralArr = [];
    let height = matrix.length
    let width = matrix[0].length

    spiralArr = spiralArr.concat(matrix[0])
    height--;


    let startingRow = matrix.length - height
    for (let i = startingRow; i <= height; i++) {
        let lastEl = matrix[i][width - 1]
        spiralArr.push(lastEl)
    }
    width--

    let startingCol = matrix[0].length - width
    for (let i = startingCol; i >= 0; i--) {
        spiralArr.push(matrix[height][i])
    }
    height--;

    startingRow = matrix.length - height - 1
    spiralArr.push(matrix[startingRow][0])
    width--

    startingCol = matrix[0].length - width - 1
    spiralArr.push(matrix[1][startingCol])
    return spiralArr;
}



// spiralOrder = function(matrix) {
//     let spiralArr = [];
//     let height = matrix.length
//     let width = matrix[0].length
//     let x = 0
//     let y = 0
//     let count = height * width

//     while (count > 0) {
//         spiralArr.push(matrix[y][x])
//         console.log(spiralArr, [x, y])
//         if (x < width - 1) {
//             x++
//         } else if (y < height - 1) {
//             y++
//         } else if () {
//             x--
//         } else if () {
//             y--
//         }
//         count--
//     }



//     return spiralArr;
// }


matrix = [[ 1, 2, 3],
          [ 4, 5, 6],
          [ 7, 8, 9]]
// matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [[1, 2, 3, 4],
          [5, 6, 7, 8],
          [9,10,11,12]]
console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]
