const assert = require('assert');

const salesTax = require('../problems/04-sales-tax.js');

describe('salesTax()', function() {
    it('should a return a string with 9% sales tax for a collection of integer prices', function() {

        assert.strictEqual(salesTax(30, 70), '$9.00')

    });

    it('should a return a rounded string with 9% sales tax for a collection of floating point prices', function() {

        assert.strictEqual(salesTax(1.12, 2.23, 3.34, 4.45), '$1.00')
        assert.strictEqual(salesTax(4.99, 9.99, 19.99), '$3.15')

    });


});
