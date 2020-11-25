// Prime Factors
// Write a function primeFactors that accepts a number as an argument. The function should return an array containing all of the prime numbers that can divide the given number.

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

let primeFactors = function(n) {
    let primeFacts = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0 && isPrime(i)) {
            primeFacts.push(i);
        }
    }
    return primeFacts;
}

console.log(primeFactors(12));  // [2, 3]
console.log(primeFactors(7));   // [7]
console.log(primeFactors(16));  // [2]
console.log(primeFactors(30));  // [2, 3, 5]
console.log(primeFactors(35));  // [5, 7]
console.log(primeFactors(49));  // [7]
console.log(primeFactors(128)); // [2]
