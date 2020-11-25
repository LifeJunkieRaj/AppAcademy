// The goal of this function is to print out all numbers from 1 to 100 but with three exceptions:
// For every number that is divisible by 3 and 5, console log "FizzBuzz".
// For every number that is divisible by only 3 and not 5, console log "Fizz".
// For every number that is divisible by only 5 and not 3, console .log "Buzz".

let fizzBuzz = function() {

    for (let i = 1; i <= 100; i = i + 5) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {console.log("Fizz")}
        else if (i % 5 === 0) {console.log("Buzz")}
        else {console.log(i)};
    };
};

fizzBuzz();
