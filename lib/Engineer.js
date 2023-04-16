// Importing the Employee class from the Employee.js file in the same directory

const Employee = require("./Employee");

// Defining the Engineer class that extends the Employee class
// Calling the constructor of the Employee class and passing in name, id, and email as arguments
// Adding the github property to the Engineer object
// Exporting the Engineer class

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }

}

module.exports = Engineer;

