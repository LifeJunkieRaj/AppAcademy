const assert = require("assert");
const dynamicRotate = require("../problems/01-dynamic-rotate.js");

describe("dynamicRotate()", function() {
  it("should return a function", function() {
    assert.equal(dynamicRotate(3) instanceof Function, true)
  });

  it("should rotate right with positive numbers", function() {
    const rotateRightTwo = dynamicRotate(2);
    let arr = [1,2,3,4,5,6,7,8,9];
    rotateRightTwo(arr);
    assert.deepStrictEqual(arr, [8,9,1,2,3,4,5,6,7]);
  });

  it("should rotate left with negative numbers", function() {
    const rotateLeftThree = dynamicRotate(-3);
    let arr = [1,2,3,4,5,6,7,8,9];
    rotateLeftThree(arr);
    assert.deepStrictEqual(arr, [4,5,6,7,8,9,1,2,3]);
  });
});
