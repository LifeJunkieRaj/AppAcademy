// let fizzBuzz = function(max) {
//     threeOrFiveArr = [];
//     for (let i = 0; i < max; i++) {
//         if ((i % 3 === 0 && i % 5 !== 0) || (i % 5 === 0 && i % 3 !== 0)) {
//             threeOrFiveArr.push(i);
//         }
//     }
//     return threeOrFiveArr;
// }

// console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
// console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]

// For every number that is divisible by 3 and 5, console log "FizzBuzz".
// For every number that is divisible by only 3 and not 5, console log "Fizz".
// For every number that is divisible by only 5 and not 3, console .log "Buzz".

let fizzBuzzPrinter = function(max) {
    for (let i = 0; i < max; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    }else if (i % 5 === 0) {
        console.log("Buzz");
    } else {console.log(i)}
    }
    }


console.log(fizzBuzzPrinter(100))
