const Manager = require("../lib/Manager");

test("Can create an office number.", () => {
    const testOfficeNumber = 1;
    const employeeInstance = new Manager("Frank", 1, "frank@gmail.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Testing officeNumber will return office number.", () => {
    const testOfficeNumber = 1;
    const employeeInstance = new Manager("Frank", 1, "frank@gmail.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Frank", 1, "frank@gmail.com", 1);
    expect(employeeInstance.getRole()).toBe(returnValue);
});