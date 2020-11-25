// Write a function `breakDownObj(obj)` that takes in an object as a parameter
// and returns an array containing:  all the keys from the object **and** all the
// values of the object.

// **Hint**: Use spread syntax to spread out elements into an array!

let breakDownObj = (obj) => {
    //Initalize two variables for keys and values with an Object dot method that identifies all keys and values in an object.
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    //return an array with the spread operator to populate the aray with all keys and values found from the previous step
    return [...keys, ...values]
}

let object1 = {name: 'Rupert', age: 5, speak: 'Meow'};
console.log(breakDownObj(object1)); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]

let object2 = {location: 'NY', borough: 'Brooklyn'};
console.log(breakDownObj(object2)); // => [ 'location', 'borough', 'NY', 'Brooklyn' ]
