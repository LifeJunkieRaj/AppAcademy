const assert = require("assert");
const myFilter = require("../problems/04-my-filter.js");

describe("myFilter", function() {
  it("", function() {
    let result1 = myFilter([5, 7, 4, 3, 8], function(n) {
      return n % 2 === 0;
    });
    assert.deepEqual(result1, [ 4, 8 ]);

    let result2 = myFilter(["choose", "big", "words", "only"], function(s) {
      return s.length > 3;
    });
    assert.deepEqual(result2, ['choose', 'words', 'only']);
  });
});
