
const salesTax = (...args) => {
    let total = 0
    for(let i = 0; i < args.length; i++){
        let nums = args[i]
        total = (total + nums)
    }
    total = total * .09
    return "$" + total.toFixed(2)
}
console.log(salesTax(30, 70)); // '$9.00'
console.log(salesTax(1.12, 2.23, 3.34, 4.45)); // '$1.00'
console.log(salesTax(4.99, 9.99, 19.99)); // '$3.15'
