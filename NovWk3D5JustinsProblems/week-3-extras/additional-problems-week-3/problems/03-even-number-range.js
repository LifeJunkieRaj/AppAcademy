/* Even Number Range

    Write a function that accepts two numbers.
    The function should return an array of all even numbers between the two arguments inclusively.

    console.log(evenNumberRange(-3, 2)); // prints [-2, 0, 2]
    console.log(evenNumberRange(22, 25)); // prints [22, 24]
    console.log(evenNumberRange(2, 0)); // prints []
*/

function evenNumberRange(num1, num2) {
    if (num2 < num1) {
        return [];
    }
    if(!(num1 % 2 === 0)) {
        return [num1 + 1].concat(evenNumberRange(num1 + 2, num2))
    } else {
        return [num1].concat(evenNumberRange(num1 + 2, num2))
    }
}

// let isEven = num => {}
//     if (num == 0) {
//         return true;
//     } else if (num == 1) {
//         return false;
//     } else if (num > 0) {
//         return isEven(num - 2)
//     } else {
//         return isEven(-num)
//     }
// }


console.log(evenNumberRange(-3, 2)); // prints [-2, 0, 2]
console.log(evenNumberRange(22, 25)); // prints [22, 24]
console.log(evenNumberRange(2, 0)); // prints []

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = evenNumberRange;
} catch (e) {
    module.exports = null;
}
