// Write a function `getFullName(person)` that takes in an person object
// and returns a string containing their full name.

let getFullName = (person) => {
    return person.firstName + " " + person.lastName
}



let p1 = {firstName: 'John', lastName: 'Doe'};
console.log(getFullName(p1)); // => 'John Doe'
let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
console.log(getFullName(p2)); // => 'Charlie Brown'
