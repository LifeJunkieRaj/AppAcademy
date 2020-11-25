// Write a function `doesKeyExist(obj, key)` that takes in an object and a
// key and returns true if the key is inside the object and false if the
// key is not inside the object.

let doesKeyExist = (obj, key) => {
    //Takes in an object parameter and string parameter
    if (obj[key] !== undefined) {
    //Conditional to check if object key is defined
        return true;
    //Return true if objec key is defined
    }
    return false;
    //Return false if not defined
}


let obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
console.log(doesKeyExist(obj1, 'course')); // => true
console.log(doesKeyExist(obj1, 'name')); // => false
