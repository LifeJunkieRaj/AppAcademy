// Here are some practice JS coding problems just for fun!
// Shout out to the hero Wes Bos(@wesbos) for coming up with these questions as part of his JavaScript30 course!
// Don't worry too much about checking out that course until you're a little farther in the program 😉

//Wherever it says Array.prototype.methodName, that just means we call that methodName on an array, like so: [1,2,3].methodName().
// We'll cover what a "prototype" actually is later in the course.
// Don't be afraid to check out the MDN docs if you're curious about what a method does!

// Round ONE!

// const inventors = [
//   { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
//   { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
//   { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
//   { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
//   { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
//   { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
//   { first: "Max", last: "Planck", year: 1858, passed: 1947 },
//   { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
//   { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
//   { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
//   { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
//   { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
// ];

// const people = [
//   "Beck, Glenn",
//   "Becker, Carl",
//   "Beckett, Samuel",
//   "Beddoes, Mick",
//   "Beecher, Henry",
//   "Beethoven, Ludwig",
//   "Begin, Menachem",
//   "Belloc, Hilaire",
//   "Bellow, Saul",
//   "Benchley, Robert",
//   "Benenson, Peter",
//   "Ben-Gurion, David",
//   "Benjamin, Walter",
//   "Benn, Tony",
//   "Bennington, Chester",
//   "Benson, Leana",
//   "Bent, Silas",
//   "Bentsen, Lloyd",
//   "Berger, Ric",
//   "Bergman, Ingmar",
//   "Berio, Luciano",
//   "Berle, Milton",
//   "Berlin, Irving",
//   "Berne, Eric",
//   "Bernhard, Sandra",
//   "Berra, Yogi",
//   "Berry, Halle",
//   "Berry, Wendell",
//   "Bethea, Erin",
//   "Bevan, Aneurin",
//   "Bevel, Ken",
//   "Biden, Joseph",
//   "Bierce, Ambrose",
//   "Biko, Steve",
//   "Billings, Josh",
//   "Biondo, Frank",
//   "Birrell, Augustine",
//   "Black, Elk",
//   "Blair, Robert",
//   "Blair, Tony",
//   "Blake, William",
// ];

// // Array.prototype.filter()
// // 1. Filter the list of inventors(above) for those who were born in the 1500's
// inventors.filter(inventors => {
//   if(inventors.year > 1499 && inventors.year < 1600) {
//      console.log(inventors.first + " " + inventors.last)
//   }
// })

// // Array.prototype.map()
// // 2. Give us an array of the inventors first and last names
// inventors.map(inventors => {
//   console.log(inventors.first + " " + inventors.last)
// })

// // Array.prototype.sort()
// // 3. Sort the inventors by birthdate, oldest to youngest
// let inventorPeople = inventors.sort((person1, person2) => {
//     return person1.year - person2.year
// })
// console.log(inventorPeople)

// // Array.prototype.reduce()
// // 4. How many years did all the inventors live all together(sum of all their ages)?
// let total = inventors.reduce((totalAge, person) => {
//   return totalAge + (person.passed - person.year)
// }, 0)
// console.log(total)

// // 5. Sort the inventors by total years lived
// let yearsLived = inventors.sort((person1, person2) => {
//   let persons1 = (person1.passed - person1.year)
//   let persons2 = (person2.passed - person2.year)
//   return yearsLiving = (persons1 - persons2)
// })
// console.log(yearsLived)

// // 6. sort Exercise
// // Sort the `people` alphabetically by last name
// let lastName = inventors.sort((person1, person2) => {
//   return person1.last < person2.last ? -1: person1.last > person2.last? 1: 0
// })
// console.log(lastName)
// // 7. Reduce Exercise
// // Sum up the instances of each of these words in this data array(how many of each?), then
// // Return an object with each word(key) pointing to the number of times it occurs in the array(value).
// const data = [
//   "car",
//   "car",
//   "truck",
//   "truck",
//   "bike",
//   "walk",
//   "car",
//   "van",
//   "bike",
//   "walk",
//   "car",
//   "van",
//   "car",
//   "truck",
// ];
// let objectSorter = array => {
//   let obj = {};
//   for (let i = 0; i < array.length; i++) {
//         let transport = array[i];
//         if(obj[transport] === undefined) {
//             obj[transport] = 1;
//         } else {
//             obj[transport] += 1;
//         }
//   }
//   return obj;
// }
// console.log(objectSorter(data));

// Round TWO!
const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
let nineteenChecker = people.some(person => {
  return person.year <= 2001
})
console.log(nineteenChecker)

// Array.prototype.every() // is everyone 19 or older?
let nineteenVerify = people.every(person => {
  return person.year <= 2001
})
console.log(nineteenVerify)

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
let tagFinder = comments.find(comment => comment.id === 823423)
console.log(tagFinder)

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423 // *hint* there might be a couple different array methods that can help us with this one



// // ROUND 3!
// //

// // Here are some practice problems that we came up with and some `console.log` test cases to accompany them.
// // Enjoy!

// // write a function rollCall(array) that
// // takes in an array of people objects, and returns a string with the names of all the people separated by " and "
// // now write that function so that it returns a function that when called later on, will add names to that same string and return the new string every time
// // Bonus: if you can write it such that the returned function can take in one or multiple person arguments at a time to add to the roll call string

// function rollCall(arr) {
//   //
// }

// let people = [
//   { name: "Maggie", faveColor: "colorful" },
//   { name: "Kush", dog: "fluffy" },
//   { name: "Morgan", height: "tall" },
// ];
// function rollCall(peopleArr) {
//   //
// }

// console.log(rollCall(people)); // "Maggie and Kush and Morgan"

// // where your rollCall function returns another function
// let extraAttendance = rollCall(people);
// console.log(extraAttendance("Joe")); // "Maggie and Kush and Morgan and Joe"
// console.log(extraAttendance("Ashton")); // "Maggie and Kush and Morgan and Joe and Ashton"
// //
// //




// //
// // write a function that
// // receives a string and creates an object with each letter in the string set to a key in that object and the value being the index the letter is found at last
// // now write it so that the value is the index the letter is found at first(ignores the second occurrence of the same letter)
// //
// function vowelFinder(string) {
//   //
// }





// // last vowel appearance index
// console.log(vowelFinder("aardvark")); // {a: 5}
// console.log(vowelFinder("appreciate")); // {i: 6, a: 7, e: 9}
// console.log(vowelFinder("kjsfhsdkj")); // {}

// // first vowel appearance index
// console.log(vowelFinder("aardvark")); // {a: 0}
// console.log(vowelFinder("appreciate")); // {i: 6, a: 0, e: 4}
// console.log(vowelFinder("kjsfhsdkj")); // {}
// //


// //
// //
// // write a function that receives an array of ticket numbers(ie: [74, 82, 13, 133, 65])
// // it should return a function that receives a single person's name(string)
// // once you've given out all the ticket numbers,(one for each person's name)
// // return a pojo that has each person's name pointing to their ticket number

// function ticketMachine(arr) {
//   //
// }

// let ticketBot = ticketMachine([74, 82, 133, 65]);

// console.log(ticketBot("Corina")); // undefined
// console.log(ticketBot("Tom")); // undefined
// console.log(ticketBot("Emily")); // undefined
// console.log(ticketBot("Justin")); // {Corina: 74, Tom: 82, Emily: 133, Justin: 65}

// // write a function that receives three pojos as arguments
// // join these three objects together in the correct `.order` based on the `.order` property given
// let object1 = {
//   name: "name1",
//   continent: "asia",
//   favoriteToy: "basketball",
//   order: 3,
// };
// let object2 = {
//   name: "name2",
//   age: 724,
//   dogName: "Zorro",
//   favoriteToy: "frying pan",
//   order: 1,
// };
// let object3 = {
//   name: "name3",
//   age: 52,
//   favoriteToy: "nintendo",
//   order: 2,
// };

// function objectFusion(obj1, obj2, obj3) {
//   //
// }

// console.log(objectFusion(object1, object2, object3)); //{ name: "name1", dogName: "Zorro", age: 52, continent: "asia", favoriteToy: "basketball", order: 3, }
// //





// //
// // write a function that receives a suffix object --> {"a": "!a!", "e": ":( :( :(", "i": "<3 <3", "o": " Wo0o0o0oW", "u": "......"}
// // and returns another function that expects a string
// //    this function should return a new string with a different suffix added to it depending on which vowel it ends with
// // it should return the original string if there is no vowel at the end of the word

// function suffixAddition(suffixObj) {
//   //
// }

// let suffix = {
//   a: "!a!",
//   e: " :( :( :(",
//   i: "<3 <3",
//   o: " Wo0o0o0oW",
//   u: "......",
// };
// let formatter = suffixAddition(suffix);

// console.log(formatter("apple")); // "apple :( :( :("
// console.log(formatter("data")); // "data!a!"
// console.log(formatter("rodeo")); // "rodeo Wo0o0o0oW"
// console.log(formatter("peach")); // "peach"



// //
// //
// //
// //
// let testObject = {
//   key1: "value1",
//   key2: ["firstElement", 2, { something: "new" }],
//   key3: {
//     inner: "how did I get here?",
//     inception: {
//       deeper: "this is crazy",
//     },
//   },
// };
// // how could you destructure the object above to:
// // - make a variable `key1` that points to "value1"
// console.log(key1); // "value1"

// // - make a variable `something` that points to "new"
// console.log(something); // "new"

// // - make a variable `inception` that points to {deeper: "this is crazy"}
// console.log(inception); // {deeper: "this is crazy"}

// // - make a variable `deeper` that points to "this is crazy"
// console.log(deeper); // "this is crazy"

// // - make a variable `banana` that points to { inner: "how did I get here?", inception: { deeper: "this is crazy"} }
// console.log(banana); // { inner: "how did I get here?", inception: { deeper: "this is crazy"}}

// // - make some variables `joe`, `jesse`, `aa` that point to "firstElement", 2, {something: "new"} respectively
// console.log(joe); // "firstElement"
// console.log(jesse); // 2
// console.log(aa); // {something: "new"}

// // think about some stuffs
// // can you explain the difference between scope chaining and closure?
// // can you describe when you would use const vs let vs var? what do each do?
// // can you explain the difference between rest and spread?
// // can you explain what a callback is?
// // can you explain how the callback passed into the `.reduce` function is used by reduce?
