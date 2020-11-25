let hasAllIngredients = function(recipe, ingredients) {
    for (let i = 0; i < recipe.length; i++)
      if (!ingredients.includes(recipe[i])) {
          return false;
          }
      return true;
}


recipe = ["eggs", "flour", "milk", "sugar"]

console.log(hasAllIngredients(recipe, ["eggs", "bacon", "sausage"])); // false
console.log(hasAllIngredients(recipe, ["eggs", "milk", "flour", "sugar"])); // true
console.log(hasAllIngredients(recipe, ["eggs", "baking soda", "milk", "flour", "sugar"])); // true
