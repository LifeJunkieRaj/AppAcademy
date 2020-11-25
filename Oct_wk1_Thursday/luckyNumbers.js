let maxColumn = function(num, matrix) {
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
    return returnArr.includes(num);
}
let luckyNumbers = function(matrix) {
    let luckyNumbs = [];
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        let row = matrix[rowIndex]
        let rowMin = row[0]
        for (let index = 1; index < row.length; index++) {
            if (row[index] <= rowMin)
            rowMin = row[index];
        }
        if (maxColumn(rowMin, matrix) === true) {
            luckyNumbs.push(rowMin);
        }
    }
    return luckyNumbs;
}



  matrix = [[ 5,  9, 21],
            [ 9, 19,  6],
            [12, 14, 15]]
//matrix = [[5, 9, 21,], [9, 19, 6], [12, 14, 15]]
  console.log(luckyNumbers(matrix)); // [12]

  matrix = [[ 5, 10,  8,  6],
            [10,  2,  7,  9],
            [21, 15, 19, 10]]

  console.log(luckyNumbers(matrix)); // [10]
