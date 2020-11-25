const assert = require("assert");
const mySome = require("../problems/07-my-some.js");

describe("mySome", function() {
  it("", function() {
    let result1 = mySome([5, 1, 7, 9], function(ele, i) {
      return ele === i;
    });
    assert.equal(result1, true);

    let result2 = mySome([5, 3, 7, 9], function(ele, i) {
      return ele === i;
    });
    assert.equal(result2, false);

    let result3 = mySome(["soup", "noodles", "bike", "ship"], function(ele) {
      return ele.length === 4;
    });
    assert.equal(result3, true);
  });
});
