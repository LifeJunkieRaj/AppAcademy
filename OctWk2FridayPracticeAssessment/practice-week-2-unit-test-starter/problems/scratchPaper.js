// let reverseString = string => string.split("").reverse().join("")

// console.log(reverseString("computation"))

// console.log('run'['run'.length - 1]);


let timesTwoEvery = arr => {
    let twoArr = []
    arr.forEach(num => {
        twoArr.push(num * 2)
    })
    return twoArr;
}

let timesTwoMap = arr => {

    let total = arr.map(num => {
        num * 2
    })
    return total;
}

let numbers = [1, 2, 3, 4]
console.log(timesTwoEvery(numbers));
