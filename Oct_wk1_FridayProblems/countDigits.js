let countDigits = function(str) {
	let numbers = "12345667890";
    let count = 0;
    for (let i = 0; i <= str.length; i++) {
         if (numbers.includes(str[i])) {
		 count++
      }
    }
  return count;
}



console.log(countDigits("Tea for 2, 2 for tea")); // => 2
console.log(countDigits("l337 c0d3r")); // => 5
console.log(countDigits("July 4th, 1776")); // => 5
