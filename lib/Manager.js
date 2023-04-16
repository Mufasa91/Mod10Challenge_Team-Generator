// Importing the Employee class from the Employee.js file in the same directory

const Employee = require("./Employee");

// Defining the Mangaer class that extends the Employee class
// Calling the constructor of the Employee class and passing in name, id, and email as arguments
// Adding the officeNumber property to the Manager object
// Exporting the Manager class

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;