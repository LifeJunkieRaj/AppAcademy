function spiralOrder(matrix) {
    // your code here...
    let row_needed_steps = matrix[0].length;
    let col_needed_steps = matrix.length -1 ;
    let total_ele = matrix[0].length * matrix.length;
    let steps_so_far = 0;
    let ret_arr = [];
    let row = 0;
    let col = -1;
    while( steps_so_far < total_ele)
    {
      //horizontal -----> way
        for(let x_steps = 0; x_steps < row_needed_steps; x_steps++)
        {
          if(steps_so_far < total_ele){
            steps_so_far++;
            col++;
            ret_arr.push(matrix[row][col]);
          }
        }
        row_needed_steps--;
      //verytical down at right of matrix
        for(let y_steps = 0; y_steps < col_needed_steps; y_steps++)
        {
          if(steps_so_far < total_ele){
            steps_so_far++;
            row++;
            ret_arr.push(matrix[row][col]);
          }
        }
        col_needed_steps--;
      //horizontal <-----
        for(let x_steps = 0; x_steps < row_needed_steps; x_steps++)
        {
          if(steps_so_far < total_ele){
            steps_so_far++;
            col--;
            ret_arr.push(matrix[row][col]);
          }
        }
        row_needed_steps--;
      //veritical going up at left side of matrix
        for(let y_steps = 0; y_steps < col_needed_steps; y_steps++)
        {
          if(steps_so_far < total_ele){
            steps_so_far++;
            row--;
            ret_arr.push(matrix[row][col]);
          }
        }
        col_needed_steps--;
    }
    return ret_arr;
  }
  matrix = [[ 1, 2, 3],
            [ 4, 5, 6],
            [ 7, 8, 9]]
  console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]
  matrix = [[1, 2, 3, 4],
            [5, 6, 7, 8],
            [9,10,11,12]]
  console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]
  matrix = [[1, 2, 3, 4, 5, 6],
            [7, 8, 9, 10, 11, 12],
            [13, 14, 15, 16, 17, 18],
            [19, 20, 21, 22, 23, 24],
            [25, 26, 27, 28, 29, 30],
            [31, 32, 33, 34, 35, 36]]
  console.log(spiralOrder(matrix)); // [1,2,3,4,5,6,12,18,24,30,36,35,34,33,32,31,25,19,13,7,8,9,10,11,17,23,29,28,27,26,20,14,15,16,22,21]
