class Employee {
    constructor(name, salary, hireDate) {
        this.name = name;
        this.salary = salary;
        this.hireDate = hireDate;
    }

    toString() {
        return `Employee: ${this.name}, Salary: ${this.salary}, Hire Date: ${this.hireDate}`
    }

}

class Manager extends Employee {
    constructor(name, salary, hireDate, jobTitle, descriptionOfJob, employeesManaged) {
        super(name, salary, hireDate);
        this.jobTitle = jobTitle;
        this.descriptionOfJob = descriptionOfJob; //"Manager of the Sales Department"
        this.employeesManaged = employeesManaged;
    }

    toString() {
        return `JobTitle: ${this. jobTitle}, DescriptionOfJob: ${this.descriptionOfJob}, Employees Managed: ${this.employeesManaged}`;
    }

}

class Department extends Manager {
    constructor(name, salary, hireDate, jobTitle, descriptionOfJob, employeesManaged, departmentName, employees) {
        super(name, salary, hireDate, jobTitle, descriptionOfJob, employeesManaged);
        this.departmentName = departmentName;
        this.employees = employees;
    }
    toString() {
        return `${super.toString()}Department Name: ${
            this.departmentName
        }, Employees: ${this.employees}`;
    }

}

class Contract extends Department {
    constructor(name, salary, hireDate, jobTitle, descriptionOfJob, employeesManaged, departmentName, employees, ) {
        super(name, salary, hireDate, jobTitle, descriptionOfJob, employeesManaged, departmentName, employees);

    }


}

const manager = new Manager(
    'Steve Taylor',
    50000,
    '01/01/2015',
    'Manager',
    'Manager of the Sales Department',
    2,
);

const department = new Department(
    'Steve Taylor',
    50000,
    '01/01/2015',
    'Manager',
    'Manager of the Sales Department',
    2,
    'Sales',
    'John Smith, Jane Doe',
);

console.log(department.toString());

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const persons = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
];

// 3) Loop through the numbers array and the employee object and print out the values using the propper for loop method. (for-in, for-of)

// for of loop
for (const number of numbers) {
    console.log(number);
}

for (const person of persons) {
    console.log(person);
}