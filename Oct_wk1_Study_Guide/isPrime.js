function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }

  }
  return true;
 }
// It's looping between i and the number to find if any numbers it comes in contact with gives a
// remainder zero and if it does then it immediatey becomes false.
console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true
