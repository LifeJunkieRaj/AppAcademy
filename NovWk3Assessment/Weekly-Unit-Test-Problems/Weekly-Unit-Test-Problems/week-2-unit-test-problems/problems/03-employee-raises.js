/*******************************************************************************

Your company is giving every employee earning less than $50,000 a 10% raise!

Write a function `employeeRaises(peopleObj)` that takes an array of objects
containing employee names and their salaries and returns an array containing
the employees that need raises, along with their new salaries.

Hint: It might be useful to create helper functions for this task.

Example:


*******************************************************************************/
// let newSalary = employees.salary * 1.10
// console.log(newSalary)

let employeeRaises = (peopleObj) => {
    let newArr = []

    for (let i = 0; i < peopleObj.length; i++) {

        if ((peopleObj[i].salary < 50000)) {
            let newObj = {};
            newObj["name"] = peopleObj[i].name;
            newObj["salary"] = peopleObj[i].salary * 1.10

            newArr.push(newObj)
        }
    }
    return newArr
}

employees = [{ name: "Alice", salary: 80000 },
{ name: "Bob", salary: 40000 },
{ name: "Carol", salary: 60000 },
{ name: "Dan", salary: 70000 },
{ name: "Ellen", salary: 100000 }]

console.log(employeeRaises(employees)); // [ { name: 'Bob', salary: 44000 } ]


/*****************DO NOT MODIFY ANYTHING UNDER THIS LINE**********************/
module.exports = employeeRaises;
