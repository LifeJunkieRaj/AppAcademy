// Write a function printObject(obj) that prints out all key-value pairs of an object. The format should be key - value.

// HINT: use a for loop

function printObject(obj) {
    for (let key in obj) {
        let values = obj[key];
        console.log(key + " " + values)
    }
  }

  let bootcamp = {
    name: "App Academy",
    color: "Red",
    population: 120
  };

  printObject(bootcamp); // prints
  // name - App Academy
  // color - Red
  // population - 120
