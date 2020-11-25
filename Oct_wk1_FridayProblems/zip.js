// Zip
// Write a function zip that accepts two arrays as arguments. The function should return a two dimensional array with subarrays of length 2 that contain elements at corresponding indices from the input arrays. You may assume that the input arrays have the same length.

let zip = function(array1, array2) {
    zippedArr = [];
    for (let i = 0; i < array1.length; i++) {
        let num1 = array1[i]
        let num2 = array2[i]
        zippedArr.push([num1, num2])
    }
    return zippedArr;
}

console.log(zip([1, 2, 3, 4], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, 'vier' ] ]

console.log(zip(['eins', 'zwei', 'drei'], [1, 2, 3]));
// [ [ 'eins', 1 ], [ 'zwei', 2 ], [ 'drei', 3 ] ]

console.log(zip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]
