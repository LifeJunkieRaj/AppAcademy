/*

    Valid Hex Code
    Create a function that determines whether a string is a valid hex code.
    A hex code must begin with a pound key # and is exactly 6 characters in length.
    Each character must be a digit from 0-9 or an alphabetic character from A-F.
    All alphabetic characters may be uppercase or lowercase.

    console.log(validHexCode("#ABCDEF")); // prints true;
    console.log(validHexCode("#88ef29")); // prints true;
    console.log(validHexCode("943234")); // prints false;
    console.log(validHexCode("#222!E4")); // prints false;
    console.log(validHexCode("#22222")); // prints false;

*/

function validHexCode(string) {
    let alphanumeric = "0123456789ABCDEFabcdef";
    if (string[0] !== "#") {
        return false;
    }
    if (string.length !== 7) {
        return false;
    }
    for (let i = 1; i < string.length; i++) {
        if (!alphanumeric.includes(string[i])) {
            return false;
        }
    }
    return true;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = validHexCode;
} catch (e) {
    module.exports = null;
}