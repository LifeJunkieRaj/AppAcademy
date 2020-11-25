// Max in Matrix
// Write a function maxInMatrix(matrix) that takes in a 2-dimensional array (matrix) and returns the largest value in the matrix. The matrix contains at least one value.

function maxInMatrix(matrix) {
    let maxNum = 0;
    matrix.forEach(function(subMatrix) {
        subMatrix.forEach(function(num) {
            if (maxNum < num) {
                maxNum = num
            }
        })
    })
    return maxNum;
}




  matrix = [[11,  2,-99],
            [20, 19, 10],
            [47, 72, 56]]

  console.log(maxInMatrix(matrix)); // 72
