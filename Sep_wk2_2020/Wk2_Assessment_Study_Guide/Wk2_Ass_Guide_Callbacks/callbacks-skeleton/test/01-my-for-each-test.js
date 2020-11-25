const assert = require("assert");
const myForEach = require("../problems/01-my-for-each.js");

describe("myForEach", function() {
  it("", function() {
    let test = [];
    myForEach(['laika', 'belka'], function (el) {
        test.push(el.toUpperCase());
    });
    assert.deepEqual(test, ['LAIKA', 'BELKA']);
  });
});
