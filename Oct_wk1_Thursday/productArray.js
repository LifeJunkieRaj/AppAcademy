let productWithReduce = function(nums) {
    let totalProduct = 1
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        totalProduct *= num
    }
    return totalProduct;
}

console.log(productWithReduce([10, 3, 5, 2])); // 300
console.log(productWithReduce([4, 3])); // 12
