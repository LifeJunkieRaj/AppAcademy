let pitPat = function(max) {
    let fourSixArr = [];
    for (let i = 4; i <= max; i++) {
        if ((i % 4 === 0 && i % 6 !== 0) || (i % 6 === 0 && i % 4 !== 0)) {
            fourSixArr.push(i);
        }
    }
    return fourSixArr;
}

console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]
