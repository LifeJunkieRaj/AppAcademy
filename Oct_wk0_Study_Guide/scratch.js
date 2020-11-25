// 42 == "42" // <== This is true
// 42 === "42"  // <=== That is false
// 42 = "42" // <== This is an assignment

// index++
// index = index + 1

// i++
// i = i + 1
// i += 1

let testString = "testing";

// We can use the testString's length as our condition!
// Since we know the testString's index starts at 0
// and our index starts at 0 we can access each letter:
for (let index = 0; index < testString.length; index += 1) {
  let letter = testString[index];
  console.log(letter);
}
