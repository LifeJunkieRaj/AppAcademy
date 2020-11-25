const assert = require('assert');

const mostFrequentLetter = require('../problems/02-most-frequent-letter.js');

describe('mostFrequentLetter()', function() {
    it('should return the most frequent letter in a word string', function() {

        assert.strictEqual(mostFrequentLetter("apple"), "p")
        assert.strictEqual(mostFrequentLetter("banana"), "a")

    });

    it('should return the most frequent non-letter character in a string', function() {

        assert.strictEqual(mostFrequentLetter("What about a longer string?"), " ")
    });


});
