/*******************************************************************************

Your company is giving every employee earning less than $50,000 a 10% raise!

Write a function `employeeRaises(peopleObj)` that takes an array of objects
containing employee names and their salaries and returns an array containing
the employees that need raises, along with their new salaries.

Hint: It might be useful to create helper functions for this task.

Example:

employees = [{name: "Alice", salary: 80000},
             {name: "Bob", salary: 40000},
             {name: "Carol", salary: 60000},
             {name: "Dan", salary: 70000},
             {name: "Ellen", salary: 100000}]

console.log(employeeRaises(employees)); // [ { name: 'Bob', salary: 44000 } ]
*******************************************************************************/
// Plan
// We need to iterate through the object
// We need to pick out any employee that makes less than $50,000
// We need to push that employee and their salary into a new array
// We need to make sure the salary has been updated with the promotion
// We need to return that array

// Your company is giving every employee earning less than $50,000 a 10% raise!

// Write a function `employeeRaises(peopleObj)` that takes an array of objects
// containing employee names and their salaries and returns an array containing
// the employees that need raises, along with their new salaries.

// Hint: It might be useful to create helper functions for this task.

let employeeRaises = (peopleObj) => {
    let arr = [];
    peopleObj.forEach(emps => {
        if (emps.salary < 50000) {
            arr.push(emps)
        }
    })
    let raiseMaker = arr.map(el => {
        el.salary *= 1.1
        return el
    })
    return raiseMaker
}

employees = [{
        name: "Alice",
        salary: 80000
    },
    {
        name: "Bob",
        salary: 40000
    },
    {
        name: "Carol",
        salary: 60000
    },
    {
        name: "Dan",
        salary: 70000
    },
    {
        name: "Ellen",
        salary: 100000
    }
]

console.log(employeeRaises(employees)); // [ { name: 'Bob', salary: 44000 } ]

/*****************DO NOT MODIFY ANYTHING UNDER THIS LINE**********************/
module.exports = employeeRaises;
