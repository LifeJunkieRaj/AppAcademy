// function eCounter(word) {
//     let count = 0;

//     for (let index = 0; index < word.length; index++) {
//       let char = word[index];
//       if (char === "e" || char === "E") {
//         count += 1;
//       }
//     }

//     return count;
//   };

function eCounter(word) {
    let count = 0;
    let i = 0;
    while (i < word.length) {
        let char = word[i];
        if (char === "e" || char === "E") {
            count += 1;
        }
        i++;
    }
    return count;
};

  console.log(eCounter("apple")); // => 1
  console.log(eCounter("appleapple")); // => 2
  console.log(eCounter("Appleee")); // => 3
