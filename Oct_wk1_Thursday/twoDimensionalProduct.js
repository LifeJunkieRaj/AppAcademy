let twoDimensionalProduct = function(array) {
    newProduct = 1
    array.forEach(function(subArray){
        subArray.forEach(function(num){
        newProduct *= num;
        console.log(newProduct)
        })
    })
    return newProduct;
}

let arr1 = [
    [6, 4],
    [5],
    [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
    [11, 4],
    [2]
];
console.log(twoDimensionalProduct(arr2)); // 88
