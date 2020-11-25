let productWithReduce = function (nums) {
    return total = nums.reduce(function (sum, num) {
        return sum * num;
    })
}

console.log(productWithReduce([10, 3, 5, 2])); // 300
console.log(productWithReduce([4, 3])); // 12
