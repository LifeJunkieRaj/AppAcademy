// Zany Zip
// Write a function zanyZip that accepts two arrays as arguments. The function should return a two dimensional array with subarrays of length 2 that contain elements at corresponding indices from the input arrays. If one of the arrays is shorter than the other, then substitute null for the missing elements.

let zanyZip = function (array1, array2) {
    let zippedArr = [];
    for (let i = 0; i < array1.length || i < array2.length; i++) {
        let num1 = array1[i]
        let num2 = array2[i]
        if (num1 === undefined) {
            num1 = null;
        }
        if (num2 === undefined) {
            num2 = null;
        }
        zippedArr.push([num1, num2])
    }
    return zippedArr;
}


console.log(zanyZip([1, 2], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

console.log(zanyZip([1, 2, 3, 4], ['eins', 'zwei', 'drei']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

console.log(zanyZip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]
