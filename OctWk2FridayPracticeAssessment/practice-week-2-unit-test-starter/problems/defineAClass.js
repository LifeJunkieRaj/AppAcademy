// Define a Class
// This problem is worth 1 points.
// You may receive partial credit.
// Write a class Beverage with a constructor that takes two values, the name and if it's carbonated. Create a toString method that returns "«name» fizzzz." if it is carbonated and "«name»" if it is not.

/* YOUR CLASS HERE */


const cola = new Beverage('Cola', true);
const gasWater = new Beverage('Water', true);
const flatWater = new Beverage('Water', false);

console.log(cola.toString()) // => "Cola fizzzz."
console.log(gasWater.toString()) // => "Water fizzzz."
console.log(flatWater.toString()) // => "Water"
