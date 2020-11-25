// Keith's Solution

function spiralOrder(matrix) {
    const arr = [];
    while (matrix.length) {
      arr.push(
        ...matrix.shift(),
        ...matrix.map(a => a.pop()),
        ...(matrix.pop() || []).reverse(),
        ...matrix.map(a => a.shift()).reverse()
        );
    }
    return arr;
  };

 matrix = [[ 1, 2, 3],
           [ 4, 5, 6],
           [ 7, 8, 9]]
console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]
matrix = [[1, 2, 3, 4, 8],
          [5, 6, 7, 8,15],
          [9,10,11,12, 2],
          [4, 8,10, 9,19],
          [4, 8,10, 9,22]]
console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]
