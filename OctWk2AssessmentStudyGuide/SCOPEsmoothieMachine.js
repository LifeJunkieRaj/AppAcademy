// Write a function named `smoothieMachine` that accepts any number of params and
// a function.

// The return function will also accept any number of params and will return a
// string including all of the parameters of smoothieMachine and the return
// function.

const smoothieMachine = (...ingredients) => {
  //We create a function that takes in any number of ingredients in an array using the rest parameter syntax
  return function (...moreIngredients) {
  //We now end the first function by creating and returning a new function that takes in more ingredients through an array
  //using the rest parameter syntax
    ingredients = ingredients.concat(moreIngredients);
  //We initialize a variable ingredients that takes the parameters that are passed into our smoothieMachine
  //rest parameter (...ingredients) and adds them to the rest parameters that are passed into our second function's
  //parameter's (...moreIngredients).  Because of scope chaining, we are able to reactivate smoothieMachine even
  //though it was "turned off" after our returning the second function with the (...moreIngredients).
    return "I'm having a smoothie with " + ingredients.join(" and ");
  //We return a custom string added to our reactivated ingredients array from smoothieMachine which are joined
  //with the string#join method which takes on an argument to put between the words it is joining which in this
  //case is " and "
  }
};

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
