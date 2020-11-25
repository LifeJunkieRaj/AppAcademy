// Create a Parent Class
// This problem is worth 1 points.
// You may receive partial credit.
// Define a Person class that has a constructor and a method named getLastName that makes the code work.

/* YOUR PERSON CLASS HERE */


class Employee extends Person {
    constructor(lastName, firstName, employeeId) {
      super(lastName, firstName);
      this.employeeId = employeeId;
    }

    toString() {
      return `${this.employeeId}: ${this.getLastName()}`;
    }
  }

  const a = new Employee('Alvarez', 'Ana', 'A1');
  const b = new Employee('Bazmani', 'Bey', 'B2');

  console.log(a.toString()); // => "A1: Alvarez"
  console.log(b.toString()); // => "B2: Bazmani"
