const assert = require("assert");
const myEvery = require("../problems/10-my-every.js");

describe("myEvery", function() {
  it("", function() {
    let isEven = function(num) {
      return num % 2 === 0;
    };

    let hasO = function(string) {
      return string.includes("o");
    };

    assert.equal(myEvery([4, 8, 6, 10], isEven), true);
    assert.equal(myEvery([4, 7, 6, 10], isEven), false);
    assert.equal(myEvery(["book", "door"], hasO), true);
    assert.equal(myEvery(["book", "door", "pen"], hasO), false);
  });
});
