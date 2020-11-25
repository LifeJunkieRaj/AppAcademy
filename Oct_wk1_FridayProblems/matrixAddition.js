// Matrix Addition
// A 2-dimensional array is also known as a "matrix". Write a function matrixAddition that accepts two matrices as arguments. The two matrices are guaranteed to have the same "height" and "width". The function should return a new matrix representing the sum of the two arguments. To add matrices, we add the values at the same positions.

let matrixAddition = function(m1, m2) {
    let sum = [];
    for (let row = 0; row < m1.length; row++) {
        let subArray = [];
        for (let col = 0; col < m1[0].length; col++) {
            subArray.push(m1[row][col] + m2[row][col]);
        }
        sum.push(subArray);
    }
    return sum;
};

let matrixA = [[2,5], [4,7]]
let matrixB = [[9,1], [3,0]]
let matrixC = [[-1,0], [0,-1]]
let matrixD = [[2, -5], [7, 10], [0, 1]]
let matrixE = [[0 , 0], [12, 4], [6,  3]]

console.log(matrixAddition(matrixA, matrixB)); // [[11, 6], [7, 7]]
console.log(matrixAddition(matrixA, matrixC)); // [[1, 5], [4, 6]]
console.log(matrixAddition(matrixB, matrixC)); // [[8, 1], [3, -1]]
console.log(matrixAddition(matrixD, matrixE)); // [[2, -5], [19, 14], [6, 4]]
