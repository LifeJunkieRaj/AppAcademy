// Pyramid Array
// Write a function pyramidArray(base) that takes in an array of numbers representing the base of a pyramid. The function should return a two-dimensional array representing the completed pyramid. To generate an element of the next level of the pyramid, we sum the elements below and to the left and below and to the right.
//           85
//         37  48
//       15  22  26
//    5   10   12   14
//  2   3    7    5    9
//
//
let pyramidArray = function(base) {
    let pyramid = [base];
    while (pyramid.length < base.length) {
      let next = adjacentSums(pyramid[0]);
      pyramid.unshift(next);
    }
    return pyramid;
  };

  let adjacentSums = function(arr) {
    let sums = [];
    for (let i = 0; i < arr.length - 1; i++) {
      let sum = arr[i] + arr[i + 1];
      sums.push(sum);
    }
    return sums;
  };


  let p1 = pyramidArray([2, 3, 7, 5, 9]);
  console.log(p1);



let p1 = pyramidArray([2, 3, 7, 5, 9]);
console.log(p1);
// [
//   [ 85 ],
//   [ 37, 48 ],
//   [ 15, 22, 26 ],
//   [ 5, 10, 12, 14 ],
//   [ 2, 3, 7, 5, 9 ]
// ]

let p2 = pyramidArray([2, 2, 2, 2]);
console.log(p2);
// [
//   [ 16 ],
//   [ 8, 8 ],
//   [ 4, 4, 4 ],
//   [ 2, 2, 2, 2 ]
// ]
