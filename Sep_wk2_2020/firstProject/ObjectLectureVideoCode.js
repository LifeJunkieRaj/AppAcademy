//
//
// // Object Lecture Video Code
//
// //bracket notation
// let bracketObj = {};
// bracketObj["apple"] = "yay!";
// console.log('bracketObj["apple"]: ' + bracketObj["apple"]);
// //dot notation
// let dotObj = {};
// dotObj.apple = "yay!";
// console.log("dotObj.apple: " + dotObj.apple);
// //testObject
// let testObject = {};
// testObject["num"] = 10;
// testObject.num2 = 20;
// console.log('\ntestObject["num"]: ' + testObject["num"]);
// console.log("testObject.num2: " + testObject.num2 + "\n");
// //accessing a key that doesn't exist
// console.log("testObject[0]: " + testObject[0]);
// //setting a variable using Bracket Notation
// let varObj = {};
// let string = "apple";
// varObj[string] = "yay!";
// console.log("\nvarObj[string]: " + varObj[string]);
// console.log("varObj['apple']: " + varObj["apple"]);
//
//
// // Primitive vs Reference Video Code
//
// //Primitives are Immutable
// let word1 = 'dog';
// let newWord1 = word1.toUpperCase();
// console.log(word1); //Notice that word1 does not change
// console.log(newWord1);
// //Pointing a second variable at a reference type
// let cat1 = {name: 'apples', breed:'tabby'};
// let cat2 = cat1;
// cat1.name = 'Lucy'
// console.log('Cat 2\'s name: ', cat2.name);
// //Notice that cat2 changed with cat1
//
//
// // Object Destructuring Video Code
//
// // Array Destructuring:
// // 1. Destructuring Elements in Order
// //not destructured
// let array = ['blue', 'red', 'yellow', 'green', 'pink']
// let firstColor = array[0]
// let secondColor = array[1]
// console.log(firstColor, secondColor) //blue, red
// //destructured
// let [desFirstColor, desSecondColor] = array
// console.log(desFirstColor, desSecondColor) //blue, red
// //Object Destructuring:
// let obj = { name: 'Sandy', instruments: ["guitar", "uke"] }
// // let { name, instruments } = obj
// let { name, instruments: music } = obj //does the same as the above comment, but aliases instruments to 'music'
// console.log(name) //Sandy
// // console.log(instruments) //["guitar", "uke"]
// console.log(music) //["guitar", "uke"]
// //Nested Destructuring
// let zooAnimals = {
//     animalId: 12,
//     species: 'hippo',
//     favoriteFood: 'watermelon',
//     fullName: {
//         fname: "Fiona",
//         lname: "theCuteHippo"
//     }
// }
// let { fullName: { fname, lname } } = zooAnimals;
// console.log(fname);
// console.log(lname)
// //Destructuring Objects in Parameters
// let parrot = { name: 'Layla', likes: 'pets', toys: 1000 };
// function sayHelloName(name){
//     console.log('Hello to ' + name.name)
// }
// sayHelloName(parrot)
// function sayHelloName2({ name }){
//     console.log('Hello to ' + name)
// }
// sayHelloName2(parrot)
// function sayLikes({likes}){
//     console.log(likes)
// }
// sayLikes(parrot)
//
// //
// // Spread and Rest Video Code
// //
// //Rest and Spread
// //1. Rest Parameters - grab the rest of the parameters.
// //2. Spread Operator:
// //  a. spread elements into data structures
// //  b. spread iterable data types within function arguments
// //Rest Parameters
// function colorPicker(color, ...otherColors){
//     let string = "I picked the following colors: " + color;
//     // console.log(otherColors)
//     otherColors.forEach(function(arg){
//         string = string + ', ' + arg
//     })
//     return string;
// }
// console.log(colorPicker('red', 'blue', 'yellow'))
// //Spread Operator
// let array1 = [ 'zebra', 'bird', 'parrot' ];
// let array2 = [ 'lion', 'bison', 'panther' ];
// let array3 = [ ...array1, ...array2 ]
// console.log(array3)
// let obj1 = { car: 'Nissan', color: 'white' };
// let obj2 = { wheels: 4, radio: 'loud' };
// let obj3 = { ...obj1, ...obj2 };
// console.log(obj3)
// //Spread into functions
// function colorPicker2(color, colorTwo){
//     return "I picked the following colors: " + color + " and " + colorTwo;
// }
// let colorArray = ['indigo', 'goldenrod']
// console.log(colorPicker(...colorArray))
