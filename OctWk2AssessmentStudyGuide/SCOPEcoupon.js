// Write a function named: coupon(discount). The coupon function will intake a
// number to apply as a discount, and will return a function that accepts an array
// of prices. Every call to the function returned by coupon will return the array
// of prices with the discount applied.

let coupon = (discount) => {
    return (prices) => {
    //We create a function that accepts an array of prices that we then use the #map to take each of those prices and
    //apply a specific operation on them which in this case is multiply by (discount) which is a parameter
    //that comes with the coupon function. We return this whole process to get our discount numeric value.
        return prices.map((price) => (price -= price * discount))
    }
}


let tenPercent = coupon(0.1);
console.log(tenPercent([10, 20, 30])); // [ 9, 18, 27 ]

let twentyPercent = coupon(0.2);
console.log(twentyPercent([10, 20, 30])); // [ 8, 16, 24 ]
