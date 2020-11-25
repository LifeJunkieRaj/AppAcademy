let uncompress = function(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let num = Number(str[i + 1]);
        for (let times = 0; times < num; times++) {
            newStr += char;
        }
    }
    return newStr;
}

console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'
