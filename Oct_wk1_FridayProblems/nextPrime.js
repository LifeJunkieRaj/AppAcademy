// Next Prime
// Write a function nextPrime that accepts a number as an argument. The function should return the nearest prime number that is greater than the given number.

let nextPrime = function(num) {
    let i = num;
    while (true) {
        i++;
        if (isPrime(i)) {
            return i;
        }
    }
};

let isPrime = function(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
};

console.log(nextPrime(2)); // 3
console.log(nextPrime(3)); // 5
console.log(nextPrime(7)); // 11
console.log(nextPrime(8)); // 11
console.log(nextPrime(20)); // 23
console.log(nextPrime(97)); // 101
