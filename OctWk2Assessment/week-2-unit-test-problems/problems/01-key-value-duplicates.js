/***********************************************************************
Write a function `keyValueDuplicates(obj)` that takes an object as
an argument and returns an array containing all keys that are also
values in that object.

Examples:

obj1 = {"orange": "juice", "apple": "sauce", "sauce": "pan"}
keyValueDuplicates(obj1) // ["sauce"]

obj2 = {"big": "foot", "foot": "ball", "ball": "boy", "boy": "scout"}
keyValueDuplicates(obj2) // ["foot", "ball", "boy"]

obj3 = {"pizza": "pie", "apple": "pie", "pumpkin": "pie"}
keyValueDuplicates(obj3) // []


***********************************************************************/

let keyValueDuplicates = (obj) => {
	let arr = [];
	let values = Object.values(obj);
	let keys = Object.keys(obj);
	keys.forEach(key => {
		if (values.includes(key))
		arr.push(key)
	})
return arr;
}

obj1 = {
	"orange": "juice",
	"apple": "sauce",
	"sauce": "pan"
}
console.log(keyValueDuplicates(obj1)) // ["sauce"]

obj2 = {
	"big": "foot",
	"foot": "ball",
	"ball": "boy",
	"boy": "scout"
}
console.log(keyValueDuplicates(obj2)) // ["foot", "ball", "boy"]

obj3 = {
	"pizza": "pie",
	"apple": "pie",
	"pumpkin": "pie"
}
console.log(keyValueDuplicates(obj3)) // []



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyValueDuplicates;
