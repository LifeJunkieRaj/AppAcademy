const assert = require('assert');

const keyValueDuplicates = require('../problems/01-key-value-duplicates.js');

describe('keyValueDuplicates()', function() {
    it('should return an array containing keys that duplicate values', function() {

        let obj1 = {"orange": "juice", "apple": "sauce", "sauce": "pan"}
        let result1 = keyValueDuplicates(obj1) // ["sauce"]
        assert.strictEqual(result1.length, 1)
        assert.notEqual(result1.indexOf("sauce"), -1)

        let obj2 = {"big": "foot", "foot": "ball", "ball": "boy", "boy": "scout"}
        let result2 = keyValueDuplicates(obj2) // ["foot", "ball", "boy"]
        assert.strictEqual(result2.length, 3)
        assert.notEqual(result2.indexOf("foot"), -1)
        assert.notEqual(result2.indexOf("ball"), -1)
        assert.notEqual(result2.indexOf("boy"), -1)

    });

    it('should not return duplicate values that do not match any keys', function() {

        let obj3 = {"pizza": "pie", "apple": "pie", "pumpkin": "pie"}
        let result3 = keyValueDuplicates(obj3) // ["sauce"]
        assert.strictEqual(result3.length, 0)
    });


});
