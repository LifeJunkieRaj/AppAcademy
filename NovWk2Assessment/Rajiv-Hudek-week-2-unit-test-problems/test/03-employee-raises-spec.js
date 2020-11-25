const assert = require('assert');

const employeeRaises = require('../problems/03-employee-raises.js');

describe('employeeRaises()', function() {
    it('should return all employees making less than 50000 with a 10% salary raise', function() {

        employees = [{name: "Alice", salary: 80000},
                     {name: "Bob", salary: 40000},
                     {name: "Carol", salary: 60000},
                     {name: "Dan", salary: 70000},
                     {name: "Ellen", salary: 100000}]

        assert.deepStrictEqual(employeeRaises(employees), [ { name: 'Bob', salary: 44000 } ])

    });

    it('should not give a raise to someone making 50000', function() {

        employees = [{name: "Egbert", salary: 50000}]

        assert.deepStrictEqual(employeeRaises(employees), [])

    });

});
