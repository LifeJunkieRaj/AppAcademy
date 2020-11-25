// let addTwo = function(num) {

//     return num = num + 2;
// }
// console.log(addTwo(5))




// function asyncy(cb) {
//     setTimeout(cb, 1000);
//     console.log("async");
//   }

//   function greet() {
//     console.log("hello!");
//   }

//   asyncy(greet);



//   function far() {
//     console.log('farm!')
// }

// function boo() {
//     console.log('boop!');
//     setTimeout(far, 1000);
//     console.log('boop!');
// }

// setTimeout(boo, 1000);
// console.log('buzz');




function far() {
    console.log('farm!')
}


function boo() {
    console.log('boop!');
    far();
}

console.log('fizz');
setTimeout(boo, 1000);
console.log('buzz');

"fizz"
"buzz"
"boop!"
"farm!"
