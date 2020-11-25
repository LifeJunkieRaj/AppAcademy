// let pairsMaker = function(arr) {
//     let pairs = [];

//     for (let i = 0; i < arr.length; i==) {
//         for (let j = i + 1; j < arr.length; j++) {
//               let pair = [ arr[i], arr[j] ];
//               pairs.push(pair);
//          }
//     }

//     return pairs;
// };

let pairsMaker = function (arr) {
    let pairs = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let pair = [arr[i], arr[j]];
            pairs.push(pair);
        }
    }
    return pairs;
};

console.log(pairsMaker(['a', 'b', 'c', 'd'])); // =>
// [ [ 'a', 'b' ],
//   [ 'a', 'c' ],
//   [ 'a', 'd' ],
//   [ 'b', 'c' ],
//   [ 'b', 'd' ],
//   [ 'c', 'd' ] ]

console.log(pairsMaker(['Rosemary', 'Alex', 'Connor'])); // =>
// [ [ 'Rosemary', 'Alex' ],
//   [ 'Rosemary', 'Connor' ],
//   [ 'Alex', 'Connor' ] ]
