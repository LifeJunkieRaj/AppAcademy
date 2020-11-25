let checkUpperCase = function(arr) {
	let bigCaseArr = [];
  	let words = arr.join(" ");
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (let i = 0; i < words.length; i++) {
         let word = words[i];
         if (upperCase.includes(word)) {
           console.log(addLowerExclamation(word))
      } else {
          return word
      }
    }
    let lilWords = word.split(" ")
    return bigCaseArr.push(lilWords + "<== You're not exciting!!! XD");
}


let addLowerExclamation = function(word) {
    return word.toLowerCase() + "!"
}

console.log(checkUpperCase(["hello", "Sex", "austere", "Buddha"]));














// let spiralOrder = function(matrix) {
//     let newArr = [];
//     let height = matrix.length
//     let width = matrix[0].length
//     for (let i = 0; i <= height; i++) {
//         console.log(matrix[0])
//         for (let j = 0; j <= width; j++) {
//             console.log(matri[0])
//         }

//     }
// }



// matrix = [[ 1, 2, 3],
//          [ 4, 5, 6],
//          [ 7, 8, 9]]
// // matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]
