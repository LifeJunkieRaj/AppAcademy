function employeeRaises(employees) {
    let newArr = [];
    for (let employee of employees) {
        if (employee.salary < 50000) {
            let tenpercent = employee.salary * 0.1;
            newArr.push(employee);
            newArr[newArr.length - 1].salary += tenpercent;
        }
    }
    return newArr;
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
let emp = employeeRaises(employees);
console.log(emp);
console.log(emp[0].name); // [ { name: 'Bob', salary: 44000 } ]
console.log(emp[0].salary);
