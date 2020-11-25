let isPositiveInteger = function (str) {
    let integer = '0-9'
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (!integer.includes(char)) {
            return str + " is not a positive integer"
        }

    }
    return str + " is a positive integer"
}

console.log(isPositiveInteger("123")); // "123 is a positive integer"
console.log(isPositiveInteger("hello")); // "hello is not a positive integer"
console.log(isPositiveInteger("-12")); // "-12 is not a positive integer"
console.log(isPositiveInteger("1.5")); // "1.5 is not a positive integer"
console.log(isPositiveInteger("101 Dalmations")); // "101 Dalmations is not a positive integer"
