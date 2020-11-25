// function foo() {
//     console.log("a");
//     bar();
//     console.log("e");
//   }

//   function bar() {
//     console.log("b");
//     baz();
//     console.log("d");
//   }

//   function baz() {
//     console.log("c");
//   }

//   console.log(setTimeout(foo, 2500));

function multiply(num1, num2) {
    // base case
    if (num2 == 0) return 0;
    if (num2 == 1) return num1;

    return num1 + multiply(num1, num2 - 1);
}
console.log(multiply(5, 3))  // 15
