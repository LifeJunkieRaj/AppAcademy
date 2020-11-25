const assert = require("assert");
const shortestToLongest= require("../problems/03-shortest-to-longest.js");

describe("shortestToLongest()", function() {

  it("should sort an array of strings from shortest to longest", function() {
    let arr = ["abc", "de", "", "f", "ghijk", "lmno"];
    assert.deepStrictEqual(shortestToLongest(arr), ['', 'f', 'de', 'abc', 'lmno', 'ghijk']);
  });

  it("should accept a sorted default parameter and fill with sorted elements", function() {
    unsorted = ["pomegranate", "persimmon", "peach"]
    sorted = ["pea", "pear"]
    assert.deepStrictEqual(shortestToLongest(unsorted, sorted), ['pea', 'pear', 'peach', 'persimmon', 'pomegranate']);
  });

  it("should sort words of the same length alphabetically", function() {
    let animals = ["dog", "cat", "elephant", "ant", "pig", "emu"];
    assert.deepStrictEqual(shortestToLongest(animals), ['ant', 'cat', 'dog', 'emu', 'pig', 'elephant']);
  });

});
