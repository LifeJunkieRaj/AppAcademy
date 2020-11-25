// Write a function `setKeyInObject(obj, string, value)` that takes in three
// parameters. The first parameter is an object, the second parameter will be a
// string and the third parameter will be a value. Your job is to return the object
// adding the second parameter as a key using the third parameter as its value.

let setKeyInObject = (obj, string, value) => {
   let key = string;
   obj[key] = value
   return obj
}

let obj = {}
console.log(setKeyInObject(obj, "apple", "yum")); // => {apple: "yum"}

let obj1 = {str: "hello"}
console.log(setKeyInObject(obj1, "num", 3)); // => {str: "hello", num: 3}
