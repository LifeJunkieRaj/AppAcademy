const assert = require("assert");
const myMap = require("../problems/02-my-map.js");

describe("myMap", function() {
  it("", function() {
    let result1 = myMap([100, 25, 81, 64], Math.sqrt);
    assert.deepEqual(result1, [ 10, 5, 9, 8 ]);

    let result2 = myMap(["run", "Forrest"], function(el) {
      return el.toUpperCase() + "!";
    });
    assert.deepEqual(result2, [ 'RUN!', 'FORREST!' ]);
  });
});
