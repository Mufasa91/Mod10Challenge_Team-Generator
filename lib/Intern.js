// Importing the Employee class from the Employee.js file in the same directory

const Employee = require("./Employee");

// Defining the Intern class that extends the Employee class
// Calling the constructor of the Employee class and passing in name, id, and email as arguments
// Adding the school property to the Intern object
// Exporting the Intern class

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;        
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern"
    }
}

module.exports = Intern;
