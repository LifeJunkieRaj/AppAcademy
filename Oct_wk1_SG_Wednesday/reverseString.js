let reverseString = function(str) {
    newStr = " "
    for (let i = str.length - 1; i >= 0 ; i--) {
        let char = str[i];
        newStr += char;
    }
    return newStr;
}

console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'
console.log(reverseString(HannaH))  // 'HannaH'
console.log(reverseString(racecar)) // "racecare"
