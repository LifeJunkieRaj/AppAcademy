// function printFives(max) {
//     for (let i = 0; i < max; i = i + 5) {
//         console.log(i);
//     }
// }

// function printFives(max) {
//     for (let i = 0; i < max; i++) {
//         if (i % 5 === 0) {
//             console.log(i);
//         }
//     }
// }

// function printFives(max){
//     let i = 0;
//     while (i < max) {
//        if (i % 5 === 0) {
//            console.log(i);
//        }
//        i++;
//     }
// }

function printFives(max) {
    let i = 0;
    while (i < max) {
      console.log(i);
      i += 5;
    }
  }


printFives(20) // prints out:
0
5
10
15
