// Write a function `valuePair(obj1, obj2, key)` that takes in two objects
// and a key (string). The function should return an array containing the
// corresponding values of the objects for the given key.

let valuePair = (obj1, obj2, key) => {
    let val1 = obj1[key]
    //We initialize a variable val1 to represent the key-value pairs in obj1 which when printed will be the value string of the location and name key i.e. val1 only equals the value NY for the first console.log arguments and One for the second console.log arguments
    let val2 = obj2[key]
    //We initialize a variable val2 to represent the key-value pairs in obj2 which when printed will be the value strings of the name key i.e. val2 only equals the value SF and Two for the arguments in the example console.logs respectively
    let arr = [val1, val2]
    //We initialize a variable arr that will collect the specific key-value pair out of each object and put them in an array.  For the first console.log that will be ["NY", "SF"] and the second console.log will be     ["One", "Two"]
    return arr;
}


let object1 = {name: 'One', location: 'NY', age: 3};
let object2 = {name: 'Two', location: 'SF'};
console.log(valuePair(object1, object2, 'location')); // => [ 'NY', 'SF' ]
console.log(valuePair(object1, object2, 'name')); // => [ 'One', 'Two' ]
