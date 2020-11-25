// [*] Understand the problem
// [*] Plan
// [*] Execute
// [*] Refactor / Improve
// Plan
// [*] define the function
// [*] initialize a variable to 0 that stores the sum
// [*] for loop
	// [*] nested for loop
		// [*] add each element in each subarray to the sum variable
// [*] return the sum
// define the function
const twoDimensionalSum = function(arr) {
    // initialize a variable to 0 that stores the sum
    let sum = 0;
    // iterate through each row of the array using a for loop
    for (let i = 0; i < arr.length; i++) {
      let subArray = arr[i]
      for(let j = 0; j < subArray.length; j++) {
        let element = subArray[j]
        // add each element in each subarray to the sum variable
        // sum += element
        sum = sum + element
      }
    }
    // return the sum
    return sum
  }
  let arr1 = [
    [1, 3],
    [-4, 7, 10],
    [2]
  ];
  console.log(twoDimensionalSum(arr1)); // 19
  let arr2 = [
      [],
      [3, 1, 2],
  ];
  console.log(twoDimensionalSum(arr2)); // 6
