// Prev Prime
// Write a function prevPrime that accepts a number as an argument. The function should return the nearest prime number that is smaller than the given argument. Since 2 is the smallest prime number, return null if no number can be returned.

let prevPrime = function(n) {
    if (n <= 2) {
        return null
    }
    let i = n - 1;
    while (true) {
        if (isPrime(i)) {
            return i;
        }
        i--;
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

console.log(prevPrime(32)); // 31
console.log(prevPrime(33)); // 31
console.log(prevPrime(14)); // 13
console.log(prevPrime(7));  // 5
console.log(prevPrime(4));  // 3
console.log(prevPrime(2));  // null
console.log(prevPrime(1));  // null
