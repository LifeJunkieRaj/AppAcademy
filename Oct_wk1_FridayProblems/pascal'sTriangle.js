// Pascal's Triangle
// Pascal's triangle is a 2-dimensional array with the shape of a pyramid. The top of the pyramid is the number 1. To generate further levels of the pyramid, every element is the sum of the element above and to the left with the element above and to the right. Non-existing elements are treated as 0 when calculating the sum.

// Write a function pascalsTriangle that accepts a positive number, n, as an argument and returns a 2-dimensional array representing the first n levels of Pascal's triangle. See the file for examples.

let pascalsTriangle = function(height) {
    let triangle = [[1]];
    while (triangle.length < height) {
        let last = triangle[triangle.length - 1];
        let next = [1];
        for (let i = 0; i < last.length -1; i++) {
            next.push(last[i] + last[i + 1]);
        }
        next.push(1);
        triangle.push(next);
    }
    return triangle;
}

console.log(pascalsTriangle(5));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1]
// ]

console.log(pascalsTriangle(7));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1],
//     [1, 5, 10, 10, 5, 1],
//     [1, 6, 15, 20, 15, 6, 1]
// ]
