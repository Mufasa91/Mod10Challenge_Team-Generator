// Define a class called Employee
// Define a constructor that accepts name, id, and email parameters
// Assigns the name, id, and email values to properties of the class
// Export the Employee class so that it can be used in other modules

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee"
    }
}

module.exports = Employee;