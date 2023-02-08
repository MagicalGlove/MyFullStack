function Employee(name, salary, hireDate) {
    this.name = name;
    this.salary = salary;
    this.hireDate = hireDate; //"01/01/2015"
}

function Manager(jobTitle, descriptionOfJob, employeesManaged) {
    this.jobTitle = jobTitle;
    this.descriptionOfJob = descriptionOfJob; //"Manager of the Sales Department"
    this.employeesManaged = employeesManaged;
}

function Department(departmentName, employees) {
    this.departmentName = departmentName;
    this.employees = employees; // ["Steve", "Marc"]
}

function Contract(name, salary, hireDate, jobTitle, descriptionOfJob, employeesManaged, departmentName, employees) {
    Employee.call(this, name, salary, hireDate);
    Manager.call(this, jobTitle, descriptionOfJob, employees.length);
    Department.call(this, departmentName, employees);
}

