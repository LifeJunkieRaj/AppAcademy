// // Write a function named: interrupter(interruptingWord). The interrupter function will
// // accept a word and return a function. When the function returned by interrupter
// // is invoked with a string the string will be returned with "interruptions".

// const interrupter = (interruptingWord) => {
//     return function (sentence) {
//         let words = sentence.split(" ");
//         let newSentence = "";

//         for (let i = 0; i < words.length; i++) {
//             const word = words[i];
//             if (i === words.length - 1) {
//                 newSentence += word;
//             } else {
//                 newSentence += word + " " + interruptingWord + " ";
//             }
//         }
//         return newSentence.join(" ")
//     }
// }

// let rudePerson = interrupter("what"); // => returns a function
// console.log(rudePerson("how are you")); // prints "how what are what you"
// console.log(rudePerson("I like pie")); // prints "I what like what pie"

// let rudePerson2 = interrupter("yo"); // => returns a function
// console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"

function catSound() {
    var sound = "meow";
    return sound;
  }

  function dogSound() {
    var sound = "bark";
    return sound;
  }

  let noise1 = catSound();
  let noise2 = dogSound();

  console.log(noise1 === noise2); // ???
