let avgVal = function(arr) {

    if (arr.length === 0) { // It has to be arr.length so it know so to examie the size of the array.
        return null;
    }
    let sum = 0;
    arr.forEach(function(num){
        sum += num
    })
    return sum/arr.length;
}



console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null
