let checkIfPrime = function (num) {
    if (num < 2) {
        return false;

    }
    for (let index = 2; index < num; index++) {
        if (num % index === 0)
            return false;
    }
    return true;

}

let choosePrimes = function (nums) {
    let newArr = [];
    nums.forEach(function (num) {
        if (checkIfPrime(num)) {
            newArr.push(num);
        }
    });
    return newArr;
}




console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]
