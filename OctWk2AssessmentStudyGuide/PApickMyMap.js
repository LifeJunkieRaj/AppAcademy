// Write a function `pickyMyMap` that accepts an array and a callback as
// arguments. The function should call the callback for each element of the
// array, passing in the element and return a new array of the results of
// each call to the callback function. If the result of the callback function
// returns something falsey, then do not add it in the result array.

// You may not use Array's `map()`, `filter()`, or `forEach()` methods.


let pickyMyMap = function(array, cb) {
	let newArr = [];
	for (let i = 0; i <= array.length; i++) {
			let result = cb(array[i])
			if (result){
			newArr.push(result);
		}
	}
	return newArr;
}

const nums = [1, 2, 3, 4];
pickyMyMap(nums, (num) => num - 2); // [-1, 1, 2]

const booleans = [true, false, true, false, true];
pickyMyMap(booleans, (boolean) => !boolean); // [true, true]
