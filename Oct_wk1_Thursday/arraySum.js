let sumArray = function(arr) {
    let sum = 0;

    arr.forEach(function(num) {  // "arr.forEach(function(num)" is actually running function(num) which is nothing on each index of arr.
                                 // Since there is no function to run on any of the values found in these indices, function(num) just returns the value found in that index.
    sum += num;
    });
    return sum;
}


console.log(sumArray([4, 3, -1, 10])); // 16
console.log(sumArray([6, 7, 2])); // 15
console.log(sumArray([])); // 0
